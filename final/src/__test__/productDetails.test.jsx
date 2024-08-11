import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "../components/ProductDetails";
import { ShoppingCartProvider } from "../contexts/ShoppingCartContext";
import { getProductById } from "../api";

// Mock the getProductById function
jest.mock("../api", () => ({
  getProductById: jest.fn(),
}));

// Mock the product data
const mockProduct = {
  id: 1,
  name: "Test Product",
  description: "This is a test product",
  price: 100,
  image: "/images/test-product.jpg",
};

describe("ProductDetails", () => {
  beforeEach(() => {
    getProductById.mockReturnValue(mockProduct);
  });

  it("renders the product details", async () => {
    render(
      <MemoryRouter initialEntries={["/product/1"]}>
        <ShoppingCartProvider>
          <Routes>
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </ShoppingCartProvider>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Test Product")).toBeInTheDocument();
    });

    expect(screen.getByText("This is a test product")).toBeInTheDocument();
    expect(screen.getByText("$100")).toBeInTheDocument();
    expect(screen.getByAltText("Test Product")).toHaveAttribute(
      "src",
      "/images/test-product.jpg"
    );
  });

  it("adds the product to the cart", async () => {
    render(
      <MemoryRouter initialEntries={["/product/1"]}>
        <ShoppingCartProvider>
          <Routes>
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </ShoppingCartProvider>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Test Product")).toBeInTheDocument();
    });

    fireEvent.change(screen.getByLabelText(/quantity/i), {
      target: { value: 2 },
    });
    fireEvent.click(screen.getByText(/add to cart/i));

    await waitFor(() => {
      expect(
        screen.getByText("Product added to cart successfully!")
      ).toBeInTheDocument();
    });
  });
});

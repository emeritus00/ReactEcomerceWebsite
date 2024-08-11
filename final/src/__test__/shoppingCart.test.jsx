import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ShoppingCart from "../components/ShoppingCart";
import {
  ShoppingCartProvider,
  useShoppingCart,
} from "../contexts/ShoppingCartContext";

jest.mock("../contexts/ShoppingCartContext", () => {
  const originalModule = jest.requireActual("../contexts/ShoppingCartContext");
  return {
    ...originalModule,
    useShoppingCart: jest.fn(),
  };
});

describe("ShoppingCart", () => {
  const renderWithProvider = (ui, { providerProps, ...renderOptions }) => {
    return render(
      <MemoryRouter>
        <ShoppingCartProvider {...providerProps}>{ui}</ShoppingCartProvider>
      </MemoryRouter>,
      renderOptions
    );
  };

  it("removes an item from the cart", () => {
    const removeFromCart = jest.fn();
    useShoppingCart.mockReturnValue({
      cartItems: [
        {
          id: 1,
          name: "Test Product",
          price: 100,
          quantity: 1,
          image: "test-product.jpg",
        },
      ],
      removeFromCart,
    });

    renderWithProvider(<ShoppingCart />, { providerProps: {} });

    const removeButton = screen.getByText("Remove");
    fireEvent.click(removeButton);

    expect(removeFromCart).toHaveBeenCalledWith(1);
  });

  it("renders the shopping cart with items", () => {
    useShoppingCart.mockReturnValue({
      cartItems: [
        {
          id: 1,
          name: "Test Product",
          price: 100,
          quantity: 2,
          image: "test-product.jpg",
        },
      ],
      removeFromCart: jest.fn(),
    });

    renderWithProvider(<ShoppingCart />, { providerProps: {} });

    expect(screen.getByText("Your Shopping Cart")).toBeInTheDocument();
    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText(/Price: \$100.00/)).toBeInTheDocument();
    expect(screen.getByText("Quantity: 2")).toBeInTheDocument();
    expect(screen.getByText(/Total: \$200.00/)).toBeInTheDocument();
    expect(screen.getByText(/Subtotal: \$200.00/)).toBeInTheDocument();
  });

  it("renders an empty cart message", () => {
    useShoppingCart.mockReturnValue({
      cartItems: [],
      removeFromCart: jest.fn(),
    });

    renderWithProvider(<ShoppingCart />, { providerProps: {} });

    expect(screen.getByText("Your cart is empty.")).toBeInTheDocument();
  });

  it("renders the checkout link", () => {
    useShoppingCart.mockReturnValue({
      cartItems: [
        {
          id: 1,
          name: "Test Product",
          price: 100,
          quantity: 1,
          image: "test-product.jpg",
        },
      ],
      removeFromCart: jest.fn(),
    });

    renderWithProvider(<ShoppingCart />, { providerProps: {} });

    expect(screen.getByText("Proceed to Checkout")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Proceed to Checkout/i })
    ).toHaveAttribute("href", "/checkout");
  });
});

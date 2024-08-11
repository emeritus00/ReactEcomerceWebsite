import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Checkout from "../components/Checkout";
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

describe("Checkout", () => {
  const renderWithProvider = (ui, { providerProps, ...renderOptions }) => {
    return render(
      <MemoryRouter>
        <ShoppingCartProvider {...providerProps}>{ui}</ShoppingCartProvider>
      </MemoryRouter>,
      renderOptions
    );
  };

  it("renders the checkout page with items", () => {
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
      clearCart: jest.fn(),
    });

    renderWithProvider(<Checkout />, { providerProps: {} });

    expect(screen.getByText("Checkout")).toBeInTheDocument();
    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText(/Price: \$100.00/)).toBeInTheDocument();
    expect(screen.getByText("Quantity: 2")).toBeInTheDocument();
    expect(screen.getByText(/Total: \$200.00/)).toBeInTheDocument();
    expect(screen.getByText(/Subtotal: \$200.00/)).toBeInTheDocument();
    expect(screen.getByText(/HST \(15%\): \$30.00/)).toBeInTheDocument();
    expect(screen.getByText(/Total: \$230.00/)).toBeInTheDocument();
  });

  it("displays a message when the cart is empty", () => {
    useShoppingCart.mockReturnValue({
      cartItems: [],
      clearCart: jest.fn(),
    });

    renderWithProvider(<Checkout />, { providerProps: {} });

    expect(screen.getByText("Your cart is empty.")).toBeInTheDocument();
  });

  it("places the order and displays success message", () => {
    const clearCart = jest.fn();
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
      clearCart,
    });

    renderWithProvider(<Checkout />, { providerProps: {} });

    const placeOrderButton = screen.getByText("Place Order");
    fireEvent.click(placeOrderButton);

    expect(clearCart).toHaveBeenCalled();
    expect(screen.getByText("Order placed successfully!")).toBeInTheDocument();
  });
});

import React from "react";
import { render } from "@testing-library/react";
import ProductList from "../components/ProductList";
import { BrowserRouter as Router } from "react-router-dom";

test("renders ProductList component", () => {
  const { getByText } = render(
    <Router>
      <ProductList />
    </Router>
  );

  expect(getByText(/Product List/i)).toBeInTheDocument();
});

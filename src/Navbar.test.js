import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar";
import "@testing-library/jest-dom/extend-expect";

describe("Navbar", () => {
  it("renders correct number of links", () => {
    const { getAllByRole } = render(<Navbar />);
    const links = getAllByRole("link");
    expect(links.length).toBe(5);
  });

  it("calls toggleCart prop when button is clicked", () => {
    const toggleCartMock = jest.fn();
    const { getByRole } = render(<Navbar toggleCart={toggleCartMock} />);
    const button = getByRole("button");
    fireEvent.click(button);
    expect(toggleCartMock).toHaveBeenCalled();
  });

  it("displays the correct number of items in the cart", () => {
    const cartLengthMock = 5;
    const { getByText } = render(<Navbar cartLength={cartLengthMock} />);
    const cartLengthElement = getByText(cartLengthMock.toString());
    expect(cartLengthElement).toBeInTheDocument();
  });
});

import React from "react";
import * as rtl from "@testing-library/react";
import Navbar from "./NavBar.js";
import Navbar from "./NavBar.js";

test("It renders without crashing", () => {
  rtl.render(<Navbar />);
});

test("It renders the Dark/Light Mode button", () => {
  const container = rtl.render(<Navbar />);
  container.getByTestId("dark-mode-button");
});
import React from "react";
import * as rtl from "@testing-library/react";
import ToggleDarkMode from "./ToggleDarkMode.js";

test("It renders without crashing", () => {
  rtl.render(<ToggleDarkMode />);
});

test("It renders the Dark/Light Mode button", () => {
  const container = rtl.render(<ToggleDarkMode />);
  container.getByTestId("dark-mode-button");
});
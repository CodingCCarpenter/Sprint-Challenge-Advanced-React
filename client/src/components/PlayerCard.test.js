import React from "react";
import * as rtl from "@testing-library/react";
import PlayerCard from "./PlayerCard.js";

test("It renders without crashing", () => {
  rtl.render(<PlayerCard />);
});

test("It renders an h1", () => {
  const container = rtl.render(<PlayerCard />);
  container.getByTestId("card-h1");
});

test("It renders the first p element", () => {
  const container = rtl.render(<PlayerCard />);
  container.getByTestId("first-p");
});

test("It renders the second p element", () => {
  const container = rtl.render(<PlayerCard />);
  container.getByTestId("second-p");
});
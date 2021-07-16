import React from "react";
import { render } from "@testing-library/react";
import Background from "./Background";

describe("Background tests", () => {
  it("should render", () => {
    expect(render(<Background />)).toBeTruthy();
  });
});

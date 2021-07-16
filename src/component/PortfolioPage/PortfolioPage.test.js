import React from "react";
import { render } from "@testing-library/react";
import PortfolioPage from "./PortfolioPage";

describe("PortfolioPage tests", () => {
  it("should render", () => {
    expect(render(<PortfolioPage />)).toBeTruthy();
  });
});

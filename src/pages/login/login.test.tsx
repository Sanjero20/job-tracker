import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";

import LoginPage from ".";

describe("Login Page", async () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>,
    );
  });

  it("should render login form", () => {
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
});

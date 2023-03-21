import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it's rendered", () => {
    it("Should show text 'from yarn to masterpiece'", () => {
      const expectedText = "from yarn to masterpiece";

      render(<Header />);

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });

    it("Should show logo image", () => {
      const imageAltText = "Logo";

      render(<Header />);

      const image = screen.getByRole("img", { name: imageAltText });

      expect(image).toBeInTheDocument();
    });
  });
});

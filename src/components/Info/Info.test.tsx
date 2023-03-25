import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Info from "./Info";

describe("Given a Info component", () => {
  describe("When it's receives text 'Hello' as message", () => {
    it("Should show the text", () => {
      const text = "Hello";

      render(<Info message={text} />);

      const messageInfo = screen.getByText(text);

      expect(messageInfo).toBeInTheDocument();
    });
  });
});

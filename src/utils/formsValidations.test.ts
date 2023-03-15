import { describe, it } from "vitest";
import {
  validateEmail,
  validatePassword,
  validateUsername,
} from "./formsValidations";

describe("Given a validateUsername funcrion", () => {
  describe("When it receives 'marta'", () => {
    it("Should retern empty string", () => {
      const value = "marta";
      const expectedString = "";

      const expectedResult = validateUsername(value);

      expect(expectedResult).toBe(expectedString);
    });
  });

  describe("When it receives an empty string", () => {
    it("Should retern 'Username is required'", () => {
      const value = "";
      const expectedString = "Username is required";

      const expectedResult = validateUsername(value);

      expect(expectedResult).toBe(expectedString);
    });
  });
});

describe("Given a validatePassword function", () => {
  describe("When it receives 'password'", () => {
    it("Should retern an empty string", () => {
      const value = "password";
      const expectedString = "";

      const expectedResult = validatePassword(value);

      expect(expectedResult).toBe(expectedString);
    });
  });

  describe("When it receives an empty string", () => {
    it("Should retern 'Password is required'", () => {
      const value = "";
      const expectedString = "Password is required";

      const expectedResult = validatePassword(value);

      expect(expectedResult).toBe(expectedString);
    });
  });

  describe("When it receives '12345'", () => {
    it("Should retern 'Password is required'", () => {
      const value = "12345";
      const expectedString = "Password should be 8 characters minimum";

      const expectedResult = validatePassword(value);

      expect(expectedResult).toBe(expectedString);
    });
  });
});

describe("Given a validateEmail function", () => {
  describe("When it receives 'marta@mail.com'", () => {
    it("Should return an empty string", () => {
      const value = "marta@mail.com";
      const expectedString = "";

      const expectedResult = validateEmail(value);

      expect(expectedResult).toBe(expectedString);
    });
  });

  describe("When it receives an empty string", () => {
    it("Should retern 'Email is required'", () => {
      const value = "";
      const expectedString = "Email is required";

      const expectedResult = validateEmail(value);

      expect(expectedResult).toBe(expectedString);
    });
  });

  describe("When it receives 'marta'", () => {
    it("Should retern 'Invalid email address'", () => {
      const value = "marta";
      const expectedString = "Invalid email address";

      const expectedResult = validateEmail(value);

      expect(expectedResult).toBe(expectedString);
    });
  });
});

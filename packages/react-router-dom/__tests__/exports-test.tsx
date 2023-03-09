import * as ReactRouter from "@arijs/react-router";
import * as ReactRouterDOM from "@arijs/react-router-dom";

describe("@arijs/react-router-dom", () => {
  for (let key in ReactRouter) {
    it(`re-exports ${key} from react-router`, () => {
      expect(ReactRouterDOM[key]).toBe(ReactRouter[key]);
    });
  }
});

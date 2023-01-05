import { getState } from "../src/resolvers/state.js";

// This includes all tests for getAllItemsHandler()
describe("State test", () => {
  it("should return Test nothing", async () => {
    expect(getState()).toBe("Hello nothing");
  });
});

import { strict as assert } from 'node:assert';
import { ApolloServer } from "@apollo/server";

import { typeDefs } from "../src/schema/state.js";
import { resolvers } from "../src/resolvers/state.js";

// This includes all tests for getAllItemsHandler()
describe("Graphql test", () => {
  it("should return Test nothing", async () => {
    const testServer = new ApolloServer({
      typeDefs,
      resolvers,
    });

    const response = await testServer.executeOperation({
      query: "query Test { state }"
    });

    // Note the use of Node's assert rather than Jest's expect; if using
    // TypeScript, `assert`` will appropriately narrow the type of `body`
    // and `expect` will not.

    assert(response.body.kind === "single");
    expect(response.body.singleResult.errors).toBeUndefined();
    expect(response.body.singleResult.data?.state).toBe("Hello nothing");
  });
});

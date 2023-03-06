import { ApolloServer } from "@apollo/server";
import {
  startServerAndCreateLambdaHandler,
  handlers,
} from "@as-integrations/aws-lambda";

import { typeDefs } from "../schema/state.js";
import { resolvers } from "../resolvers/state.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export default startServerAndCreateLambdaHandler(
  server,
  handlers.createAPIGatewayProxyEventRequestHandler()
);

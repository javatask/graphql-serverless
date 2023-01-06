const text = process.env.TEST_VAR || "nothing";

export const getState = () => {
  const state = `Hello ${text}`;
  console.log("State value:", state);
  // throw error on random invocation
  /*if (Math.random() > 0.5) {
    throw new Error("This is an random error");
  }*/
  return state;
};

export const resolvers = {
  Query: {
    state: getState,
  },
};

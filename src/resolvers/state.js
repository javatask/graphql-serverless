const text = process.env.TEST_VAR || "nothing";

export const getState = () => {
  const state = `Hello ${text}`;
  console.log("State value:", state);
  return state;
};

export const resolvers = {
  Query: {
    state: getState,
  },
};

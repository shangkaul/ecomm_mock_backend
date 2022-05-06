export const filterProductReducer = (state, { type, payload }) => {
  switch (type) {
    case "SEARCH":
      return { ...state, searchKeyword: payload };

    default:
      return { ...state };
  }
};

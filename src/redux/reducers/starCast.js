const starCastReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "GET_STARCAST":
      return (state = payload);
    case "DEFAULT":
      return state;
    default:
      return state;
  }
};
export default starCastReducer;

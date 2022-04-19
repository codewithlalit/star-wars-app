import { useSelector, useDispatch } from "react-redux";

export const getAllStars = () => {
  return async (dispatch) => {
    try {
      let res = await fetch("https://swapi.dev/api/people/");
      let data = await res.json();
      let next;
      let page = 1;
      let starList = [];
      while (next !== null) {
        try {
          let res1 = await fetch(`https://swapi.dev/api/people/?page=${page}`);
          let data1 = await res1.json();

          starList = starList.concat(data1.results);
          next = data1.next;
          page = page + 1;
        } catch (error) {
          return console.log(error);
        }
      }
      dispatch({ type: "GET_STARCAST", payload: starList });
    } catch (error) {
      console.log(error);
      dispatch({ type: "DEFAULT" });
    }
  };
};

import { actionType } from "./actionType";

 export const initialState = {
    firstName: "",
    lastName: "",
    email: "",
  };

 export const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
      case actionType.INPUT:
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };

      default:
        return state;
    }

    // if(action.type === "INPUT"){
    //     return {
    //         ...state ,
    //         [action.payload.name]:action.payload.value ,
    //     }
    // }
  };
  
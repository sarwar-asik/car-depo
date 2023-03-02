import { categoriesActionType } from "../actionType"

export const initialState = {
    loading:false,
    categories:[],
    error:false
}
export const categoriesReducer =(state,action)=>{
    switch(action.type){
        case categoriesActionType.FETCHING_START:
            return {
                ...state,
                loading:true,
               error:false,
            }
            case categoriesActionType.FETCHING_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    categories:action.payload,
                    error:false,
                }
                case categoriesActionType.FETCHING_ERROR:
                    return{
                        ...state,
                        loading:false,
                        error:true,
                        
                    }
            default:
                return state
    }

}
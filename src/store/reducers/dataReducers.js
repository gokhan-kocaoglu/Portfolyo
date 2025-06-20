import { GET_DATA_ERROR, GET_DATA_LOADİNG, GET_DATA_SUCCESS } from "../actions/dataActions";

const initialState={
    data:{},
    loading: false,
    error: "",
}

function dataReducers(state=initialState,action){
    switch(action.type){
        case GET_DATA_SUCCESS:
            return {...state,data:action.payload,loading:false,error:""};
        case GET_DATA_LOADİNG:
            return {...state,loading:true,error:""};
        case GET_DATA_ERROR:
            return{...state,loading:false,error:action.payload};
        default:
            return state;
    }
}

export default dataReducers;
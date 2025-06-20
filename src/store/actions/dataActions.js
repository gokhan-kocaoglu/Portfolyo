import axios from "axios";
import { data } from "../../data/data";

export const GET_DATA_SUCCESS="GET_DATA_SUCCESS";
export const GET_DATA_LOADİNG="GET_DATA_LOADING";
export const GET_DATA_ERROR="GET_DATA_ERROR";

export const getData=()=>(dispatch)=>{
    dispatch({type:GET_DATA_LOADİNG});
    axios.post("https://httpbin.org/post",data)
    .then((res)=>{
        console.log(res.data);
        dispatch({type:GET_DATA_SUCCESS,payload:res.data.json});
    })
    .catch((error)=>{
        dispatch({type:GET_DATA_ERROR,payload:error.message});
    });
};
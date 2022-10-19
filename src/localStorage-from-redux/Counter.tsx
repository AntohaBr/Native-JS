import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./store";
import {incValueAC} from "./counter-reducer";

export const Counter = ()=>{
    const value = useSelector<AppStateType,number>(state => state.counter.value)
    const  dispatch = useDispatch()
    const incHandler =()=>{
        dispatch(incValueAC())
    }
return(
    <div>
        <h1>{value}</h1>
        <button onClick={incHandler}>inc</button>
    </div>
)
}
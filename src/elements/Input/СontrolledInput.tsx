import React, {ChangeEvent} from "react";



type CheckBoxPropsType = {
    onChange:(value:string)=>void
    value:string
}

export function СontrolledInput(props: CheckBoxPropsType) {
    const onChange=(e:ChangeEvent<HTMLInputElement>)=>{
        props.onChange(e.currentTarget.value)
    }
    return (
        <input value={props.value} onChange={onChange}/>
    );
}

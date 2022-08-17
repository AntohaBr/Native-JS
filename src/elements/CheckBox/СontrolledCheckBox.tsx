import React, {ChangeEvent} from "react";


type CheckBoxPropsType = {
    onCheckBox:boolean
    onOnChange:(onCheckBox:boolean)=>void
}

export function ControlledCheckBox(props: CheckBoxPropsType) {
    const onChange=(e:ChangeEvent<HTMLInputElement>)=>{
        props.onOnChange(e.currentTarget.checked)
    }
    return (
        <input  type="checkbox" checked={props.onCheckBox} onChange={onChange} />
    );
}

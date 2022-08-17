import React, {useRef, useState} from "react";


type InputPropsType = {
title:'input'
}

export function UncontrolledInput(props: InputPropsType) {
    const [value,setValue]=useState('')
    const inputRef=useRef<HTMLInputElement>(null)
    const save=()=>{
        const el=inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return (
        <div>
        <input ref={inputRef}/>
            <button onClick={save}>save</button>
            - active value: {value}
        </div>
    );
}

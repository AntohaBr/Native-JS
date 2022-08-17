import React from "react";

type propsType = {
    valueOn:boolean
    onChange:(valueOn:boolean)=>void
}

export function OnOff(props: propsType) {
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display:'Inline-block',
        padding:'2px',
        backgroundColor:props.valueOn ? 'green' : 'white'
    };
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display:'Inline-block',
        padding:'2px',
        marginLeft:'3px',
        backgroundColor:props.valueOn ? 'white' : 'red'
    };
    const indikatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '10px',
        border: '1px solid black',
        display:'Inline-block',
        padding:'2px',
        marginLeft:'10px',
        backgroundColor:props.valueOn ? 'green' : 'red'
    };

    return (
        <div>
            <div style={onStyle} onClick={()=>{props.onChange(true)}}>On</div>
            <div style={offStyle} onClick={()=>{props.onChange(false)}}>Off</div>
            <div style={indikatorStyle}></div>
        </div>
    )
};


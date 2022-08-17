import React, {useState} from "react";

type propsType = {
    onChange: (on: boolean) => void
    defaultOn ?:boolean
}

function UncontrolledOndOff(props: propsType) {

    let [on, setOn] = useState(props.defaultOn ?  props.defaultOn : false); //hook

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'Inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white'
    };
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'Inline-block',
        padding: '2px',
        marginLeft: '3px',
        backgroundColor: on ? 'white' : 'red'
    };
    const indikatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '10px',
        border: '1px solid black',
        display: 'Inline-block',
        padding: '2px',
        marginLeft: '10px',
        backgroundColor: on ? 'green' : 'red'
    };

    const onClicked=()=> {
        setOn(true)
        props.onChange(true)
    }

    const offClicked=()=>{
        setOn(false)
        props.onChange(false)
    }
    return (
        <div>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={indikatorStyle}></div>
        </div>
    )
}

export default UncontrolledOndOff;
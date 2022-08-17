import React, {ChangeEvent} from "react";

// type ItemType={
//     title:string
//     value:any
// }

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    // items:ItemType[]
}

export function ControlledSelect(props: SelectPropsType) {
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        props.onChange(e.currentTarget.value)
    }
    return (
        <select value={props.value} onChange={onChange}>
            <option>none</option>
            <option value={'1'}>Gomel</option>
            <option value={'2'}>LS</option>
            <option value={'3'}>NY</option>
            <option value={'4'}>Grodno</option>
            <option value={'5'}>Brest</option>
            <option value={'6'}>Piter</option>
        </select>
    )
}


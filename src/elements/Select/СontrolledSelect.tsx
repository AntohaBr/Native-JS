import React, {useEffect, useState, KeyboardEvent} from "react";
import style from './ControlledSelect.module.css';


type ItemType = {
    title: string
    value?: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function ControlledSelect(props: SelectPropsType) {
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    useEffect(() => {
        setHoveredElementValue(props.value);
    }, [props.value])

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    const showItems = () => setActive(!active)

    const onItemClick = (value: any) => {
        props.onChange(value)
        showItems()
    }


    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return;
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }

    return (
        <>
            <select>
                <option>none</option>
                <option value={'1'}>Gomel</option>
                <option value={'2'}>LS</option>
                <option value={'3'}>NY</option>
                <option value={'4'}>Grodno</option>
                <option value={'5'}>Brest</option>
                <option value={'6'}>Piter</option>
            </select>
            <div className={style.select}>
                <span className={style.main} onClick={showItems}>
                    {selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={style.items} onKeyUp={onKeyUp} tabIndex={0}>
                        {props.items.map(i => <div
                            onMouseEnter={() => {
                                setHoveredElementValue(i.value)
                            }}
                            className={style.item + '' + (hoveredItem === i ? style.selected : '')}
                            key={i.value}
                            onClick={() => {
                                onItemClick(i.value)
                            }}
                        >{i.title}
                        </div>)}
                    </div>
                }

            </div>
        </>
    )
}



import React, {useState} from 'react';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import './App.css';
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import UncontrolledOndOff from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {OnOff} from "./components/OnOff/OnOffControl";
import {UncontrolledInput} from "./elements/Input/UncontrolledInput";
import {СontrolledInput} from "./elements/Input/СontrolledInput";
import {ControlledCheckBox} from "./elements/CheckBox/СontrolledCheckBox";
import {ControlledSelect} from "./elements/Select/СontrolledSelect";


function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    let [accorionCollapsed, setAccorionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false); //hook
    let [parenValue, setParenValue] = useState('')
    let [onCheckBox, setCheckBox] = useState<boolean>(true)
    let [parenSelect, setParenSelect] = useState<string | undefined>(undefined)

    const onClickAccordion = (value: any) => {
        console.log(value)
    }
    return (
        <div className={'App'}>
            <OnOff
                valueOn={switchOn}
                onChange={setSwitchOn}/>
            {/*<UncontrolledRating/>*/}
            {/*<UncontrolledAccordion titleValue={'Menu'}/>*/}
            {/*<UncontrolledAccordion titleValue={'Users'}/>*/}
            <Accordion
                items={[
                    {title: 'Anton', value: 1},
                    {title: 'Igor', value: 2},
                    {title: 'Ivan', value: 3},
                    {title: 'Sasha', value: 4}
                ]}
                titleValue={"Name"}
                collapsed={accorionCollapsed}
                onChange={() => {
                    setAccorionCollapsed(!accorionCollapsed)
                }}
                onClick={onClickAccordion}
            />
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledOndOff onChange={setSwitchOn}/> {switchOn.toString()}
            <UncontrolledInput title={'input'}/>
            <СontrolledInput value={parenValue} onChange={setParenValue}/>
            <ControlledCheckBox onCheckBox={onCheckBox} onOnChange={setCheckBox}/>
            <ControlledSelect value={parenSelect} onChange={setParenSelect}/>
        </div>
    );
}

export default App;

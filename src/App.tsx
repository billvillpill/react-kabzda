import React, {useState} from 'react';
import './App.css';
import {Onoff} from './components/OnOff/Onoff';
import UncontrolledAccordion from './components/uncontrolledAccordion/UncontrolledAccordion';
import {Rating, RatingValueType} from './components/rating/Rating';
import {Accordion} from './components/accordion/Accordion';

function App(props: any) {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(1);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
    const changeRatingState = (value: RatingValueType) => {
        setRatingValue(value)
    };
    const changeStateCollapsedAccordion = () => {
        setAccordionCollapsed(!accordionCollapsed);
    }
    return (
        <div className="conteiner">
            <PageTitle title={"This is APP component"} />
            <UncontrolledAccordion />
            <Accordion title={"Users"} value={accordionCollapsed} collapsed={changeStateCollapsedAccordion} />
            <Rating value={ratingValue} onClick={changeRatingState} />
            <Onoff />
            <Onoff />
            <Onoff />
            <Onoff />
        </div>
    );
}

type  PagePropsTitleType = {
    title: string
}

function PageTitle(props: PagePropsTitleType) {
    return <h1>{props.title}</h1>
}

export default App;

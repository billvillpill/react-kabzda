import React, {useState} from 'react';
import './App.css';
import {Onoff} from './components/OnOff/Onoff';
import UncontrolledAccordion from './components/uncontrolledAccordion/UncontrolledAccordion';
import {Rating, RatingValueType} from './components/rating/Rating';
import {Accordion} from './components/accordion/Accordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import {UncontrolledOnOff} from './components/uncontrolledOnOff/UncontrolledOnOff';

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(1);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
    let [onoffStateButton, setOnoffStateButton] = useState(true)
    const changeRatingState = (value: RatingValueType) => {
        setRatingValue(value)
    };
    const changeStateCollapsedAccordion = () => {
        setAccordionCollapsed(!accordionCollapsed);
    }

    return (
        <div className="conteiner">
            <div>
                <PageTitle title={"This is APP component"} />
                <Accordion title={"Users"} collapsed={accordionCollapsed} onChange={changeStateCollapsedAccordion} />
                <UncontrolledAccordion />
                <Rating value={ratingValue} onClick={changeRatingState} />
                <UncontrolledRating />
                <Onoff style={onoffStateButton} onChange={setOnoffStateButton} />
                <UncontrolledOnOff />
            </div>
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

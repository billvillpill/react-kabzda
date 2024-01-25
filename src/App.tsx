import React, { useState} from 'react';
import './App.css';
import {Onoff} from './components/OnOff/Onoff';
import UncontrolledAccordion from './components/uncontrolledAccordion/UncontrolledAccordion';
import {Rating, RatingValueType} from './components/rating/Rating';
import {Accordion} from './components/accordion/Accordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import {UncontrolledOnOff} from './components/uncontrolledOnOff/UncontrolledOnOff';
import {SelectSpecial} from './components/select/SelectSpecial';
import { SelectChangeEvent } from '@mui/material/Select';
import {PageTitle} from './components/Page/Page';

function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(1);
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
    const [onoffStateButton, setOnoffStateButton] = useState(true);
    const [parentValue, setParentValue] = useState<string | undefined>('2');

    const changeRatingState = (value: RatingValueType) => {
        setRatingValue(value);
    };
    const changeStateCollapsedAccordion = () => {
        setAccordionCollapsed(!accordionCollapsed);
    };
    const callBack = (value: any) => {
        alert(`user with ID ${value} should be happy`);
    };

    const onChange = (e: SelectChangeEvent) => {
        setParentValue(e.target.value);
    };


    return (
        <div className="container">
            <PageTitle title={'This is APP component'}/>
            <div className='flexWrapper'>
                <Accordion title={'Users'}
                           collapsed={accordionCollapsed}
                           onChange={changeStateCollapsedAccordion}
                           items={[
                               {title: 'Vlad', value: 1},
                               {title: 'Dimych', value: 2},
                               {title: 'Valera', value: 3},
                               {title: 'Igor', value: 4}
                           ]}
                           onClick={callBack}
                />
                <UncontrolledAccordion/>
                <Rating value={ratingValue} onClick={changeRatingState}/>
                <UncontrolledRating/>
                <Onoff style={onoffStateButton} onChange={setOnoffStateButton}/>
                <UncontrolledOnOff/>
                <SelectSpecial
                    value={parentValue}
                    onChange={onChange} items={[
                    {title:'Ten', value: 1},
                    {title:'Twenty', value: 2},
                    {title:'Thirty', value: 3}
                ]}/>
            </div>

        </div>
    );
}
export default App;

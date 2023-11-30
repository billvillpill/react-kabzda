import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {Onoff} from './components/OnOff/Onoff'; // что бы переименовать Ratting, нужно в скобках указать as {Ratting as R}

function App() {
    return (
        <div className="conteiner">
            <PageTitle title={"This is APP component"}/>
            <Accordion titleValue={"Menu"} />
            <Accordion titleValue={"Users"} />
            <Rating />
            <Rating />
            <Rating />
            <Rating />
            <Rating />
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

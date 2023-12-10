import React from 'react';

type AccordionPropsType = {
    title: string
    collapsed: boolean
    onChange: () => void
}
export function Accordion(props: AccordionPropsType) {
    return <div>
        <p>Контролируемый <b>Accordion</b></p>
        <AccordionTitle title={props.title} onChange={props.onChange}/>
        { !props.collapsed && <AccordionBody />}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering');
    return <h3 onClick={() => props.onChange()}>{props.title}</h3>
}

function AccordionBody() {
    console.log('AccordionBody rendering');
    return (
        <ul>
            <li key={1}>1</li>
            <li key={2}>2</li>
            <li key={3}>3</li>
        </ul>
    );
}


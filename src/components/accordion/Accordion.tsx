import React from 'react';

type AccordionPropsType = {
    title: string
    value: boolean
    collapsed: () => void
}
export function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle title={props.title} onClik={props.collapsed}/>
        { !props.value && <AccordionBody />}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onClik: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering');
    return <h3 onClick={() => props.onClik()}>{props.title}</h3>
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


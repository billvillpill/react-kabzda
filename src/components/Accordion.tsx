import React from "react";

type AccordionPropsType = {
    titleValue: string,
    collapsedValue: boolean
}

function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering');
    return <div>
        <AccordionTitle title={props.titleValue}/>
        <AccordionBody collapsed={props.collapsedValue}/>
    </div>
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering');
    return <h3>{props.title}</h3>
}

type AccordionBodyPropsType = {
    collapsed: boolean
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering');
    if (props.collapsed) {
        return (
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        );
    } else {
        return <></>
    }
}

export default Accordion;
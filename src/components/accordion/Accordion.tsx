import React from 'react';
import {AccordionTitle} from './AccordionTitle';
import {AccordionBody} from './AccordionBody';

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


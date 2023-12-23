import type { Meta } from '@storybook/react';
import { Accordion } from './Accordion';
import {AccordionTitle} from './AccordionTitle';
import {AccordionBody} from './AccordionBody';
import React from 'react';

const meta: Meta<typeof Accordion> = {
    component: Accordion,
};

export default meta;

export const CollapsedAccordion = () => {
    return <div>
        <p>Контролируемый <b>Accordion</b></p>
        <AccordionTitle title={'Users'} onChange={() =>{}}/>
    </div>
}
export const OpenAccordion = () => {
    return <div>
        <p>Контролируемый <b>Accordion</b></p>
        <AccordionTitle title={'Users'} onChange={() =>{}}/>
        <AccordionBody />
    </div>
}
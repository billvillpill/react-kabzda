import type { Meta } from '@storybook/react';
import {AccordionBody} from './AccordionBody';
import React from 'react';

const meta: Meta<typeof AccordionBody> = {
    component: AccordionBody,
};

export default meta;

export const DefaultAccordionBody = () => {
    return (
        <ul>
            <li key={1}>1</li>
            <li key={2}>2</li>
            <li key={3}>3</li>
        </ul>
    );
}

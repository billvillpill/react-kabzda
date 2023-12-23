import type { Meta } from '@storybook/react';
import {AccordionTitle} from './AccordionTitle';
import React, {useState} from 'react';

const meta: Meta<typeof AccordionTitle> = {
    component: AccordionTitle,
};

export default meta;

export const CollapsedAccordionTitle = () => {
    return <h3 onClick={() =>{}}>{'Users'}</h3>
}
export const ClickAccordionTitle = () => {
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
    return <h3 onClick={() =>{setAccordionCollapsed(!accordionCollapsed)}}>{'Users'}</h3>
}
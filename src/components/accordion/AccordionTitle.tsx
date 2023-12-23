import React from 'react';

export type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

export function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={() => props.onChange()}>{props.title}</h3>
}
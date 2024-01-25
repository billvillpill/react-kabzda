import React from 'react';


export type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    title: string
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    onClick: (value: any) => void
}
export function Accordion(props: AccordionPropsType) {
    return <div>
        <p>Контролируемый <b>Accordion</b></p>
        <AccordionTitle title={props.title} onChange={props.onChange}/>
        { !props.collapsed && <AccordionBody items={props.items} onClick={props.onClick} />}
    </div>
}

export type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

export function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3  onClick={() => props.onChange()}>{props.title}</h3>
}



type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

export function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((i, index) => <li onClick={ () => {props.onClick(i.value)}} key={i.value}>{i.title}</li>)}
        </ul>
    );
}

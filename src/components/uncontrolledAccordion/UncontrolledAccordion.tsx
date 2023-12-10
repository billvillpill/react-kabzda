import React, {useState} from 'react';
function UncontrolledAccordion() {
    let [collapsed, setCollapsed] = useState(false)
    const onClickButton = () => {
        setCollapsed(!collapsed)
    }

    return <div>
        <p>Не контролируемый <b>Accordion</b></p>
        <AccordionTitle title='Menu' onClik={onClickButton}/>
        { !collapsed && <AccordionBody />}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onClik: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering');
    return <h3 onClick={() => { props.onClik() }}>{props.title}</h3>
}


function AccordionBody() {
    console.log('AccordionBody rendering');
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default UncontrolledAccordion;
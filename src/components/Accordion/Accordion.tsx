import React, {useState} from 'react';

type AccordionPropsType = {
    titleValue: string,
}

function Accordion(props: AccordionPropsType) {
    let [stateButton, setStateButton] = useState(false)
    const onClickButton = () => {
        setStateButton(!stateButton)
    }

    return <div>
        <AccordionTitle title={props.titleValue}/>
        <button type='submit' onClick={onClickButton}>TOGGLE</button>
        { !stateButton && <AccordionBody />}
    </div>
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering');
    return <h3>{props.title}</h3>
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

export default Accordion;
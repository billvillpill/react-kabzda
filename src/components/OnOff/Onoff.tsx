import React from 'react';

type OnoffPropsType = {
    style: boolean
    onChange: (value: boolean) => void
}
export const Onoff = (props: OnoffPropsType) => {
    const onStyle = {
        width: "15px",
        height: "15px",
        borderRadius: "15px",
        backgroundColor: props.style ? "#FFA500FF" : "#fff",
        display: "inline-block",
        border: "2px solid black"
    };
    const onClicked = () => {
        props.onChange(true);
    }

    const offClicked = () => {
        props.onChange(false);
    }

    return (
        <div>
            <p>Контролируемый <b>ON OFF</b></p>
            <div className='switch'>
                <button type='submit' className={props.style ? 'greenButton' : 'whiteButton'} onClick={onClicked}>On</button>
                <button type='submit' className={!props.style ? 'redButton' : 'whiteButton'} onClick={offClicked}>Off</button>
                <div style={onStyle}></div>
            </div>

        </div>

    );
}

import React, {useState} from 'react';

export const UncontrolledOnOff = () => {
    let [stateButton, setStateButton] = useState(true)
    const onClickButtonOn = () => {
        setStateButton(true);
    }
    const onClickButtonOff = () => {
        setStateButton(false);
    }

    const onStyle = {
        width: "15px",
        height: "15px",
        borderRadius: "15px",
        backgroundColor: stateButton ? "#FFA500FF" : "#fff",
        display: "inline-block",
        border: "2px solid black"
    };

    return (
        <div>
            <p>Не контролируемый <b>ON OFF</b></p>
            <div className='switch'>
                <button type='submit' className={stateButton ? 'greenButton' : 'whiteButton'} onClick={onClickButtonOn}>On</button>
                <button type='submit' className={!stateButton ? 'redButton' : 'whiteButton'} onClick={onClickButtonOff}>Off</button>
                <div style={onStyle}></div>
            </div>
        </div>
    );
}

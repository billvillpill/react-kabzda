import React, {useState} from 'react';

export const Onoff = () => {
    let [stateButtonOne, setStateButton] = useState(true)
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
        backgroundColor: stateButtonOne ? "#FFA500FF" : "#fff",
        display: "inline-block",
        border: "2px solid black"
    };

    return (
        <div>
            <div className='switch'>
                <button type='submit' className={stateButtonOne ? 'greenButton' : 'whiteButton'} onClick={onClickButtonOn}>On</button>
                <button type='submit' className={!stateButtonOne ? 'redButton' : 'whiteButton'} onClick={onClickButtonOff}>Off</button>
                <div style={onStyle}></div>
            </div>

        </div>

    );
}

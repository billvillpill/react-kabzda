import React, {useState} from 'react';

export const Onoff = () => {
    let [stateButtonOne, setStateButtonOne] = useState(false)
    const onClickButtonOne = () => {
        setStateButtonOne(true)
    }
    const onClickButtonTwo = () => {
        setStateButtonOne(false)
    }

    return (
        <div>
            <label className='switch'>
                <button type='submit' className={stateButtonOne ? 'greenButton' : 'whiteButton'} onClick={onClickButtonOne}>On</button>
                <button type='submit' className={!stateButtonOne ? 'redButton' : 'whiteButton'} onClick={onClickButtonTwo}>Off</button>
                <input type='radio' name='radio' checked={stateButtonOne}></input>
            </label>
        </div>

    );
}

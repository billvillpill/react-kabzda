import React, {useState} from 'react';
import {Star} from '../star/Star';


export function UncontrolledRating() {
    let [value, setValue] = useState(0)
    return (
        <div className='rating'>
            <p>НЕ контролируемый <b>Rating</b></p>
            <div>
                <Star selected={ value > 0 } onClick={ () => setValue(1) } />
                <Star selected={ value > 1 } onClick={ () => setValue(2) } />
                <Star selected={ value > 2 } onClick={ () => setValue(3) } />
                <Star selected={ value > 3 } onClick={ () => setValue(4) } />
                <Star selected={ value > 4 } onClick={ () => setValue(5) } />
            </div>
        </div>
    )
}
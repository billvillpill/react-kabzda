import React, {useState} from 'react';
import {Star} from '../star/Star';

type UncontrolledRating = 1 | 2 | 3 | 4 | 5;
type UncontrolledRatingPropsType = {
    value: UncontrolledRating
}
export function UncontrolledRating(props: UncontrolledRatingPropsType) {
    let [value, setValue] = useState(0)
    return (
        <div className='rating'>
            <div>
                <Star selected={ props.value > 0 } onClick={ () => setValue(1) } />
                <Star selected={ props.value > 1 } onClick={ () => setValue(2) } />
                <Star selected={ props.value > 2 } onClick={ () => setValue(3) } />
                <Star selected={ props.value > 3 } onClick={ () => setValue(4) } />
                <Star selected={ props.value > 4 } onClick={ () => setValue(5) } />
            </div>
        </div>
    )
}
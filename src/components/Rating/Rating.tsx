import React, {useState} from 'react';

type StarPropsType = {
    selected: boolean
}
function Star(props: StarPropsType) {
    if (props.selected) {
        return <span><b>star</b> </span>
    } else {
        return <span>star </span>
    }

}

export function Rating() {
    let [stateRating, setStateRating] = useState(0)
    const onClickRating1 = () => {
        setStateRating(1)
    }
    const onClickRating2 = () => {
        setStateRating(2)
    }
    const onClickRating3 = () => {
        setStateRating(3)
    }
    const onClickRating4 = () => {
        setStateRating(4)
    }
    const onClickRating5 = () => {
        setStateRating(5)
    }


    return (
        <div className='rating'>
            <div>
                <Star selected={ stateRating > 0 }/>
                <Star selected={ stateRating > 1 }/>
                <Star selected={ stateRating > 2 }/>
                <Star selected={ stateRating > 3 } />
                <Star selected={ stateRating > 4 }/>
            </div>
            <div>
                <button type='submit' onClick={onClickRating1}>1</button>
                <button type='submit' onClick={onClickRating2}>2</button>
                <button type='submit' onClick={onClickRating3}>3</button>
                <button type='submit' onClick={onClickRating4}>4</button>
                <button type='submit' onClick={onClickRating5}>5</button>
            </div>
        </div>

    )

}
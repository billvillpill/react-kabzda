import React from 'react';


type StarPropsType = {
    selected: boolean
    onClick: () => void
}
export const Star = (props: StarPropsType) => {
    const onClickStar = () => {
        props.onClick()
    }
    return <span onClick={onClickStar}>{ props.selected ? <b>star</b> : 'star' } </span>
}

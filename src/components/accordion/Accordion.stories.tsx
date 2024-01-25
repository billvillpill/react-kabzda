import {action} from '@storybook/addon-actions'
import {Accordion} from './Accordion';
import React, {useState} from 'react';

export default {
    title: 'Accordion',
    component: Accordion,
};

const callBack = action('accordion mode change event fired');
const onClickCallBack = action('some item was clicked');
export const MenuCollapsedMode = () => {
    return <Accordion title={"MyMenu"}
                      collapsed={true}
                      onChange={callBack}
                      items={[]}
                      onClick={onClickCallBack}
    />
}
export const MenuUncollapsedMode = () => {
    return <Accordion title={"Menu"}
                      collapsed={false}
                      onChange={callBack}
                      items={[
                          {title:'Vlad', value:1},
                          {title:'Dimych', value:2},
                          {title:'Valera', value:3},
                          {title:'Igor', value:4}
                      ]}
                      onClick={onClickCallBack}
    />
}

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion title={"Users"}
               collapsed={value}
               onChange={()=> setValue(!value)}
               items={[
                   {title:'Vlad', value:1},
                   {title:'Dimych', value:2},
                   {title:'Valera', value:3},
                   {title:'Igor', value:4}
               ]}
               onClick={(value)=> {alert(`user with ID ${value} should be happy`)}}
    />
}
import React from 'react';

type PagePropsTitle = {
    title: string
}

export function PageTitle(props: PagePropsTitle) {
    return <h1>{props.title}</h1>;
}
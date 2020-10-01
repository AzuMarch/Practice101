import React from 'react';
import ViewLayout from 'components/view/ViewLayout';
import ViewCard from 'components/view/ViewCard';

const data = {
        id: 0,
        title: "Shoe",
        price: 9.50,
        type: "Formal",
        description: "It's just one shoe Idk",
        img: "http://www.clker.com/cliparts/d/3/6/5/13579371752084257714shoe-hi.png"
}

const View = () => {
    return (
        <ViewLayout>
            <ViewCard data={data} />
        </ViewLayout>
    )
}

export default View;
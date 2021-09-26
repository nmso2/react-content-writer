import React from 'react';

const CartItem = (props) => {
    console.log('item', props);
    const writers = [];
    writers.push(props.name);
    return (
        <div>
            <p>{writers.map(writer => writer)}</p>
        </div>
    );
};

export default CartItem;
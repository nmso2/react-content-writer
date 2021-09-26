import React, { useEffect, useState } from 'react';
import Writer from '../Writer/Writer'
import Cart from '../Cart/Cart'


const HireWriters = () => {
    const [writers, setWriters] = useState([]);
    useEffect(() => {
        fetch('https://nmso2.github.io/fake-data-json/data/writers.json')
            .then(res => res.json())
            .then(data => setWriters(data));
    }, []);

    const [cart, setCart] = useState([]);

    const handleAddToCart = (writer) => {
        let newCart = [...cart]
        if (newCart.indexOf(writer)===-1) {
            newCart = [...cart, writer];
            setCart(newCart);
        }
        else{
            
        }
    }

    return (
        <div className="row mt-5 container-fluid">
            <div className="col-8 p-5 mt-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        writers.map(writer => <Writer writer={writer} handleAddToCart={handleAddToCart} key={writer.id}></Writer>)
                    }
                </div>

            </div>
            <div className="col-4 mt-5 p-5">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default HireWriters;
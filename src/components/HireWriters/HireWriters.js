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
    return (
        <div className="row mt-5">
            <div className="col-8 p-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        writers.map(writer => <Writer writer={writer} key={writer.id}></Writer>)
                    }
                </div>

            </div>
            <Cart></Cart>
        </div>
    );
};

export default HireWriters;
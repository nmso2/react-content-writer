import React from 'react';
import './Writer.css'

const Writer = (props) => {

    const { name, img, address, content_published, salary } = props.writer;
    return (
        <div className="col-4">
            <div className="writer-card l-bg-green-dark h-100">
                <img src={img} className="card-img-top p-4 pb-0" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">From: {address} <br />
                        Content Published: {content_published} <br />
                        Salary: ${salary}
                    </p>
                    <button onClick={() => { props.handleAddToCart(props.writer) }} className="btn btn-warning">Hire Me</button>
                </div>
            </div>
        </div>
    );
};

export default Writer;
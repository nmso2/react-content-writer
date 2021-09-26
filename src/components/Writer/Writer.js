import React from 'react';
import './Writer.css'

const Writer = (props) => {

    const writer = props.writer;
    console.log(writer)
    return (
        <div className="col-4">
            <div className="writer-card l-bg-green-dark h-100">
                <img src={writer.img} className="card-img-top p-4 pb-0" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{writer.name}</h5>
                    <p className="card-text">From: {writer.address} <br />
                        Content Published: {writer.content_published} <br />
                        Salary: ${writer.salary}
                    </p>
                    <button className="btn btn-warning">Hire Me</button>
                </div>
            </div>
        </div>
    );
};

export default Writer;
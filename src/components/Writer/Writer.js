import React from 'react';
import './Writer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshake } from '@fortawesome/free-solid-svg-icons'


const Writer = (props) => {

    const handShake = <FontAwesomeIcon icon={faHandshake} />
    const { name, img, address, content_published, salary, phone } = props.writer;
    return (
        <div className="col-4">
            <div className="writer-card l-bg-green-dark rounde h-100 mb-0">
                <img src={img} className="card-img-top img-fluid p-4 pb-0" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">From: {address} <br />
                        Phone: {phone} <br />
                        Content Published: {content_published} <br />
                        Salary: ${salary}
                    </p>
                    <button onClick={() => { props.handleAddToCart(props.writer) }} className="btn btn-warning">{handShake} Hire Me</button>
                    <div className="d-flex justify-content-evenly mt-3">
                        <a href="./insta" className="social-icon text-white mb-0"><i class="fab fa-instagram"> </i></a>
                        <a href="./fb" className="social-icon mb-0 text-white"><i class="fab fa-facebook-f"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Writer;
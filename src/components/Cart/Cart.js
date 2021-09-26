import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'
const Cart = () => {

    const user = <FontAwesomeIcon icon={faUsers} />

    return (
        <div className="mt-5">
            <div class="cart-card l-bg-blue-dark">
                <div class="card-statistic-3 p-5">
                    <div class="card-icon card-icon-large">{user}</div>
                    <div class="mb-4">
                        <h5 class="card-title mb-0">Writers You Choosed</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
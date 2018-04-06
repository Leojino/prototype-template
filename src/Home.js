import React, { Component } from 'react';
import './Home.css';

import Carousel from './Carousel';
import Quickbar from './Quickbar';

class Cart extends Component {

    render() {
        return (
            [
                <Carousel key="carousel" />,
                <Quickbar key="quickbar" />
            ]
        )
    }
}

export default Cart;
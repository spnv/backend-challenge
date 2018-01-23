"use strict"
import React from 'react';
import {
    connect
} from 'react-redux';
import {
    bindActionCreators
} from 'redux';
import {
    findDOMNode
} from 'react-dom';

import {
    getProducts
} from '../../actions/productActions';

class Dashboard extends React.Component {

    componentDidMount() {}

    render() {
        return ( 
        <div>
            <h1> Hello React </h1> 
        </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        products: state.products
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getProducts: getProducts
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
import React from 'react';
import Navbar from '../components/Navbar';
import { connect } from 'react-redux';
import { checkAuthenticated } from '../actions/auth';

const layout = (props) => (
    <div>
        {props.checkAuthenticated()}
        <Navbar />
        {props.children}
    </div>
);

export default connect(null, { checkAuthenticated })(layout);

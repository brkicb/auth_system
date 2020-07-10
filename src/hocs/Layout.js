import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { connect } from 'react-redux';
import { checkAuthenticated } from '../actions/auth';

const Layout = (props) => {
    useEffect(() => {
        props.checkAuthenticated();
    }, []);

    return (
        <div>
            <Navbar />
            {props.children}
        </div>
    );
};

export default connect(null, { checkAuthenticated })(Layout);

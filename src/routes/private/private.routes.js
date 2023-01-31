import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import Redirect from 'react-router';
import PrivateLayout from "../../layouts/private.layouts"
import Header from '../../components/Header';

export const PrivateRoute = (props) => {
    let token = localStorage.getItem('token');
    if (!token || token === 'undefined') {
        return <Redirect to="/login" />;
    }
    return (
        <>
            <PrivateLayout>
                <Header/>
                <Route {...props} />
            </PrivateLayout>
        </>
    );
};

import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route, useHistory } from 'react-router';
import useAuth from '../../context/useAuth';

const PrivateRoute = ({ children, ...rest }) => {

    const { firebases } = useAuth();
    const [user] = firebases;

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/signin",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
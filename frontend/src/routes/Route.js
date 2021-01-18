import React from 'react';
import { Route as ReactDOMRoute, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Layout from '../Pages/_Layout';
import { useAuth } from '../hooks/AuthContext';

const Routes = ({ isPrivate = false, component: Component, ...rest }) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) =>
        isPrivate === !!user ? (
          <Layout>
            <Component />
          </Layout>
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : 'home',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default Routes;

Routes.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

Routes.defaultProps = {
  isPrivate: false,
};

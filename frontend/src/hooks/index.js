import React from 'react';
import PropTypes from 'prop-types';
import { AuthProvider } from './AuthContext';

const AppProvider = ({ children }) => <AuthProvider>{children}</AuthProvider>;

export default AppProvider;

AppProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

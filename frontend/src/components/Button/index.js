import React from 'react';
import PropTypes from 'prop-types';
import { Container, Loader } from './styles';

function Button({
  width,
  label,
  loading,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  onClick,
  type,
}) {
  return (
    <Container
      type={type}
      onClick={onClick}
      width={width}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
    >
      {loading ? <Loader>Carregando. . .</Loader> : label}
    </Container>
  );
}

export default Button;

Button.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  loading: PropTypes.bool,
  type: PropTypes.string,
  marginTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginRight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  label: 'BUTTON',
  type: 'button',
  width: 120,
  loading: false,
  marginTop: '',
  marginBottom: '',
  marginLeft: '',
  marginRight: '',
  onClick: null,
};

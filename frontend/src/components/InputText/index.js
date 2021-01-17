import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function InputText({ label, type }) {
  return (
    <Container>
      {label && <p>Label</p>}
      <input type={type} />
    </Container>
  );
}

export default InputText;

InputText.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
};

InputText.defaultProps = {
  type: 'text',
  label: '',
};

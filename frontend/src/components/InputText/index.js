import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function InputText({ label, type, width, placeholder, onChange }) {
  const [query, setQuery] = useState('');
  const [displayText, setdisplayText] = useState('');

  useEffect(() => {
    const timeOutId = setTimeout(() => setdisplayText(query), 700);
    return () => clearTimeout(timeOutId);
  }, [query]);

  useEffect(() => {
    if (onChange) {
      onChange(displayText);
    }
  }, [onChange, displayText]);

  return (
    <Container width={width}>
      {label && <p className="label">{label}</p>}
      <input
        onChange={(event) => onChange && setQuery(event.target.value)}
        className="input"
        placeholder={placeholder}
        type={type}
      />
    </Container>
  );
}

export default InputText;

InputText.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
};

InputText.defaultProps = {
  type: 'text',
  label: '',
  width: '',
  placeholder: 'Digite...',
  onChange: null,
};

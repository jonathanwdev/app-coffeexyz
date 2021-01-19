import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@unform/core';
import { Container } from './styles';

function InputText({
  name,
  label,
  type,
  width,
  placeholder,
  onChange,
  marginTop,
  marginRight,
  marginLeft,
  marginBottom,
  ...rest
}) {
  const inputRef = useRef(null);
  const [query, setQuery] = useState('');
  const [displayText, setdisplayText] = useState('');
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    const timeOutId = setTimeout(() => setdisplayText(query), 550);
    return () => clearTimeout(timeOutId);
  }, [query]);

  useEffect(() => {
    if (onChange) {
      onChange(displayText);
    }
  }, [onChange, displayText]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container
      marginTop={marginTop}
      marginRight={marginRight}
      marginLeft={marginLeft}
      marginBottom={marginBottom}
      width={width}
      error={!!error}
    >
      {label && <p className="label">{label}</p>}
      <input
        defaultValue={defaultValue}
        ref={inputRef}
        onChange={(event) => onChange && setQuery(event.target.value)}
        className="input"
        placeholder={placeholder}
        type={type}
        {...rest}
      />
    </Container>
  );
}

export default InputText;

InputText.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  marginTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginRight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

InputText.defaultProps = {
  type: 'text',
  label: '',
  width: '',
  placeholder: 'Digite...',
  onChange: null,
  marginTop: '',
  marginBottom: '',
  marginLeft: '',
  marginRight: '',
};

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

function TextArea({
  label,
  width,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  placeholder,
  onChange,
  height,
}) {
  const [query, setQuery] = useState('');
  const [displayText, setdisplayText] = useState('');

  useEffect(() => {
    const timeOutId = setTimeout(() => setdisplayText(query), 550);
    return () => clearTimeout(timeOutId);
  }, [query]);

  useEffect(() => {
    if (onChange) {
      onChange(displayText);
    }
  }, [onChange, displayText]);

  return (
    <Container
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      height={height}
      width={width}
    >
      {label && <p className="label">{label}</p>}
      <textarea
        onChange={(event) => onChange && setQuery(event.target.value)}
        className="input"
        placeholder={placeholder}
      />
    </Container>
  );
}

export default TextArea;

TextArea.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  marginTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginRight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TextArea.defaultProps = {
  label: '',
  width: '',
  height: '',
  placeholder: 'Digite...',
  onChange: null,
  marginTop: '',
  marginBottom: '',
  marginLeft: '',
  marginRight: '',
};

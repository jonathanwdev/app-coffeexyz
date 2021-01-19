import styled from 'styled-components';

export const Container = styled.div(
  ({ width, marginTop, marginBottom, marginLeft, marginRight, height }) => ({
    width,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    minWidth: 120,
    height: 45,

    '.label': {
      fontSize: 13,
      textTransform: 'uppercase',
      color: 'var(--color-blue-strong)',
      marginLeft: 4,
    },

    '.input': {
      width,
      height,
      padding: '5px',
      fontWeight: 500,
      marginTop: 4,
      resize: 'none',
      border: 0,
      color: 'var(--color-red-strong)',
      borderRadius: '5px',
    },
  })
);

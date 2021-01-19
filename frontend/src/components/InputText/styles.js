import styled from 'styled-components';

export const Container = styled.div(
  ({ width, marginTop, marginRight, marginLeft, marginBottom, error }) => ({
    width,
    marginTop,
    marginRight,
    marginLeft,
    marginBottom,
    minWidth: 120,
    height: 45,

    '.label': {
      fontSize: 13,
      textTransform: 'uppercase',
      color: 'var(--color-blue-strong)',
      marginLeft: 4,
    },

    '.input': {
      width: '100%',
      border: error ? '1px solid var(--color-red-strong)' : 0,
      height: 28,
      padding: '4px 10px',
      fontSize: 14,
      borderRadius: 20,
      fontWeight: 500,
      marginTop: 4,
    },
  })
);

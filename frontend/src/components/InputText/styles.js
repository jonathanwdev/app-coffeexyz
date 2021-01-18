import styled from 'styled-components';

export const Container = styled.div(({ width, error }) => ({
  width,
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
    border: error ? '1px solid var(--color-red-strong)' : 0,
    height: 28,
    padding: '4px 10px',
    fontSize: 14,
    borderRadius: 20,
    fontWeight: 500,
    marginTop: 4,
  },
}));

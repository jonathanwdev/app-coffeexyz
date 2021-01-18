import styled from 'styled-components';

export const Container = styled.button(
  ({ width, marginTop, marginBottom, marginLeft, marginRight }) => ({
    width,
    marginTop,
    marginRight,
    marginLeft,
    marginBottom,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    borderRadius: 20,
    fontWeight: 700,
    fontSize: 14,
    textTransform: 'uppercase',
    color: '#fff',
    background: 'var(--color-blue-strong)',
    transition: 'all 0.2s ease',

    '&: hover': {
      opacity: 0.87,
    },

    '&: active': {
      transform: 'scale(0.95)',
    },
  })
);

export const Loader = styled.div`
  color: var(--color-red-strong);
  font-size: 14px;
`;

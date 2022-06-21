import { css } from '@emotion/react';

export const formWrapper = css({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
});

export const formLabel = css({
  width: '100%',
});

export const form = css({
  height: '100%',
  '@media (max-width: 600px)': {
    width: '85%',
  },
  width: '35%',
});

export const typeField = css({
  width: '100%',
  marginBottom: '10px',
});

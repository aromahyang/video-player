import { css } from '@emotion/react';

export const container = (open: boolean) => css`
  ${open
    ? `
      display: flex;
      align-items: center;
      width: calc(100vw - calc(100vw - 100%));
      background-color: #000;
      height: 100vh;
    `
    : `
      padding: 32px;
    `}
`;

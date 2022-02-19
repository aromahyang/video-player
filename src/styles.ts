import { css } from '@emotion/react';

export const container = (open: boolean) => css`
  width: calc(100vw - calc(100vw - 100%));
  height: 100vh;
  ${open
    ? `
      display: flex;
      align-items: center;
      background-color: #000;
    `
    : `
      padding: 32px;
    `}
`;

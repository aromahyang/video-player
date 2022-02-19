import { css } from '@emotion/react';
import colors from '~/styles/colors';

export const container = css`
  position: absolute;
  right: 48px;
  bottom: 212px;
  z-index: 100;

  button {
    padding: 8px 16px;
    border: 0.8px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    font-size: 16px;
    font-weight: 700;
    line-height: 18.75px;
    letter-spacing: -0.6px;
    text-align: center;
    background-color: ${colors.white};
    cursor: pointer;
  }
`;

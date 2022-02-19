import { css } from '@emotion/react';
import colors from '~/styles/colors';

export const container = css`
  width: 320px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  cursor: pointer;

  img {
    width: 320px;
  }

  section {
    padding: 0 8px;
  }
`;

export const loadingContainer = css`
  & > .spinner {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 6px solid transparent;
    border-top-color: ${colors.purple};
    animation: spin 1s ease-in-out infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

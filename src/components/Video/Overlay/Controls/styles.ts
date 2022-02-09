import { css } from '@emotion/react';

export const container = css`
  width: 100%;
  background: linear-gradient(
    0deg,
    rgba(25, 26, 42, 0.52) 0%,
    rgba(25, 26, 42, 0) 58.19%
  );
`;

export const controls = css`
  padding: 16px 48px 48px 48px;
  transition: all 0.3s;

  &:hover {
    opacity: 1;
  }
`;

export const range = (left: number, width: number) => css`
  position: relative;
  margin-bottom: 34px;
  cursor: pointer;

  .timeline {
    width: 100%;
    height: 4px;
    margin: 0;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.5);
  }

  .timeline-thumb {
    position: absolute;
    left: ${left - 12}px;
    top: -10px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    background-color: #fff;
  }

  .timeline--thumb:active {
    cursor: pointer;
  }

  .progress {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: ${width}%;
    height: 4px;
    border-radius: 4px;
    background-color: #816BFF;
  }
`;

export const controlPanel = css`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background-color: transparent;
    padding: 0;
    border: 0px;
    color: unset;
    cursor: pointer;
  }
`;

export const leftControls = css`
  button:not(:last-child) {
    margin-right: 24px;
  }
`;

export const rightControls = css``;

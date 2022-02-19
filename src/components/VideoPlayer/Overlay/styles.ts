import { css } from '@emotion/react';

export const container = (isVisible: boolean) => css`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(25, 26, 42, 0.52) 0%,
    rgba(25, 26, 42, 0) 58.19%
  );
  transition: opacity 0.25s ease-in;
  opacity: ${isVisible ? 1 : 0};

  & > button {
    margin-top: 24px;
    margin-left: 48px;
    padding: 0;
    border: 0;
    background-color: transparent;
    cursor: pointer;

    & > img {
      width: 48px;
    }
  }

  & > div {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
  }
`;

export const information = css`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 2px;
  padding: 0 48px;

  h1 {
    margin: 0;
    color: #fff;
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;
  }

  p {
    margin: 0;
    color: #fff;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
  }
`;

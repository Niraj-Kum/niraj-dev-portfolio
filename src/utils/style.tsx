import { css } from 'styled-components';
import { Color } from 'three/src/math/Color';

export const media = {
  desktop: 1600,
  laptop: 1280,
  tablet: 1024,
  mobile: 696,
  mobileS: 320,
};

export const pxToNum = (px: string) => Number(px.replace('px', ''));

export const numToPx = (num: number) => `${num}px`;

export const pxToRem = (px: number) => `${px / 16}rem`;

export const msToNum = (msString: string) => Number(msString.replace('ms', ''));

export const numToMs = (num: number) => `${num}ms`;

export const rgbToThreeColor = (rgb: string) =>
  new Color(...rgb.split(' ').map((value: string) => Number(value) / 255));

export const sectionPadding = css`
  padding-right: 120px;
  padding-left: 200px;

  @media (min-width: 1600px) {
    padding-left: 120px;
  }

  @media (max-width: 1024px) {
    padding-left: 160px;
  }

  @media (max-width: 696px) {
    padding-right: 25px;
    padding-left: 25px;
  }

  @media (max-width: 696px), (max-height: 696px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (max-width: 820px) and (max-height: 420px) {
    padding-left: 100px;
    padding-right: 100px;
  }
`;
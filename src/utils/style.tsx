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

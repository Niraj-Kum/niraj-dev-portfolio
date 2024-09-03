/* eslint-disable @typescript-eslint/no-explicit-any */
import { css } from 'styled-components';
import { Color } from 'three';

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

function stringToRgba(colorString: string) {
  return colorString.split(' ').join('').replace('rgb(', '').replace('rgba(', '').replace(')', '').split(',');
}

export function tint(colorString: string, percent: number) {
  const colorArray = colorString.replace('rgba(', '').replace(')', '').split(',');
  const t = percent < 0 ? 0 : 255;
  const p = percent < 0 ? percent * - 1 : percent;
  const r = parseInt(colorArray[0], 10);
  const g = parseInt(colorArray[1], 10);
  const b = parseInt(colorArray[2], 10);
  const a = parseInt(colorArray[3], 10);
  return `rgba(${(Math.round((t - r) * p) + r)}, ${(Math.round((t - g) * p) + g)}, ${(Math.round((t - b) * p) + b)}, ${a})`;
};

export function rgba(colorString: string, alpha: number) {
  const colorArray = stringToRgba(colorString);
  return `rgba(${colorArray[0]}, ${colorArray[1]}, ${colorArray[2]}, ${alpha})`;
};

export function classes(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
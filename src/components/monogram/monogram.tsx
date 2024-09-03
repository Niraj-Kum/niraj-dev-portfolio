/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef, useId } from 'react';
import { classes } from '../../utils/style';
import styles from './monogram.module.css';
import { useTheme } from '@mui/material';

export const Monogram = forwardRef(({ highlight, className, ...props }: any, ref: any) => {
  const theme = useTheme();
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="48"
      height="29"
      viewBox="0 0 200 100"
      style={{fill: `${theme.palette.mode === 'light'? 'oklch(0% 0 0)':'oklch(100% 0 0)'}`}}
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <text
            x="50%"
            y="50%"
            text-anchor="middle"
            dominant-baseline="middle"
            font-family="serif"
            font-size="80"
          >
            N
          </text>
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});

/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef, useId } from 'react';
import { classes } from '../../utils/style';
import styles from './monogram.module.css';
import { useTheme } from '@mui/material';

const NKPaths = ({ stroke }: { stroke?: string }) => (
  <>
    <path d="M10 0 L10 80"   strokeWidth="10"  strokeLinecap="square" stroke={stroke} />
    <path d="M10 0 L55 80"   strokeWidth="3.5" strokeLinecap="square" stroke={stroke} />
    <path d="M55 0 L55 80"   strokeWidth="10"  strokeLinecap="square" stroke={stroke} />
    <path d="M75 0 L75 80"   strokeWidth="10"  strokeLinecap="square" stroke={stroke} />
    <path d="M75 40 L118 0"  strokeWidth="3.5" strokeLinecap="square" stroke={stroke} />
    <path d="M75 40 L118 80" strokeWidth="3.5" strokeLinecap="square" stroke={stroke} />
  </>
);

export const Monogram = forwardRef(({ highlight, className, ...props }: any, ref: any) => {
  const theme = useTheme();
  const rawId = useId();
  // useId() produces ":r0:" — colons are invalid in SVG IDs
  const maskId = `nk-mask-${rawId.replace(/:/g, '')}`;

  const color = theme.palette.mode === 'light' ? 'oklch(0% 0 0)' : 'oklch(100% 0 0)';

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="40"
      height="27"
      viewBox="0 0 120 80"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      ref={ref}
      {...props}
    >
      {highlight && (
        <defs>
          <mask id={maskId}>
            <NKPaths stroke="white" />
          </mask>
        </defs>
      )}

      <NKPaths stroke={color} />

      {highlight && (
        <rect
          className={styles.highlight}
          x="0" y="0"
          width="120"
          height="80"
          fill="oklch(84.42% 0.19 202.24)"
          mask={`url(#${maskId})`}
        />
      )}
    </svg>
  );
});

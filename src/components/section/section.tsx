/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef } from 'react';
import { classes } from '../../utils/style';
import styles from './section.module.css';

export const Section = forwardRef(
  ({ as: Component = 'div', children, className, ...rest }: any, ref: any) => (
    <Component className={classes(styles.section, className)} ref={ref} {...rest}>
      {children}
    </Component>
  )
);

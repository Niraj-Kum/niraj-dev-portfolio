/* eslint-disable @typescript-eslint/no-explicit-any */
import { classes } from "../../utils/style";
import styles from "./icon.module.css";
import { forwardRef } from "react";
import sprites from "./icons.svg";

export const Icon = forwardRef(
  ({ icon, className, size, ...rest }: any, ref: any) => {
    return icon !== "hackerrank" ? (
      <svg
        aria-hidden
        ref={ref}
        className={classes(styles.icon, className)}
        width={size || 24}
        height={size || 24}
        {...rest}
      >
        <use href={`${sprites}#${icon}`} />
      </svg>
    ) : (
      <svg
        aria-hidden
        ref={ref}
        className={classes(styles.icon, className)}
        width={size || 24}
        height={size || 24}
        {...rest}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="24px"
          height="24px"
        >
          <path d="M 15.998047 3 C 14.225047 3 5.5352031 7.9839062 4.6582031 9.5039062 C 3.7802031 11.024906 3.7802031 20.983047 4.6582031 22.498047 C 5.5392031 24.017047 14.229047 29 15.998047 29 C 17.762047 29 26.451938 24.019953 27.335938 22.501953 C 28.222938 20.979953 28.222938 11.014047 27.335938 9.4980469 L 27.335938 9.4960938 C 26.444937 7.9790937 17.756047 3 15.998047 3 z M 15.996094 5.0117188 C 17.693094 5.3647187 24.417703 9.2167656 25.595703 10.509766 C 26.135703 12.150766 26.134703 19.844281 25.595703 21.488281 C 24.425703 22.779281 17.695094 26.636281 15.996094 26.988281 C 14.298094 26.638281 7.5723906 22.783234 6.4003906 21.490234 C 5.8653906 19.842234 5.8653906 12.155766 6.4003906 10.509766 C 7.5693906 9.2167656 14.297094 5.3617187 15.996094 5.0117188 z M 13 9 L 11 11 L 12 11 L 12 21 L 14 21 L 14 17 L 18 17 L 18 21 L 17 21 L 19 23 L 21 21 L 20 21 L 20 12 L 18 12 L 18 15 L 14 15 L 14 11 L 15 11 L 13 9 z" />
        </svg>
      </svg>
    );
  }
);

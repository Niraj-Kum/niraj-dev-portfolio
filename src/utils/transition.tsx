/* eslint-disable @typescript-eslint/no-explicit-any */
const visibleStatus = ['entering', 'entered'];

/**
 * Is the given TransitionStatus visible?
 */
export const isVisible = (status: string) => visibleStatus.includes(status);

/**
 * Is the given TransitionStatus hidden?
 */
export const isHidden = (status: string) => !visibleStatus.includes(status);

/**
 * Forces a reflow to trigger transitions on enter
 */
export const reflow = (node: any) => node && node.offsetHeight;

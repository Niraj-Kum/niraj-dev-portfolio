import { useContext } from 'react';
import { TransitionContext } from '../App';

function useRouteTransition() {
  return useContext(TransitionContext);
}

export default useRouteTransition;

import { useEffect } from 'react';

// https://stackoverflow.com/a/56767883/3550318
export const useMountEffect = (fun) => useEffect(fun, []);

const allEffects = {
  useMountEffect,
};

export default allEffects;

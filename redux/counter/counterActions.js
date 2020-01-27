export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const ASYNC_INCREMENT_COUNTER = 'ASYNC_INCREMENT_COUNTER';
export const ASYNC_INCREMENT_COUNTER_DO = 'ASYNC_INCREMENT_COUNTER_DO';

export const incrementCounter = () => {
  return {type: INCREMENT_COUNTER};
};

export const asyncIncrementCounter = () => {
  return {
    type: ASYNC_INCREMENT_COUNTER,
  };
};

export const asyncIncrementCounterDo = () => {
  return {
    type: ASYNC_INCREMENT_COUNTER_DO,
  };
};

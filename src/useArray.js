import { useState } from "react";

const useArray = (defaultValue) => {
  const [array, setArray] = useState(defaultValue);

  const push = (item) => {
    setArray([...array, item]);
  };

  const update = (idx, item) => {
    setArray([...array.slice(0, idx), item, ...array.slice(idx + 1)]);
  };

  const filter = (callback) => {
    setArray(array.filter(callback));
  };

  const remove = (idx) => {
    setArray([...array.slice(0, idx), ...array.slice(idx + 1)]);
  };

  const clear = () => {
    setArray([]);
  };

  return {
    array,
    set: setArray,
    push,
    update,
    filter,
    remove,
    clear,
  };
};

export default useArray;

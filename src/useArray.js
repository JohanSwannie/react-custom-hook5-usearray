import { useState } from "react";

const useArray = (defaultValue) => {
  const [array, setArray] = useState(defaultValue);

  const push = (item) => {
    setArray([...array, item]);
  };

  const update = (idx, item) => {
    array.splice(idx, 1, item);
    setArray([...array]);
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

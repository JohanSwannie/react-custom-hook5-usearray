import useArray from "./useArray";

const ArrayComponent = () => {
  const { array, push, update, remove, filter, set, clear } = useArray([
    "Trumpet",
    "Flugelhorn",
    "Cornet",
    "Trombone",
    "Clarinet",
    "Flute",
    "Guitar",
    "Piano",
    "Drums",
  ]);

  const reloadLocation = () => {
    window.location.reload();
  };

  return (
    <>
      <h3>ARRAY &#8594; {array.join(", ")}</h3>
      <button onClick={() => push("Saxophone")}>
        Add Saxophone to the array
      </button>
      <button onClick={() => remove(3)}>
        Remove the Fourth element from the array
      </button>
      <button onClick={() => update(2, "Bugle")}>
        Change 3rd item to Bugle
      </button>
      <button onClick={() => filter((item) => item.length < 7)}>
        Keep instruments with shorter names
      </button>
      <button onClick={() => set(["Piano", "Trumpet"])}>
        Only keep Piano and Trumpet
      </button>
      <button onClick={clear}>Clear the Array</button>
      <button onClick={reloadLocation}>Restart</button>
    </>
  );
};

export default ArrayComponent;

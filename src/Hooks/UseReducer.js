import react, {useReducer} from "react";
const reducer =(state, action) =>{
    switch(action){
        case "add":
            return state + 1;
        case "subract":
            return state - 1;
        case "reset":
            return 0;
        default:
            throw new ("This is invalide option");        
    }
}
function UseReducer() {
  const [val, updateVal] = useReducer(reducer, 0);

  return (
    <>
      <h1>This is UseReducer...</h1>
      <h2>{val}</h2>
      <button onClick={() => updateVal("add")}>IncrementValue</button>
      <br />
      <button onClick={() => updateVal("subract")}>DecrementValue</button>
      <br />
      <button onClick={() => updateVal("reset")}>Reset</button>
    </>
  );
}

export default UseReducer;

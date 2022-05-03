import React, { useState } from "react";
import Todolists from "./Todolists";
import Todolist from "./Todolists";

const App= () =>{
  const[inputlist,setInputlist]=useState("");
  const[items, setItems]=useState([]);

   const itemEvent= (event)=>{
     setInputlist(event.target.value);

   };
   const listofitems=()=>{
     setItems((oldItems)=>{
       return [...oldItems,inputlist];
     });
     setInputlist("");  
   };
   const deleteItem=(id)=>{
console.log("deleted");
setItems((oldItems) =>{
  return oldItems.filter((arrElem,index)=>{
    return index !==id;
  });
});
   };

  return(
    <>
    <div className="main_div">
      <div className="center_div">
        <br/>
        <h1>TODO LIST</h1>
        <br/> 
        <input type="text "  placeholder="Add a Items" 
         value={inputlist}onChange={itemEvent}/>
        < button onClick={listofitems}>+</button>
        <ol>
         {/* <li>{inputlist}</li>*/}
        { items.map((itemval,index)=>{
         return( <Todolists key ={index} id={index}
         text={itemval}
         onSelect={deleteItem}/>
         );
         })}
        </ol>
      </div>
    </div>
    </>
  )
}
export default App;
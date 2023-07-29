import React from "react";
import Employee from "./Employee";

function App() {




  let emp = [{name:'Labeeb',age:22},
             {name:'Nauman',age:23},
             {name:'zidhan',age:21}]


  return (
    <div className="App">
    {
      emp.map((item,index)=>{
        return(
          <Employee key={index} {...item}/>
          
        )
      })
    }
   </div>
  );
}

export default App;

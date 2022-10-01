import React, { useState, useEffect } from "react";

// function App() {
//   useEffect(() => {
//     console.log("useEffect called");
//   });

//   console.log("Component rendering");

//   return <button>Click Me</button>;
// }

// export default App;


function App(){

  const [count, setCount] = useState(0)
  const [text, setText] = useState("")


  useEffect(()=> {
    // console.log("useEffect called")

    //update the title
    document.title = text;
  }, [text]);

  useEffect(()=> {
    setTimeout(()=> setCount(0), 5000)
  }, []);


  console.log("component rendering")

  return (
    <div>
      <button onClick={()=> setCount((count)=> count +1)}> I have been clicked {count} times</button>
      <br></br>
      <input
      type="text"
      placeholder="type away ....."
      value={text}
      onChange={(e)=> setText(e.target.value)}/>
    </div>
  )

}

export default App
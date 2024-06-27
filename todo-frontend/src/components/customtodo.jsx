import { useState } from "react";

export function Customtodo(props){
    const [title,settitle]= useState("");
    const[description,setdes]=useState("");
return (<div>
    <input id="title" style={{padding:10,
        margin:10
    }} type="text" placeholder="title" onChange={function(e){
        const value = e.target.value;
        settitle(e.target.value);
    }}></input>
    <input id="description" style={{padding:10, margin:10}}
     type="text" placeholder="description"  onChange={function(e){
        const value = e.target.value;
        setdes(e.target.value);}
    }></input>
     <button style ={{paddding:10 , margin:10}} onClick={()=>{
        fetch("http://localhost:3000/todos",{
            method:"POST",
            body: JSON.stringify({
            title:title,
            description:description,
     }), headers:{
        "content-type": "application/json"
     }})
        .then(async function(res){
         const json=await res.json();
         alert("todo added");
        })
     }}>Add a todo</button>

 </div>)
}
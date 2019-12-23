import React, {useCallback,useState,useRef} from "react"
import "./App.css"


const App = ()=>{
    const [array,setArray] =useState(get_array);
    const [sorted,setSorted] =useState(false)
    const [count,setCount]=useState(0)

    const [running,setRunning] =useState(false)
    const runningRef=useRef(running)
    runningRef.current=running;


    const sort=useCallback(()=>{
        if(!runningRef.current){
            console.log("Error: Cant restart/layer function")
            return;
        }
        console.log("Sort function fired.")
        if(!sorted){
           
            setSorted(true)
        }
        for(var i=0;i<array.length;i++){
            if(array[i] > array[i+1]){
               
                setSorted(false)
                console.log("WTF?")
                var temp=array[i+1]
                array[i+1]=array[i]
                array[i]=temp;
            }
            else{
                console.log("SORTED!!")
            }
        }
   
        setArray(array)
     
        setTimeout(sort,50)
    })

    return(
        <div className='app'>
        <div className='sorter-header'>
        <h1>Sorting App </h1>
        <h3>Count:{count}</h3>
        </div>
        <button onClick={()=>{
            setRunning(!running)
            if(!running){
                runningRef.current=true;
                sort()
            }}}>Click</button>
        <div className='container'>
        <div className='grid-container'>
        {array.map((value,index)=>
        <div key={index}
             className="bar"
             style={{height:`${value}px`}}
             ></div>)}
        </div>
        </div>
        </div>
    )

}



const get_array=()=>{
    let array=[];
    for(let i=0;i<200;i++){
        array.push((Math.random() * 270)+30 | 0)
    }
    return array;
}

export default App;
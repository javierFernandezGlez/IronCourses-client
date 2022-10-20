import {useState} from "react";
import Button from 'react-bootstrap/Button';
import SideBar from "../components/SideBar";

function SelectionVisualizer() {

    function randomArray(n) {
      return Array.from({length: n}, () => [Math.floor(1+ Math.random() * 100), false]);
    }
  
    const initialArray = randomArray(100);
    const auxArray = [];

    let i = 99;

    while(i >= 0) {
        auxArray.push([i, false]);
        i--;
    }
    
    const [array, setArray] = useState(auxArray);
    const [iterations, setIterations] = useState(0);
  
    async function selectionSort(array) {
        for (let i = 0; i < array.length; i++) {
            array[i][1] = true;
            const newArr = [...array];
            setArray(newArr);
            await politeDelay(4);
           let min = i;
           for (let j = i + 1; j < array.length; j++) { 
                array[j][1] = true;
              if (array[j][0] < array[min][0]) {
                 min = j;
                 
                 await politeDelay(4);
                 const newArr1 = [...array];
                 setArray(newArr1);
              }
              await politeDelay(4);
              array[j][1] = false;
              const newArr2 = [...array];
              setArray(newArr2);
           }
           if (i !== min) {
             swap(i, min, array);
             
             const newArr3 = [...array];
             setArray(newArr3);
             await politeDelay(4);
           }
           else {
            
            await politeDelay(4);
           }
           array[i][1] = false;
           const newArr4 = [...array];
           setArray(newArr4);
         }
       
     }

    
    
  
    function politeDelay(milliseconds){
      return new Promise(resolve => {
          setTimeout(() => resolve(), milliseconds)
      });
    }
  
    function swap(i, j, arr) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;

    }
  
    
  
    
  
  
    return (
      <div className="visualizer">
      <SideBar/>
      <h1 style={{textAlign: "center"}}>Iterations: {iterations}</h1>
      <div className="array">
        {array.map((element,key) => {
          return (
            <div id={key} className={element[1] ? 'box-red' : 'box'} style={{height:`${element[0]*3}px`}}>
              
            </div>
          );
        })}
        </div>
        
        <Button variant="light" onClick={() => selectionSort(array)}>Selection Sort</Button>
        <Button variant="light" onClick={() => setArray(initialArray)}>Generate New Array</Button>
      </div>
    );
  }
  
  export default SelectionVisualizer;
  
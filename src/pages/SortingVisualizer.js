import {useState} from "react";
import Button from 'react-bootstrap/Button';
import SideBar from "../components/SideBar";

function SortingVisualizer() {

  function randomArray(n) {
    return Array.from({length: n}, () => [Math.floor(1+ Math.random() * 100), false]);
  }

  const initialArray = randomArray(100);

  const [array, setArray] = useState(initialArray);
  const [iterations, setIterations] = useState(0);

  
  
  const red = [];
  for(let i = 0; i < array.length; i++) {
    red.push(false);
  }

  function politeDelay(milliseconds){
    return new Promise(resolve => {
        setTimeout(() => resolve(), milliseconds)
    });
  }

  function swap(i, j, arr) {
    const temp = arr[i][0];
    arr[i][0] = arr[j][0];
    arr[j][0] = temp;

    const temp1 = arr[i][1];
    arr[i][1] = arr[j][1];
    arr[j][1] = temp1;
  }

  async function insertionSort(arr) {
    let n = arr.length;
    let count = 0;

    for(let i = 1; i < n; i++) {
        
        let j = i;

        while (j > 0 && arr[j][0] < arr[j-1][0]) {
              arr[j][1] = true;
              swap(j, j-1, arr);
              count++;
              j--;
              const newArr = [...arr];
              setArray(newArr);
              setIterations(count);
              await politeDelay(4);
              arr[j][1] = false;
        }

        console.log(arr);
    }
  }
  async function bubbleSort( arr) {
    const n = arr.length;
    let count = 0;
      for (let i = 0; i < n-1; i++) {
          for (let j = 0; j < n-i-1; j++) {
              arr[j][1] = true;
              arr[j+1][1] = true;
              count++;
              if (arr[j][0] > arr[j+1][0]) {
                swap(j,j+1,arr);
                
                const newArr = [...arr];
                setIterations(count);
                setArray(newArr);
                await politeDelay(4);
              }
              else {
                const newArr = [...arr];
                setIterations(count);
                setArray(newArr);
                await politeDelay(4);
              }
              arr[j][1] = false;
          }
      
      }
  }

  async function merge(firstHalf, secondHalf) {
    let n = firstHalf.length;
    let m = secondHalf.length;
    const finalArray = new Array(n + m);
    let i = 0;
    let j = 0;
    let k = 0;
    let count = 0;
    
    while(i < n && j < m) {
      if(firstHalf[i] < secondHalf[j]) {
        finalArray[k] = firstHalf[i];

        k++;
        i++;
      }
      else {
        finalArray[k] = secondHalf[j];
        k++;
        j++;
      }
    }
    while(i < n) {
      finalArray[k] = firstHalf[i];
      k++;
      i++;
    }
    while(j < m) {
      finalArray[k] = secondHalf[j];
      k++;
      j++;
    }
    return finalArray;
  }
  function mergeSort(array) {
    let n = array.length;
    
    if(n <= 1) {
      return array;
    }
    let mid = Math.floor(n/2);
    const firstHalf = array.slice(0,mid);
    const secondHalf = array.slice(mid);
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
  // async function bubbleSort(arr) {
  //   let n = arr.length;
  //   let count = n - 1;
  //   if(n === 1) {
  //     return arr;
  //   }
  //   let moves = 0;
  //   let i = 0;
  //   let swaps = false;
  //   while(count > 0) {
  //     while(i < n - 1) {
  //       arr[i][1] = true;
  //       if(arr[i][0] > arr[i+1][0]) {
  //         swap(i, i + 1,arr);
  //         moves++;
  //         setIterations(moves);
  //         swaps = true;
  //         const newArr = [...arr];
          
  
  //         setArray(newArr);
  //         await politeDelay(10);
          
  //       }
  //       else {
  //         if(i < count) {
  //           arr[i][1] = false;
  //           arr[i + 1][1] = true;
  //           const newArr = [...arr];
  //           setArray(newArr);
  //           await politeDelay(10);
  //         }

          
  //       }
        
  //       if(i === n - 2) {
  //         if(swaps) {
  //           i = 0;
  //           swaps = false;
  //           continue;
  //         }
  //         else {
  //           return arr;
  //         }
  //       }
        
        
  //       i++;
  //     }
  //   }
    
  // }

  


  return (
    <div className="visualizer">
    <SideBar/>
    <h1 style={{textAlign: "center"}}>Iterations: {iterations}</h1>
    <div className="array">
      {array.map(element => {
        return (
          <div className={element[1] ? 'box-red' : 'box'} style={{height:`${element[0]*3}px`}}>
            
          </div>
        );
      })}
      </div>
      <Button variant="light" onClick={() => insertionSort(array)}>Insertion Sort</Button>
      <Button variant="light" onClick={() => bubbleSort(array)}>Bubble Sort</Button>
      <Button variant="light" onClick={() => setArray(initialArray)}>Generate New Array</Button>
    </div>
  );
}

export default SortingVisualizer;

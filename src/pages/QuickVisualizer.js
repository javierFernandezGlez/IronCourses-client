import {useState} from "react";
import SideBar from "../components/SideBar";
import { Button } from "react-bootstrap";

function QuickVisualizer() {
    function randomArray(n) {
        return Array.from({length: n}, () => Math.floor(1+ Math.random() * 100));
    }
    
    const initialArray = randomArray(100);
    const [state, setState] = useState(initialArray); 

    function politeDelay(milliseconds){
        return new Promise(resolve => {
            setTimeout(() => resolve(), milliseconds)
        });
      }

    const updateArray = () => {
        let array = randomArray(100);
        for(let i = 0; i < array.length; i++) {
            let bar = document.getElementById(i).style;
            bar.backgroundColor = "bisque";
        }
        setState(array);
    }

    const quickSort = async () => {
        
        let currentArr = state;
    
        await sorts(currentArr, 0, currentArr.length - 1)
        
      }
    
      const sorts = async (arr, left, right) => {
        if (left < right) {
          let partitionIndex = partition(arr, left, right)
    
        //   setState([...state, arr])
          await politeDelay(4);
          
          await sorts(arr, left, partitionIndex - 1)
          await politeDelay(4);
          await sorts(arr, partitionIndex + 1, right)
          await politeDelay(4);
        }
      }
    
      const partition = (arr, left, right) => {
        let pivot = arr[right]
        let i = left - 1

        let bar2 = document.getElementById(right).style
        
        
        
        
        for (let j = left; j < right; j++) {
            
          if (arr[j] < pivot) {
            i++
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
    
            let bar1 = document.getElementById(j).style
            
            setTimeout(() => {
                bar1.backgroundColor = 'red'
                setState([...state, arr])
            }, 4)
            bar1.backgroundColor = 'bisque'

            setTimeout(() => {
                setState([...state, arr])
            }, 4)
            bar2.backgroundColor = 'red'
            bar2.backgroundColor = 'bisque'
            
    
            // setTimeout(() => {
            //     bar2.backgroundColor = 'bisque'
              
            // }, 100)
            
    
            
          }

        }
        
        let barI = document.getElementById(i+1).style
        let barRight = document.getElementById(right).style

        setTimeout(() => {
            let temp = arr[i + 1]
            arr[i + 1] = arr[right]
            arr[right] = temp
            barI.backgroundColor = "bisque";
            barRight.backgroundColor = "bisque";
            setState([...state,arr]);
        }, 4)
        

        
    
        return i + 1
      }
      console.log(state.length);
      
      return (
        <div className="visualizer">
    <SideBar/>
    
    <div className="array">
      {state.map((element, key) => { 
        return key < 100 ? 
          (
            
            <div id={key} className='box' style={{height:`${element*3}px`}}>
              
            </div>
          ) : null

      })}
      </div>
      <Button variant="light" onClick={() => quickSort()}>Quick Sort</Button>
      <Button variant="light" onClick={() => updateArray()}>Generate New Array</Button>
    </div>
      );
}

export default QuickVisualizer;
import {useState} from "react";
import Button from 'react-bootstrap/Button';
import SideBar from "../components/SideBar";

function MergeVisualizer() {

    function randomArray(n) {
        return Array.from({length: n}, () => Math.floor(1+ Math.random() * 100));
    }
    
    const initialArray = randomArray(100);
    
    const [state, setState] = useState(initialArray);
    const [iterations, setIterations] = useState(0);

    

    function getMergeSortAnimations(array) {
        const animations = [];
        if (array.length <= 1){
            return array;
        } 
        const auxiliaryArray = array.slice();
        mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
        return animations;
      }
      
      function mergeSortHelper(
        mainArray,
        startIdx,
        endIdx,
        auxiliaryArray,
        animations,
      ) {
        if (startIdx === endIdx){
            return;
        } 
        const middleIdx = Math.floor((startIdx + endIdx) / 2);
        mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
        mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
        doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
      }
      
      function doMerge(
        mainArray,
        startIdx,
        middleIdx,
        endIdx,
        auxiliaryArray,
        animations,
      ) {
        let k = startIdx;
        let i = startIdx;
        let j = middleIdx + 1;
        while (i <= middleIdx && j <= endIdx) {
          // These are the values that we're comparing; we push them once
          // to change their color.
          animations.push([i, j]);
          // These are the values that we're comparing; we push them a second
          // time to revert their color.
          animations.push([i, j]);
          if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            // We overwrite the value at index k in the original array with the
            // value at index i in the auxiliary array.
            animations.push([k, auxiliaryArray[i]]);
            mainArray[k++] = auxiliaryArray[i++];
          } else {
            // We overwrite the value at index k in the original array with the
            // value at index j in the auxiliary array.
            animations.push([k, auxiliaryArray[j]]);
            mainArray[k++] = auxiliaryArray[j++];
          }
        }
        while (i <= middleIdx) {
          // These are the values that we're comparing; we push them once
          // to change their color.
          animations.push([i, i]);
          // These are the values that we're comparing; we push them a second
          // time to revert their color.
          animations.push([i, i]);
          // We overwrite the value at index k in the original array with the
          // value at index i in the auxiliary array.
          animations.push([k, auxiliaryArray[i]]);
          mainArray[k++] = auxiliaryArray[i++];
        }
        while (j <= endIdx) {
          // These are the values that we're comparing; we push them once
          // to change their color.
          animations.push([j, j]);
          // These are the values that we're comparing; we push them a second
          // time to revert their color.
          animations.push([j, j]);
          // We overwrite the value at index k in the original array with the
          // value at index j in the auxiliary array.
          animations.push([k, auxiliaryArray[j]]);
          mainArray[k++] = auxiliaryArray[j++];
        }
      }
    
      function mergeSort() {
        const animations = getMergeSortAnimations(state);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('box');
          const isColorChange = i % 3 !== 2;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? "red" : "bisque";
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * 10);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight*3}px`;
            }, i * 10);
          }
        }
      }


      return (
        <div className="visualizer">
        <SideBar/>
        
        <div className="array">
          {state.map((element) => {
            return (
              <div className="box" style={{height:`${element*3}px`}}>
                
              </div>
            );
          })}
          </div>
          <Button variant="light" onClick={() => mergeSort()}>Merge Sort</Button>
          <Button variant="light" onClick={() => setState(initialArray)}>Generate New Array</Button>
        </div>
      );
    }

export default MergeVisualizer;


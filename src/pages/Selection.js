import CodeSnippet from "../components/CodeSnippet";
import SideBar from "../components/SideBar";


function Selection() {
    const algorithm = `
    function selectionSort(array) {
        for (let i = 0; i < array.length; i++) {
           let min = i;
           for (let j = i + 1; j < array.length; j++) { 
              if (array[j] < array[min]) {
                 min = j;
              }
           }
           if (i !== min) {
             [array[i], array[min]] = [array[min], array[i]];
           }
         }
       return array;
     }
    `
    return (
            <div className="lesson">
                <SideBar/>
                <h1>Selection Sort</h1>
                <p>Selection sort works by finding the minimum, and then comparing each element to that minimum to decide its correct position.</p>
                <p>Selection sort is a simple sorting algorithm, that loops over the array and saves the absolute lowest value. The lowest value is then swapped with the first item in the unsorted array.</p>
                <h1>Implementation</h1>
                <CodeSnippet algorithm={algorithm}/>
            </div>
    );
}
export default Selection;
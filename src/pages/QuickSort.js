import CodeSnippet from "../components/CodeSnippet";
import SideBar from "../components/SideBar";


function QuickSort() {
    const algorithm = `
    function partitionHoare(array, left, right) {
        const pivot = Math.floor(Math.random() * (right - left + 1) + left);
        while (left <= right) {
          while (array[left] < array[pivot]) {  
             left++;
          }  
          while (array[right] > array[pivot]) {
            right--;
          }
          if (left <= right) {
            [array[left], array[right]] = [array[right], array[left]];
          }
        }
        return left;
     }
    
     function quicksort(array, left, right) {
        left = left || 0;
        right = right || array.length - 1;
       
        const pivot = partitionHoare(array, left, right);
        
        if (left < pivot - 1) {
           quicksort(array, left, pivot - 1);
        }
        if (right > pivot) {
           quicksort(array, pivot, right);
        }
        return array;
     } 
     `
    return (
            <div className="lesson">
                <SideBar/>
                <h1>Quick Sort</h1>
                <p>This algorithm sorts a list by choosing a pivot and comparing each element to that pivot. </p>
                <p>As quicksort does not use any space, it is a in-place sorting algorithm. The way quicksort works is by choosing a pivot (an element in the array, often random), and check whether values in the array are higher or lower than that pivot. The values lower than the pivot should be on the left side, and the values higher than the pivot should be on the right side!</p>
                <h1>Implementation</h1>
                <CodeSnippet algorithm={algorithm}/>
            </div>
    );
}
export default QuickSort;
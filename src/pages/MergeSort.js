import CodeSnippet from "../components/CodeSnippet";
import SideBar from "../components/SideBar";


function MergeSort() {
    const algorithm = `
function mergeSort(array) {
    if (array.length === 1) {
        return array;
    }
        const middle = Math.floor(array.length / 2);
        const left = array.slice(0, middle);
        const right = array.slice(middle);
        return merge(
            mergeSort(left),
            mergeSort(right)
        );
    }
    
    function merge(left, right) {
      let result = [];
      let leftIndex = 0;
      let rightIndex = 0;
    
      while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
           result.push(left[leftIndex]);
           leftIndex++;
        } else {
           result.push(right[rightIndex]);
           rightIndex++;
        }
      }
    
      return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    }`
    return (
            <div className="lesson">
                <SideBar/>
                <h1>Merge Sort</h1>
                <p>Merge sort sorts lists by breaking them down, sorting them and then merging the sorted lists. </p>
                <p>It divides the given array into halves, calls itself for the two halves, and then merges these halves.</p>
                <CodeSnippet algorithm={algorithm}/>
            </div>
    );
}
export default MergeSort;
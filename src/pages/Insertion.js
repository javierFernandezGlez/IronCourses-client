import CodeSnippet from "../components/CodeSnippet";
import SideBar from "../components/SideBar";


function Insertion() {
    const algorithm = `
    function swap(i, j, arr) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    function insertionSort(arr) {
        const n = arr.length;
    
        for(let i = 1; i < n; i++) {
            
            let j = i;
    
            while (j > 0 && arr[j][0] < arr[j-1][0]) {
                  swap(j, j-1, arr);
                  j--;
            }
        }
      }
    `
    return (
            <div className="lesson">
                <SideBar/>
                <h1>Insertion Sort</h1>
                <p>With insertion sort, you move an element that's not in the right position all the way to the point where it should be.</p>
                <p><b>The current element stays the current element after swapping</b>, until it is in the right position! The element then gets “inserted” before all the elements that are greater than it, and after the element that is smaller than it.</p>
                <h1>Implementation</h1>
                <CodeSnippet algorithm={algorithm}/>
            </div>
    );
}
export default Insertion;
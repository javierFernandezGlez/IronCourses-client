import CodeSnippet from "../components/CodeSnippet";
import SideBar from "../components/SideBar";


function HeapSort() {
    const algorithm = `
    function maxHeapify(arr, n, i) {
        let max = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;
     
        if (left < n && arr[max] < arr[left]) {
           max = left;
        }
     
        if (right < n && arr[max] < arr[right]) {
           max = right;
        }
     
        if (max !== i) {
           [arr[i], arr[max]] = [arr[max], arr[i]]
           maxHeapify(arr, n, max)
        }
     }
     
     function makeHeap(arr) {
       const n = arr.length;
       for (let i = (n/2) - 1; i >= 0; i--) {
          maxHeapify(arr, n, i);
       }
       return arr;
     }
    }`
    return (
            <div className="lesson">
                <SideBar/>
                <h1>Heap Sort</h1>
                <p>This algorithm creates a heap to sort the elements of an array. </p>
                <p>In a heap, all nodes are stored based on the value of their parent node. This is a minimum heap: the root of a node is always smaller than or equal to its children. In a maximum heap, the root of a node is always greater than or equal to its children. It is not sorted yet!

With a heap, you can easily find a node’s parent node and children nodes, based on its index in the array. Whenever you add new nodes, they’re always added in the same way: they get added to the first free spot, from left to right. You don’t specify a node’s parent in a heap. However, this means that the added node might not be in the right place, just like here with the number 2. In order to solve this, we compare the node with its parent node. If the node’s value is smaller than that of the parent node, we swap them, until the node is in the right position.</p>
                <h1>Implementation</h1>
                <CodeSnippet algorithm={algorithm}/>
            </div>
    );
}
export default HeapSort;
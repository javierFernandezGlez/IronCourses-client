import CodeSnippet from "../components/CodeSnippet";
import SideBar from "../components/SideBar";

function Bubble() {
    const algorithm = `

function swap(i, j, array) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function bubbleSort(array) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < array.length; i++) {
            if (array[i] && array[i + 1] && array[i] > array[i + 1]) {
                swap(i, i + 1, array);
                swapped = true;
            } 
        }
    } while (swapped);
    return array;
}
    `
    return (
        <div className="lesson">
            <SideBar/>
            <h1>Bubble Sort</h1>
            <p>Bubble sort sorts an array, by swapping elements that are in the wrong order.</p>
            <p>The algorithm starts with the first element in the array until the last element in the array, and keeps on doing so until there is one complete pass without swapping! This creates a “bubble” effect, hence the name.</p>
            <p>For example, we want the array [4,2,3,1] to be sorted <b>in ascending order</b>.</p>
            <ol>
                <li>We go to the first element in the array, which is 4. The next element, 2, is smaller than 4, so they are in the wrong position. They swap, and we go to the next element.</li>
                <li>As the elements swapped, the current element is still 4. We compare it to its next element, which is 1. 1 is smaller than 4, so they swap.</li>
                <li>Again, the current element is 4, as the elements swapped. We compare it to its next element 3, which is smaller. They swap, and we have reached the end of the array. As this was not a pass without swapping, it means that the array has not been sorted yet, so we go back to the first element.</li>
                <li>Current element 2 is bigger than 1, they swap.</li>
                <li>Current element 2 is smaller than 3, no swapping.</li>
                <li>Current element 3 is smaller than 4, no swapping. Although we can see in the example that the array has been sorted, the algorithm only returns once there has been an entire pass without swapping!</li>
                <li>Current element 1 is smaller than 2, no swapping.</li>
                <li>Current element 2 is smaller than 3, no swapping.</li>
                <li>Current element 3 is smaller than 4, no swapping.</li>
                <li>An entire pass without swapping! We have successfully sorted the array, and the bubble sort algorithm returns.</li>
            </ol>
            <h1>Implementation</h1>
            <CodeSnippet algorithm={algorithm}/>
        </div>
    );
}

export default Bubble;





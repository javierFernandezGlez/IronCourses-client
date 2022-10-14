import SideBar from "../components/SideBar";

function Introduction() {
    return (
        <div className="lesson">
            <SideBar/>
            <h1>Introduction</h1>
            <p>
                With sorting algorithms, we can put items of a list in the right order. There are many different ways to sort a list, which all have different time complexities! Sorting a list can be extremely efficient before using other algorithms, such as search or merge algorithms.
            </p>

            <p>In the next lessons we will study <b>9</b> popular sorting algorithms:</p>
            <ul className="algo-list">
                <li>Insertion Sort</li>
                <li>Bubble Sort</li>
                <li>Merge Sort</li>
                <li>Quick Sort</li>
                <li>Selection Sort</li>
                <li>Counting Sort</li>
                <li>Bucket Sort</li>
                <li>Radix Sort</li>
                <li>Heap Sort</li>
            </ul>
        </div>
    );
}

export default Introduction;
const calculate = () => {
    const value = document.querySelector('#numbers').value
    const array = value.split(/,\s*/g);
    const numbers = array.map(el => Number(el)).filter(el => !isNaN(el))
    const mean = getMean(numbers);
    const median = getMedian(numbers);
    document.querySelector("#mean").textContent = mean;
    document.querySelector("#median").textContent = median;

}

const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;

const getMedian = (array) => {
    const sorted = array.sort((a, b) => a - b);

    if (array.length % 2 === 0) {
        const even = getMean([sorted[sorted.length / 2 - 1], sorted[sorted.length / 2]]);
        return even;
    }
    else {
        const odd = sorted[Math.floor(sorted.length / 2)];
        return odd;
    }
}
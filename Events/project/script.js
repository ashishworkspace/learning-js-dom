// random color generator

const selectRGB = document.querySelector('.container h1');
const selectBtn = document.querySelector('.container button');

console.log(selectRGB)

const randomColorGenerator = () => {
    const redColor = Math.floor(Math.random() * 256);
    const greenColor = Math.floor(Math.random() * 256);
    const blueColor = Math.floor(Math.random() * 256);
    return `rgb(${redColor}, ${greenColor}, ${blueColor})`
}

selectBtn.addEventListener('click', function(){
    const bodySelect = document.getElementsByTagName('body')[0];
    const getVal = randomColorGenerator();
    bodySelect.style.background = getVal;
    selectRGB.textContent = getVal
})

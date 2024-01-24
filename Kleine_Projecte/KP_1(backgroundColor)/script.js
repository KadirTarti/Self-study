let index = 0;

function changeColors() {
    let colors = ["red", "lightBlue", "orange", "darkBlue", "yellow", "purple", "  darkGreen" ]; 

    document.getElementsByTagName("body")[0].style.background = colors[index++]

    if(index > colors.length -1)
    index = 0
}
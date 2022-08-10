document.getElementById('search').addEventListener('keyup', searchbar);

function searchbar() { 
    let input, inputCaps, images, imagesCaps; // div, x, a, txtValue;
    input = document.getElementById(`search`);
    input.value = input.value.toUpperCase();
    inputCaps = input.value;
    let x = document.getElementsByClassName('images');
    for (let i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toUpperCase().includes(inputCaps)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="flex";                 
        }
    }
}
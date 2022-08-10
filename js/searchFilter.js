document.getElementById('search').addEventListener('keyup', searchbar);

function searchbar() { 
    let input, inputCaps, images, imagesCaps; // div, x, a, txtValue;
    input = document.getElementById(`search`);
    input.value = input.value.toUpperCase();
    inputCaps = input.value;
    let filter = document.getElementsByClassName('images');
    for (let i = 0; i < filter.length; i++) { 
        if (!filter[i].innerHTML.toUpperCase().includes(inputCaps)) {
            filter[i].style.display="none";
        }
        else {
            filter[i].style.display="flex";                 
        }
    }
}


/* Used given link to get a better understanding of the elementsByClassName method that was giving me a hard time as I didnt realize with include it would automatically target the alt attribute

 https:www.geeksforgeeks.org/search-bar-using-html-css-and-javascript/

*/









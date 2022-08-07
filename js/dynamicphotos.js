const picturesAlt = [
    'Hay Bales',
    'Lake',
    'Canyon',
    'Iceberg',
    'Desert',
    'Fall',
    'Plantation',
    'Dunes',
    'Countryside Lane',
    'Sunset',
    'Cave',
    'Bluebells'
];
const picturesSrc = [];

const eachPic = function(arr) {
   let images = ``;
    for (l = 0;  l < arr.length; l++) {
        images = arr[i];
    }
    return images;
}

let html = '';

for (i = 0; i < 12; i++) {  
    html += `
    <div class="images">
    <a href="" data-caption="${eachPic(picturesAlt)}">
        <img src="" alt="">
    </a>         
    </div>
    `
}






document.querySelector('main').innerHTML = `
<div class="container gallery">
    ${html}            
</div>`;





// ${eachPic(picturesAlt)
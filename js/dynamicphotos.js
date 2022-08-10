let i;
let l;

function eachPic(arr) {
    let images = ``;
     for (l = 0;  l < arr.length; l++) {
         images = arr[i];
     }
     return images;
 }

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

const picturesSrc = [
    'photos/thumbnails/01.jpg',
    'photos/thumbnails/02.jpg',
    'photos/thumbnails/03.jpg',
    'photos/thumbnails/04.jpg',
    'photos/thumbnails/05.jpg',
    'photos/thumbnails/06.jpg',
    'photos/thumbnails/07.jpg',
    'photos/thumbnails/08.jpg',
    'photos/thumbnails/09.jpg',
    'photos/thumbnails/10.jpg',
    'photos/thumbnails/11.jpg',
    'photos/thumbnails/12.jpg',
    'photos/thumbnails/13.jpg'
];

const pictureHref = [
    'photos/01.jpg',
    'photos/02.jpg',
    'photos/03.jpg',
    'photos/04.jpg',
    'photos/05.jpg',
    'photos/06.jpg',
    'photos/07.jpg',
    'photos/08.jpg',
    'photos/09.jpg',
    'photos/10.jpg',
    'photos/11.jpg',
    'photos/12.jpg'
];

const pictureDataCap = [
    'I love hay bales. Took this snap on a drive through the countryside past some straw fields.',
    'The lake was so calm today. We had a great view of the snow on the mountains from here.',
    'I hiked to the top of the mountain and got this picture of the canyon and trees below.',
    'It was amazing to see an iceberg up close, it was so cold but didn’t snow today.',
    'The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.',
    'Fall is coming, I love when the leaves on the trees start to change color.',
    'I drove past this plantation yesterday, everything is so green!',
    'My summer vacation to the Oregon Coast. I love the sandy dunes!',
    'We enjoyed a quiet stroll down this countryside lane.',
    'Sunset at the coast! The sky turned a lovely shade of orange.',
    'I did a tour of a cave today and the view of the landscape below was breathtaking.',
    'I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in.'
];

let html = '';  

for (i = 0; i < 12; i++) {  
    html += `
    <div class="images">
    <a href="${eachPic(pictureHref)}" data-caption="${eachPic(pictureDataCap)}">
        <img src="${eachPic(picturesSrc)}" alt="${eachPic(picturesAlt)}">
    </a>         
    </div>
    `;
}

document.querySelector('main').innerHTML = `
<div class="container gallery">
    ${html}            
</div>`;





// let htmlBlocks;

// let htmlCount;
// for (x=0;x=) {

// }

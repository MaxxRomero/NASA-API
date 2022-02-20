//-----------------GALLERY---------------------------

let searchInput = document.getElementById('searchInput');
let btnSearch = document.getElementById('btnSearch');
let imgContainer = document.getElementById('image-container');

btnSearch.addEventListener('click', searchImg);

async function searchImg(e) {
    let response = await fetch(`https://images-api.nasa.gov/search?q=${searchInput.value}`);
    let data = await response.json();
    showImages(data);

    searchInput.value = '';
    e.preventDefault();
}


function showImages(data) {
    let imagenes = data.collection.items;

    // TODO:
    imagenes.forEach(async imagen => {
        if (imagen.data[0].media_type === "image") {
            // imgContainer.innerHTML += `<img href="#" src="${imagen.links[0].href}" class="img-gallery m-1 img-fluid"></img>`;
        } else if (imagen.data[0].media_type === "video") {
            let response = await fetch(imagen.href);
            let data = await response.json();
            console.log(data[5]);
            imgContainer.innerHTML += `
            <video width="320" height="240" controls>
                <source src="${data[5]}" type="video/mp4">
            </video>
            `;
        }
    });

}
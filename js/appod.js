//------------------------APOD---------------------
async function getApod(){
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    let data = await response.json();
    showApod(data);
}

function showApod(data){
    //Foto del dia 
    let containerFoto = document.getElementById('container-foto');
    containerFoto.innerHTML += `<h3 class="m-4" style="border-bottom: 3px solid #fff;">${data.title}</h3>`;
    containerFoto.innerHTML += `<img src="${data.url}">`;
    containerFoto.innerHTML += `<p class="mt-4 mb-0" style="font-size:18px;">${data.explanation}</p>`;
}

async function getPhotoWeek(){
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${firstDay}&end_date=${lastDay}`);
    let data = await response.json();
    showPhotoWeek(data);
}

getPhotoWeek();

function showPhotoWeek(data){   
    document.getElementById('foto-dia4').innerHTML +=  `
    <h5>${data[3].title}</h5>
    <h5>${data[3].date}</h5>
    <img class="img-fluid" src="${data[3].url}">
    `;

    document.getElementById('foto-dia3').innerHTML +=  `
    <h5>${data[2].title}</h5>
    <h5>${data[2].date}</h5>
    <img class="img-fluid" src="${data[2].url}">
    `;

    document.getElementById('foto-dia2').innerHTML +=  `
    <h5>${data[1].title}</h5>
    <h5>${data[1].date}</h5>
    <img class="img-fluid" src="${data[1].url}">
    `;

    document.getElementById('foto-dia1').innerHTML +=  `
    <h5>${data[0].title}</h5>
    <h5>${data[0].date}</h5>
    <img class="img-fluid" src="${data[0].url}">
    `;
}


//------------------------APOD---------------------
document.getElementById('btnApod').addEventListener('click',()=> {
    getApod();
    btnApod.style.display = 'none';
});



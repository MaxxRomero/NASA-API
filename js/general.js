let API_KEY = "hri87XuihmDTwZOVlXIJ3HuRUoGWPsG4bkBloD8C";

//Obtener fechas
let today = new Date();
let dd = today.getDate();

let mm = today.getMonth()+1; 
const yyyy = today.getFullYear();

let firstDay;
let lastDay;

if(mm<10)
{
    mm=`0${mm}`;
} 

if(dd<10)
{
    dd=`0${dd}`;
    //4 dias antes(APOD)
    firstDay = `${yyyy}-${mm}-${dd - 4}`;
    //Ayer(APOD)
    lastDay = `${yyyy}-${mm}-${dd - 1}`;
    //Hoy(ASTEROIDS)
    today = `${yyyy}-${mm}-${dd}`;
} else {
    firstDay = `${yyyy}-${mm}-${dd - 4}`;
    lastDay = `${yyyy}-${mm}-${dd - 1}`;
    today = `${yyyy}-${mm}-${dd}`;
}
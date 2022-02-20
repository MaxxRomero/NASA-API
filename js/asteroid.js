//------------------------ASTEROIDS---------------------
async function getAsteroids() {
    let response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&end_date=${today}&api_key=${API_KEY}`);
    let data = await response.json();
    showAsteroids(data);
}

getAsteroids();

function showAsteroids(data){
    document.getElementById('asteroid-title').innerHTML += `Today, on ${today}, the total number of near Earth bodies is : ${data.element_count}`;

    let date = '';
    for(date in data.near_earth_objects){
        date;
    }
   
    data.near_earth_objects[date].forEach(asteroid => {
        let container = document.getElementById('asteroid-container');
        
        //Asteroid data
        let velocity = parseInt(asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour);
        let diameter = parseInt(asteroid.estimated_diameter.meters.estimated_diameter_max);
        let closestApproach = asteroid.close_approach_data[0].close_approach_date_full;
        let missDistance = parseInt(asteroid.close_approach_data[0].miss_distance.kilometers);
        let url = asteroid.nasa_jpl_url;

        //Mostrar asteroid data
        container.innerHTML += `
        <div class="card m-4 bg-primary" style="width: 18rem;">
        <div class="card-body text-center">
          <h5 class="card-title" style="color: #fff;">Name: ${asteroid.name}</h5>
        </div>
        <ul class="list-group list-group-flush text-center">
          <li class="list-group-item" style="cursor:pointer;">Velocity: ${velocity}km/h</li>
          <li class="list-group-item" style="cursor:pointer;">Diameter: ${diameter}m</li>
          <li class="list-group-item" style="cursor:pointer;">Closest Approach: ${closestApproach}hs</li>
          <li class="list-group-item" style="cursor:pointer;">Miss Distance: ${missDistance}km</li>
        </ul>
        <div class="card-body bg-success text-center">
            <a href="${url}" class="text-light">Click to more info</a>
        </div>
        </div> 
        `;
    });
}


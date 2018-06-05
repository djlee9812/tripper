// const provider = new OpenStreetMapProvider();


// const searchControl = new GeoSearchControl({
//   provider: provider,
// });

var mymap = L.map('mapid').setView([35.7788, 10.6906], 2);
// map.addControl(searchControl);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
	maxZoom: 18,
	minZoom: 2,
	id: 'mapbox.streets',
	accessToken: 'pk.eyJ1IjoiZG9uZ2pvb25sZWUiLCJhIjoiY2pjd2h4d2FyMWJpODJ4cnh2eGd1aXEyZSJ9.aUc50cVIQy3migHybIP48Q'
}).addTo(mymap);

//add bounds to scrolling left/right



mymap.setMaxBounds([
        [-90, -180],
        [90, 180]
    ]);

// const form = document.querySelector('form');
// const input = form.querySelector('input[type="text"]');

// form.addEventListener('submit', async (event) => {
//   event.preventDefault();

//   const results = await provider.search({ query: input.value });
//   console.log(results); // » [{}, {}, {}, ...]
// });


get('/api/whoami', {}, function(user) {
	if (user._id) {
		
	}
});


mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: "map",
  // You can add layers to the predetermined slots within the Standard style basemap.
  style: "mapbox://styles/mapbox/streets-v12",
  center: listing.geometry.coordinates, //starting position [long,lat]
  zoom: 9,
});

const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat(listing.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h1>${listing.title}</h1><p>Exact Location  will be provided after booking!</p>`
    )
  )
  .addTo(map);

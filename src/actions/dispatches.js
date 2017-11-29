export const loadStopArrivals = (stopId) => {
  const url = `http://svc.metrotransit.org/NexTrip/${stopId}?format=json`
  fetch(url)
  .then(response=>response.json())
  .then(data => { return data })
  .catch(function(error) { console.log(error); });
}

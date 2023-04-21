const GOOLE_API_KEY = 'AIzaSyDa51ZCPcCPlhI8UliL_OG8M9W_wgEb3d8';

export async function getAddressFromCoords(coords) {
  const response =
    await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.lat},${coords.lng}&key=${GOOLE_API_KEY}
  `);
  if (!response.ok) {
    throw new Error('Failed to fetch address. Please try again!');
  }
  const data = await response.json();
  console.log(response, data);
  if (data.error_message) {
    throw new Error(data.error_message);
  }
  const address = data.results[0].formatted_address;
  return address;
}

export async function getCoordsFromAddress(address) {
  const urlAdress = encodeURI(address);
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${urlAdress}&key=${GOOLE_API_KEY}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch coordinates. Please try again!');
  }

  const data = await response.json();
  if (data.error_message) {
    throw new Error(data.error_message);
  }

  console.log(data);
  const coordinates = data.results[0].geometry.location;
  return coordinates;
}

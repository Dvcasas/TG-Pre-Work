fetch('https://api-to-call.com/endpoint', {
  method: 'POST',
  body: JSON.stringify({id: "200"})
}).then(response => {
  if(response.ok){
	  return response.json();
  }
	throw new Error('Request failed!');
}, networkError => {
  console.log(networkError.message);
}).then(jsonResponse => {
  console.log(jsonResponse);
})

/* Here we reconstruct the fetch() POST request using the diagram previously
provided. */

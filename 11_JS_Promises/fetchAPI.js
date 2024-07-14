// The Fetch API provides an interface for fetching resources (including across the network).
// It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more 
// powerful and flexible feature set. In this challenge we will use fetch to request url and APIS.
// In addition to that let us see demonstrate use case of promises in accessing network resources 
// using the fetch API.

const url = 'https://restcountries.com/v2/all'; // countries api

// Using fetch to request the URL
fetch(url)
  .then(response => {
    // Check if the response was successful
    if (response.ok) {
      return response.json(); // accessing the API data as JSON
    } else {
      throw new Error('Failed to retrieve data');
    }
  })
  .then(data => {
    // getting the data
    console.log(data);
  })
  .catch(error => {
    // handling error if something wrong happens
    console.error('Error:', error);
  });
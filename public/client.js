console.log('Client-side code running');

const button = document.getElementById('clickMe');
button.addEventListener('click', function(e) {
  console.log('button was clicked');

  fetch('/updateAndREad', {method: 'GET'})
    .then(function(response) {
      if(response.ok) {
        console.log('click was recorded');
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });
});
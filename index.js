fetch("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=7bc2220c948ad024d9dc888203f8fbdb&hash=9f8388fe801073e4567aa3f59eb73f87")
  .then(response => response.json())
  .then(data => {
    console.log(data.data.results); 
  })
  .catch(error => {
    console.error("Error:", error);
  });

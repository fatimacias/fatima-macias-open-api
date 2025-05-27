const contentDiv = document.getElementById("content");
const publicKey = "7bc2220c948ad024d9dc888203f8fbdb";
const hash = "9f8388fe801073e4567aa3f59eb73f87";
const ts = 1;

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const tabButtons = document.querySelectorAll('.tab');
const limitInput = document.getElementById("limit-input");
let currentTab = "characters"
let limit = getLimitValue();


function setActiveTab(tabId) {
  tabButtons.forEach(btn => btn.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');

  currentTab = tabId === "show-characters" ? "characters" : "comics";
  searchInput.placeholder = currentTab === "characters"
    ? "Search a superhero..."
    : "Search a comic...";
  searchInput.value = "";
  limitInput.value = "5";
  
}


function showCharacters(nameStartsWith = "") {
  contentDiv.innerHTML = "<h2>Loading characters...</h2>";
  let url = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=${limit}`;
  if (nameStartsWith) {
    url += `&nameStartsWith=${nameStartsWith}`;
  }

  fetch(url)
    .then(res => res.json())
    .then(data => {
      const resultsWithDescriptions = data.data.results;

      contentDiv.innerHTML = "";
      if (resultsWithDescriptions.length === 0) {
        contentDiv.innerHTML = "<p>No heroes found with description.</p>";
        return;
      }

      resultsWithDescriptions.forEach(char => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <img src="${char.thumbnail.path}.${char.thumbnail.extension}" alt="${char.name}">
          <h3>${char.name}</h3>
          <p>${char.description || "No description available."}</p>
        `;
        contentDiv.appendChild(card);
      });
    })
    .catch(error => {
      contentDiv.innerHTML = "<p>Error loading characters.</p>";
      console.error(error);
    });
}

function showComics(titleStartsWith = "") {
  contentDiv.innerHTML = "<h2>Loading comics...</h2>";

  let url = `https://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=${limit}`;
  if (titleStartsWith) {
    url += `&titleStartsWith=${titleStartsWith}`;
  }

  fetch(url)
    .then(res => res.json())
    .then(data => {
      contentDiv.innerHTML = "";
      if (data.data.results.length === 0) {
        contentDiv.innerHTML = "<p>No comics found.</p>";
        return;
      }

      data.data.results.forEach(comic => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <img src="${comic.thumbnail.path}.${comic.thumbnail.extension}" alt="${comic.title}">
          <h3>${comic.title}</h3>
          <p>${comic.description || "No description available."}</p>
        `;
        contentDiv.appendChild(card);
      });
    })
    .catch(error => {
      contentDiv.innerHTML = "<p>Error loading comics.</p>";
      console.error(error);
    });
}

function getLimitValue() {
  const userValue = parseInt(limitInput.value, 10);
  console.log(userValue);
  return (isNaN(userValue) || userValue < 1) ? 10 : userValue;
}

document.getElementById("show-characters").addEventListener("click", () => {
  setActiveTab("show-characters");
  showCharacters();
});

document.getElementById("show-comics").addEventListener("click", () => {
  setActiveTab("show-comics");
  showComics();
});

searchButton.addEventListener("click", () => {
  const query = searchInput.value.trim();  
  limit = getLimitValue();
  if (currentTab === "characters") {
    showCharacters(query);
  } else {
    showComics(query);
  }
});

searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); 
    searchButton.click();
  }
});

setActiveTab("show-characters");
showCharacters();
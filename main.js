const accesKey = "IRMuPvpt6PzDIZSTcCFveeFmIlNUHjSEsWgPngm9yTM";
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
let keyword = "";
let page = 1;

async function searchImage() {
  keyword = searchInput.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesKey}`;

  const response = await fetch(url);
  const data = await response.json();

  console.log(data);
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImage();
});

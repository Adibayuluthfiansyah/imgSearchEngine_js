const accesKey = "IRMuPvpt6PzDIZSTcCFveeFmIlNUHjSEsWgPngm9yTM";
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const searchResult = document.getElementById("searchResult");
const showMoreBtn = document.getElementById("showMoreBtn");
let keyword = "";
let page = 1;

async function searchImage() {
  keyword = searchInput.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesKey}&per_page=12`;
  const response = await fetch(url);
  const data = await response.json();
  const results = data.results;

  if (page === 1) {
    searchResult.innerHTML = "";
    showMoreBtn.style.display = "none";
  }

  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imgLink = document.createElement("a");
    imgLink.href = result.links.html;
    imgLink.target = "_blank";

    imgLink.appendChild(image);
    searchResult.appendChild(imgLink);
  });

  showMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImage();
});

showMoreBtn.addEventListener("click", () => {
  page++;
  searchImage();
});

function scrollToResults() {
  if (searchResult.children.length > 0) {
    searchResult.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

const originalSearchImage = searchImage;
searchImage = async function () {
  await originalSearchImage();
  if (page === 1) {
    setTimeout(scrollToResults, 500);
  }
};

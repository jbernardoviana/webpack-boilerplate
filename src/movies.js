const list = document.querySelector('#results');
const apiKey = '48727053';

const insertMovies = (data) => {
  // { Search: value, ...}
  console.log(data);
  data.Search.forEach((element) => {
    const movie = `<li class="list-inline-item">
      <img src="${element.Poster}" height="120">
    </li>`;
    list.insertAdjacentHTML('beforeend', movie);
  });
};

const searchMovies = (keyword) => {
  // GET request
  const url = `http://www.omdbapi.com/?s=${keyword}&apikey=${apiKey}`;

  list.innerHTML = '';
  fetch(url)
    .then(response => response.json())
    .then(data => insertMovies(data));
};


const updateMoviesList = (event) => {
  event.preventDefault();

  const keyword = document.querySelector('#keyword').value;
  searchMovies(keyword);
};

export { searchMovies, updateMoviesList };

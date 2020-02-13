import { searchMovies, updateMoviesList } from './movies';
import { initSortable } from './plugins/init_sortable';
import { initMarkdown } from './plugins/init_markdown';
import { initSelect2 } from './plugins/init_select2';

// Init plugins
initSortable();
initMarkdown();
initSelect2();


// Ajax Calls
searchMovies('lord of the rings');

// Add event Listeners
const form = document.querySelector('#search-movies');
form.addEventListener('submit', updateMoviesList);


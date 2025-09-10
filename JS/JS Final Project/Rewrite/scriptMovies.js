// OMDb API link with key= http://www.omdbapi.com/?i=tt3896198&apikey=e44d38c3
const kittiesEl = document.querySelector(".kitties");

async function renderCatsInitial(sortSelection, searchTerm) {
    sortSelection = sortSelection || "none";
    searchTerm = searchTerm ||"Star Wars";

    const searchTermPlussed = searchTerm.replace(/ /g, '+');
    const searchQuery = `&s=${searchTermPlussed}`;

    try {
        const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=e44d38c3${searchQuery}`);
        const moviesData = await response.json();

        // Check if the response contains the Search array
        if (moviesData.Search) {
            if (sortSelection === 'release_low_to_high') {
                moviesData.Search.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
            } else if (sortSelection === 'release_high_to_low') {
                moviesData.Search.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
            }
            kittiesEl.innerHTML = moviesData.Search.map(movieHtml).join('');
        } else {
            kittiesEl.innerHTML = '<p>No movies found.</p>';
        }
    } catch (error) {
        console.error('Error fetching movies:', error);
        kittiesEl.innerHTML = '<p>Error fetching movies. Please try again later.</p>';
    }
}

function movieHtml(movie) {
    return `
        <div class="kitty">
            <img src="${movie.Poster}" alt="Picture of ${movie.Title}">
            <div class="kitty__text ">
                <p class="kitty__breed--header">
                ${movie.Title}
                </p>
                <p class="kitty__breed">
                <b>Release Year: </b> ${movie.Year}
                </p>
            </div>
        </div>`;
}

function sortCats(event) {
    let sort = event.target.value;
    let search = document.getElementById(`search__input`).value;
    renderCatsInitial(sort, search);
}

function searchCats(){
    let search = document.getElementById(`search__input`).value;
    renderCatsInitial("none", search);
}

document.addEventListener('DOMContentLoaded', renderCatsInitial(), false);

// API = https://api.thecatapi.com/v1/images/search?api_key=live_eMv9HahQB2nEhfURSsyvpJJXfiLtVlgBazYtMuWuONPkBWk5ebCeS3lRkd0MnuFe&limit=20&has_breed=1
const kittiesEl = document.querySelector(".kitties");
const breedFilterEl = document.querySelector(".breed__filter");

function notActive() {
    alert("this feature has not been implemented");
}

async function renderCatsInitial() {
    const cats = await fetch(`https://api.thecatapi.com/v1/images/search?api_key=live_eMv9HahQB2nEhfURSsyvpJJXfiLtVlgBazYtMuWuONPkBWk5ebCeS3lRkd0MnuFe&limit=21&has_breeds=true&size=small`);
    const catsData = await cats.json();
    kittiesEl.innerHTML = catsData.map((cat) => catHtml(cat)).join("");
}

async function renderCatsSearch(event) {
    console.log(event);
    const searchterm = event.target.value;
    console.log(searchterm);
    const cats = await fetch(`https://api.thecatapi.com/v1/images/search?api_key=live_eMv9HahQB2nEhfURSsyvpJJXfiLtVlgBazYtMuWuONPkBWk5ebCeS3lRkd0MnuFe&limit=21&has_breeds=true&size=small&breed_ids=${searchterm}`);
    const catsData = await cats.json();
    kittiesEl.innerHTML = catsData.map((cat) => catHtml(cat)).join("");
}

function catHtml(cat) {
    return `
        <div class="kitty">
            <img src="${cat.url}" alt="Picture of ${cat.id}">
            <div class="kitty__text">
                <p class="kitty__breed">
                <b>Breed:</b> ${cat['breeds']['0']['name']}
                </p>
                <p class="kitty__breed">
                <b>Temperament:</b> ${cat['breeds']['0']['temperament']}
                </p>
            </div>
        </div>`
}

async function breedsList() {
    const breed = await fetch("https://api.thecatapi.com/v1/breeds");
    const breedData = await breed.json();
    
    breedFilterEl.innerHTML = `<option value="" selected disabled>Breeds</option>` 
    + breedData.map((breed) => `<option value="${breed.id}">${breed.name}</option>`).join("");
}
+

document.addEventListener('DOMContentLoaded', renderCatsInitial(), false);
breedsList();

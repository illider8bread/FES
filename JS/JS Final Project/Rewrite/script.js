// API = https://api.thecatapi.com/v1/images/search?api_key=live_eMv9HahQB2nEhfURSsyvpJJXfiLtVlgBazYtMuWuONPkBWk5ebCeS3lRkd0MnuFe&limit=20&has_breed=1
const kittiesEl = document.querySelector(".kitties");
const breedFilterEl = document.querySelector(".breed__filter");
const breedListEl = document.querySelector(".kitty__breeds--list");

function notActive() {
    alert("this feature has not been implemented");
}

async function renderCatsInitial(sortSelection, searchTerm) {
    sortSelection = sortSelection || "none";
    searchTerm = searchTerm || " ";


    const cats = await fetch(`https://api.thecatapi.com/v1/images/search?api_key=live_eMv9HahQB2nEhfURSsyvpJJXfiLtVlgBazYtMuWuONPkBWk5ebCeS3lRkd0MnuFe&limit=24&has_breeds=true&order=ASC`);
    const catsData = await cats.json();

    if (sortSelection === 'none'){
    } else if (sortSelection === 'aff_low_to_high'){
        catsData.sort((a, b )=> a.affection_level - b.affection_level);
    } else if (sortSelection === 'aff_high_to_low'){
        catsData.sort((a, b )=> b.affection_level - a.affection_level);
    } else if (sortSelection === 'en_low_to_high'){
        catsData.sort((a, b )=> a.energy_level - b.energy_level);
    } else if (sortSelection === 'en_high_to_low'){
        catsData.sort((a, b )=> b.energy_level - a.energy_level);
    } else if (sortSelection === 'int_low_to_high'){
        catsData.sort((a, b )=> a.intelligence - b.intelligence);
    } else if (sortSelection === 'int_high_to_low'){
        catsData.sort((a, b )=> b.intelligence - a.intelligence);
    }


    kittiesEl.innerHTML = catsData.map((cat) => catHtml(cat)).join("");
}

function sortShownCats(event) {
    renderCatsInitial(event.target.value);
}

function catHtml(cat) {
    return `
        <div class="kitty ${cat['breeds']['0']['id']}">
            <img src="${cat.url}" alt="Picture of ${cat.id}">
            <div class="kitty__text ">
                <p class="kitty__breed">
                <b>Breed:</b> ${cat['breeds']['0']['name']}
                </p>
                    <div class="kitty__stats">
                    <div class="aff kitty__stat">Affection <br> ${cat['breeds']['0']['affection_level']}</div>
                    <div class="en kitty__stat"> Energy <br> ${cat['breeds']['0']['energy_level']}</div>
                    <div class="int kitty__stat"> Intelligence <br> ${cat['breeds']['0']['intelligence']}</div>
                </div>
            </div>
        </div>`
}




async function renderBreeds() {
     const breed = await fetch("https://api.thecatapi.com/v1/breeds");
     const breedData = await breed.json();
     breedListEl.innerHTML = `<li> <h4 class="kitty__breed--header">Non-Comprehensive List of Kitty Breeds</h4> </li> <hr class="kitty__breeds--hr">` +
     breedData.map((breed) => `<li class="kitty__breed">${breed.name}</li>`).join("");    
}


const breedDiv = document.querySelector(`#kitty__breeds`);

function showBreeds() {
    breedDiv.classList.remove("invisible");
    console.log("Show Breeds")
}

function hideBreeds() {
    breedDiv.classList.add("invisible");
    console.log("Hide Breeds")
}

document.addEventListener('DOMContentLoaded', renderCatsInitial(), false);
renderBreeds();

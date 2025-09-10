// API = https://api.thecatapi.com/v1/images/search?api_key=live_eMv9HahQB2nEhfURSsyvpJJXfiLtVlgBazYtMuWuONPkBWk5ebCeS3lRkd0MnuFe&limit=20&has_breed=1
// const kittiesEl = document.querySelector(".kitties");
// const breedFilterEl = document.querySelector(".breed__filter");
// const breedListEl = document.querySelector(".kitty__breeds--list");

// function notActive() {
//     alert("this feature has not been implemented");
// }

// async function renderCatsInitial(sortSelection, searchTerm) {
//     sortSelection = sortSelection || "none";
//     searchTerm = searchTerm || " ";
//     console.log(sortSelection);
//     console.log(searchTerm)
//     if (searchTerm != " "){
//     // run the search function here
//     const searchedCatID = findID(searchTerm);
//     const searchQuery = `&breed_ids=${searchedCatID}`
//     const cats = await fetch(`https://api.thecatapi.com/v1/images/search?api_key=live_eMv9HahQB2nEhfURSsyvpJJXfiLtVlgBazYtMuWuONPkBWk5ebCeS3lRkd0MnuFe&limit=24&has_breeds=true&order=ASC${searchQuery}`);
//     const catsData = await cats.json();
//     kittiesEl.innerHTML = catsData.map((cat) => catHtml(cat)).join("");
//     return
//     } else if (searchTerm != " " && sortSelection != "none"){
//         const searchedCatID = findID(searchTerm);
//     const searchQuery = `&breed_ids=${searchedCatID}`
//     const cats = await fetch(`https://api.thecatapi.com/v1/images/search?api_key=live_eMv9HahQB2nEhfURSsyvpJJXfiLtVlgBazYtMuWuONPkBWk5ebCeS3lRkd0MnuFe&limit=24&has_breeds=true&order=ASC${searchQuery}`);
//     const catsData = await cats.json();
//     sortCats(sortSelection);
//     kittiesEl.innerHTML = catsData.map((cat) => catHtml(cat)).join("");
//     return
//     } else {
//     const cats = await fetch(`https://api.thecatapi.com/v1/images/search?api_key=live_eMv9HahQB2nEhfURSsyvpJJXfiLtVlgBazYtMuWuONPkBWk5ebCeS3lRkd0MnuFe&limit=24&has_breeds=true&order=ASC`);
//     const catsData = await cats.json();
//     kittiesEl.innerHTML = catsData.map((cat) => catHtml(cat)).join("");
//     }
// }

// function sortShownCats(event) {
//     renderCatsInitial(event.target.value);
// }

// function sortCats(sortSelection){
// if (sortSelection === 'none'){
//     } else if (sortSelection === 'aff_low_to_high'){
//         catsData.sort((a, b)=> a['breeds']['0']['affection_level'] - b['breeds']['0']['affection_level']);
//     } else if (sortSelection === 'aff_high_to_low'){
//         catsData.sort((a, b)=> b['breeds']['0']['affection_level'] - a['breeds']['0']['affection_level']);
//     } else if (sortSelection === 'en_low_to_high'){
//         catsData.sort((a, b)=> a['breeds']['0']['energy_level'] - b['breeds']['0']['energy_level']);
//     } else if (sortSelection === 'en_high_to_low'){
//         catsData.sort((a, b)=> b['breeds']['0']['energy_level'] - a['breeds']['0']['energy_level']);
//     } else if (sortSelection === 'int_low_to_high'){
//         catsData.sort((a, b)=> a['breeds']['0']['energy_level'] - b['breeds']['0']['energy_level']);
//     } else if (sortSelection === 'int_high_to_low'){
//         catsData.sort((a, b)=> b['breeds']['0']['energy_level'] - a['breeds']['0']['energy_level']);
//     }
// }

// function catHtml(cat) {
//     return `
//         <div class="kitty ${cat['breeds']['0']['id']}">
//             <img src="${cat.url}" alt="Picture of ${cat.id}">
//             <div class="kitty__text ">
//                 <p class="kitty__breed">
//                 <b>Breed:</b> ${cat['breeds']['0']['name']}
//                 </p>
//                     <div class="kitty__stats">
//                     <div class="aff kitty__stat">Affection <br> ${cat['breeds']['0']['affection_level']}</div>
//                     <div class="en kitty__stat"> Energy <br> ${cat['breeds']['0']['energy_level']}</div>
//                     <div class="int kitty__stat"> Intelligence <br> ${cat['breeds']['0']['energy_level']}</div>
//                 </div>
//             </div>
//         </div>`
// }

// if searchinput = map.name then return ID then 

async function findID(searchTerm){
    console.log(searchTerm);
    const breed = await fetch("https://api.thecatapi.com/v1/breeds");
    const breedData = await breed.json();
    console.log(breedData);
    const breedID = breedData.map((breed) => {
    const searchBreed = breed.name;
    console.log(searchBreed)

    for (let i = 0; i  < breedData.length; ++) {
        
        
    }
        // if (breed.name == searchTerm){
        //     console.log(breed.id);
        //      return breed.id;}
        // } else{
        //     alert("There were no results matching your search. Please try again. If you need help, reference the lists of breeds available.")
        // }
    }).join("");
}

findID("Bengal");

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

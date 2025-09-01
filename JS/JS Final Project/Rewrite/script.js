// API = https://api.thecatapi.com/v1/images/search?api_key=live_eMv9HahQB2nEhfURSsyvpJJXfiLtVlgBazYtMuWuONPkBWk5ebCeS3lRkd0MnuFe&limit=20&has_breed=1

function notActive() {
    alert("this feature has not been implemented");
}

const kittiesEl = document.querySelector(".kitties");

async function renderCats(searchterm) {
    const cats = await fetch(`https://api.thecatapi.com/v1/images/search?api_key=live_eMv9HahQB2nEhfURSsyvpJJXfiLtVlgBazYtMuWuONPkBWk5ebCeS3lRkd0MnuFe&limit=20&has_breed=1&breed_ids=beng`);
    const catsData = await cats.json();
    console.log(catsData);
    
    kittiesEl.innerHTML = catsData.map(
        (cat) => `
        <div class="kitty">
            <img src=${cat.url}" alt="Picture of ">
                <div class="kitty__text">
                    <h4 class="kitty__name">
                    <b>Name:</b> 
                    </h4>
                    <p class="kitty__breed">
                    <b>Breed:</b> 
                    </p>
                </div>
        </div>`
    ).join("");
}

renderCats();

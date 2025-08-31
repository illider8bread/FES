const postListEl = document.querySelector(`.post-list`)
let id = localStorage.getItem("id");

async function onSearchChange(event){
    let id = event.target.value;
    render(id);
}

async function render(userId) {
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId || id}`);
    const postsData = await posts.json();
    console.log(postsData);
    postListEl.innerHTML = postsData.map( post => postHTML(post)).join('');
}



function postHTML(post){
    return `
    <div class="post">
    <div class="post__title">
    ${post.title}
    </div>
    <p class="post__body">
    ${post.body}
    </p>
    </div>`
}

render();
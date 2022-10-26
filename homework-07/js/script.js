const postsContainer = document.getElementById('posts-container');
const banner = document.getElementById('banner');

generateRandomPosts(5);

async function generateRandomPosts(quantity) {
    const catPostResponse = await fetch(`https://catfact.ninja/facts?limit=${quantity}`).then(r => {
        return r.json()
    });

    const catImageResponse = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${quantity}`).then(r => {
        return r.json()
    });

    const dogPostResponse = await fetch(`https://www.dogfactsapi.ducnguyen.dev/api/v1/facts/?number=${quantity}`).then(r => {
        return r.json()
    });

    const dogImageResponse = await fetch(`https://api.thedogapi.com/v1/images/search?limit=${quantity}`).then(r => {
        return r.json()
    });

    for (let i = 0; i < quantity; i++) {
        const cat = (Math.floor(Math.random() * 2) == 0);

        if (cat) {
            createPost({
                id: `post-${i}`,
                title: 'Random cat fact',
                theme: 'Cat',
                content: catPostResponse.data[i].fact,
                image: catImageResponse[i].url
            })
        } else {
            createPost({
                id: `post-${i}`,
                title: 'Random dog fact',
                theme: 'Dog',
                content: dogPostResponse.facts[i],
                image: dogImageResponse[i].url
            })
        }
    }
}

function generateMorePosts() {
    generateRandomPosts(5);
}

function createPost(post) {
    postsContainer.insertAdjacentHTML('beforeend', `
    <div class="flex d-flex flex-column align-items-center">
        <div class="col-9 row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250">
            <div class="col p-4 d-flex flex-column bg-light">
                <strong class="d-inline-block mb-2 text-${post.theme === 'Cat' ? 'primary' : 'success'}">${post.theme}</strong>
                <h5 class="mb-2">${post.title}</h5>
                <p class="mb-auto">${post.content}</p>
                <button class="btn col-5 mt-3 btn-${post.theme === 'Cat' ? 'primary' : 'success'}">Comentar post</button>
            </div>
            <div class="col-auto d-none d-lg-block image-container">
                <img src="${post.image}" alt="" class="bd-placeholder-img" role="img">
            </div>
        </div>
    </div>
    `);
}
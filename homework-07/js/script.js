const postsContainer = document.getElementById('posts-container');
const banner = document.getElementById('banner');
const modalBox = document.getElementById('modal');
const modalOverlay = document.getElementById('overlay');
const comment = document.getElementById('comment-text');
const title = document.getElementById('comment-name');
const posts = [];

generatePosts(1)

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
            posts.push({
                id: posts.length,
                title: 'Random cat fact',
                theme: 'Cat',
                content: catPostResponse.data[i].fact,
                image: catImageResponse[i].url
            })
        } else {
            posts.push({
                id: posts.length,
                title: 'Random dog fact',
                theme: 'Dog',
                content: dogPostResponse.facts[i],
                image: dogImageResponse[i].url
            })
        }
    }
}

async function generatePosts(quantity) {
    const size = posts.length;
    await generateRandomPosts(quantity);
    renderPosts(size);
}

function renderPosts(min) {
    posts.map((post) => {
        if (post.id >= (min ?? 0)) {
            createPost(post)
        }
    })
}

function createPost(post) {
    postsContainer.insertAdjacentHTML('beforeend', `
    <div class="flex d-flex flex-column align-items-center">
        <div class="post-container-style row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250">
            <div class="col p-4 d-flex flex-column bg-light">
                <strong class="d-inline-block mb-2 text-${post.theme === 'Cat' ? 'primary' : 'success'}">${post.theme}</strong>
                <h5 class="mb-2">${post.title}</h5>
                <p class="mb-auto">${post.content}</p>
                <button class="btn-comment btn col-5 mt-3 btn-${post.theme === 'Cat' ? 'primary' : 'success'}" onclick="openModal(${post.id})">Comentar post</button>
            </div>
            <div class="col-auto d-none d-lg-block image-container">
                <img src="${post.image}" alt="" class="bd-placeholder-img" role="img">
            </div>
        </div>
        <div id="post-${post.id}-comment" class="rounded p-3"></div>
    </div>
    `);
}

function insertComment(postId) {
    const element = document.getElementById(`post-${postId}-comment`);

    element.insertAdjacentHTML('beforeend', `

    <div class="comment-style">
    <span class="fs-5 fw-semibold">${title.value}</span><br><br>
    <span class="fs-6">${comment.value}</span>
    </div>
    
    `);

    closeModal(); 
} 

function openModal(postId) {
    const button = document.getElementById('insert-comment');
    button.onclick = () => {insertComment(postId)};

    modalBox.style.display = 'flex';
    modalOverlay.style.display = 'flex';    
}

function closeModal() {
    comment.value = '';
    title.value = '';
    
    modalBox.style.display = 'none';
    modalOverlay.style.display = 'none';
}
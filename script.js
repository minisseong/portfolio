// 1. Data Structure for the six posts
const postsData = [
    {
        id: 1,
        // REPLACE THESE URLS with your actual images for the carousel
        images: [
            'https://i.pinimg.com/736x/86/1c/b1/861cb1665dd3e6259015adfda90ace28.jpg', 
            'https://i.pinimg.com/736x/5b/87/a6/5b87a6866c7371b07eff07383451e0b8.jpg', 
          'https://i.pinimg.com/736x/86/1c/b1/861cb1665dd3e6259015adfda90ace28.jpg',
            'https://via.placeholder.com/600x600/ff6347/ffffff?text=Slide+3'
        ], 
        likes: '3,109',
        caption: 'This post has multiple images! You can horizontally swipe/scroll through them. Use the back arrow to return. 🔙',
    },
    {
        id: 2,
        images: [
            'https://via.placeholder.com/600x600/4682b4/ffffff?text=Post+2+Image+1', 
            'https://via.placeholder.com/600x600/4682b4/ffffff?text=Post+2+Image+2'
        ],
        likes: '501',
        caption: 'A second piece of content. This post only has two slides.',
    },
    {
        id: 3,
        images: ['https://via.placeholder.com/600x600/3cb371/ffffff?text=Post+3'], 
        likes: '95',
        caption: 'Third post example. This one only has one image.',
    },
    {
        id: 4,
        images: ['https://via.placeholder.com/600x600/f4a460/ffffff?text=Post+4'], 
        likes: '1,500',
        caption: 'Post four: single image content.',
    },
    {
        id: 5,
        images: ['https://via.placeholder.com/600x600/dda0dd/ffffff?text=Post+5'], 
        likes: '250',
        caption: 'Post five is ready!',
    },
    {
        id: 6,
        images: ['https://via.placeholder.com/600x600/778899/ffffff?text=Post+6'], 
        likes: '72',
        caption: 'The final post in the grid example.',
    }
];

const profileView = document.getElementById('profile-view');
const postView = document.getElementById('post-view');
const currentPostContainer = document.getElementById('current-post');

// 2. Function to Show a Specific Post (triggered by grid click)
function showPost(postId) {
    const post = postsData.find(p => p.id === postId);
    const cardWidth = 375; // Matches max-width in CSS
    
    if (post) {
        // Build the carousel slide HTML
        const slidesHTML = post.images.map(url => 
            `<div class="carousel-slide">
                <img class="post-image" src="${url}" alt="Post Image">
             </div>`
        ).join('');

        // Build the final post HTML structure
        currentPostContainer.innerHTML = `
            <div class="carousel-container">
                <div class="carousel-slides" style="width: ${post.images.length * cardWidth}px">
                    ${slidesHTML}
                </div>
            </div>

            <div class="post-actions">
                <span class="action-icon like">❤️</span>
                <span class="action-icon comment">💬</span>
                <span class="action-icon share">✈️</span>
            </div>
            
            <div class="post-caption">
                <p class="likes-count"><span>${post.likes}</span> likes</p>
                <p class="caption-text">
                    <span class="caption-username">username</span> ${post.caption}
                </p>
            </div>
        `;

        // Switch views (hide profile, show post)
        profileView.classList.remove('active-view');
        profileView.classList.add('hidden-view');
        postView.classList.remove('hidden-view');
        postView.classList.add('active-view');
    }
}

// 3. Function to Go Back to Profile (triggered by the back arrow)
function showProfile() {
    // Switch views (hide post, show profile)
    postView.classList.remove('active-view');
    postView.classList.add('hidden-view');
    profileView.classList.remove('hidden-view');
    profileView.classList.add('active-view');
}
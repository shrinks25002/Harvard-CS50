//first post
let counter =1

//load 20 posts at a time
const qty = 20;

//when DOM loads, render 1st 20 posts
document.addEventListener('DOMContentLoaded',load);

//if bottom of page, load next 20
window.onscroll=()=>{
    if(window.innerHeight+window.scrollY>=document.body.offsetHeight){
        load();
    }
};

// If hide button is clicked, delete the post
document.addEventListener('click', event => {

    // Find what was clicked on
    const element = event.target;

    // Check if the user clicked on a hide button
    if (element.className === 'hide') {
        //element.parentElement.remove()
        element.parentElement.style.animationPlayState='running';
        element.parentElement.addEventList()
    }
    
});

//load next set of posts
function load(){
    //set start n end post nos, and update counter
    const start = counter;
    const end=start+qty-1
    counter=end+1

    //get new posts and add posts
    fetch(`posts?start=${start}&end=${end}`)
    .then(response=>response.json())
    .then(data=>{
        data.posts.forEach(add_post);
    })
};

//add new posts with given contents to DOM
function add_post(contents){
    //create neww post
    const post=document.createElement('div');
    post.className='post';
    post.innerHTML=`${contents} <button class="hide">Hide</button>`;

    //add post to DOM
    document.querySelector('#posts').append(post);
};
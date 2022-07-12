const posts = [
    {title:"Title One",body:"Body One"},
    {title:"Title Two",body:"Body Two"}
]
const unOrderedList = document.querySelector(".lists");

function getPosts( ) {
    setTimeout(() => {
        let output = "";
        posts.forEach((post)=>{
            output += `<li>${post.body}</li>`
        })
        unOrderedList.innerHTML = output;
    }, 500);
}
function createPost(post) {
    setTimeout(() => {
        posts.push(post)
    }, 1000);
}
function createPostCallback(post,callback){
    setTimeout(() => {
        posts.push(post)
        callback();
    }, 3000);
}



// createPost({title:"Title Three",body:"Body Three"}); //3sec

// getPosts(); //2sec

// console.log("Hello World")
createPostCallback({title:"Title Three",body:"Body Three"},getPosts);
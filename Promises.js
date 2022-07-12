const posts = [
    {title:"Post Title One ",body:"Post Body One"},
    {title:"Post Title Two ",body:"Post Body Two"}
]
const unorderedList = document.querySelector(".lists");
function createPost(post) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            posts.push(post);
            if(true){
                resolve()
            }else{
               reject("EROOOOR") 
            }
        }, 3000);
    })
}
function getPosts( ) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let output = "";
            posts.forEach((post)=>{
                output += `<li>${post.body}</li>`
            })
            unorderedList.innerHTML = output;
        }, 500);
    })
    // setTimeout(() => {
    //     let output = "";
    //     posts.forEach((post)=>{
    //         output += `<li>${post.body}</li>`
    //     })
    //     unorderedList.innerHTML = output;
    // }, 500);
}
//to accept a promise  we need to handle resolve and reject
createPost({title:"Title Three",body:"Body Three"}).then(()=>{
    getPosts().then(()=>{
        console.log("Hello")
    })
}
).catch(
    ()=>{
        console.log("EROR")
    }
);

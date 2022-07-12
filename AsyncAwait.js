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
    setTimeout(() => {
        let output = "";
        posts.forEach((post)=>{
            output += `<li>${post.body}</li>`
        })
        unorderedList.innerHTML = output;
    }, 500);
}
async function init(){
    await createPost({title:"Title Three",body:"Body Three"});
    getPosts();
}
init()
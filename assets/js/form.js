const userForm = document.querySelector('#user-form');

userForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const authorEl = userForm.querySelector("#blog-username").value;
    const titleEl = userForm.querySelector("#blog-title").value;
    const contentEl = userForm.querySelector("#blog-content").value;

    if (!authorEl || !titleEl || !contentEl) {
        alert("Please fill out all fields!");
        return;
    }
    // declaring the array
    const blogPosts = [];
    const singleBlogPost = {
        author: authorEl,
        title: titleEl,
        content: contentEl,
    };
    // push the object into the array
    blogPosts.push(singleBlogPost);
    // change it to a string
    const stringBlogPost = JSON.stringify(blogPosts);
    // save to the local storage
    localStorage.setItem("Blog Post", stringBlogPost);
    // redirect the user to the blog page
    window.location.href = "blog.html";
});
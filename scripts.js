const myLibrary = ["hehe", "hoho"];
const addBookButton = document.querySelector("#addBook");
const removeBookButton = document.querySelector("#removeBook");
const mainContent = document.querySelector(".main-content");



function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function addBookToLibrary() {
    
    // TUTAJ MUSI WYSKOCZYC OKIENKO
    // TUTAJ MUSIMY STWORZYC BOOK OBJECT
    myLibrary.push(book)
}

myLibrary.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.textContent = book;
    mainContent.appendChild(card);
})

addBookButton.addEventListener('click', addBookToLibrary)
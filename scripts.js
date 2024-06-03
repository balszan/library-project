const myLibrary = [{title: "harry potter", author: "jk rowling", pages: 366, read: true},{title: "reka mistrza", author: "stephen king", pages: 366, read: true}];
const addBookButton = document.querySelector("#addBook");
const mainContent = document.querySelector(".main-content");
const dialog = document.querySelector("dialog");
const closeButton = document.querySelector(".cancel-button");
const confirmButton = document.querySelector(".submit");
const addBookForm = document.querySelector("#addBookForm");


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    dialog.showModal()
}

function removeBookFromLibrary(book) {
    const indexOfBook = myLibrary.indexOf(book);
    myLibrary.splice(indexOfBook,1);
    generateLibrary();
}

function generateLibrary() {
    mainContent.innerHTML="";
    myLibrary.forEach((book) => {
        
        const card = document.createElement("div");
        card.classList.add("card");

        const title = document.createElement("h2");
        title.innerText = "Title: "+book.title;
        card.appendChild(title);

        const author = document.createElement("h4");
        author.innerText = "Author: "+book.author;
        card.appendChild(author);

        const pages = document.createElement("h4");
        pages.innerText = "Pages: "+book.pages;
        card.appendChild(pages);

        const read = document.createElement("h4");
        if(book.read==true) {
            read.innerText = "Read? Yes!";
        } else {
            read.innerText = "Read? No! :(";
        }
        card.appendChild(read);

        card.setAttribute("data-id",myLibrary.indexOf(book));

        const removeMeButton = document.createElement("button");
        removeMeButton.classList.add("removeMeButton")
        removeMeButton.innerText = "X";
        removeMeButton.addEventListener("click", () => {
            removeBookFromLibrary(book)
        });
        card.appendChild(removeMeButton);

        mainContent.appendChild(card);
    })
} 

addBookButton.addEventListener('click', addBookToLibrary)

closeButton.addEventListener('click', () => {
    dialog.close();
})

addBookButton.addEventListener('click', () => {
    dialog.showModal();
})

addBookForm.addEventListener('submit',(event) => {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    const newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook);
    dialog.close()

    generateLibrary()
})

generateLibrary()


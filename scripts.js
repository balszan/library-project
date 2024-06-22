const myLibrary = [];
const addBookButton = document.querySelector("#addBook");
const mainContent = document.querySelector(".main-content");
const dialog = document.querySelector("dialog");
const closeButton = document.querySelector(".cancel-button");
const confirmButton = document.querySelector(".submit");
const addBookForm = document.querySelector("#addBookForm");



class Book {
    constructor(title,author,pages,read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    toggleRead() {
        return this.read=!this.read;
    }

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

        const readStatus = document.createElement("button");
        if(book.read) {
            readStatus.innerText = "Read!";
        } else {
            readStatus.innerText = "Not Read Yet!";
        }
        readStatus.classList.add("readStatus")
        readStatus.addEventListener("click", () => {
            book.toggleRead();
            generateLibrary();
        })

        card.appendChild(readStatus);

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

const titleError = document.querySelector('#title + div.error-message');
const title = document.getElementById('title')
title.addEventListener("input", (e) => {
    if(title.validity.valueMissing) {
        titleError.className = "error-message active";
        titleError.innerText = "You need to insert a title";
    } else if(title.validity.tooShort) {
        titleError.className = "error-message active";
        titleError.innerText = "Title too short";

    } else if(title.validity.valid) {
        titleError.className = "error-message";
        titleError.innerText="";
    }
});

const authorError = document.querySelector('#author + div.error-message');
const author = document.getElementById('author')
author.addEventListener("input", (e) => {
    if(author.validity.valueMissing) {
        authorError.className = "error-message active";
        authorError.innerText = "You need to insert an author";
    } else if(author.validity.tooShort) {
        authorError.className = "error-message active";
        authorError.innerText = "Author's name too short";

    } else if(author.validity.valid) {
        authorError.className = "error-message";
        authorError.innerText="";
    }
});

const pagesError = document.querySelector('#pages + div.error-message');
const pages = document.getElementById('pages')
pages.addEventListener("input", (e) => {
    if(pages.validity.typeMismatch) {
        pagesError.className = "error-message active";
        pagesError.innerText = "Not a number";
    } else if(pages.validity.rangeUnderflow) {
        pagesError.className = "error-message active";
        pagesError.innerText = "Not enough pages";

    } else if(pages.validity.valid) {
        pagesError.className = "error-message";
        pagesError.innerText="";
    }
});


generateLibrary()


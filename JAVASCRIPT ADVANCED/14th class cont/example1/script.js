class Book {
    constructor(title, publicationYear, author){
        this.title = title;
        this.publicationYear = publicationYear;
        this.author = author;
    }
    title(newTitle){
        if (typeof newTitle === 'string' && newTitle.trim() !== '') {
            this.title = newTitle;
        } else{
            console.error('Invalid Title. The title must be a string');
        }

        
    }
    publicationYear(newPublicationYear){
        if (typeof newPublicationYear === 'number' && newPublicationYear > 0){
            this.publicationYear = this.publicationYear;
        }else {
            console.error('Please enter a valid date');
        }
    }
    assignBookTOAuthor(){
        if (this.author) {
            this.author.addBook(this);
        }
    }
}

class Author {
    constructor(name, books =[]){
        this.name = name;
        this.books = books;
    }
    books(books){
        this.books = books.filter(data => data instanceof Book)
    }
    name(newName){
        if (typeof newName === 'string'&& newName.trim() !== '') {
            this.name = newName;
        }
    }
    addBook (newBook){
        this.books.push(newBook);
    }
    publishNewBook (title,publicationYear){
        const newBook = new Book (title, publicationYear, this);
        newBook.assignBookTOAuthor();
    }

}
const lavTolstoj = new Author('Lav Tolstoj');
const anaKarenina = new Book ('Ana Karenina', 1980, lavTolstoj );

const vojnaIMir = new Book('Vojna i Mir', 1970, lavTolstoj);
lavTolstoj.publishNewBook('Byhood', 1950);

const youth = new Book('Youth', 1857, lavTolstoj);
youth.assignBookTOAuthor(lavTolstoj);

lavTolstoj.publishNewBook('The Devil', 1911);
anaKarenina.assignBookTOAuthor(lavTolstoj);
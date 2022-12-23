var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        const baseUrl = "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books";
        const response = yield fetch(baseUrl);
        let data = yield response.json();
        console.log('Data: ', data);
        renderBooks(data);
        return data;
    });
}
function renderBooks(data) {
    return __awaiter(this, void 0, void 0, function* () {
        let books = data;
        books.forEach(book => {
            console.log('Each books data: ', book);
            const contentBox = document.querySelector('#content');
            const bookElem = document.createElement('section');
            const singleBook = document.createElement('article');
            bookElem.classList.add('show');
            singleBook.innerHTML = `<h3> ${book.title}</h3> <p> ${book.author}</p>`;
            bookElem.setAttribute('id', `BookNr${book.id}`);
            contentBox.appendChild(bookElem);
            bookElem.appendChild(singleBook);
            const infoElem = document.createElement('section');
            const singleBookInfo = document.createElement('article');
            const backbutton = document.createElement('button');
            infoElem.setAttribute('id', `BookNr${book.id}`);
            backbutton.setAttribute('id', 'back');
            infoElem.classList.add('hide');
            singleBookInfo.classList.add('hidden');
            singleBookInfo.innerHTML =
                `<h2> ${book.title}</h2> 
        <h4> By:${book.author}</h4>
        <p> ${book.plot}</p>
        <p> Audience: ${book.audience}</p> 
        <p> First published: ${book.year}</p>
        <p> Pages: ${book.pages}</p> 
        <p> Publisher: ${book.publisher}</p> 
        <button> Buy book</button>`;
            backbutton.innerHTML = `<`;
            contentBox.appendChild(infoElem);
            infoElem.appendChild(singleBookInfo);
            singleBookInfo.appendChild(backbutton);
            bookElem.addEventListener('click', () => {
                if (singleBookInfo.style.display === 'block' && infoElem.style.display === 'block') {
                    singleBookInfo.style.display = 'none';
                    infoElem.style.display = 'none';
                }
                else {
                    singleBookInfo.style.display = 'block';
                    infoElem.style.display = 'block';
                }
                console.log('test click');
            });
            backbutton.addEventListener('click', () => {
                if (singleBookInfo.style.display === 'block' && infoElem.style.display === 'block') {
                    singleBookInfo.style.display = 'none';
                    infoElem.style.display = 'none';
                }
                else {
                    singleBookInfo.style.display = 'block';
                    infoElem.style.display = 'block';
                }
                console.log('test go back');
            });
        });
    });
}
getData();
export {};

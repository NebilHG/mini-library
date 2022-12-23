
import { Book } from "./interface";





async function getData():Promise<Book[]>{
    const baseUrl: string = "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books";
    const response = await fetch(baseUrl); 
    let data:Book[] = await response.json(); 
    console.log('Data: ', data); 
    
    renderBooks(data)
    return data
}






async function renderBooks(data:Book[]):Promise<void>{
    let books = data;
    books.forEach(book=>{
        console.log('Each books data: ',book);

        const contentBox: HTMLElement = document.querySelector('#content');
        const bookElem = document.createElement('section');
        const singleBook = document.createElement('article');
        bookElem.classList.add('show')

       
        singleBook.innerHTML = `<h3> ${book.title}</h3> <p> ${book.author}</p>`;
        
        bookElem.setAttribute('id',`BookNr${book.id}`)
        contentBox.appendChild(bookElem);
        bookElem.appendChild(singleBook);



       
        const infoElem = document.createElement('section');
        const singleBookInfo = document.createElement('article');
        const backbutton = document.createElement('button');

        infoElem.setAttribute('id',`BookNr${book.id}`);
        backbutton.setAttribute('id','back');
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

        backbutton.innerHTML= `<`;

        
       
        contentBox.appendChild(infoElem);
        infoElem.appendChild(singleBookInfo);
        
        singleBookInfo.appendChild(backbutton);

     
        
    

        bookElem.addEventListener('click',()=>{
           

           if (singleBookInfo.style.display === 'block' && infoElem.style.display === 'block' ){
                singleBookInfo.style.display  = 'none' 
                infoElem.style.display = 'none'
                
            }
            else{
                singleBookInfo.style.display = 'block'
                infoElem.style.display = 'block'
                
            }
            console.log('test click');
            
        })

        backbutton.addEventListener('click',()=>{
            
            if (singleBookInfo.style.display === 'block' && infoElem.style.display === 'block' ){
                singleBookInfo.style.display  = 'none' 
                infoElem.style.display = 'none'
                
            }
            else{
                singleBookInfo.style.display = 'block'
                infoElem.style.display = 'block'
                
            }
            console.log('test go back');
            
               
        })

        
    })

    
}









getData();

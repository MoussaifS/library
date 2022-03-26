

let myLibrary = [];

function Book(title, author, pages , read ) {
  // the constructor...
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read
}
 let i = 0
function addBookToLibrary() {
  // do stuff here
  let book = new Book
  book.title = document.getElementById('title').value;
  book.author = document.getElementById('author').value;
  book.pages = document.getElementById('page').value;
  
  let radioBtns = document.querySelectorAll('input[name="read"]')
  for ( let radioBtn of radioBtns ) {
    if (radioBtn.checked) {
      book.read = radioBtn.value;
    }
  }
  
  
  myLibrary[i] = book
  addtopage()
  i++; 
}

function addtopage(){
    let finalData = ''
    myLibrary.forEach(Book => {
        finalData = 
        `<div class="Book" id=${i}>
        <div id=${i} id="delete" onclick="deleteBook(this.id)" > <img src="image/shoot-duck-svgrepo-com.svg" width="30px" height="30px"></div>
        <h3>Title: </h3>  
        <span id="Booktitle"> ${Book.title} </span>
        <h3> Author: </h3>
        <span id="Bookauthor"> ${Book.author} </span> 
        <h3> Page:  </h3>
        <span id="Bookpages"> ${Book.pages} </span>
        <h3> READ:  </h3>
        <span id="Bookpages"> ${Book.read} </span> 
          
        </div>`       
    })
    document.querySelector('main').innerHTML += finalData;
}



function deleteBook(clicked_id){

  var test = document.querySelectorAll('[id="' + clicked_id + '"]')
  var main = document.querySelector('main')
  main.removeChild(test[0]) 
}
function addBook() {


    let title =
        document.getElementById("title").value;

    let author =
        document.getElementById("author").value;

    let category =
        document.getElementById("category").value;

    let quantity =
        document.getElementById("quantity").value;



    if (
        title === "" ||
        author === "" ||
        category === "" ||
        quantity === ""
    ) {

        alert("Please fill all fields");

        return;
    }


    let newBook = {

        id: generateId(),

        title: title,

        author: author,

        category: category,

        quantity: Number(quantity),

        available: Number(quantity)

    };



    books.push(newBook);



    saveBooks();


    document.getElementById("title").value = "";

    document.getElementById("author").value = "";

    document.getElementById("category").value = "";

    document.getElementById("quantity").value = "";



    displayBooks();
    


    alert("Book added successfully!");

}
function displayBooks() {

    let table =
        document.getElementById("bookTable");


    let search =
        document.getElementById("search").value.toLowerCase();


    table.innerHTML = "";


    books.forEach(function(book) {

        if (

            book.title.toLowerCase().includes(search)

            ||

            book.author.toLowerCase().includes(search)

            ||

            book.category.toLowerCase().includes(search)

        ) {


            table.innerHTML += `

                <tr>

                    <td>${book.id}</td>

                    <td>${book.title}</td>

                    <td>${book.author}</td>

                    <td>${book.category}</td>

                    <td>${book.quantity}</td>

                    <td>${book.available}</td>

                    <td>

                        <button
                            onclick="editBook(${book.id})">

                            ✏️ Edit

                        </button>


                        <button
                            onclick="deleteBook(${book.id})">

                            🗑️ Delete

                        </button>

                    </td>

                </tr>

            `;

        }

    });

}
function deleteBook(id) {

    let answer =
        confirm("Are you sure you want to delete this book?");


    if (answer === false) {

        return;

    }


    books = books.filter(function(book) {

        return book.id !== id;

    });


    saveBooks();


    displayBooks();


    alert("Book deleted successfully!");

}
function editBook(id) {

    let book =
        books.find(function(book) {

            return book.id === id;

        });


    if (!book) {

        return;

    }


    let newTitle =
        prompt("Enter book title:", book.title);


    let newAuthor =
        prompt("Enter author:", book.author);


    let newCategory =
        prompt("Enter category:", book.category);


    let newQuantity =
        prompt("Enter quantity:", book.quantity);


    if (
        newTitle === null ||
        newAuthor === null ||
        newCategory === null ||
        newQuantity === null
    ) {

        return;

    }


    book.title = newTitle;

    book.author = newAuthor;

    book.category = newCategory;

    book.quantity = Number(newQuantity);


    saveBooks();


    displayBooks();


    alert("Book updated successfully!");

}

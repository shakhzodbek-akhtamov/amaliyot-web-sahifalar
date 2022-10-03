window.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector("#title"),
        author = document.querySelector("#author"),
        year = document.querySelector("#year"),
        btn = document.querySelector(".btn"),
        bookList = document.querySelector("#book-list");

    btn.addEventListener("click", (event) => {
        event.preventDefault();
        if (title.value == "" && author.value == "" && year.value == "") {
            alert("Bo'sh yerga ma'lumotlarni to'ldirishingiz kerak!");
        } else {
            let newRow = document.createElement("tr");

            let newTitle = document.createElement("th");
            newTitle.textContent = title.value;
            newRow.appendChild(newTitle);

            let newAuthor = document.createElement("th");
            newAuthor.textContent = author.value;
            newRow.appendChild(newAuthor);

            let newYearData = document.createElement("th");
            newYearData.textContent = year.value;
            newRow.appendChild(newYearData);

            bookList.appendChild(newRow);
        }
    });
});


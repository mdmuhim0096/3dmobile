let book_showcase = document.querySelector(".container");
let book = document.querySelector(".book");
let body = document.querySelector("body");

book_showcase.addEventListener("mousedown", ()=>{
    book_showcase.addEventListener("mousemove", hello);

    function hello(e){
        const clientX = e.clientX / 2;
        book.style.transform = `rotateY(${clientX}deg)`;
        body.style.cursor = "grabbing";
    }
    window.addEventListener("mouseup", ()=>{
        book_showcase.removeEventListener("mousemove", hello);
        body.style.cursor = "default";
    });
});

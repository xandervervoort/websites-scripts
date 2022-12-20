const cursorSmall = document.querySelector('.small_cursor');
const selects = document.querySelectorAll("select");


document.addEventListener("mousemove", (e)=>{
    let LefPosition = e.pageX + 4;
    let TopPosition = e.pageY + 4;

    cursorSmall.style.left = LefPosition + "px";
    cursorSmall.style.top = TopPosition + "px";
});

selects.forEach(select => {
    select.add
})
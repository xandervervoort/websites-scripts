

async function clicked() {
let bar = document.getElementById("div1");
let i = 0;
while(i < 100){
    i = i + 1
    bar.innerHTML = "loading " + i + "%";
    bar.style.width = i + "%";
    const result1 = await new Promise((resolve) => 
        setTimeout(() => resolve("1"), 100));
}
bar.innerHTML = "";
bar.style.height = "20px";
}
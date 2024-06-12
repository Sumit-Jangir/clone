let btn = document.getElementsByClassName("que");

let i;

for(i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if(content.style.display === "block"){
        content.style.display = "none";
        }
        else{
            content.style.display = "block"
        }
    })
}
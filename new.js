function time() {
    let soat = new Date();


document.querySelector(".minut1") . textContent = soat.getHours();
document.querySelector(".minut2") . textContent = soat.getMinutes();
document.querySelector(".minut3") . textContent = soat.getSeconds();

}
time()


setInterval(function(){
    time()
})
window.addEventListener('scroll', () =>{
    //change background color
    var header1 = document.getElementById('header1');
    header1.classList.toggle('navigasi', window.scrollY > 0);
});

function showMenu(){
    var menu_nav = document.getElementById('drop_menu');
    menu_nav.classList.toggle('show');

    var header1 = document.getElementById('header1');
    header1.classList.toggle('showBackground');
} 

window.addEventListener("scroll", muncul);

function muncul() {

  let elements = document.querySelectorAll(".animate");

  for (let i = 0; i < elements.length; i++) {

    let tinggiLayar = window.innerHeight;

    let jarakAtasElemen = elements[i].getBoundingClientRect().top;

    let ukuranScroll = 150;
   
    if (jarakAtasElemen < tinggiLayar - ukuranScroll) {
      elements[i].classList.add("tampil");
    }
 
    else {
      elements[i].classList.remove("tampil");
    }
  }
}

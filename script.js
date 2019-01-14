 // window.onbeforeunload = function() { window.scrollTo(0,0); };

  AOS.init();

/*----------------------------------
			NAV BAR STICKY
-----------------------------------*/

window.onload = function(){
    window.onscroll = function(){
    barSticky();
    //goTop();
    };

    window.setTimeout(
        function() { window.scrollTo(0,0); },
        10
    );
  };


let barSticky = function(){

  let bar = document.getElementById("topNav");
  let barUlLi = document.querySelectorAll("#topNav ul li");
  let barIcons = document.querySelectorAll("#topNav ul li i");
  let barLinks = document.querySelectorAll("#topNav ul li a");
  let social = document.querySelectorAll(".social-media");

  if(document.body.scrollTop > 640 || document.documentElement.scrollTop > 640){
    bar.style.position = "sticky";
    bar.style.height = "50px";
    bar.style.transition = ".4s";
    bar.style.boxShadow = "0px 3px 15px black";
    bar.style.opacity = ".85";

    let barUlLiLength = barUlLi.length;
    for(let i = 0; i < barUlLiLength; i++){
      barUlLi[i].style.display = "inline-flex";
      barUlLi[i].style.flexDirection = "column";
      barUlLi[i].style.margin = "18px 60px";
    }

    let barIconsLength = barIcons.length;
    for(let i = 0; i < barIconsLength; i++){
      barIcons[i].style.display = "none";
    }

    let barLinksLength = barLinks.length;
    for(let i = 0; i < barLinksLength; i++){
      barLinks[i].style.position = "absolute";
      barLinks[i].style.top = "10px";
      barLinks[i].style.fontSize = "small";
      barLinks[i].style.letterSpacing = "0.2em";
      barLinks[i].style.padding = "0 20px";

      barLinks[i].addEventListener("mouseenter", hoverLinks);
      function hoverLinks(){
        this.style.color = "gray";
        this.style.transition = ".4s";
      }

      barLinks[i].addEventListener("mouseleave", unHoverLinks);
      function unHoverLinks(){
        this.style.color = "white";
        this.style.transition = ".4s";
      }
    } 

  } else {
    bar.style.position = "relative";
    bar.style.height = "100px";
    bar.style.transition = ".4s";

     let barUlLiLength = barUlLi.length;
    for(let i = 0; i < barUlLiLength; i++){
      barUlLi[i].style.display = "inline-flex";
      barUlLi[i].style.flexDirection = "column";
      barUlLi[i].style.margin = "18px 70px";
      bar.style.boxShadow = "none"
    bar.style.opacity = "1";
    }

    let barIconsLength = barIcons.length;
    for(let i = 0; i < barIconsLength; i++){
      barIcons[i].style.display = "inline-flex";
      barIcons[i].style.flexDirection = "column";
      barIcons[i].style.top = "55px";
    }

    let barLinksLength = barLinks.length;
    for(let i = 0; i < barLinksLength; i++){
      barLinks[i].style.position = "absolute";
      barLinks[i].style.top = "50px";
      barLinks[i].style.alignSelf = "center";
      barLinks[i].style.letterSpacing = "0.025em";
      barLinks[i].style.fontSize = "initial";

      barLinks[i].addEventListener("mouseenter", hoverLinks);
      function hoverLinks(){
        this.style.color = "white";
        this.style.transition = ".4s";
      }
    }
  }
};


/*------------------------------

        GO-TO SECTION

--------------------------------*/

let anchorlinks = document.querySelectorAll('a[href^="#"]');

for (let item of anchorlinks) {

    item.addEventListener("click", (e)=> {

      let hashval = item.getAttribute("href");
      let target = document.querySelector(hashval);

    target.scrollIntoView({
      behavior: "smooth"
    });

    history.pushState(null, null, hashval)
    e.preventDefault()
  });
}


	/*--------------------------------------------

			SLIDE IN SOCIAL MEDIA ON SCROLL

	-----------------------------------------------*/
$(window).scroll(function () {
    $('.slide').each(function () {
        let imagePos = $(this).offset().top;
        let imageHeight = $(this).height();
        let topOfWindow = $(window).scrollTop();

        if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
            $(this).addClass("slideInRight");
        } else {
            $(this).removeClass("slideInRight");
        }
    });
});

/*-----------------------------------------

SLIDE IN NAME ON SCROLL

-------------------------------------------*/

$(window).scroll(function () {
    $('.slideIt').each(function () {
        let imagePos = $(this).offset().top;
        let imageHeight = $(this).height();
        let topOfWindow = $(window).scrollTop();

        if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
            $(this).addClass("slideInLeft");
        } else {
            $(this).removeClass("slideInLeft");
        }
    });
});


/*-----------------------------------------

                  MODAL

-------------------------------------------*/

let modal = document.getElementById("cvModal");
let modalBtn = document.getElementById("modalBtn");
let closeBtn = document.getElementsByClassName("closeBtn")[0];

modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", clickOutside);

function openModal(prev){
  modal.style.display = "block";
  prev.preventDefault();
}

function closeModal(){
  modal.style.display = "none";
}

function clickOutside(event){
  if(event.target == modal){
    modal.style.display = "none";
  }
}


/*-----------------------------------------

            SORT PORTFOLIO

-------------------------------------------*/
filterSelection("all")
function filterSelection(c) {
  let x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

function addClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
let btnContainer = document.getElementById("myBtnContainer");
let btns = btnContainer.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


/*---------------------------------------

                LOAD MORE BUTTON

-----------------------------------------*/

$(document).ready(function(){
  $(".load-more").css("cursor", "pointer").click(function(){
    let toggleHeight = $("#portfolio").height() == 2550 ? "1000px" : "2550px";
    $("#portfolio").animate({ height: toggleHeight });
  });
});


/*---------------------------------

                MAP

-----------------------------------*/


function initMap(){

  let riga = {lat:56.9496,lng:24.1052};

  //Map options
  let options = {
     zoom: 11,
     center: riga
  };

  //New map
  let map = new google.maps.Map(document.getElementById("map"), options);

  //Add marker
  let marker = new google.maps.Marker({
    position: riga,
    map: map
  });

  map.addListener('center_changed', function() {
    // 3 seconds after the center of the map has changed, pan back to the
    // marker.
    window.setTimeout(function() {
      map.panTo(marker.getPosition());
    }, 5000);
  });
}
    


/*---------------------------------

          GO TO TOP ROCKET

-----------------------------------*/

/*let rocket = $('.go-to-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    rocket.addClass('show');
  } else {
    rocket.removeClass('show');
  }
});

rocket.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});*/

/*const goTop = function() {

  const rocket = document.querySelector(".go-to-top");
  const scrollExt = document.body.scrollTop;

  if(scrollExt > 1000 || document.documentElement.scrollTop > 1000){
    rocket.style.display = "block";
  } else{
    rocket.style.display = "none";
  }
    
};

const rocketClick = function() {
    scrollExt = 0;
    document.documentElement.scrollTop = 0;
};
document.querySelector(".go-to-top").addEventListener("scroll", goTop);
document.querySelector(".go-to-top").addEventListener("click", rocketClick);*/




 



  let searchBtn = document.querySelector('#search-btn');
  let searchBar = document.querySelector('.search-bar-container');
  let formBtn = document.querySelector('#login-btn');
  let loginForm = document.querySelector('.login-form-container');
  let formClose = document.querySelector('#form-close');
  let menu = document.querySelector('#menu-bar');
  let navbar =  document.querySelector('.navbar');
  let languageBtn =document.querySelector('#language-btn');
  let languageBar = document.querySelector('.language-Bar');
  
  
  
  let videoBtn = document.querySelectorAll('.vid-btn');
  
  const viewIcon = document.getElementById("viewIcon");
  const viewCount = document.getElementById("viewCount");
  
  let viewed = sessionStorage.getItem("viewed");


  if (!viewed) {
    viewed = "true"; 
    let currentCount = parseInt(viewCount.textContent) +1;
    viewCount.textContent = currentCount;
    sessionStorage.setItem("viewed", viewed);
  }



  


    
  
  window.onscroll = ()=>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    
  }



  
  
  
  
  menu.addEventListener('click', ()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
  });
    

  searchBtn.addEventListener('click', ()=>{
    
    searchBtn.classList.toggle('fa-times');  
    searchBar.classList.toggle('active');
  
  });

  languageBtn.addEventListener('click', ()=>{
    languageBtn.classList.toggle('fa-times');  
    languageBar.classList.toggle('active');
  
  });




  const wrapper = document .querySelector('.form-box login');
  const registerLink = document .querySelector('.register- link');
  const loginLink = document .querySelector('.login-link');
  
  // registerLink.addEventListener('click', ()=> {
  //   wrapper.classList.add('activse');
  // });
  
  
  
  loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
  });

  



  

  

  formBtn.addEventListener('click', ()=>{
    loginForm.classList.add('active');
 
  });



  formClose.addEventListener('click', ()=>{
    loginForm.classList.remove('active');
  });

  

  
  
  
  videoBtn.forEach(btn =>{
    
    btn.addEventListener('click', ()=>{
      document.querySelector('.controls .active').classList.remove('active');
      btn.classList.add('active');
      let src = btn.getAttribute('data-src');
      document.querySelector('#video-slider').src = src;
    });
  
  });



  

    
  
  var swiper = new Swiper(".review-slider", {
      spaceBetween:20,
      loop: true,
      autoplay:{
        delay:2500,
        disableOnInteraction: false,
      },
      
      breakpoints:{
        640:{
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024:{
          slidesPerView: 3,
        },
      
      }
    
    });

    















    document.addEventListener('DOMContentLoaded', function () {
      // Check if the user has liked before
      const liked = localStorage.getItem('liked');
      const likeCount = localStorage.getItem('likeCount') || 0;
    
      const likeIcon = document.getElementById('like-icon');
      const likeCountElement = document.getElementById('like-count');
    
      // Set initial like count
      likeCountElement.textContent = likeCount;
    
      // If the user has liked before, set the red heart
      if (liked === 'true') {
        likeIcon.classList.add('black');
      }
    
      // Add click event listener to the heart icon
      likeIcon.addEventListener('click', function () {
        // Toggle the 'red' class to change the heart color
        likeIcon.classList.toggle('red');
    
        // Update like count
        const currentCount = parseInt(likeCountElement.textContent);
        const newCount = likeIcon.classList.contains('red') ? currentCount 
        + 1 : currentCount  - 1;
        // Update like count on the page
        likeCountElement.textContent = newCount;
    
        // Save like status and count to localStorage
        localStorage.setItem('liked', likeIcon.classList.contains('red').toString());
        localStorage.setItem('likeCount', newCount.toString());
      });
    });


    document.addEventListener('DOMContentLoaded', function () {
      // Check if the user has liked before
      const liked1 = localStorage.getItem('liked1');
      const likeCount1 = localStorage.getItem('likeCount1') || 0;
    
      const likeIcon = document.getElementById('like-icon1');
      const likeCountElement = document.getElementById('like-count1');
    
      // Set initial like count
      likeCountElement.textContent = likeCount1;
    
      // If the user has liked before, set the red heart
      if (liked1 === 'true') {
        likeIcon.classList.add('black');
      }
    
      // Add click event listener to the heart icon
      likeIcon.addEventListener('click', function () {
        // Toggle the 'red' class to change the heart color
        likeIcon.classList.toggle('red');
    
        // Update like count
        const currentCount = parseInt(likeCountElement.textContent);
        const newCount = likeIcon.classList.contains('red') ? currentCount 
        + 1 : currentCount  - 1;
        // Update like count on the page
        likeCountElement.textContent = newCount;
    
        // Save like status and count to localStorage
        localStorage.setItem('liked1', likeIcon.classList.contains('red').toString());
        localStorage.setItem('likeCount1', newCount.toString());
      });
    });

    document.addEventListener('DOMContentLoaded', function () {
      // Check if the user has liked before
      const liked1 = localStorage.getItem('liked2');
      const likeCount1 = localStorage.getItem('likeCount2') || 0;
    
      const likeIcon = document.getElementById('like-icon2');
      const likeCountElement = document.getElementById('like-count2');
    
      // Set initial like count
      likeCountElement.textContent = likeCount1;
    
      // If the user has liked before, set the red heart
      if (liked1 === 'true') {
        likeIcon.classList.add('black');
      }
    
      // Add click event listener to the heart icon
      likeIcon.addEventListener('click', function () {
        // Toggle the 'red' class to change the heart color
        likeIcon.classList.toggle('red');
    
        // Update like count
        const currentCount = parseInt(likeCountElement.textContent);
        const newCount = likeIcon.classList.contains('red') ? currentCount 
        + 1 : currentCount  - 1;
        // Update like count on the page
        likeCountElement.textContent = newCount;
    
        // Save like status and count to localStorage
        localStorage.setItem('liked2', likeIcon.classList.contains('red').toString());
        localStorage.setItem('likeCount2', newCount.toString());
      });
    });

    document.addEventListener('DOMContentLoaded', function () {
      // Check if the user has liked before
      const liked1 = localStorage.getItem('liked3');
      const likeCount1 = localStorage.getItem('likeCount3') || 10;
    
      const likeIcon = document.getElementById('like-icon3');
      const likeCountElement = document.getElementById('like-count3');
    
      // Set initial like count
      likeCountElement.textContent = likeCount1;
    
      // If the user has liked before, set the red heart
      if (liked1 === 'true') {
        likeIcon.classList.add('red');
      }
    
      // Add click event listener to the heart icon
      likeIcon.addEventListener('click', function () {
        // Toggle the 'red' class to change the heart color
        likeIcon.classList.toggle('red');
    
        // Update like count
        const currentCount = parseInt(likeCountElement.textContent);
        const newCount = likeIcon.classList.contains('red') ? currentCount 
        + 1 : currentCount  - 1;
        // Update like count on the page
        likeCountElement.textContent = newCount;
    
        // Save like status and count to localStorage
        localStorage.setItem('liked3', likeIcon.classList.contains('red').toString());
        localStorage.setItem('likeCount3', newCount.toString());
      });
      
    });

    document.addEventListener('DOMContentLoaded', function () {
      // Check if the user has liked before
      const liked1 = localStorage.getItem('liked4');
      const likeCount1 = localStorage.getItem('likeCount4') || 10;
    
      const likeIcon = document.getElementById('like-icon4');
      const likeCountElement = document.getElementById('like-count4');
    
      // Set initial like count
      likeCountElement.textContent = likeCount1;
    
      // If the user has liked before, set the red heart
      if (liked1 === 'true') {
        likeIcon.classList.add('red');
      }
    
      // Add click event listener to the heart icon
      likeIcon.addEventListener('click', function () {
        // Toggle the 'red' class to change the heart color
        likeIcon.classList.toggle('red');
    
        // Update like count
        const currentCount = parseInt(likeCountElement.textContent);
        const newCount = likeIcon.classList.contains('red') ? currentCount 
        + 1 : currentCount  - 1;
        // Update like count on the page
        likeCountElement.textContent = newCount;
    
        // Save like status and count to localStorage
        localStorage.setItem('liked4', likeIcon.classList.contains('red').toString());
        localStorage.setItem('likeCount4', newCount.toString());
      });
      
    });

    document.addEventListener('DOMContentLoaded', function () {
      // Check if the user has liked before
      const liked1 = localStorage.getItem('liked5');
      const likeCount1 = localStorage.getItem('likeCount5') || 10;
    
      const likeIcon = document.getElementById('like-icon5');
      const likeCountElement = document.getElementById('like-count5');
    
      // Set initial like count
      likeCountElement.textContent = likeCount1;
    
      // If the user has liked before, set the red heart
      if (liked1 === 'true') {
        likeIcon.classList.add('red');
      }
    
      // Add click event listener to the heart icon
      likeIcon.addEventListener('click', function () {
        // Toggle the 'red' class to change the heart color
        likeIcon.classList.toggle('red');
    
        // Update like count
        const currentCount = parseInt(likeCountElement.textContent);
        const newCount = likeIcon.classList.contains('red') ? currentCount 
        + 1 : currentCount  - 1;
        // Update like count on the page
        likeCountElement.textContent = newCount;
    
        // Save like status and count to localStorage
        localStorage.setItem('liked5', likeIcon.classList.contains('red').toString());
        localStorage.setItem('likeCount5', newCount.toString());
      });
      
    });




    function search() {
      // Get the value from the search box
      var searchTerm = document.getElementById("search-bar").value.toLowerCase();

      // Redirect based on the search term
      
      if (searchTerm === "book") {
        window.location.href = "book.html";
      } else if (searchTerm === "bali") {
        window.location.href = "bali.html";
      
      } else if (searchTerm === "lampung") {
        window.location.href = "Lampung.html"; 
          
      } else if ( searchTerm === "Bali") {
        window.location.href = "bali.html";

      } else if ( searchTerm === "turkey"){
        window.location.href = "Turkey.html";

      }  else if ( searchTerm === "Turkey") {
        window.location.href = "Turkey.html";

      }  else if ( searchTerm === "singapore"){
        window.location.href = "Singapore-Malaysia-Thailand.html";

      } else if ( searchTerm === "Singapore"){
        window.location.href = "Singapore-Malaysia-Thailand.html";

      } else if ( searchTerm === "malaysia"){
        window.location.href = "Singapore-Malaysia-Thailand.html";

      } else if ( searchTerm === "Malaysia"){
        window.location.href = "Singapore-Malaysia-Thailand.html";

      } else if ( searchTerm === "thailand"){
        window.location.href = "Singapore-Malaysia-Thailand.html";

      } else if ( searchTerm === "Thailand"){
        window.location.href = "Singapore-Malaysia-Thailand.html";

      } else if ( searchTerm === "karimunjawa"){
        window.location.href = "karimunjawa.html";

      } else if ( searchTerm === "Karimunjawa"){
        window.location.href = "karimunjawa.html";

      } else if ( searchTerm === "lampung"){
        window.location.href = "Lampung.html";

      } else if ( searchTerm === "Lampung"){
        window.location.href = "Lampung.html";

      } else if ( searchTerm === "gallery"){
        window.location.href = "#gallery";

      } else if ( searchTerm === "contact"){
        window.location.href = "#contact";

      }  else if ( searchTerm === "villa"){
        window.location.href = "villaEN.html";

      }  else if ( searchTerm === "Villa"){
        window.location.href = "villaEN.html";

      }  else{
        alert ("sorry we do not have such trip line!");
      }
    }
    
    
    
   

    














  
    


    
 
 

 


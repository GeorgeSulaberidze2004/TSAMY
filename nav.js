setTimeout(() => {
    document.getElementById("model-y-info").style.opacity = 1;
    document.getElementById("model-y-info").style.transform = "translateY(0)";
  }, 0);

  setTimeout(() => {
    document.getElementById("model-y-footer").style.opacity = 1;
    document.getElementById("model-y-footer").style.transform = "translateY(0)";
  }, 1000);




  document.getElementById('menuBtn').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('show-sidebar');
    document.querySelector('.overlay').classList.toggle('show-overlay');
  });
  
  document.querySelector('.overlay').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.remove('show-sidebar');
    document.querySelector('.overlay').classList.remove('show-overlay');
  });
  
  document.querySelector('.closenav').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.remove('show-sidebar');
    document.querySelector('.overlay').classList.remove('show-overlay');
  });

  



 
  document.getElementById("menuBtn").addEventListener("click", function() {
    document.querySelectorAll(".omnichannel__overlay, .header__overlay").forEach(function(el) {
        el.classList.remove("overlay-hidden");
    });
});

document.getElementById("closeNav").addEventListener("click", function() {
    document.querySelectorAll(".omnichannel__overlay, .header__overlay").forEach(function(el) {
        el.classList.add("overlay-hidden");
    });
});







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





function scrollToNextPage() {
  // Calculate the height of the viewport
  const viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

  // Calculate the current scroll position
  const currentPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  // Calculate the target scroll position (scrolling down by the height of the viewport)
  const targetPosition = currentPosition + viewportHeight;

  // Animate the scroll to the target position
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
}

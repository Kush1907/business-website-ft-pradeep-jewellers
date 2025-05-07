function showPrice(metal) {
    if(metal === 'gold') {
      document.getElementById('gold-price').style.display = 'block';
      document.getElementById('silver-price').style.display = 'none';
    } else {
      document.getElementById('gold-price').style.display = 'none';
      document.getElementById('silver-price').style.display = 'block';
    }
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Navbar scroll effect
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
      navbar.style.padding = '10px 0';
    } else {
      navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
      navbar.style.padding = '15px 0';
    }
  });
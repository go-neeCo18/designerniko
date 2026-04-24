
  window.addEventListener('load', () => {
      const splash = document.getElementById('splash-screen');

      setTimeout(() => {
        splash.classList.add('fade-out');
      }, 1500);
    });

  const cursor = document.querySelector(".cursor-dot");

  const links = document.querySelectorAll("a, button, .grid-item");

links.forEach(link => {
    link.addEventListener("mouseenter", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(2)";
        cursor.style.backgroundColor = "rgba(255, 255, 255, 0.303)";
        cursor.style.opacity = "80%";
        cursor.style.boxShadow = "0 0 20px black"; 
    });
    
    link.addEventListener("mouseleave", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
        cursor.style.background= "rgba(255, 255, 255, 0.303)";
        cursor.style.opacity = "100%";
        cursor.style.boxShadow = "none"; 
    });
});

  document.addEventListener("mousemove", function(e){
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
  });

  const popup = document.querySelector("#popupMenu");
  const menuBtn = document.querySelector("#menuBtn");

    menuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      popup.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
      if (!popup.contains(e.target) && e.target !== menuBtn) {
        popup.classList.remove("active");
      }
    });

    const landing = document.querySelector('.landing');
      const label = document.querySelector('#cursor-label');

      // Move the label with the mouse
      window.addEventListener('mousemove', (e) => {
        label.style.left = e.clientX + 'px';
        label.style.top = e.clientY + 'px';
      });

      // Show label only when mouse enters landing
      landing.addEventListener('mouseenter', () => {
        label.style.opacity = '1';
      });

      // Hide label when mouse leaves landing
      landing.addEventListener('mouseleave', () => {
        label.style.opacity = '0';
      });
    
    const cycleWord = document.querySelector("#cycle-word");

      const fonts = [
        "'Bluu Next', serif",
        "'Poppins'",
        "'Boreck Display'",
        "'Clash Display'",
        "'LAMCHO'"
      ];

      let fontIndex = 0;

      function changeFont() {
        cycleWord.style.fontFamily = fonts[fontIndex];
        fontIndex = (fontIndex + 1) % fonts.length;
      }

      setInterval(changeFont, 400);

      const aboutSection = document.querySelector(".about-me");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      aboutSection.classList.add("show");
    } else {
      aboutSection.classList.remove("show");
    }
  });
}, {
  threshold: 0.4
});

observer.observe(aboutSection);

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const vh = window.innerHeight;
    const landing = document.querySelector('.landing');
    const aboutSection = document.querySelector('.about-me');

    if (scrollY <= vh) {
      const movement = -(scrollY * 0.3);
      landing.style.backgroundPositionY = `${movement}px`;
    }

    const aboutRect = aboutSection.getBoundingClientRect();

    if (aboutRect.top < vh * 0.8) {
      aboutSection.classList.add('show');
    } else {
      aboutSection.classList.remove('show');
    }
  });

  window.addEventListener('scroll', function() {
    const section = document.querySelector('.about-me');
    const scrolled = window.pageYOffset;
    
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const viewportHeight = window.innerHeight;

    if (scrolled + viewportHeight > sectionTop && scrolled < sectionTop + sectionHeight) {
       
        const relativeScroll = scrolled - sectionTop;

        const name = document.querySelector('.name');
        const from = document.querySelector('.from');
        const description = document.querySelector('.about-me p');

        name.style.transform = `translateY(${relativeScroll * 0.2}px)`;
        from.style.transform = `translateY(${relativeScroll * 0.1}px)`;
        description.style.transform = `translateY(${relativeScroll * 0.06}px)`;
    }
});

const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDescription");
const closeModal = document.getElementById("closeModal");

const items = document.querySelectorAll(".grid-item");

// Open modal
items.forEach(item => {
  item.addEventListener("click", () => {
    const title = item.getAttribute("data-title");
    const desc = item.getAttribute("data-description");

    modalTitle.textContent = title;
    modalDesc.textContent = desc;

    modal.classList.add("active");
  });
});

// Close modal (X button)
closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});

// Close when clicking outside
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});

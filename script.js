
    // MOBILE MENU

    const menuToggle =
      document.getElementById("menuToggle");

    const menu =
      document.getElementById("menu");

    menuToggle.addEventListener("click", () => {

      menu.classList.toggle("open");

    });

    // THEME TOGGLE

    const themeToggle =
      document.getElementById("themeToggle");

    const html =
      document.documentElement;

    themeToggle.addEventListener("click", () => {

      const currentTheme =
        html.getAttribute("data-theme");

      if (currentTheme === "dark") {

        html.setAttribute("data-theme", "light");
        themeToggle.textContent = "☀️";

      } else {

        html.setAttribute("data-theme", "dark");
        themeToggle.textContent = "🌙";

      }

    });

    // SCROLL REVEAL

    const revealElements =
      document.querySelectorAll(
        ".project-card, .hero-panel, .stat, .quote-block"
      );

    const observer =
      new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add("show");

          }

        });

      }, {
        threshold: 0.15
      });

    revealElements.forEach((el) => {
      observer.observe(el);
    });

const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");

const projects = {
  xavier: {
    title: "The Xavier Cup - 2025",
    desc: "Pixel-based branding system for Xavier University Intramurals.",
    images: [
      "/Projects/TXC/COVER PHOTO.webp",
      "/Projects/TXC/CSG PFP.png",
      "/Projects/TXC/TXC TEASER.png",
      "/Projects/TXC/TXC.webp"
    ]
  },

  studentweek: {
    title: "It Only Gets Better!",
    desc: "Vibrant identity system for Students' Week 2026.",
    images: [
      "/Projects/XASW/MAIN POSTER.webp",
      "/Projects/XASW/FROM HERE ON.png",
      "/Projects/XASW/XASW FUNRU.png",
      "/Projects/XASW/XASW FUNRUN INFO 2.png"
    ]
  },

  festival: {
    title: "XU Festival Days",
    desc: "Energetic branding system capturing festival spirit.",
    images: [
      "/Projects/XUFD/XUFD.webp",
      "/Projects/XUFD/CSG LOGO PFP.webp",
      "/Projects/XUFD/BIKE TARP.png",
      "/Projects/XUFD/3.png"
    ]
  }
};

function openProject(id) {
  const project = projects[id];

  modalBody.innerHTML = `
    <div class="modal-header">
      <h2>${project.title}</h2>
      <p>${project.desc}</p>
    </div>

    <div class="modal-grid">
  ${project.images.map(img => `
    <div class="modal-item">
      <img src="${img}" alt="${project.title}" onclick="openLightbox('${img}')">
    </div>
  `).join("")}
</div>
  `;

  modal.classList.add("show");
}

function closeProject() {
  modal.classList.remove("show");
}

// close when clicking outside
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeProject();
  }
});

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

function openLightbox(src) {
  lightboxImg.src = src;
  lightbox.classList.add("show");
}

function closeLightbox() {
  lightbox.classList.remove("show");
  lightboxImg.src = "";
}

// close when clicking background
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});


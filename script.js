
    // PAGE TRANSITIONS

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("page-transition-in");
});

function navigateTo(url) {
  document.body.classList.add("page-transition-out");
  setTimeout(() => {
    window.location.href = url;
  }, 500);
}

function navigateToProjects(projectId) {
  navigateTo("projects.html");
}

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

    // Load theme from localStorage on page load
    function loadTheme() {
      const savedTheme = localStorage.getItem("theme") || "dark";
      html.setAttribute("data-theme", savedTheme);
      themeToggle.textContent = savedTheme === "dark" ? "🌙" : "☀️";
    }

    // Load theme on page load
    loadTheme();

    themeToggle.addEventListener("click", () => {

      const currentTheme =
        html.getAttribute("data-theme");

      const newTheme = currentTheme === "dark" ? "light" : "dark";

      html.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      themeToggle.textContent = newTheme === "dark" ? "🌙" : "☀️";

    });

    // SCROLL REVEAL

    const revealElements =
      document.querySelectorAll(
        ".project-card, .hero-panel, .stat, .quote-block, .project-detail-card, .studio-card"
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
      "./IMGs/COVER_PHOTO.webp",
      "./IMGs/CSG_PFP.png",
      "./IMGs/TXC_TEASER.png",
      "./IMGs/TXC.webp"
    ]
  },

  studentweek: {
    title: "It Only Gets Better!",
    desc: "Vibrant identity system for Students' Week 2026.",
    images: [
      "./IMGs/MAIN_POSTER.webp",
      "./IMGs/FROM_HERE_ON.png",
      "./IMGs/XASW_FUNRU.png",
      "./IMGs/XASW_FUNRUN_INFO_2.png"
    ]
  },

  festival: {
    title: "XU Festival Days",
    desc: "Energetic branding system capturing festival spirit.",
    images: [
      "./IMGs/XUFD.webp",
      "./IMGs/CSG_LOGO_PFP.webp",
      "./IMGs/BIKE_TARP.png",
      "./IMGs/DAYS.png"
    ]
  }
};

function openProject(id) {
  if (!modal || !modalBody) return;
  
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
  if (!modal) return;
  modal.classList.remove("show");
}

// close when clicking outside
if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeProject();
    }
  });
}

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

function openLightbox(src) {
  if (!lightbox || !lightboxImg) return;
  
  lightboxImg.src = src;
  lightbox.classList.add("show");
}

function closeLightbox() {
  if (!lightbox || !lightboxImg) return;
  
  lightbox.classList.remove("show");
  lightboxImg.src = "";
}

// close when clicking background
if (lightbox) {
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
}

// GALLERY BUTTONS EVENT LISTENERS
document.addEventListener("DOMContentLoaded", () => {
  const galleryButtons = document.querySelectorAll(".view-gallery");
  galleryButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const projectId = button.getAttribute("data-project");
      openProject(projectId);
    });
  });
});



// File: main.js
// This file contains JavaScript for the modern navigation bar functionality
const navToggle = document.querySelector(".nav-toggle");
const navGroup = document.querySelector(".modern-nav-group");
navToggle.addEventListener("click", () => {
  navGroup.classList.toggle("nav-open");
  navToggle.classList.toggle("open");
});
// This code adds a click event listener to the navigation toggle button.
// When the button is clicked, it toggles the 'nav-open' class on the navigation group,
// which controls the visibility of the navigation items, and also toggles the 'open'
// class on the toggle button itself to change its appearance.

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");
  const panes = document.querySelectorAll(".tab-pane");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const target = tab.getAttribute("data-tab");
      panes.forEach((pane) => {
        pane.classList.toggle("active", pane.id === target);
      });
    });
  });
});

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll('.modern-nav-link[href^="#"]');

function onScroll() {
  let scrollPos = window.scrollY + 120; // Offset for sticky navbar
  let currentId = "";
  sections.forEach((section) => {
    if (scrollPos >= section.offsetTop) {
      currentId = section.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (currentId && link.getAttribute("href") === "#" + currentId) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", onScroll);

document.addEventListener("DOMContentLoaded", function () {
  const aboutText = document.querySelector(".about-animated-text");
  if (!aboutText) return;

  // Remove animation classes initially
  aboutText.querySelectorAll("span").forEach((span) => {
    span.style.opacity = 0;
    span.style.transform = "translateY(-30px)";
    span.style.animation = "none";
  });

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        aboutText.querySelectorAll("span").forEach((span, i) => {
          span.style.animation = `fadeInUp 0.6s ease-out forwards`;
          span.style.animationDelay = i * 0.08 + "s";
        });
      }
    },
    { threshold: 0.5 }
  );
  observer.observe(aboutText);
});

document.addEventListener("DOMContentLoaded", function () {
  // About Us animation (already done)
  const aboutText = document.querySelector(".about-animated-text");
  if (aboutText) {
    aboutText.querySelectorAll("span").forEach((span) => {
      span.style.opacity = 0;
      span.style.transform = "translateY(-30px)";
      span.style.animation = "none";
    });
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          aboutText.querySelectorAll("span").forEach((span, i) => {
            span.style.animation = `fadeInUp 0.6s ease-out forwards`;
            span.style.animationDelay = i * 0.08 + "s";
          });
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(aboutText);
  }

  // Product Category Title animation
  const productTitle = document.querySelector(".tiltle");
  if (productTitle) {
    // Split the text into spans if not already done
    if (!productTitle.querySelector("span")) {
      const text = productTitle.textContent;
      productTitle.innerHTML = "";
      text.split("").forEach((char) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char;
        productTitle.appendChild(span);
      });
    }
    productTitle.querySelectorAll("span").forEach((span) => {
      span.style.opacity = 0;
      span.style.transform = "translateY(-30px)";
      span.style.animation = "none";
    });
    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          productTitle.querySelectorAll("span").forEach((span, i) => {
            span.style.animation = `fadeInUp 0.6s ease-out forwards`;
            span.style.animationDelay = i * 0.08 + "s";
          });
        }
      },
      { threshold: 0.5 }
    );
    observer2.observe(productTitle);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Service Hero h2 animation
  const serviceHeroH2 = document.querySelector(".service-hero-content h2");
  if (serviceHeroH2) {
    // Split text into spans if not already done
    if (!serviceHeroH2.querySelector("span.letter")) {
      const html = serviceHeroH2.innerHTML;
      // Split by <br> and animate each line
      serviceHeroH2.innerHTML = "";
      html.split("<br>").forEach((line, lineIdx) => {
        if (lineIdx > 0)
          serviceHeroH2.appendChild(document.createElement("br"));
        line
          .replace(/<[^>]+>/g, "")
          .split("")
          .forEach((char, i) => {
            const span = document.createElement("span");
            span.className = "letter";
            span.textContent = char === " " ? "\u00A0" : char;
            serviceHeroH2.appendChild(span);
          });
      });
    }
    serviceHeroH2.querySelectorAll("span.letter").forEach((span) => {
      span.style.opacity = 0;
      span.style.transform = "translateY(-30px)";
      span.style.animation = "none";
    });
    const observerH2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          serviceHeroH2.querySelectorAll("span.letter").forEach((span, i) => {
            span.style.animation = `fadeInUp 0.6s ease-out forwards`;
            span.style.animationDelay = i * 0.06 + "s";
          });
        }
      },
      { threshold: 0.5 }
    );
    observerH2.observe(serviceHeroH2);
  }

  // Service Hero h1 animation
  const serviceHeroH1 = document.querySelector(".service-hero-content h1");
  if (serviceHeroH1) {
    if (!serviceHeroH1.querySelector("span.letter")) {
      const text = serviceHeroH1.textContent;
      serviceHeroH1.innerHTML = "";
      text.split("").forEach((char) => {
        const span = document.createElement("span");
        span.className = "letter";
        span.textContent = char === " " ? "\u00A0" : char;
        serviceHeroH1.appendChild(span);
      });
    }
    serviceHeroH1.querySelectorAll("span.letter").forEach((span) => {
      span.style.opacity = 0;
      span.style.transform = "translateY(-30px)";
      span.style.animation = "none";
    });
    const observerH1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          serviceHeroH1.querySelectorAll("span.letter").forEach((span, i) => {
            span.style.animation = `fadeInUp 0.6s ease-out forwards`;
            span.style.animationDelay = i * 0.06 + "s";
          });
        }
      },
      { threshold: 0.5 }
    );
    observerH1.observe(serviceHeroH1);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // ...existing animation code...

  // Work Testimonials Title Animation
  const workTitle = document.querySelector(".work-testimonials-title");
  if (workTitle) {
    // Split text into spans if not already done
    if (!workTitle.querySelector("span.letter")) {
      const text = workTitle.textContent;
      workTitle.innerHTML = "";
      text.split("").forEach((char) => {
        const span = document.createElement("span");
        span.className = "letter";
        span.textContent = char === " " ? "\u00A0" : char;
        workTitle.appendChild(span);
      });
    }
    workTitle.querySelectorAll("span.letter").forEach((span) => {
      span.style.opacity = 0;
      span.style.transform = "translateY(-30px)";
      span.style.animation = "none";
    });
    const observerWork = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          workTitle.querySelectorAll("span.letter").forEach((span, i) => {
            span.style.animation = `fadeInUp 0.6s ease-out forwards`;
            span.style.animationDelay = i * 0.06 + "s";
          });
        }
      },
      { threshold: 0.5 }
    );
    observerWork.observe(workTitle);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // ...existing animation code...

  // Work Testimonials Title Animation
  const workTitle = document.querySelector(".work-testimonials-titles");
  if (workTitle) {
    // Split text into spans if not already done
    if (!workTitle.querySelector("span.letter")) {
      const text = workTitle.textContent;
      workTitle.innerHTML = "";
      text.split("").forEach((char) => {
        const span = document.createElement("span");
        span.className = "letter";
        span.textContent = char === " " ? "\u00A0" : char;
        workTitle.appendChild(span);
      });
    }
    workTitle.querySelectorAll("span.letter").forEach((span) => {
      span.style.opacity = 0;
      span.style.transform = "translateY(-30px)";
      span.style.animation = "none";
    });
    const observerWork = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          workTitle.querySelectorAll("span.letter").forEach((span, i) => {
            span.style.animation = `fadeInUp 0.6s ease-out forwards`;
            span.style.animationDelay = i * 0.06 + "s";
          });
        }
      },
      { threshold: 0.5 }
    );
    observerWork.observe(workTitle);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Count-up animation for work stats
  const statCards = document.querySelectorAll(
    ".work-stat-card .work-stat-value"
  );
  let statsAnimated = false;

  function animateCount(el, target, duration = 1500) {
    let start = 0;
    let startTime = null;
    target = parseFloat(
      target
        .toString()
        .replace(/,/g, "")
        .replace(/[^\d.]/g, "")
    );
    function updateCount(currentTime) {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = Math.floor(progress * (target - start) + start);
      el.textContent =
        value.toLocaleString() +
        (/\+/.test(el.dataset.suffix || "") ? "+" : "");
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        el.textContent = target.toLocaleString() + (el.dataset.suffix || "");
      }
    }
    requestAnimationFrame(updateCount);
  }

  const statsSection = document.querySelector(".work-stats-row");
  if (statsSection && statCards.length) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !statsAnimated) {
          statsAnimated = true;
          statCards.forEach((card) => {
            // Save suffix if any (like '+')
            const match = card.textContent.match(/([0-9,.]+)(.*)/);
            const target = match ? match[1] : card.textContent;
            card.dataset.suffix = match ? match[2] : "";
            animateCount(card, target);
          });
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(statsSection);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // ...other animation code...

  // Hero images fade-in from left and right
  const leftImg = document.querySelector(".hero-img-left");
  const rightImg = document.querySelector(".hero-img-right");
  if (leftImg) {
    leftImg.classList.add("fade-in-left");
  }
  if (rightImg) {
    rightImg.classList.add("fade-in-right");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // ...other animation code...

  // Why container fade-in from right on scroll
  const whyContainer = document.querySelector(".why-container");
  if (whyContainer) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          whyContainer.classList.add("fade-in-right");
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(whyContainer);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // ...other animation code...

  // Info cards fade-in from right on scroll
  const infoCards = document.querySelector(".info-cards");
  if (infoCards) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          infoCards.classList.add("fade-in-right");
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(infoCards);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // ...other animation code...

  // Expertise section fade-in from down on scroll
  const expertiseSection = document.querySelector(".expertise");
  if (expertiseSection) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          expertiseSection.classList.add("fade-in-up");
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(expertiseSection);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // ...other animation code...

  // Timeline animation
  const leftBlocks = document.querySelectorAll(".timeline-block-left");
  const rightBlocks = document.querySelectorAll(".timeline-block");
  const options = { threshold: 0.3 };

  leftBlocks.forEach((block) => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        block.classList.add("fade-in-left");
      }
    }, options);
    observer.observe(block);
  });

  rightBlocks.forEach((block) => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        block.classList.add("fade-in-right");
      }
    }, options);
    observer.observe(block);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // ...other animation code...

  // Work Info Animation
  const workInfoLefts = document.querySelectorAll(".work-info-left");
  const workInfoRights = document.querySelectorAll(".work-info-right");
  const options = { threshold: 0.3 };

  workInfoLefts.forEach((block) => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        block.classList.add("fade-in-down");
      }
    }, options);
    observer.observe(block);
  });

  workInfoRights.forEach((block) => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        block.classList.add("fade-in-up");
      }
    }, options);
    observer.observe(block);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // ...other animation code...

  // Testimonial slider
  const slides = document.querySelectorAll(".testimonial-slide");
  let current = 0;
  if (slides.length > 0) {
    slides[current].classList.add("active");
    setInterval(() => {
      slides[current].classList.remove("active");
      current = (current + 1) % slides.length;
      slides[current].classList.add("active");
    }, 5000);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Footer section fade-in from up on scroll
  const footer = document.querySelector(".footer-section");
  if (footer) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          footer.classList.add("fade-in-up");
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(footer);
  }
});

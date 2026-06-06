// Asana data for dynamic rendering
const asanaData = [
  {
    english: "Mountain Pose",
    sanskrit: "Tadasana",
    videoId: "l9dW5Nn8XjU",
    image: "https://images.unsplash.com/photo-1761539157133-51035954231f?fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000"
  },
  {
    english: "Downward Facing Dog",
    sanskrit: "Adho Mukha Svanasana",
    videoId: "JmW6Ofblhtk",
    image: "https://images.unsplash.com/photo-1764111586062-516dafebeb14?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000"
  },
  {
    english: "Warrior II",
    sanskrit: "Virabhadrasana II",
    videoId: "IiHkMae4yNU",
    image: "https://images.pexels.com/photos/8849470/pexels-photo-8849470.jpeg?cs=srgb&dl=pexels-cristian-rojas-8849470.jpg&fm=jpg"
  },
  {
    english: "Tree Pose",
    sanskrit: "Vrikshasana",
    videoId: "WSgL6hbBYKc",
    image: "https://images.pexels.com/photos/8964923/pexels-photo-8964923.jpeg?cs=srgb&dl=pexels-olia-danilevich-8964923.jpg&fm=jpg"
  },
  {
    english: "Child's Pose",
    sanskrit: "Balasana",
    videoId: "mIz8uc9eTo4",
    image: "https://images.pexels.com/photos/3822147/pexels-photo-3822147.jpeg?cs=srgb&dl=pexels-elly-fairytale-3822147.jpg&fm=jpg"
  },
  {
    english: "Cobra Pose",
    sanskrit: "Bhujangasana",
    videoId: "6bdnE0Ul2zQ",
    image: "https://images.pexels.com/photos/7900297/pexels-photo-7900297.jpeg?cs=srgb&dl=pexels-ivan-s-7900297.jpg&fm=jpg"
  },
  {
    english: "Plank Pose",
    sanskrit: "Phalakasana",
    videoId: "C6XoYAVLKkM",
    image: "https://images.pexels.com/photos/5928656/pexels-photo-5928656.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-5928656.jpg&fm=jpg"
  },
  {
    english: "Extended Triangle Pose",
    sanskrit: "Utthita Trikonasana",
    videoId: "uQMpU8CPJYw",
    image: "https://images.pexels.com/photos/9004770/pexels-photo-9004770.jpeg?cs=srgb&dl=pexels-olia-danilevich-9004770.jpg&fm=jpg"
  },
  {
    english: "Bridge Pose",
    sanskrit: "Setu Bandha Sarvangasana",
    videoId: "Hbpba3F_0z8",
    image: "https://images.pexels.com/photos/5012071/pexels-photo-5012071.jpeg?cs=srgb&dl=pexels-shvetsa-5012071.jpg&fm=jpg"
  },
  {
    english: "Corpse Pose",
    sanskrit: "Savasana",
    videoId: "v1IkTK16XUQ",
    image: "https://images.pexels.com/photos/4498188/pexels-photo-4498188.jpeg?cs=srgb&dl=pexels-karola-g-4498188.jpg&fm=jpg"
  },
  {
    english: "Seated Forward Bend",
    sanskrit: "Paschimottanasana",
    videoId: "ZV1NSV7Ai9o",
    image: "https://images.pexels.com/photos/5444146/pexels-photo-5444146.jpeg?cs=srgb&dl=pexels-werner-pfennig-5444146.jpg&fm=jpg"
  },
  {
    english: "Chair Pose",
    sanskrit: "Utkatasana",
    videoId: "hWsUHtwRGvI",
    image: "https://images.pexels.com/photos/7480085/pexels-photo-7480085.jpeg?cs=srgb&dl=pexels-angela-roma-7480085.jpg&fm=jpg"
  },
  {
    english: "Half Moon Pose",
    sanskrit: "Ardha Chandrasana",
    videoId: "haRAb8sxnbo",
    image: "https://images.unsplash.com/photo-1758274535024-be3faa30f507?fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000"
  },
  {
    english: "Locust Pose",
    sanskrit: "Salabhasana",
    videoId: "vMpznveQDgE",
    image: "https://images.pexels.com/photos/17999506/pexels-photo-17999506.jpeg?cs=srgb&dl=pexels-vi-nguyen-629176438-17999506.jpg&fm=jpg"
  },
  {
    english: "Standing Forward Fold",
    sanskrit: "Uttanasana",
    videoId: "-GpUYCuBxNo",
    image: "https://images.pexels.com/photos/10222715/pexels-photo-10222715.jpeg?cs=srgb&dl=pexels-ron-lach-10222715.jpg&fm=jpg"
  },
  {
    english: "Full Boat Pose",
    sanskrit: "Paripurna Navasana",
    videoId: "VUoXdvODhws",
    image: "https://images.pexels.com/photos/7592448/pexels-photo-7592448.jpeg?cs=srgb&dl=pexels-miriam-alonso-7592448.jpg&fm=jpg"
  }
];

const asanaGrid = document.getElementById("asanaGrid");
const searchInput = document.getElementById("searchInput");
const videoModal = document.getElementById("videoModal");
const videoFrame = document.getElementById("videoFrame");
const closeModal = document.getElementById("closeModal");

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let timerInterval = null;
let remainingSeconds = 0;
let startingSeconds = 0;

// Render library cards from data
function renderAsanas(list) {
  asanaGrid.innerHTML = "";

  list.forEach((asana, index) => {
    const card = document.createElement("div");
    card.className = "asana-card";

    card.innerHTML = `
      <div class="asana-media">
        <img class="asana-image" src="${asana.image}" alt="${asana.english}" loading="lazy" decoding="async" />
      </div>
      <h3>${asana.english}</h3>
      <span>${asana.sanskrit}</span>
      <button data-video="${asana.videoId}">Watch Video</button>
    `;

    asanaGrid.appendChild(card);

    if (prefersReducedMotion) {
      card.classList.add("is-visible");
    } else {
      setTimeout(() => {
        card.classList.add("is-visible");
      }, 40 * index);
    }
  });
}

// Filter cards based on search input
function handleSearch() {
  const term = searchInput.value.toLowerCase();
  const filtered = asanaData.filter((asana) => {
    return (
      asana.english.toLowerCase().includes(term) ||
      asana.sanskrit.toLowerCase().includes(term)
    );
  });

  renderAsanas(filtered);
}

// Open modal and play selected video
function openVideo(videoId) {
  videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  videoModal.classList.add("active");
  videoModal.setAttribute("aria-hidden", "false");
}

// Close modal and stop video playback
function closeVideo() {
  videoFrame.src = "";
  videoModal.classList.remove("active");
  videoModal.setAttribute("aria-hidden", "true");
}

// Timer utilities
function updateTimerDisplay() {
  const minutes = String(Math.floor(remainingSeconds / 60)).padStart(2, "0");
  const seconds = String(remainingSeconds % 60).padStart(2, "0");
  document.getElementById("timerDisplay").textContent = `${minutes}:${seconds}`;
}

function startTimer() {
  if (remainingSeconds <= 0 || timerInterval) {
    return;
  }

  timerInterval = setInterval(() => {
    remainingSeconds -= 1;
    updateTimerDisplay();

    if (remainingSeconds <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  pauseTimer();
  remainingSeconds = startingSeconds;
  updateTimerDisplay();
}

function setTimer(minutes) {
  startingSeconds = minutes * 60;
  remainingSeconds = startingSeconds;
  updateTimerDisplay();
}

// Event listeners
if (navMenu) {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = navMenu.querySelectorAll("a");
  navLinks.forEach((link) => {
    const linkPath = link.getAttribute("href");
    if (linkPath === currentPath) {
      link.classList.add("active");
    }
  });
}

const revealItems = document.querySelectorAll(".reveal");
if (revealItems.length) {
  if (prefersReducedMotion) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    revealItems.forEach((item) => revealObserver.observe(item));
  }
}

if (searchInput) {
  searchInput.addEventListener("input", handleSearch);
}

if (asanaGrid) {
  asanaGrid.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      openVideo(event.target.dataset.video);
    }
  });
}

if (closeModal) {
  closeModal.addEventListener("click", closeVideo);
}
if (videoModal) {
  videoModal.addEventListener("click", (event) => {
    if (event.target === videoModal) {
      closeVideo();
    }
  });
}

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("active");
    hamburger.setAttribute("aria-expanded", String(isOpen));
  });
}

// Timer controls
const presetButtons = document.querySelectorAll(".preset");
const setCustom = document.getElementById("setCustom");

if (presetButtons.length) {
  presetButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const minutes = Number(button.dataset.minutes);
      setTimer(minutes);
    });
  });
}

if (setCustom) {
  setCustom.addEventListener("click", () => {
    const customMinutes = Number(document.getElementById("customMinutes").value);
    if (customMinutes > 0) {
      setTimer(customMinutes);
    }
  });
}

// Timer action buttons
const startTimerButton = document.getElementById("startTimer");
const pauseTimerButton = document.getElementById("pauseTimer");
const resetTimerButton = document.getElementById("resetTimer");

if (startTimerButton && pauseTimerButton && resetTimerButton) {
  startTimerButton.addEventListener("click", startTimer);
  pauseTimerButton.addEventListener("click", pauseTimer);
  resetTimerButton.addEventListener("click", resetTimer);
}

// Initial render and timer state
if (asanaGrid) {
  renderAsanas(asanaData);
}
if (startTimerButton) {
  setTimer(5);
}

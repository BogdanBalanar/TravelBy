const navbar = document.querySelector(".header .navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};

document
  .querySelectorAll(".about .video-container .controls .control-btn")
  .forEach((btn) => {
    btn.onclick = () => {
      let src = btn.getAttribute("data-src");
      document.querySelector(".about .video-container .video").src = src;
    };
  });

const openModal = document.querySelector("#modal-wrapper");

document.querySelector("#aboutBtn").onclick = () => {
  openModal.classList.add("active");
};

document.querySelector(".closeModal").onclick = () => {
  openModal.classList.remove("active");
};

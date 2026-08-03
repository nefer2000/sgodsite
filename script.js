const menuToggle = document.querySelector(".menu-toggle");
const sidebar = document.getElementById("sidebar-nav");
const topBtn = document.getElementById("topBtn");
const navLinks = document.querySelectorAll("#main-nav a");

const setSidebarOpen = (isOpen) => {
    sidebar.classList.toggle("open", isOpen);
    document.body.classList.toggle("sidebar-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
};

const currentPage = window.location.pathname.split("/").pop() || "index.html";

navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
        link.classList.add("nav-active");
        link.setAttribute("aria-current", "page");
    }
});

menuToggle.addEventListener("click", () => {
    setSidebarOpen(!sidebar.classList.contains("open"));
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setSidebarOpen(false);
});

window.addEventListener("scroll", () => {
    topBtn.classList.toggle("show", window.scrollY > 320);
}, { passive: true });

topBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

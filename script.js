// Ano no rodapé
document.getElementById("year").textContent = new Date().getFullYear();

// Menu mobile
const toggle = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
  toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
});

links.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menu");
  });
});

// Sombra no header + botão flutuante do WhatsApp depois do hero
const nav = document.getElementById("nav");
const floatBtn = document.querySelector(".whats-float");

const onScroll = () => {
  const y = window.scrollY;
  nav.classList.toggle("is-stuck", y > 8);
  if (floatBtn) floatBtn.classList.toggle("is-visible", y > 600);
};

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Revelar seções ao rolar
const reveals = document.querySelectorAll(".reveal");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (reduceMotion || !("IntersectionObserver" in window)) {
  reveals.forEach((el) => el.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
  );

  reveals.forEach((el) => revealObserver.observe(el));

  // Rede de segurança: se o observer não disparar, nada fica invisível na tela
  window.setTimeout(() => {
    reveals.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add("is-visible");
      }
    });
  }, 1200);
}

// Link do menu correspondente à seção visível
const navLinks = [...links.querySelectorAll('a[href^="#"]')];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window && sections.length) {
  const spyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          link.classList.toggle(
            "is-active",
            link.getAttribute("href") === "#" + entry.target.id
          );
        });
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );

  sections.forEach((section) => spyObserver.observe(section));
}

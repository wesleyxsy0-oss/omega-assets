// Gerenciar o Cookie Banner
const cookieBanner = document.getElementById("cookieBanner");
const acceptCookies = document.getElementById("acceptCookies");

if (!localStorage.getItem("cookies_accepted")) {
  cookieBanner.style.display = "block";
}

acceptCookies.addEventListener("click", () => {
  localStorage.setItem("cookies_accepted", true);
  cookieBanner.style.display = "none";
});

// Simulação de envio de formulário
document.getElementById("contactForm")?.addEventListener("submit", function(e){
  e.preventDefault();
  alert("Mensagem enviada! Em breve entraremos em contato.");
});

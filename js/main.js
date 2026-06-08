 /* --- Burger / мобильное меню --- */
 const burger = document.getElementById('burger');
 const mobileMenu = document.getElementById('mobileMenu');

 burger.addEventListener('click', () => {
     burger.classList.toggle('open');
     mobileMenu.classList.toggle('open');
 });

 function closeMenu() {
     burger.classList.remove('open');
     mobileMenu.classList.remove('open');
 }

 /* --- Scroll Reveal (IntersectionObserver) --- */
 const revealEls = document.querySelectorAll('.reveal');

 const revealObserver = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
         if (entry.isIntersecting) {
             entry.target.classList.add('visible');
         }
     });
 }, { threshold: 0.1 });

 revealEls.forEach(el => revealObserver.observe(el));

 /* --- Тень навбара при прокрутке --- */
 const navbar = document.getElementById('navbar');

 window.addEventListener('scroll', () => {
     navbar.style.boxShadow = window.scrollY > 20 ?
         '0 4px 32px rgba(0,0,0,0.5)' :
         'none';
 });

 /* --- Форма обратной связи --- */
 function submitForm() {
     const name = document.getElementById('fname').value.trim();
     const email = document.getElementById('femail').value.trim();
     const msg = document.getElementById('fmsg').value.trim();

     // базовая валидация
     if (!name || !email) {
         alert('Пожалуйста, заполните имя и email');
         return;
     }

     /*
      * Здесь вместо alert подключить реальную отправку:
      * fetch('/api/contact', { method:'POST', body: JSON.stringify({name,email,msg}) })
      * или FormData / emailjs / любой бэкенд
      */

     // показываем сообщение об успехе
     document.getElementById('formBody').style.display = 'none';
     document.getElementById('formSuccess').style.display = 'block';
 }
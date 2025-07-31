
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  preloader.style.opacity = '0';
  preloader.style.pointerEvents = 'none';
  setTimeout(() => preloader.remove(), 1);
});

const kzBtn = document.getElementById('kzBtn');
const ruBtn = document.getElementById('ruBtn');

function switchLanguage(lang) {
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-kz], [data-ru]').forEach(el => {
    el.textContent = lang === 'kz' ? el.dataset.kz : el.dataset.ru;
  });
  kzBtn.classList.toggle('active', lang === 'kz');
  ruBtn.classList.toggle('active', lang === 'ru');
}

kzBtn.addEventListener('click', () => switchLanguage('kz'));
ruBtn.addEventListener('click', () => switchLanguage('ru'));

window.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang') || 'kz';
  switchLanguage(savedLang);
});

    function toggleBurger() {
      document.getElementById('navMenu').classList.toggle('show');
    }
    

AOS.init({ 
  duration:800, 
  once:true 
});

const swiper = new Swiper('.swiper-container', {
  loop:true,
  slidesPerView:1,
  autoplay:{ delay:4000 },
  pagination:{ el:'.swiper-pagination', clickable:true }
});

// Фильт по категориям
document.querySelectorAll('.filter-btns button').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const filter = btn.dataset.filter;
    document.querySelectorAll('.post-item').forEach(item=>{
      item.style.display = (filter==='all' || item.classList.contains(filter)) ? 'block':'none';
    });
  });
}); 
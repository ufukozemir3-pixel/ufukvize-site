// v31 - quick slot (hızlı menü)
const SLOT1 = [
  { type: 'badge', text: 'Hızlı Menü' },
  { type: 'link',  href: '#schengen',  text: 'Schengen' },
  { type: 'link',  href: '#ingiltere', text: 'İngiltere' },
  { type: 'link',  href: '#amerika',   text: 'Amerika' },
  { type: 'link',  href: '#ucretler',  text: 'Ücretler' },
  { type: 'link',  href: '#iletisim',  text: 'İletişim' }
];

function renderBar(items){
  const bar = document.createElement('div');
  bar.className = 'qbar';
  items.forEach(it=>{
    if(it.type==='badge'){
      const b=document.createElement('span');
      b.className='qbadge';
      b.textContent=it.text;
      bar.appendChild(b);
    }else if(it.type==='link'){
      const a=document.createElement('a');
      a.className='qlink';
      a.href=it.href;
      a.textContent=it.text;
      bar.appendChild(a);
    }
  });
  return bar;
}

document.addEventListener('DOMContentLoaded',()=>{
  const s1 = document.getElementById('quick-slot-1');
  if(s1){
    // tekrar çalışırsa iki kez eklememesi için
    s1.innerHTML='';
    s1.appendChild(renderBar(SLOT1));
  }
});
/* --- akıllı kaydırma: hedefi ekranda ortalayarak getir --- */
(function () {
  // Üstteki sabit navbar:
  const nav = document.querySelector('.nav.nav-flags') || document.querySelector('nav');

  // Navbar yüksekliği + minik emniyet payı
  const navH = () => (nav ? nav.getBoundingClientRect().height : 0);

  function scrollToCenter(hash) {
    const el = document.querySelector(hash);
    if (!el) return;

    const r = el.getBoundingClientRect();
    // Hedefin orta noktası ekranın orta noktasına gelsin:
    const middleGap = (window.innerHeight - r.height) / 2;

    // Üstte sabit menü olduğu için ortalamayı biraz yukarı düzeltelim
    const compensate = navH() / 2;

    const targetY = window.scrollY + r.top - middleGap - compensate;

    window.scrollTo({
      top: Math.max(0, targetY),
      behavior: 'smooth'
    });
  }

  // Tüm #ankor linklerine uygula
  document.addEventListener('click', function (e) {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;

    const hash = a.getAttribute('href');
    if (!document.querySelector(hash)) return;

    e.preventDefault();           // varsayılan kaydırmayı engelle
    scrollToCenter(hash);         // bizim merkezleme kaydırmamız
  }, { passive: false });
})();
// === FAQ: aynı anda sadece 1 soru açık kalsın ===
(function () {
  const faqWrap = document.getElementById('faq-accordion');
  if (!faqWrap) return;

  faqWrap.addEventListener('toggle', function (e) {
    const opened = e.target;
    if (opened.open) {
      faqWrap.querySelectorAll('details.faq-item[open]').forEach(item => {
        if (item !== opened) item.open = false; // diğerlerini kapat
      });
    }
  });
})();

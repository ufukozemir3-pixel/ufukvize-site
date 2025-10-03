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

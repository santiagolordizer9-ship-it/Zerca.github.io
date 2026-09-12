/* main.js — assets/js/main.js */
document.addEventListener('DOMContentLoaded',function(){
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav-links');
  toggle && toggle.addEventListener('click',()=>{
    const isHidden = nav.style.display === 'block';
    nav.style.display = isHidden ? 'none' : 'block';
  });
});

function submitReservation(e){
  e.preventDefault();
  const name = document.getElementById('res-name').value.trim();
  alert(`Thanks ${name}! We received your reservation request. We will contact you to confirm.`);
  e.target.reset();
  return false;
}

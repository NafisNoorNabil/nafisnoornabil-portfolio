
window.addEventListener('load', function() {

  var content = document.getElementById('content');
  content.style.display = 'block';
  

  var preloader = document.getElementById('preloader');
  preloader.style.opacity = '0';

  preloader.addEventListener('transitionend', function() {
    preloader.style.display = 'none';
  });
  
  const text = "I'm Nafis Noor Nabil";
  const topname = document.getElementById('topname');

  let index = 0;

  function type() {
    topname.textContent += text[index];
    index++;

    if (index === text.length) {
      clearInterval(typingInterval);
      topname.classList.add('typing-complete');
    }
  }

  const typingInterval = setInterval(type, 100);

});





const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

btn.addEventListener('click', navToggle)
function navToggle() {
  btn.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')

}
const tabs = document.querySelectorAll('.tab')
const panels = document.querySelectorAll('.panel')

tabs.forEach((tab) => tab.addEventListener('click', onTabClick))
function onTabClick(e) {
  // Deactivate all tabs
    tabs.forEach((tab) => {
        tab.children[0].classList.remove(
            'border-violet-800',
            'border-b-4',
            'md:border-b-0',
            
        )})
// Hide all panels
    panels.forEach((panel) => panel.classList.add('hidden'))
// Activate a new tab and panel based on the target
    e.target.classList.add('border-violet-800', 'border-b-4')
    const classString = e.target.getAttribute('data-target')
    document
        .getElementById('panels')
        .getElementsByClassName(classString)[0]
        .classList.remove('hidden')
}



window.addEventListener('scroll',reveal);
window.addEventListener('scroll',revealup);
function reveal(){
  let reveals=document.querySelectorAll('.reveal');
  for (let i=0;i<reveals.length;i++){
    let windowheight=window.innerHeight;
    let revealtop=reveals[i].getBoundingClientRect().top;
    let revealpoint=200;
    if (revealtop<windowheight-revealpoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
}

function revealup(){
  let revealupElements = document.querySelectorAll('.revealup');
  for (let i = 0; i < revealupElements.length; i++) {
    let windowheight = window.innerHeight;
    let revealtop = revealupElements[i].getBoundingClientRect().top;
    let revealpoint = revealupElements[i].classList.contains('art') ? 300 : 50;
    if (revealtop < windowheight - revealpoint) {
      revealupElements[i].classList.add('active');
    } else {
      revealupElements[i].classList.remove('active');
    }
  }
}


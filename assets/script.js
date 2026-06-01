
const reveals=document.querySelectorAll('.reveal');
function onReveal(){
  for(const el of reveals){
    const top=el.getBoundingClientRect().top;
    if(top < window.innerHeight - 80){ el.classList.add('active'); }
  }
}
window.addEventListener('scroll', onReveal);
onReveal();

const counters = document.querySelectorAll('.stat-number');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const counter = entry.target;
    if (counter.classList.contains('done')) return;

    counter.classList.add('done');

    counter.innerText = '0';
    const target = +counter.dataset.target;
    const step = Math.max(1, Math.ceil(target / 120));

    const update = () => {
      const current = +counter.innerText;
      if (current < target) {
        counter.innerText = Math.min(target, current + step);
        requestAnimationFrame(update);
      } else {
        counter.innerText = target;
      }
    };

    update();
  });
}, { threshold: 0.4 });

counters.forEach(counter => observer.observe(counter));

const menuBtn=document.getElementById('menuBtn');
const navLinks=document.getElementById('navLinks');
if(menuBtn && navLinks){
  menuBtn.addEventListener('click', ()=> navLinks.classList.toggle('open'));
}

document.querySelectorAll('.member-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const parent = button.parentElement;
    parent.classList.toggle('active');
  });
});

function sendEmail() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all fields before submitting.");
    return;
  }

  const subject = encodeURIComponent("MED Inquiry from " + name);
  const body = encodeURIComponent(
    "Name: " + name + "\n" +
    "Email: " + email + "\n\n" +
    "Message:\n" + message
  );

  window.location.href = `mailto:muepsiliondeltauiuc@gmail.com?subject=${subject}&body=${body}`;
}
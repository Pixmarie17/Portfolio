document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("navbar").classList.toggle("open");
});

function scrollToSection() {
  document.querySelector("#portfolio")?.scrollIntoView({ behavior: 'smooth' });
}

const canvas = document.getElementById("matrix-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = "01+({%#>)01{<";
const fontSize = 14;
const columns = canvas.width / fontSize;

const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(drawMatrix, 33);

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

//Portfolio
const tabs = document.querySelectorAll(".tab");
const projects = document.querySelectorAll(".project-card");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        const category = tab.getAttribute("data-category");

        projects.forEach(project => {
            const projectCategory = project.getAttribute("data-category");

            if (category === "all" || category === projectCategory) {
                project.style.display = "block";
                project.style.animation = "fadeInUp 0.4s ease forwards";
            }

            else {
                project.style.display = "none";
            }
        })
    })
})

//About
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

const aboutSection = document.getElementById('about-us');

aboutSection.addEventListener('mouseenter', () => {
  cursor.style.display = 'block';
});

aboutSection.addEventListener('mouseleave', () => {
  cursor.style.display = 'none';
});

aboutSection.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  cursor.style.left =  `${x - 6}px`;
  cursor.style.top =  `${y - 6}px`;

  const trail = document.createElement('div');
  trail.classList.add('cursor-trail');
  trail.style.left = `${x -10}px`;
  trail.style.top = `${y -10}px`;
  document.body.appendChild(trail);

  setTimeout(() => {
    trail.remove();
  }, 800);
});

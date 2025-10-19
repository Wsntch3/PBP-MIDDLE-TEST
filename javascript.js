document.addEventListener("DOMContentLoaded", () => {
  fetch("header.html")
    .then(res => res.text())
    .then(data => {
      document.querySelector("header").innerHTML = data;
    });

  fetch("footer.html")
    .then(res => res.text())
    .then(data => {
      document.querySelector("footer").innerHTML = data;
    });
});




const track = document.getElementById("skillsTrack");
track.innerHTML += track.innerHTML;

let position = 0;  
const speed = 1; 

function move() {
  position -= speed;
  if (Math.abs(position) >= track.scrollWidth / 2) {
    position = 0; 
  }
  track.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(move);
}

move();

function showDetail(id) {
  const detailSection = document.getElementById("project-detail");
  let detailContent = "";

  switch (id) {
    case 1:
      detailContent = `
        <div class="card p-4 mt-3">
          <h3>Portofolio Web</h3>
          <p>This project represents my identity as a web developer a fully handcoded personal portfolio built entirely with HTML, CSS, and JavaScript. I designed every section from scratch to train my skills in structure, responsiveness, and animation without relying on frameworks.It features smooth scrolling, hover effects, and interactive project cards that reveal more details when clicked. The color palette focuses on soft greens to convey a clean, modern, and professional look. I also implemented a simple template injection system for the header and footer to ensure design consistency across all pages.Beyond just showing technical skills, this portfolio reflects my personal touch in writing organized code and crafting intuitive interfaces that feel lively and human.</p>
        </div>`;
      break;

    case 2:
      detailContent = `
        <div class="card p-4 mt-3">
          <h3>Introduction Sukoharjo Web</h3>
          <p>This is a regional information website I built to introduce my hometown, Sukoharjo Regency, in a modern and interactive way. The site provides dynamic content such as local history, tourism destinations, and regional data all handled efficiently through React’s component based architecture.I used Tailwind CSS to achieve a fast, consistent, and fully responsive layout. Each part of the website, from headers and info cards to image galleries, was built as reusable components for easier maintenance and scalability.Smooth page transitions, onscroll animations, and a mobile friendly design help make the browsing experience more enjoyable. The goal was not only to inform but also to inspire people to discover Sukoharjo through a visually engaging and user friendly platform.</p>
        </div>`;
      break;

    case 3:
      detailContent = `
        <div class="card p-4 mt-3">
          <h3>Inventory GUI C++</h3>
          <p>This desktop application was created to simplify inventory management for small offices, labs, or storage systems. Built using the Qt framework, it features an intuitive graphical interface that allows users to add, delete, and update item data effortlessly no command line required.The app was developed with Object-Oriented Programming (OOP) principles, where each item is represented as an object with its own attributes and methods. Data is stored locally, and updates are reflected instantly in the interactive table.Additional features include quick search, input validation, and real-time updates, ensuring an error-free and smooth experience. This project helped me strengthen my understanding of GUI development and data handling within a desktop environment.</p>
        </div>`;
      break;

    case 4:
      detailContent = `
        <div class="card p-4 mt-3">
          <h3>Siakadu GUI C++</h3>
          <p>This GUI-based academic management system allows both students and lecturers to interact within a single platform. Students can register and manage their courses, while lecturers can approve or modify course enrollments.Developed with Qt, the application offers a clean, user-friendly interface with data tables and role-based access. Each user type (student or lecturer) gets a distinct interface tailored to their specific permissions.I applied strong OOP principles, creating modular class structures such as Student, Lecturer, and Course. This approach made the system easy to maintain, scalable, and logically structured. The project was a valuable hands-on experience in event-driven programming and real-world GUI architecture.</p>
        </div>`;
      break;

    case 5:
      detailContent = `
        <div class="card p-4 mt-3">
          <h3>OOP Django Project</h3>
          <p>Django-based web application designed to help users monitor their daily spending and income. It includes an authentication system, a dashboard summary, and categorized spending sections (food, entertainment, transportation, etc.).Users can record transactions manually, while the system automatically calculates total income, expenses, and remaining balance. Transaction history is neatly organized in a sortable table for easy tracking.On the backend, Django’s ORM handles all database operations via SQLite. On the frontend, I used Django’s templating system to keep the pages lightweight yet dynamic. This project taught me how to apply OOP concepts effectively within Django while building a practical tool that supports smarter personal finance habits.</p>
        </div>`;
      break;
  }

  detailSection.innerHTML = detailContent;
  detailSection.scrollIntoView({ behavior: "smooth" });
}


 
// Function to animate numbers with random scrolling effect
const animateNumbers = (element) => {
  const target = +element.getAttribute('data-target');
  const duration = 1350; // 1 second
  const startTime = performance.now();

  const updateNumber = (currentTime) => {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);

    // Generate a random number around the target during animation
    const randomOffset = Math.floor(Math.random() * 10 - 5);
    const current = Math.floor(progress * target) + randomOffset;

    // Ensure the number doesn't exceed the target
    element.innerText = progress < 1 ? Math.max(0, Math.min(current, target)) : target;

    if (progress < 1) {
      requestAnimationFrame(updateNumber);
    }
  };

  requestAnimationFrame(updateNumber);
};

// Observer to trigger animation when the element comes into view
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const numberElement = entry.target.querySelector('.number');
      if (numberElement) {
        animateNumbers(numberElement);
        observer.unobserve(entry.target); // Unobserve after animation
      }
    }
  });
});

// Observe all panels with numbers
document.querySelectorAll('.panels > div').forEach((panel) => observer.observe(panel));



const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav_links');
const navLinks = document.querySelectorAll('.nav_links li');

burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('nav-active');

    // Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${(index + 1) * 0.1}s`;
        }
    });

    // Burger Animation
    burger.classList.toggle('toggle');
});

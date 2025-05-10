document.addEventListener('DOMContentLoaded', () => {
    console.log("Happy 10 Months! Website loaded successfully. Let's celebrate!");

    // Floating hearts functionality
    function createFloatingHeart() {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.innerHTML = '❤'; // You can also use an SVG or image

        // Randomize starting position, horizontal sway, and rotation
        const startX = Math.random() * window.innerWidth;
        const randomX = (Math.random() - 0.5) * 100; // Sway left or right by up to 50px
        const randomRotate = (Math.random() - 0.5) * 90; // Rotate up to 45deg left or right
        const randomSize = Math.random() * 15 + 10; // Size between 10px and 25px
        const animationDuration = Math.random() * 3 + 4; // Duration between 4s and 7s

        heart.style.left = `${startX}px`;
        heart.style.setProperty('--random-x', `${randomX}px`);
        heart.style.setProperty('--random-rotate', `${randomRotate}deg`);
        heart.style.fontSize = `${randomSize}px`;
        heart.style.animationDuration = `${animationDuration}s`;

        document.body.appendChild(heart);

        // Remove the heart after animation finishes to prevent clutter
        setTimeout(() => {
            heart.remove();
        }, animationDuration * 1000); // Match animation duration
    }

    // Create hearts at intervals
    setInterval(createFloatingHeart, 700); // Create a new heart every 700ms

    // Original heart click functionality
    const hearts = document.querySelectorAll('.heart:not(.floating-heart)'); // Exclude floating hearts
    hearts.forEach(heart => {
        heart.addEventListener('click', () => {
            alert('Sending you lots of love! ❤️');
        });
    });

    // Example: Smooth scroll for navigation (if you add internal links)
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         document.querySelector(this.getAttribute('href')).scrollIntoView({
    //             behavior: 'smooth'
    //         });
    //     });
    // });
});
    console.log("Happy 10 Months! Website loaded successfully. Let's celebrate!");

    // You can add more JavaScript interactivity here.
    // For example, maybe a special message when a heart is clicked:
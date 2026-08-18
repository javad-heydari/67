<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Landing Page</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Welcome to Our Awesome Landing Page</h1>
        <nav>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>

    <section id="hero">
        <h2>Discover What We Offer</h2>
        <p>An amazing experience awaits you. Learn more below!</p>
        <button id="learn-more-btn">Learn More</button>
    </section>

    <section id="about">
        <h2>About Us</h2>
        <p>We are a team dedicated to providing the best solutions. Our database is robust and scalable.</p>
    </section>

    <section id="contact">
        <h2>Contact Us</h2>
        <form id="contact-form">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Send Message</button>
        </form>
        <div id="message-status"></div>
    </section>

    <footer>
        <p>&copy; 2023 Your Company. All rights reserved.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>

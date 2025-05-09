document.addEventListener('DOMContentLoaded', () => {
    // Blog Post Data
    const blogPosts = {
        'scalable-web-apps': `
            <h1>The Full-Stack Developer's Guide to Building Scalable Web Applications</h1>
            <h2>Introduction</h2>
            <p>In today’s fast-paced web development landscape, scalability is paramount. Full-stack developers must build systems that handle <strong>high traffic</strong>, ensure <strong>efficient database interactions</strong>, and maintain <strong>seamless frontend-backend communication</strong>. Poor scalability leads to slow performance, crashes, and frustrated users. This guide outlines best practices for designing scalable web applications, covering tech stack selection, optimization techniques, and deployment strategies.</p>
            <h2>Choosing the Right Tech Stack</h2>
            <p>Your tech stack significantly impacts scalability. Here’s how to choose wisely:</p>
            <h3>Frontend Options</h3>
            <ul>
                <li><strong>Next.js (React Framework)</strong>: Ideal for server-side rendering (SSR) and static site generation (SSG), boosting speed and SEO.</li>
                <li><strong>React.js</strong>: Enables component-based, interactive UIs with lazy loading for performance optimization.</li>
                <li><strong>Tailwind CSS</strong>: A utility-first framework for rapid, lightweight styling with minimal CSS overhead.</li>
            </ul>
            <h3>Backend Choices</h3>
            <ul>
                <li><strong>Node.js + Express.js</strong>: Lightweight and scalable for building APIs.</li>
                <li><strong>Django or Flask (Python)</strong>: Secure frameworks with robust database management.</li>
                <li><strong>FastAPI</strong>: A high-performance Python framework for modern APIs.</li>
            </ul>
            <h3>Database Considerations</h3>
            <ul>
                <li><strong>MongoDB</strong>: NoSQL database for flexible, rapidly evolving data structures.</li>
                <li><strong>PostgreSQL</strong>: SQL database with superior indexing and performance for structured data.</li>
                <li><strong>Redis</strong>: In-memory caching to accelerate database response times.</li>
            </ul>
            <h3>Key Takeaway</h3>
            <p>Align your stack with project requirements. For <strong>real-time interactions</strong>, consider <strong>WebSockets or Firebase</strong>. For <strong>large datasets</strong>, prioritize <strong>SQL databases</strong> with caching.</p>
            <h2>Frontend and Backend Communication: REST vs. GraphQL</h2>
            <p>Efficient communication between frontend and backend is critical for scalability.</p>
            <h3>REST API</h3>
            <ul>
                <li>Uses standard HTTP methods (GET, POST, PUT, DELETE) with predefined routes.</li>
                <li>Suited for simple applications with structured data needs.</li>
            </ul>
            <h3>GraphQL</h3>
            <ul>
                <li>Enables clients to request <strong>only necessary data</strong>, minimizing bandwidth usage.</li>
                <li>Ideal for complex apps with <strong>nested data relationships</strong> (e.g., social platforms).</li>
                <li>Prevents <strong>over-fetching or under-fetching</strong> of data.</li>
            </ul>
            <h3>Which to Choose?</h3>
            <ul>
                <li>Opt for <strong>REST</strong> for straightforward apps with predictable data flows.</li>
                <li>Choose <strong>GraphQL</strong> for flexible, optimized data retrieval in complex systems.</li>
            </ul>
            <h2>Performance Optimization Strategies</h2>
            <p>Fast applications retain users. Here’s how to optimize performance:</p>
            <ol>
                <li><strong>Effective Caching</strong>
                    <ul>
                        <li>Use <strong>Redis</strong> for backend response caching.</li>
                        <li>Leverage <strong>CDNs</strong> (e.g., Cloudflare, AWS CloudFront) for frontend asset delivery.</li>
                    </ul>
                </li>
                <li><strong>Database Indexing</strong>
                    <ul>
                        <li>Apply indexes in <strong>PostgreSQL</strong> to speed up queries.</li>
                        <li>Use <strong>pagination</strong> to limit data retrieval.</li>
                    </ul>
                </li>
                <li><strong>Code Minification & Lazy Loading</strong>
                    <ul>
                        <li>Minify CSS and JS files to reduce load times.</li>
                        <li>Implement <strong>lazy loading</strong> in React to defer non-critical components.</li>
                    </ul>
                </li>
                <li><strong>API Optimization</strong>
                    <ul>
                        <li>Minimize API calls with <strong>GraphQL or batch processing</strong>.</li>
                        <li>Use <strong>rate limiting</strong> to prevent server overload.</li>
                    </ul>
                </li>
            </ol>
            <h2>Deployment Strategies for Scalable Apps</h2>
            <p>A robust deployment process ensures <strong>smooth updates</strong> and <strong>reliable releases</strong>.</p>
            <h3>CI/CD Pipelines</h3>
            <ul>
                <li>Automate testing and deployment with <strong>GitHub Actions</strong> or <strong>GitLab CI/CD</strong>.</li>
                <li>Use <strong>Docker</strong> for consistent, scalable environments.</li>
            </ul>
            <h3>Cloud Hosting Platforms</h3>
            <ul>
                <li><strong>Vercel/Netlify</strong>: Simplified frontend deployments.</li>
                <li><strong>Railway/Render</strong>: Reliable backend hosting.</li>
                <li><strong>AWS/DigitalOcean</strong>: Scalable solutions for large apps.</li>
            </ul>
            <h3>Key Takeaway</h3>
            <p>Combine <strong>cloud hosting</strong> with <strong>CI/CD automation</strong> for scalable, dependable deployments.</p>
            <h2>Conclusion</h2>
            <p>Building scalable web applications demands <strong>strategic planning</strong>, from selecting an appropriate tech stack to optimizing performance and deploying effectively. By adopting these best practices, full-stack developers can create <strong>fast, efficient, and future-proof</strong> applications.</p>
        `,
        'ai-web-dev': `
            <h1>AI-Powered Web Development: How Machine Learning is Changing the Future of Full-Stack Apps</h1>
            <h2>Introduction</h2>
            <p>Artificial Intelligence (AI) is reshaping web development, enabling full-stack developers to create <strong>intelligent</strong>, <strong>user-centric</strong> applications. By integrating <strong>AI-driven automation</strong>, <strong>predictive analytics</strong>, and <strong>smart interactions</strong>, developers can build websites that adapt to user needs. From chatbots to recommendation systems, AI is driving the future of web apps.</p>
            <h2>AI in Frontend Development</h2>
            <p>AI enhances frontend experiences, making websites <strong>more interactive and efficient</strong>.</p>
            <h3>1. AI-Powered Chatbots</h3>
            <ul>
                <li><strong>OpenAI API & xAI Models</strong>: Deliver human-like conversational experiences.</li>
                <li><strong>TensorFlow.js</strong>: Runs machine learning models in browsers for real-time interactions.</li>
                <li><strong>Benefit</strong>: Chatbots provide instant customer support, improving user satisfaction.</li>
            </ul>
            <h3>2. AI-Based Personalization</h3>
            <ul>
                <li>Platforms like Netflix and Amazon use AI for <strong>personalized recommendations</strong>.</li>
                <li>Websites dynamically adjust content based on user behavior and preferences.</li>
            </ul>
            <h3>3. AI-Driven Image & Voice Recognition</h3>
            <ul>
                <li>AI enables <strong>object identification</strong> in images, enhancing e-commerce functionality.</li>
                <li><strong>Voice-controlled interfaces</strong> improve accessibility for diverse users.</li>
            </ul>
            <h2>AI in Backend & Data Processing</h2>
            <p>AI streamlines backend operations and enhances data-driven decision-making.</p>
            <h3>1. Predictive Analytics for User Behavior</h3>
            <ul>
                <li>AI analyzes user activity to forecast trends and personalize experiences.</li>
                <li>Enables <strong>dynamic pricing</strong> and <strong>smart recommendations</strong> for businesses.</li>
            </ul>
            <h3>2. Automating Backend Operations</h3>
            <ul>
                <li>AI automates <strong>server monitoring</strong>, <strong>error detection</strong>, and <strong>performance optimization</strong>.</li>
                <li>Example: AWS employs AI for efficient cloud management.</li>
            </ul>
            <h3>3. AI-Powered Security Enhancements</h3>
            <ul>
                <li><strong>Anomaly detection</strong> identifies and mitigates cyber threats.</li>
                <li><strong>Automated fraud prevention</strong> secures user transactions.</li>
            </ul>
            <h2>How Full-Stack Developers Can Integrate AI</h2>
            <h3>1. AI-Driven APIs</h3>
            <ul>
                <li>Use <strong>OpenAI’s API</strong> for intelligent assistants.</li>
                <li>Leverage <strong>Google’s ML Kit</strong> for AI-enhanced mobile features.</li>
            </ul>
            <h3>2. TensorFlow.js for AI in Web Apps</h3>
            <ul>
                <li>Run machine learning models <strong>in browsers</strong> for tasks like <strong>image recognition</strong>, <strong>sentiment analysis</strong>, or <strong>fraud detection</strong>.</li>
            </ul>
            <h3>3. Ethical AI Implementation</h3>
            <ul>
                <li><strong>Data Privacy</strong>: Collect only essential data.</li>
                <li><strong>Bias Reduction</strong>: Train models with diverse datasets for fairness.</li>
                <li><strong>Transparency</strong>: Inform users about AI-driven features.</li>
            </ul>
            <h2>Conclusion</h2>
            <p>AI is revolutionizing web development, enabling <strong>responsive</strong>, <strong>adaptive</strong>, and <strong>intelligent</strong> applications. Full-stack developers can harness <strong>machine learning models</strong>, <strong>chatbots</strong>, <strong>predictive analytics</strong>, and <strong>security enhancements</strong> to build cutting-edge web apps. By integrating AI thoughtfully, developers can create user experiences that are both innovative and ethical.</p>
        `
    };

    // Hamburger Menu
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('hidden');
        hamburger.classList.toggle('active');
        hamburger.querySelector('i').classList.toggle('fa-bars');
        hamburger.querySelector('i').classList.toggle('fa-times');
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
            if (!navLinks.classList.contains('hidden')) {
                navLinks.classList.add('hidden');
                hamburger.classList.remove('active');
                hamburger.querySelector('i').classList.add('fa-bars');
                hamburger.querySelector('i').classList.remove('fa-times');
            }
        });
    });

    // Section Fade-In Animation and Active Nav Link
    const sections = document.querySelectorAll('.section');
    const navLinksItems = document.querySelectorAll('.nav-link');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Update active nav link
                const sectionId = entry.target.getAttribute('id');
                navLinksItems.forEach(link => {
                    const href = link.getAttribute('href').slice(1);
                    link.setAttribute('data-active', href === sectionId ? 'true' : 'false');
                });
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));

    // Testimonial Carousel
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevButton = document.getElementById('prev-testimonial');
    const nextButton = document.getElementById('next-testimonial');
    let currentIndex = 0;

    function showTestimonial(index) {
        carouselItems.forEach((item, i) => {
            item.classList.toggle('hidden', i !== index);
        });
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        showTestimonial(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        showTestimonial(currentIndex);
    });

    // Contact Form Validation
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        let isValid = true;

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        const nameError = document.getElementById('name-error');
        const emailError = document.getElementById('email-error');
        const messageError = document.getElementById('message-error');

        nameError.classList.add('hidden');
        emailError.classList.add('hidden');
        messageError.classList.add('hidden');

        if (!name.value.trim()) {
            nameError.classList.remove('hidden');
            isValid = false;
        }

        if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
            emailError.classList.remove('hidden');
            isValid = false;
        }

        if (!message.value.trim()) {
            messageError.classList.remove('hidden');
            isValid = false;
        }

        if (!isValid) {
            e.preventDefault();
        }
        // Allow natural form submission to Formspree if valid
    });

    // Back to Top Button
    const backToTop = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        backToTop.style.opacity = window.scrollY > 300 ? '1' : '0';
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Project Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter projects
            projects.forEach(project => {
                const projectCategory = project.getAttribute('data-category');
                project.style.display = (category === 'all' || category === projectCategory) ? 'block' : 'none';
            });
        });
    });

    // Blog Modal
    const blogModal = document.getElementById('blog-modal');
    const blogContent = document.getElementById('blog-content');
    const closeModal = document.getElementById('close-modal');
    const readMoreButtons = document.querySelectorAll('.read-more');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const blogId = button.getAttribute('data-blog');
            blogContent.innerHTML = `<div class="blog-content">${blogPosts[blogId]}</div>`;
            blogModal.classList.remove('hidden');
        });
    });

    closeModal.addEventListener('click', () => {
        blogModal.classList.add('hidden');
        blogContent.innerHTML = '';
    });

    // Close modal when clicking outside
    blogModal.addEventListener('click', (e) => {
        if (e.target === blogModal) {
            blogModal.classList.add('hidden');
            blogContent.innerHTML = '';
        }
    });
});
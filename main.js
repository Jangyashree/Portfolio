 // Typed.js initialization
        const typed = new Typed('.text', {
            strings: ['Python Developer', 'Full Stack Developer', 'Web Developer', 'Problem Solver'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });

        // Mobile menu toggle
        function toggleMenu() {
            const navbar = document.getElementById('navbar');
            const toggle = document.querySelector('.menu-toggle i');
            
            navbar.classList.toggle('active');
            
            if (navbar.classList.contains('active')) {
                toggle.classList.remove('fa-bars');
                toggle.classList.add('fa-times');
            } else {
                toggle.classList.remove('fa-times');
                toggle.classList.add('fa-bars');
            }
        }

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.navbar a').forEach(link => {
            link.addEventListener('click', () => {
                const navbar = document.getElementById('navbar');
                const toggle = document.querySelector('.menu-toggle i');
                
                navbar.classList.remove('active');
                toggle.classList.remove('fa-times');
                toggle.classList.add('fa-bars');
            });
        });

        // Active navigation link
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.navbar a');
            
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('active');
                }
            });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Form submission
        function handleSubmit(event) {
            event.preventDefault();
            const formData = new FormData(event.target);
            const data = Object.fromEntries(formData);
            
            // Simulate form submission
            alert('Thank you for your message! I will get back to you soon.');
            event.target.reset();
        }

        // WhatsApp function
        function openWhatsApp() {
            const message = encodeURIComponent("Hi Jangyashree, I found your portfolio and would like to connect!");
            window.open(`https://wa.me/918144221894?text=${message}`, '_blank');
        }

        // Resume download function
        function downloadResume() {
            window.open('Jangyashree.resume.pdf', '_blank');
        }

        // Progress bar animation on scroll
        const observerOptions = {
            threshold: 0.3,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe skill bars for animation
        document.querySelectorAll('.bar').forEach(bar => {
            observer.observe(bar);
        });

        // Header background on scroll
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(31, 36, 45, 0.95)';
            } else {
                header.style.background = 'rgba(31, 36, 45, 0.9)';
            }
        });

        // Create floating particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 50;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 6 + 's';
                particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
                particlesContainer.appendChild(particle);
            }
        }

        // Create floating code snippets
        function createFloatingCode() {
            const floatingContainer = document.getElementById('floatingElements');
            const codeSnippets = [
                'function()', 'const x = {}', '<div>', 'import React', 'def main():', 
                'npm install', 'git commit', '{ color: #fff }', 'return true;', 'async/await'
            ];
            
            setInterval(() => {
                if (Math.random() > 0.7) {
                    const codeElement = document.createElement('div');
                    codeElement.className = 'floating-code';
                    codeElement.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
                    codeElement.style.left = Math.random() * 100 + '%';
                    codeElement.style.animationDuration = (Math.random() * 4 + 6) + 's';
                    floatingContainer.appendChild(codeElement);
                    
                    setTimeout(() => {
                        codeElement.remove();
                    }, 10000);
                }
            }, 2000);
        }

        // Add click effects to skill cards
        document.querySelectorAll('.skill-card').forEach(card => {
            card.addEventListener('click', function() {
                this.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            });
        });

        // Initialize animations
        document.addEventListener('DOMContentLoaded', function() {
            createParticles();
            createFloatingCode();
            
            // Trigger progress bar animations on load
            setTimeout(() => {
                document.querySelectorAll('.progress-fill').forEach(fill => {
                    fill.style.width = fill.className.includes('html') ? '92%' :
                                      fill.className.includes('css') ? '88%' :
                                      fill.className.includes('js') ? '85%' :
                                      fill.className.includes('python') ? '90%' :
                                      fill.className.includes('react') ? '82%' : '78%';
                });
            }, 500);
        });

        // Add mouse follow effect
        document.addEventListener('mousemove', (e) => {
            const cards = document.querySelectorAll('.skill-card');
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (y - centerY) / 10;
                    const rotateY = (centerX - x) / 10;
                    
                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.02)`;
                } else {
                    card.style.transform = '';
                }
            });
        });
    
        // Form submission handler
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = document.getElementById('submitBtn');
            const successMessage = document.getElementById('successMessage');
            
            // Add loading state
            submitBtn.classList.add('loading');
            submitBtn.style.color = 'transparent';
            
            // Simulate form submission
            setTimeout(() => {
                // Remove loading state
                submitBtn.classList.remove('loading');
                submitBtn.style.color = '#ffffff';
                
                // Show success message
                successMessage.classList.add('show');
                
                // Reset form
                this.reset();
                
                // Hide success message after 3 seconds
                setTimeout(() => {
                    successMessage.classList.remove('show');
                }, 3000);
            }, 2000);
        });

        // Enhanced input animations
        document.querySelectorAll('.form-input, .form-textarea').forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.style.transform = 'scale(1.02)';
            });
            
            input.addEventListener('blur', function() {
                this.parentElement.style.transform = 'scale(1)';
            });
        });

        // Parallax effect for floating orbs
        document.addEventListener('mousemove', (e) => {
            const orbs = document.querySelectorAll('.floating-orb');
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            orbs.forEach((orb, index) => {
                const speed = (index + 1) * 0.5;
                const xOffset = (x - 0.5) * 50 * speed;
                const yOffset = (y - 0.5) * 50 * speed;
                
                orb.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
            });
        });

        // Dynamic background color change
        let colorIndex = 0;
        const colors = [
            'linear-gradient(135deg, #0a0a1a 0%, #1a1a3e 25%, #2d1b69 50%, #1a1a3e 75%, #0a0a1a 100%)',
            'linear-gradient(135deg, #1a0a1a 0%, #3e1a1a 25%, #692d1b 50%, #3e1a1a 75%, #1a0a0a 100%)',
            'linear-gradient(135deg, #0a1a1a 0%, #1a3e1a 25%, #1b692d 50%, #1a3e1a 75%, #0a1a0a 100%)'
        ];

        setInterval(() => {
            colorIndex = (colorIndex + 1) % colors.length;
            document.body.style.background = colors[colorIndex];
        }, 15000);

        // Typing effect for placeholder text
        function typeWriter(element, text, speed = 50) {
            let i = 0;
            element.placeholder = '';
            
            function type() {
                if (i < text.length) {
                    element.placeholder += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }
            type();
        }

        // Initialize typing effects
        setTimeout(() => {
            const inputs = [
                { element: document.getElementById('name'), text: 'Your full name...' },
                { element: document.getElementById('email'), text: 'your.email@example.com' },
                { element: document.getElementById('subject'), text: 'What\'s this about?' },
                { element: document.getElementById('message'), text: 'Tell me about your project or idea...' }
            ];
            
            inputs.forEach((input, index) => {
                setTimeout(() => {
                    typeWriter(input.element, input.text, 30);
                }, index * 500);
            });
        }, 2000);

        // Contact item click effects
        document.querySelectorAll('.contact-item').forEach(item => {
            item.addEventListener('click', function() {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            });
        });

        // Social link hover effects
        document.querySelectorAll('.social-link').forEach(link => {
            link.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px) scale(1.1) rotate(360deg)';
            });
            
            link.addEventListener('mouseleave', function() {
                this.style.transform = '';
            });
        });
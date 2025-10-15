document.addEventListener('DOMContentLoaded', () => {

    const header = document.querySelector('.header');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    const tabLinks = document.querySelectorAll('.tab-link');
    const menuContents = document.querySelectorAll('.menu-content');

    // 1. Header background on scroll
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    // 2. Mobile navigation toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // 3. Close mobile menu when a link is clicked
    navLinks.forEach(link => link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
    
    // 4. Menu tabs functionality
    tabLinks.forEach(tab => {
        tab.addEventListener('click', () => {
            tabLinks.forEach(item => item.classList.remove('active'));
            menuContents.forEach(item => item.classList.remove('active'));
            
            const target = document.querySelector(`#${tab.dataset.tab}`);
            tab.classList.add('active');
            target.classList.add('active');
        });
    });

    // 5. Active navigation link on scroll
    const updateActiveNavLink = () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - (section.clientHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    };
    
    // Attach scroll listeners
    window.addEventListener('scroll', () => {
        handleScroll();
        updateActiveNavLink();
    });

});

document.addEventListener('DOMContentLoaded', () => {

    // (Keep all your existing code for header, mobile nav, etc. here)

    // ... existing code ...

    // NEW CODE: Menu filtering functionality
    const filterContainer = document.querySelector('.menu-filters');
    if (filterContainer) {
        const filterButtons = filterContainer.querySelectorAll('.filter-btn');
        const menuItems = document.querySelectorAll('.menu-item-card');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filterValue = button.getAttribute('data-filter');

                menuItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'flex'; // Use 'flex' to match the card's display property
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

});
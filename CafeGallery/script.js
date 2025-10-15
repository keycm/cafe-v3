document.addEventListener('DOMContentLoaded', () => {

    // --- 1. General Setup ---
    const header = document.querySelector('.header');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    const tabLinks = document.querySelectorAll('.tab-link');
    const menuContents = document.querySelectorAll('.menu-content');

    // --- 2. Header and Navigation Logic ---
    if (header) {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', handleScroll);
    }

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    navLinks.forEach(link => link.addEventListener('click', () => {
        if (hamburger) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }));

    // --- 3. Homepage Menu Tabs Logic ---
    tabLinks.forEach(tab => {
        tab.addEventListener('click', () => {
            tabLinks.forEach(item => item.classList.remove('active'));
            menuContents.forEach(item => item.classList.remove('active'));

            const target = document.querySelector(`#${tab.dataset.tab}`);
            tab.classList.add('active');
            if (target) {
                target.classList.add('active');
            }
        });
    });

    // --- 4. Menu Page Filtering Logic ---
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
                        item.style.display = 'flex';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // --- 5. Add to Cart Logic ---
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const id = button.dataset.id;
            const name = button.dataset.name;
            const price = parseFloat(button.dataset.price);
            const image = button.closest('.menu-item-card').querySelector('img').src;

            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            let itemInCart = cart.find(item => item.id === id);

            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                cart.push({ id, name, price, image, quantity: 1 });
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            alert(`${name} has been added to your order!`);
        });
    });

});

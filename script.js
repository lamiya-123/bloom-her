// Business Details Data
const businessDetails = {
    baking: {
        title: '🎂 Home Baking Business',
        description: 'Start a successful home-based baking business with low investment and high demand.',
        investment: '₹5,000 - ₹20,000',
        monthlyEarnings: '₹30,000 - ₹80,000',
        timeToProfit: '2-3 months',
        rating: '4.8/5 (245 businesses)',
        details: [
            'Initial Investment: Equipment (mixer ₹3,000-8,000), baking supplies, and packaging materials',
            'Skills Needed: Basic baking knowledge (can be learned from free guides)',
            'Market Demand: VERY HIGH - Orders available through social media and delivery apps',
            'Customer Base: 2-5 orders per day after 3-4 months of marketing',
            'Profit Margin: 40-60% based on product pricing',
            'Time Commitment: 3-4 hours per day for production and delivery',
            'Scalability: Can grow from home kitchen to commercial setup',
            'Challenges: Competition, food safety regulations, consistency'
        ],
        successTip: 'Focus on specialty items (sugar-free, vegan, eggless) to stand out in the market.',
        resources: 'Free recipes guide, pricing calculator, packaging design templates'
    },
    tailoring: {
        title: '🧵 Tailoring & Boutique Services',
        description: 'Offer expert tailoring and boutique services from your home with minimal equipment.',
        investment: '₹8,000 - ₹30,000',
        monthlyEarnings: '₹40,000 - ₹100,000',
        timeToProfit: '3-4 months',
        rating: '4.9/5 (312 businesses)',
        details: [
            'Initial Investment: Sewing machine (₹8,000-20,000), fabric samples, measuring tools',
            'Skills Needed: Tailoring expertise or willingness to learn',
            'Market Demand: VERY HIGH - Alterations and custom designs always in demand',
            'Customer Base: Regular clients + recommendations lead to steady income',
            'Profit Margin: 35-50% depending on complexity',
            'Time Commitment: Flexible, can set your own hours',
            'Scalability: Can hire assistants and expand to a boutique',
            'Advantages: Low operational costs, high customer loyalty'
        ],
        successTip: 'Build strong relationships with wedding planners and fashion designers for bulk orders.',
        resources: 'Measurement guide, design software tutorials, business registration templates'
    },
    hampers: {
        title: '🎁 Customized Gift Hampers',
        description: 'Create beautiful, customized gift hampers for corporate and personal occasions.',
        investment: '₹3,000 - ₹15,000',
        monthlyEarnings: '₹25,000 - ₹60,000',
        timeToProfit: '1-2 months',
        rating: '4.7/5 (189 businesses)',
        details: [
            'Initial Investment: Packaging materials, samples, display items',
            'Skills Needed: Creativity and organization (no formal training needed)',
            'Market Demand: HIGH - Seasonal peaks during festivals and corporate seasons',
            'Customer Base: Birthday gifting, corporate events, weddings, festivals',
            'Profit Margin: 50-70% on customized orders',
            'Time Commitment: 2-3 hours per hamper including packing',
            'Scalability: Can take on bulk corporate orders',
            'Peak Seasons: Diwali, Christmas, Valentine\'s Day'
        ],
        successTip: 'Partner with local businesses for corporate gifting and get bulk orders.',
        resources: 'Hamper design ideas, supplier contacts, corporate outreach templates'
    },
    skincare: {
        title: '💅 Organic Skincare Products',
        description: 'Create and sell natural, organic skincare products made from home.',
        investment: '₹6,000 - ₹25,000',
        monthlyEarnings: '₹35,000 - ₹90,000',
        timeToProfit: '2-3 months',
        rating: '4.8/5 (267 businesses)',
        details: [
            'Initial Investment: Ingredients, bottles, labels, storage containers',
            'Skills Needed: Basic knowledge of skincare formulations (courses available)',
            'Market Demand: VERY HIGH - Natural skincare is trending',
            'Customer Base: Online customers through Instagram, Amazon, local deliveries',
            'Profit Margin: 60-80% on self-made products',
            'Time Commitment: 2-3 hours daily for preparation and packaging',
            'Scalability: Move to commercial kitchen for scaling',
            'Certifications: Ayush certification recommended for marketing'
        ],
        successTip: 'Create a signature product line and build a strong social media presence.',
        resources: 'Organic recipes, certification guides, labeling templates, supplier database'
    },
    eco: {
        title: '♻️ Eco-Friendly Products',
        description: 'Manufacture and sell sustainable, eco-friendly products for conscious consumers.',
        investment: '₹4,000 - ₹18,000',
        monthlyEarnings: '₹28,000 - ₹70,000',
        timeToProfit: '2-3 months',
        rating: '4.6/5 (156 businesses)',
        details: [
            'Initial Investment: Biodegradable materials, packaging, tools',
            'Skills Needed: Basic crafting skills (can learn through workshops)',
            'Market Demand: GROWING - Eco-conscious consumers willing to pay premium',
            'Products: Bamboo products, cloth bags, natural cleaning supplies, etc.',
            'Customer Base: Young, environmentally conscious demographic',
            'Profit Margin: 50-70% depending on product sourcing',
            'Time Commitment: 3-4 hours daily',
            'Scalability: Partner with retailers and online platforms'
        ],
        successTip: 'Emphasize sustainability in marketing; build a brand story around environmental impact.',
        resources: 'Sustainable sourcing guide, certification info, eco-marketing templates'
    },
    handicrafts: {
        title: '🎨 Handicrafts & Artisan Products',
        description: 'Create beautiful handmade products and sell them locally and online.',
        investment: '₹5,000 - ₹22,000',
        monthlyEarnings: '₹30,000 - ₹75,000',
        timeToProfit: '2-3 months',
        rating: '4.7/5 (203 businesses)',
        details: [
            'Initial Investment: Craft materials, tools, workspace setup',
            'Skills Needed: Artistic ability (can be self-taught or learned through courses)',
            'Market Demand: HIGH - Handmade products are valued by collectors',
            'Products: Pottery, jewelry, wall art, decorative items, etc.',
            'Customer Base: Online marketplaces, local stores, tourist areas',
            'Profit Margin: 40-60% depending on material costs',
            'Time Commitment: Flexible, depends on order volume',
            'Certifications: Artisan certification helps in government schemes'
        ],
        successTip: 'Create a unique artistic style and use Instagram/Pinterest for marketing.',
        resources: 'Craft tutorials, marketplace guides, photography tips, pricing strategies'
    },
    events: {
        title: '🎉 Event Management Services',
        description: 'Plan and coordinate events from your home without significant overhead.',
        investment: '₹10,000 - ₹40,000',
        monthlyEarnings: '₹50,000 - ₹150,000',
        timeToProfit: '1-2 months',
        rating: '4.9/5 (298 businesses)',
        details: [
            'Initial Investment: Event planning software, portfolio materials, contacts database',
            'Skills Needed: Organization, communication, problem-solving abilities',
            'Market Demand: VERY HIGH - Constant demand for parties, weddings, corporate events',
            'Services: Planning, coordination, vendor management, decoration',
            'Customer Base: Corporate clients, wedding planners, individuals',
            'Profit Margin: 25-40% on event budgets (commission-based)',
            'Time Commitment: Varies by event volume (can be very flexible)',
            'Revenue Model: Consultation fees, vendor commissions, percentage of event budget'
        ],
        successTip: 'Network extensively with vendors and get positive reviews for referrals.',
        resources: 'Event planning templates, vendor directory, contract samples, pricing guide'
    },
    plants: {
        title: '🌿 Indoor Plants & Home Décor DIY',
        description: 'Grow and sell indoor plants or create home décor items with DIY kits.',
        investment: '₹4,000 - ₹16,000',
        monthlyEarnings: '₹25,000 - ₹65,000',
        timeToProfit: '2-3 months',
        rating: '4.8/5 (278 businesses)',
        details: [
            'Initial Investment: Seeds/saplings, pots, soil, growing supplies',
            'Skills Needed: Basic gardening knowledge (easily learnable)',
            'Market Demand: HIGH - Plant lovers and home décor enthusiasts willing to pay',
            'Products: Indoor plants, planters, DIY terrariums, plant subscription boxes',
            'Customer Base: Young urban professionals, home decorators',
            'Profit Margin: 50-80% depending on plant rarity',
            'Time Commitment: 2-3 hours daily for watering and maintenance',
            'Scalability: Move to larger space or create digital DIY courses'
        ],
        successTip: 'Create educational content on plant care to build trust and engagement.',
        resources: 'Plant care guides, DIY kit templates, packaging ideas, subscription model guide'
    },
    cloudkitchen: {
        title: '👨‍🍳 Cloud Kitchen Services',
        description: 'Operate a cloud kitchen delivering prepared meals without a physical storefront.',
        investment: '₹12,000 - ₹45,000',
        monthlyEarnings: '₹60,000 - ₹150,000',
        timeToProfit: '2-3 months',
        rating: '4.9/5 (334 businesses)',
        details: [
            'Initial Investment: Kitchen equipment, food supplier contacts, delivery partnership',
            'Skills Needed: Cooking expertise and food handling knowledge',
            'Market Demand: VERY HIGH - Delivery apps boom making this highly profitable',
            'Restaurant Type: Specialty cuisine (Chinese, Continental, Healthy bowls, etc.)',
            'Customer Base: Busy professionals ordering through Zomato, Swiggy, etc.',
            'Profit Margin: 30-50% depending on meal type and pricing',
            'Time Commitment: 4-6 hours daily (peak lunch and dinner times)',
            'Scalability: Easy to scale and add delivery partnerships'
        ],
        successTip: 'Focus on one cuisine type and become an expert; maintain consistent quality.',
        resources: 'Food handling certification guide, supplier database, delivery partnership info, menu planning templates'
    }
};

// Modal Functions
function openDetails(category) {
    // Map category names to individual HTML pages
    const categoryMap = {
        'baking': 'baking.html',
        'tailoring': 'tailoring.html',
        'hampers': 'gift-hampers.html',
        'skincare': 'skincare.html',
        'eco': 'eco-friendly.html',
        'handicrafts': 'handicrafts.html',
        'events': 'events.html',
        'plants': 'plants.html',
        'cloudkitchen': 'cloud-kitchen.html'
    };
    const categoryPage = categoryMap[category] || 'category.html?category=' + category;
    window.location.href = categoryPage;
}

// Close Success Modal Function
function closeSuccessModal() {
    document.getElementById('successModal').style.display = 'none';
}

// Form Functions
function subscribeNewsletter(event) {
    event.preventDefault();
    const email = document.getElementById('newsletter-email').value;

    if (email) {
        showSuccessMessage(`✅ Welcome! We've sent confirmation to ${email}. Check your inbox for resources!`);
        document.getElementById('newsletter-email').value = '';
    }
}

function showSuccessMessage(message) {
    const modal = document.getElementById('successModal');
    document.getElementById('successMessage').textContent = message;
    modal.style.display = 'block';
}

function startBusinessJourney(businessName) {
    closeDetails();
    showSuccessMessage(`🚀 You're starting your ${businessName} journey! Check your email for the complete startup guide and first steps.`);
}

// Initialize demo account in localStorage on page load
function initializeDemoAccount() {
    const allUsers = JSON.parse(localStorage.getItem('empowerher_users')) || [];
    const demoExists = allUsers.find(u => u.email === 'demo@empowerher.com');

    if (!demoExists) {
        allUsers.push({
            fullName: 'Demo User',
            email: 'demo@empowerher.com',
            phone: '9876543210',
            businessCategory: 'baking',
            businessName: 'Demo Baking',
            location: 'Mumbai',
            password: 'Demo@123'
        });
        localStorage.setItem('empowerher_users', JSON.stringify(allUsers));
    }
}

// Button Click Handlers
document.addEventListener('DOMContentLoaded', function () {
    // Initialize demo account first
    initializeDemoAccount();

    // Start Journey Button - Navigate to registration
    const startJourneyBtn = document.getElementById('startJourney');
    if (startJourneyBtn) {
        startJourneyBtn.addEventListener('click', function () {
            window.location.href = 'register.html';
        });
    }

    // Explore Button - Navigate to registration
    const exploreBtn = document.getElementById('exploreBtn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function () {
            window.location.href = 'register.html';
        });
    }

    // Register Button - Navigate to registration
    const registerBtn = document.getElementById('registerBtn');
    if (registerBtn) {
        registerBtn.addEventListener('click', function () {
            window.location.href = 'register.html';
        });
    }

    // Learn More Button - Navigate to registration
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function () {
            window.location.href = 'register.html';
        });
    }

    // Join Community Button
    const joinCommunityBtn = document.getElementById('joinCommunityBtn');
    if (joinCommunityBtn) {
        joinCommunityBtn.addEventListener('click', function () {
            const emailInput = document.getElementById('newsletter-email');
            emailInput.focus();
            emailInput.style.borderColor = '#F8C8DC';
            emailInput.style.boxShadow = '0 0 15px rgba(248, 200, 220, 0.3)';
        });
    }

    // Mobile Navigation
    // Replace the old hamburger listener with this:
    const hamburger = document.getElementById('hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', function () {
            const navLinks = document.querySelector('.nav-links');
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '60px';
            navLinks.style.left = '0';
            navLinks.style.right = '0';
            navLinks.style.flexDirection = 'column';
            navLinks.style.backgroundColor = 'rgba(255,255,255,0.95)';
            navLinks.style.padding = '20px';
            navLinks.style.gap = '15px';
        });
    }


    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const element = document.querySelector(href);
                if (element) {
                    element.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// Close modal when clicking outside
window.addEventListener('click', function (event) {
    const detailsModal = document.getElementById('detailsModal');
    const successModal = document.getElementById('successModal');

    if (event.target === detailsModal) {
        detailsModal.style.display = 'none';
    }
    if (event.target === successModal) {
        successModal.style.display = 'none';
    }
});

// Add scroll reveal animation for cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe cards
document.querySelectorAll('.category-card, .benefit-card, .testimonial-card, .resource-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

console.log('🌸 EmpowerHer Platform Loaded Successfully!');
console.log('Welcome to the Women Entrepreneurship Platform');


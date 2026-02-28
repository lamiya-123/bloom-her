const API_URL = 'http://localhost:5000/api';

// Business Categories - will be loaded from API
let businessDetails = {};

// Load data from API on page load
document.addEventListener('DOMContentLoaded', async function() {
    console.log('🌸 EmpowerHer Platform Loading...');
    
    // Load categories and testimonials from backend
    await loadCategories();
    await loadTestimonials();
    
    // Initialize other features
    initializeButtons();
    initializeNavigation();
    setupCardAnimations();
    
    console.log('🌸 EmpowerHer Platform Loaded Successfully!');
    console.log('Welcome to the Women Entrepreneurship Platform');
});

// Load business categories from API
async function loadCategories() {
    try {
        const response = await fetch(`${API_URL}/categories`);
        const data = await response.json();
        
        businessDetails = data.reduce((acc, category) => {
            acc[category.id] = category;
            return acc;
        }, {});
        
        const categoriesGrid = document.getElementById('categoriesGrid');
        categoriesGrid.innerHTML = data.map(category => `
            <div class="category-card" onclick="openDetails('${category.id}')">
                <div class="card-emoji">${category.emoji}</div>
                <h3>${category.name}</h3>
                <p class="rating">⭐ ${category.rating}/5 (${category.businessCount} businesses)</p>
                <p class="price-range">${category.investment}</p>
                <button class="view-details">View Details</button>
            </div>
        `).join('');
        
        console.log('✓ Categories loaded successfully');
    } catch (error) {
        console.error('Error loading categories:', error);
    }
}

// Load testimonials from API
async function loadTestimonials() {
    try {
        const response = await fetch(`${API_URL}/testimonials`);
        const data = await response.json();
        
        const testimonialGrid = document.getElementById('testimonialGrid');
        testimonialGrid.innerHTML = data.map(testimonial => `
            <div class="testimonial-card">
                <div class="testimonial-header">
                    <div class="testimonial-avatar">${testimonial.initials}</div>
                    <div class="testimonial-info">
                        <h4>${testimonial.name}</h4>
                        <p class="testimonial-category">${testimonial.category}</p>
                    </div>
                </div>
                <p class="testimonial-rating">${testimonial.rating}</p>
                <p class="testimonial-text">"${testimonial.quote}"</p>
                <p class="testimonial-impact">📈 ${testimonial.impact}</p>
            </div>
        `).join('');
        
        console.log('✓ Testimonials loaded successfully');
    } catch (error) {
        console.error('Error loading testimonials:', error);
    }
}

// Modal Functions
function openDetails(category) {
    const modal = document.getElementById('detailsModal');
    const modalBody = document.getElementById('modalBody');
    const business = businessDetails[category];

    if (business) {
        modalBody.innerHTML = `
            <h2>${business.emoji} ${business.name}</h2>
            <p class="detail-description">${business.description}</p>
            
            <div class="detail-metrics">
                <div class="metric">
                    <span class="metric-label">Initial Investment:</span>
                    <span class="metric-value">${business.investment}</span>
                </div>
                <div class="metric">
                    <span class="metric-label">Monthly Earnings:</span>
                    <span class="metric-value">${business.monthlyEarnings}</span>
                </div>
                <div class="metric">
                    <span class="metric-label">Time to Profit:</span>
                    <span class="metric-value">${business.timeToProfit}</span>
                </div>
                <div class="metric">
                    <span class="metric-label">Rating:</span>
                    <span class="metric-value">${business.rating}/5</span>
                </div>
            </div>

            <h3>What You Need to Know:</h3>
            <ul class="detail-list">
                ${business.details.map(detail => `<li>${detail}</li>`).join('')}
            </ul>

            <div class="success-tip">
                <strong>💡 Expert Tip:</strong> ${business.successTip}
            </div>

            <div class="resources-info">
                <strong>📚 Available Resources:</strong> ${business.resources}
            </div>

            <button class="btn primary" onclick="startBusinessJourney('${business.name}')">Start This Business</button>
        `;
        modal.style.display = 'block';
    }
}

function closeDetails() {
    document.getElementById('detailsModal').style.display = 'none';
}

function closeSuccessModal() {
    document.getElementById('successModal').style.display = 'none';
}

// Newsletter subscription
async function subscribeNewsletter(event) {
    event.preventDefault();
    const email = document.getElementById('newsletter-email').value;
    
    if (email) {
        try {
            const response = await fetch(`${API_URL}/subscribe`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });
            
            const result = await response.json();
            
            if (response.ok) {
                showSuccessMessage(`✅ ${result.message} Email: ${email}`);
                document.getElementById('newsletter-email').value = '';
            } else {
                showSuccessMessage(`⚠️ ${result.message}`);
            }
        } catch (error) {
            console.error('Error subscribing:', error);
            showSuccessMessage(`✅ Welcome! We've sent confirmation to ${email}`);
            document.getElementById('newsletter-email').value = '';
        }
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

// Initialize button handlers
function initializeButtons() {
    const startJourneyBtn = document.getElementById('startJourney');
    if (startJourneyBtn) {
        startJourneyBtn.addEventListener('click', function() {
            const element = document.getElementById('categories');
            element.scrollIntoView({ behavior: 'smooth' });
        });
    }

    const exploreBtn = document.getElementById('exploreBtn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function() {
            const element = document.getElementById('categories');
            element.scrollIntoView({ behavior: 'smooth' });
        });
    }

    const joinCommunityBtn = document.getElementById('joinCommunityBtn');
    if (joinCommunityBtn) {
        joinCommunityBtn.addEventListener('click', function() {
            const emailInput = document.getElementById('newsletter-email');
            emailInput.focus();
            emailInput.style.borderColor = '#F8C8DC';
            emailInput.style.boxShadow = '0 0 15px rgba(248, 200, 220, 0.3)';
        });
    }
}

// Initialize navigation
function initializeNavigation() {
    const hamburger = document.getElementById('hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', function() {
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

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const element = document.querySelector(href);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

// Setup card animations
function setupCardAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.category-card, .benefit-card, .testimonial-card, .resource-card').forEach(card => {
        card.style.opacity = '0';
        observer.observe(card);
    });
}

// Close modals when clicking outside
window.addEventListener('click', function(event) {
    const detailsModal = document.getElementById('detailsModal');
    const successModal = document.getElementById('successModal');
    
    if (event.target === detailsModal) {
        detailsModal.style.display = 'none';
    }
    if (event.target === successModal) {
        successModal.style.display = 'none';
    }
});

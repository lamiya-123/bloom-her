const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from frontend folder
app.use(express.static(path.join(__dirname, '../frontend')));

// Database setup
const dbPath = path.join(__dirname, 'empowerher.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Database connection error:', err);
    } else {
        console.log('✓ Connected to SQLite database');
        initializeDatabase();
    }
});

// Initialize database
function initializeDatabase() {
    db.serialize(() => {
        // Categories table
        db.run(`
            CREATE TABLE IF NOT EXISTS categories (
                id TEXT PRIMARY KEY,
                name TEXT NOT NULL,
                emoji TEXT NOT NULL,
                description TEXT NOT NULL,
                investment TEXT NOT NULL,
                monthlyEarnings TEXT NOT NULL,
                timeToProfit TEXT NOT NULL,
                rating REAL NOT NULL,
                businessCount INTEGER NOT NULL,
                details TEXT NOT NULL,
                successTip TEXT NOT NULL,
                resources TEXT NOT NULL
            )
        `);

        // Testimonials table
        db.run(`
            CREATE TABLE IF NOT EXISTS testimonials (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                initials TEXT NOT NULL,
                category TEXT NOT NULL,
                quote TEXT NOT NULL,
                rating TEXT NOT NULL,
                impact TEXT NOT NULL
            )
        `);

        // Newsletter subscriptions table
        db.run(`
            CREATE TABLE IF NOT EXISTS subscribers (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                email TEXT UNIQUE NOT NULL,
                subscribedAt DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `);

        // Business inquiries table
        db.run(`
            CREATE TABLE IF NOT EXISTS inquiries (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                email TEXT NOT NULL,
                businessCategory TEXT NOT NULL,
                message TEXT,
                createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `);

        // Seed data if empty
        seedDatabase();

        console.log('✓ Database tables initialized');
    });
}

// Seed database with initial data
function seedDatabase() {
    // Check if categories table is empty
    db.get('SELECT COUNT(*) as count FROM categories', (err, row) => {
        if (row && row.count === 0) {
            console.log('Seeding database with initial data...');

            const categories = [
                {
                    id: 'baking',
                    name: 'Home Baking',
                    emoji: '�',
                    description: 'Home Baking allows women to turn their passion for baking into a profitable home-based business. Sellers can offer customized cakes, cupcakes, dessert boxes, and festive treats tailored to customer preferences. With low startup investment and flexible working hours, this category is ideal for women who enjoy culinary creativity. Sellers can upload product images, display price ranges, mention flavor options, and specify delivery timelines for local orders.',
                    investment: '₹5,000 - ₹20,000',
                    monthlyEarnings: '₹30,000 - ₹80,000',
                    timeToProfit: '2-3 months',
                    rating: 4.8,
                    businessCount: 245,
                    details: JSON.stringify([
                        'Product Range: Offer customized cakes, cupcakes, dessert boxes, and festive treats',
                        'Customer Focus: Tailor products to customer preferences and dietary needs',
                        'Unique Selling Point: Low startup investment and flexible working hours',
                        'Seller Capabilities: Upload product images, display price ranges, list flavor options',
                        'Delivery: Specify delivery timelines for local orders',
                        'Equipment Needed: Basic baking tools, mixer, oven, and packaging materials',
                        'Skill Level: Basic to intermediate baking knowledge',
                        'Market Potential: High demand through social media and local delivery networks'
                    ]),
                    successTip: 'Focus on specialty items (sugar-free, vegan, eggless) and build a strong social media presence for repeat orders.',
                    resources: 'Baking recipes, pricing guidelines, packaging design templates, hygiene certification info'
                },
                {
                    id: 'tailoring',
                    name: 'Tailoring & Boutique Services',
                    emoji: '👗',
                    description: 'The Tailoring and Boutique category supports women skilled in stitching, designing, and garment customization. Sellers can offer alteration services, ethnic wear stitching, bridal wear, or designer collections. Each listing can include design images, fabric options, price per piece, and estimated delivery duration. This category encourages creative fashion entrepreneurship from home studios or small boutiques.',
                    investment: '₹8,000 - ₹30,000',
                    monthlyEarnings: '₹40,000 - ₹100,000',
                    timeToProfit: '3-4 months',
                    rating: 4.9,
                    businessCount: 312,
                    details: JSON.stringify([
                        'Service Offerings: Alteration services, ethnic wear stitching, bridal wear, designer collections',
                        'Seller Showcase: Display design images, fabric options, price per piece',
                        'Timeline: Specify estimated delivery duration for custom orders',
                        'Business Setup: Home studio or small boutique setup',
                        'Special Services: Customize for weddings, festivals, and special occasions',
                        'Equipment Investment: Quality sewing machine, fabric samples, measuring tools',
                        'Skill Development: Learn advanced stitching and design techniques',
                        'Growth Potential: Scale from home operation to registered boutique business'
                    ]),
                    successTip: 'Build relationships with event planners, wedding coordinators, and fashion retailers for bulk orders and referrals.',
                    resources: 'Fabric sourcing guides, design software tutorials, business registration templates, fashion trend updates'
                },
                {
                    id: 'hampers',
                    name: 'Customized Gift Hampers',
                    emoji: '🎁',
                    description: 'The Gift Hampers category focuses on curated and personalized gifting solutions for festivals, weddings, corporate events, and special occasions. Sellers can showcase themed hampers with decorative packaging, product combinations, and customization options. Listings may include price tiers, bulk order discounts, and occasion-based themes to attract customers.',
                    investment: '₹3,000 - ₹15,000',
                    monthlyEarnings: '₹25,000 - ₹60,000',
                    timeToProfit: '1-2 months',
                    rating: 4.7,
                    businessCount: 189,
                    details: JSON.stringify([
                        'Occasion Focus: Festivals, weddings, corporate events, and special occasions',
                        'Product Display: Showcase themed hampers with decorative packaging and combinations',
                        'Customization: Offer personalized hamper options based on customer preferences',
                        'Pricing Strategy: Display price tiers and bulk order discounts',
                        'Theme Variety: Create occasion-based themes (Diwali, Christmas, Valentine\'s, etc.)',
                        'Target Markets: Corporate gifting, individual celebrations, event planners',
                        'Packaging Excellence: Premium wrapping and presentation for brand building',
                        'Growth Path: Scale from small custom orders to bulk corporate contracts'
                    ]),
                    successTip: 'Partner with corporate offices, event planners, and wedding coordinators for consistent bulk orders throughout the year.',
                    resources: 'Packaging suppliers directory, hamper design templates, corporate outreach strategies, seasonal gifting guides'
                },
                {
                    id: 'skincare',
                    name: 'Organic & Homemade Skincare',
                    emoji: '🌿',
                    description: 'This category supports women creating natural skincare products such as soaps, scrubs, oils, lip balms, and herbal treatments. Sellers can describe ingredients, skin type suitability, and product benefits. Each listing should include high-quality images, price per unit, and safety information. This category promotes wellness-focused and chemical-free entrepreneurship.',
                    investment: '₹6,000 - ₹25,000',
                    monthlyEarnings: '₹35,000 - ₹90,000',
                    timeToProfit: '2-3 months',
                    rating: 4.8,
                    businessCount: 267,
                    details: JSON.stringify([
                        'Product Types: Soaps, scrubs, oils, lip balms, and herbal treatments',
                        'Ingredient Transparency: Detail ingredients, sourcing, and purity standards',
                        'Customization: Highlight skin type suitability (oily, dry, sensitive, combination)',
                        'Product Benefits: Clearly communicate therapeutic and cosmetic benefits',
                        'Presentation: Upload high-quality images, price per unit, and quantities',
                        'Safety Standards: Include ingredient lists and safety certifications',
                        'Wellness Focus: Promote natural and chemical-free product philosophy',
                        'Packaging: Use eco-friendly materials that align with organic brand values'
                    ]),
                    successTip: 'Create signature product lines and build a strong social media presence showcasing before-and-after results and testimonials.',
                    resources: 'Organic ingredient sourcing database, AYUSH certification guides, product formulation recipes, wellness marketing strategies'
                },
                {
                    id: 'eco',
                    name: 'Eco-Friendly Products',
                    emoji: '♻️',
                    description: 'Eco-Friendly Products encourage sustainable business ideas like reusable bags, bamboo toothbrushes, organic household items, and biodegradable packaging. Sellers can highlight environmental impact, product durability, and cost savings. This category appeals to environmentally conscious customers and promotes green living practices.',
                    investment: '₹4,000 - ₹18,000',
                    monthlyEarnings: '₹28,000 - ₹70,000',
                    timeToProfit: '2-3 months',
                    rating: 4.6,
                    businessCount: 156,
                    details: JSON.stringify([
                        'Product Range: Reusable bags, bamboo toothbrushes, organic household items, biodegradable packaging',
                        'Environmental Focus: Highlight carbon footprint reduction and waste elimination',
                        'Durability Message: Emphasize long-term sustainability and product lifespan',
                        'Cost Advantage: Show cost savings compared to single-use alternatives',
                        'Target Audience: Environmentally conscious, eco-aware consumers',
                        'Green Living: Provide tips and guidance on sustainable lifestyle adoption',
                        'Certifications: Seek environmental certifications and eco-labels',
                        'Community Impact: Share positive environmental and social impact stories'
                    ]),
                    successTip: 'Emphasize sustainability in marketing through storytelling about environmental impact and build a brand story around green values.',
                    resources: 'Sustainable material suppliers database, environmental certification info, eco-marketing playbook, green brand building guides'
                },
                {
                    id: 'handicrafts',
                    name: 'Handicrafts',
                    emoji: '🎨',
                    description: 'The Handicrafts category enables women artisans to sell handmade decor items, paintings, craft products, jewelry, and artistic creations. Sellers can upload product photos, describe craftsmanship techniques, and set unique pricing based on customization. This category supports traditional skills and creative expression.',
                    investment: '₹5,000 - ₹22,000',
                    monthlyEarnings: '₹30,000 - ₹75,000',
                    timeToProfit: '2-3 months',
                    rating: 4.7,
                    businessCount: 203,
                    details: JSON.stringify([
                        'Product Categories: Handmade decor, paintings, jewelry, craft items, artistic creations',
                        'Artist Showcase: Upload high-quality photos with detailed product descriptions',
                        'Craftsmanship: Describe traditional techniques, materials, and creative process',
                        'Customization Options: Offer personalized pieces and bespoke designs',
                        'Pricing Flexibility: Set unique prices based on complexity and creative effort',
                        'Traditional Skills: Preserve and promote heritage crafts and cultural art forms',
                        'Creative Expression: Platform for artistic vision and personal creativity',
                        'Market Reach: Connect with collectors, home decorators, and art enthusiasts'
                    ]),
                    successTip: 'Create a unique artistic style and use Instagram and Pinterest for marketing. Document your creative process to build a loyal following.',
                    resources: 'Craft tutorial libraries, marketplace photography guides, pricing strategy templates, artist branding resources'
                },
                {
                    id: 'events',
                    name: 'Event Management',
                    emoji: '🎉',
                    description: 'This category allows women to offer small-scale event planning services for birthdays, baby showers, engagements, and home celebrations. Sellers can showcase decoration themes, service packages, and price estimates. Listings may include portfolio images of past events and customizable packages based on client needs.',
                    investment: '₹10,000 - ₹40,000',
                    monthlyEarnings: '₹50,000 - ₹150,000',
                    timeToProfit: '1-2 months',
                    rating: 4.9,
                    businessCount: 298,
                    details: JSON.stringify([
                        'Event Types: Birthdays, baby showers, engagements, home celebrations, and more',
                        'Portfolio Showcase: Display past event decorations and theme implementations',
                        'Service Packages: Create tiered packages (budget, standard, premium)',
                        'Decoration Themes: Offer multiple theme options (modern, traditional, themed, etc.)',
                        'Customization: Provide flexible packages based on client budget and preferences',
                        'Vendor Network: Build partnerships with caterers, decorators, photographers',
                        'Planning Tools: Use checklists and timelines to manage event organization',
                        'Client Communication: Offer consultation and personalized planning assistance'
                    ]),
                    successTip: 'Network extensively with event vendors and collect positive reviews. Specialize in a particular niche (weddings, corporate, home parties) for focused marketing.',
                    resources: 'Event planning templates, vendor directory database, contract samples, pricing calculators, portfolio presentation guides'
                },
                {
                    id: 'plants',
                    name: 'Indoor Plants & Home Decor DIY',
                    emoji: '🪴',
                    description: 'Women entrepreneurs in this category can sell indoor plants, decorative pots, and DIY home decor products. Listings can include plant care instructions, pot sizes, pricing details, and delivery options. This category blends creativity with wellness and modern home aesthetics.',
                    investment: '₹4,000 - ₹16,000',
                    monthlyEarnings: '₹25,000 - ₹65,000',
                    timeToProfit: '2-3 months',
                    rating: 4.8,
                    businessCount: 278,
                    details: JSON.stringify([
                        'Product Mix: Indoor plants, decorative pots, DIY home decor kits, planters',
                        'Care Instructions: Provide detailed plant care and maintenance guides',
                        'Size Options: Offer variety of plant and pot sizes for different spaces',
                        'Pricing: Display competitive pricing and bulk purchase options',
                        'Delivery: Specify safe delivery methods for living plants',
                        'Wellness Focus: Highlight air purification and health benefits of plants',
                        'DIY Kits: Create subscription boxes with monthly plant surprises',
                        'Educational Content: Share plant styling tips and home decor inspiration'
                    ]),
                    successTip: 'Create educational content on plant care and home styling. Build engagement through social media showing customer plants thriving in their homes.',
                    resources: 'Plant care guide library, DIY project templates, propagation techniques, sustainable packaging options, subscription model guides'
                },
                {
                    id: 'cloudkitchen',
                    name: 'Cloud Kitchen Services',
                    emoji: '🍲',
                    description: 'The Cloud Kitchen category enables women to operate home-based food businesses offering meals, snacks, and specialty dishes. Sellers can list menu items with prices, preparation time, hygiene details, and delivery areas. This category supports culinary entrepreneurs who want to serve customers without opening a physical restaurant.',
                    investment: '₹12,000 - ₹45,000',
                    monthlyEarnings: '₹60,000 - ₹150,000',
                    timeToProfit: '2-3 months',
                    rating: 4.9,
                    businessCount: 334,
                    details: JSON.stringify([
                        'Menu Offerings: Meals, snacks, specialty dishes, and dietary options',
                        'Pricing Transparency: Display clear prices for all menu items with portions',
                        'Preparation Details: Show preparation time and delivery timeframes',
                        'Quality Assurance: Highlight hygiene standards, certifications, and food safety',
                        'Delivery Integration: List delivery areas and integrate with food apps',
                        'Customization: Offer dietary options (vegan, gluten-free, allergies)',
                        'Specialty Focus: Specialize in one cuisine type for brand recognition',
                        'Customer Reviews: Display ratings and testimonials for quality assurance'
                    ]),
                    successTip: 'Focus on one specialty cuisine type and become an expert. Maintain consistent quality and build a loyal customer base through excellent service and food.',
                    resources: 'Food safety certification guides, menu planning templates, restaurant supplier database, food photography tips, delivery app integration guides'
                }
            ];

            // Insert categories
            const insertCategory = db.prepare(`
                INSERT INTO categories 
                (id, name, emoji, description, investment, monthlyEarnings, timeToProfit, rating, businessCount, details, successTip, resources) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `);

            categories.forEach(cat => {
                insertCategory.run(
                    cat.id, cat.name, cat.emoji, cat.description, cat.investment,
                    cat.monthlyEarnings, cat.timeToProfit, cat.rating, cat.businessCount,
                    cat.details, cat.successTip, cat.resources
                );
            });
            insertCategory.finalize();

            // Insert testimonials
            const testimonials = [
                {
                    name: 'Rekha Singh',
                    initials: 'RS',
                    category: 'Home Baking',
                    quote: 'I started with ₹8,000 and a passion for baking. Within 6 months, I\'m earning ₹50,000/month! EmpowerHer\'s resources and community support made all the difference. Now I\'m mentoring other women bakers!',
                    rating: '⭐⭐⭐⭐⭐',
                    impact: 'Business Growth: 425% in 6 months'
                },
                {
                    name: 'Priya Malhotra',
                    initials: 'PM',
                    category: 'Organic Skincare',
                    quote: 'From a stay-at-home mom to a business owner! The branding tips and social media guidance helped me reach 5,000+ customers. My family\'s future is now secured.',
                    rating: '⭐⭐⭐⭐⭐',
                    impact: 'Customers: 5,000+ | Monthly Revenue: ₹75,000'
                },
                {
                    name: 'Anjali Desai',
                    initials: 'AD',
                    category: 'Tailoring & Boutique',
                    quote: 'With my tailoring skills and EmpowerHer\'s guidance, I transformed my home tailoring into a registered boutique. The mentorship program was invaluable!',
                    rating: '⭐⭐⭐⭐⭐',
                    impact: 'From Hobby to ₹1,20,000/month Business'
                },
                {
                    name: 'Neha Kapoor',
                    initials: 'NK',
                    category: 'Cloud Kitchen',
                    quote: 'The business planning template saved me months of work. I got expert feedback, improved my pricing strategy, and now run a booming cloud kitchen!',
                    rating: '⭐⭐⭐⭐⭐',
                    impact: 'Monthly Orders: 2,000+ | Revenue: ₹2,00,000'
                }
            ];

            const insertTestimonial = db.prepare(`
                INSERT INTO testimonials (name, initials, category, quote, rating, impact) 
                VALUES (?, ?, ?, ?, ?, ?)
            `);

            testimonials.forEach(testimonial => {
                insertTestimonial.run(
                    testimonial.name,
                    testimonial.initials,
                    testimonial.category,
                    testimonial.quote,
                    testimonial.rating,
                    testimonial.impact
                );
            });
            insertTestimonial.finalize();

            console.log('✓ Database seeded with initial data');
        }
    });
}

// API Routes

// Get all categories
app.get('/api/categories', (req, res) => {
    db.all('SELECT * FROM categories', (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        const categories = rows.map(row => ({
            ...row,
            details: JSON.parse(row.details)
        }));

        res.json(categories);
    });
});

// Get single category
app.get('/api/categories/:id', (req, res) => {
    db.get('SELECT * FROM categories WHERE id = ?', [req.params.id], (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        if (!row) {
            res.status(404).json({ error: 'Category not found' });
            return;
        }

        row.details = JSON.parse(row.details);
        res.json(row);
    });
});

// Get all testimonials
app.get('/api/testimonials', (req, res) => {
    db.all('SELECT * FROM testimonials', (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// Subscribe to newsletter
app.post('/api/subscribe', (req, res) => {
    const { email } = req.body;

    if (!email) {
        res.status(400).json({ error: 'Email is required' });
        return;
    }

    db.run('INSERT INTO subscribers (email) VALUES (?)', [email], function (err) {
        if (err) {
            if (err.message.includes('UNIQUE')) {
                res.status(400).json({ message: 'Email already subscribed!', error: 'duplicate' });
            } else {
                res.status(500).json({ error: err.message });
            }
            return;
        }

        res.json({
            message: 'Successfully subscribed to newsletter!',
            email: email
        });
        console.log(`✓ New subscriber: ${email}`);
    });
});

// Create business inquiry
app.post('/api/inquiries', (req, res) => {
    const { email, businessCategory, message } = req.body;

    if (!email || !businessCategory) {
        res.status(400).json({ error: 'Email and business category are required' });
        return;
    }

    db.run(
        'INSERT INTO inquiries (email, businessCategory, message) VALUES (?, ?, ?)',
        [email, businessCategory, message || ''],
        function (err) {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            res.json({
                message: 'Inquiry submitted successfully!',
                id: this.lastID
            });
            console.log(`✓ New inquiry from: ${email} for ${businessCategory}`);
        }
    );
});

// Get all subscribers (admin endpoint)
app.get('/api/admin/subscribers', (req, res) => {
    db.all('SELECT * FROM subscribers ORDER BY subscribedAt DESC', (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ total: rows.length, subscribers: rows });
    });
});

// Get all inquiries (admin endpoint)
app.get('/api/admin/inquiries', (req, res) => {
    db.all('SELECT * FROM inquiries ORDER BY createdAt DESC', (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ total: rows.length, inquiries: rows });
    });
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        message: '🌸 EmpowerHer Backend is running!',
        timestamp: new Date().toISOString()
    });
});

// Serve frontend index.html for all non-API routes (SPA routing)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Endpoint not found' });
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
});

// Start server
app.listen(PORT, () => {
    console.log(`\n🌸 EmpowerHer Backend Server`);
    console.log(`✓ Server running on http://localhost:${PORT}`);
    console.log(`✓ API endpoints available at http://localhost:${PORT}/api`);
    console.log(`✓ Database: ${dbPath}\n`);
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\n✓ Shutting down server...');
    db.close((err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('✓ Database connection closed');
        process.exit(0);
    });
});

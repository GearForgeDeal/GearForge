# ⚡ GearForge — Budget Gaming Affiliate Website
### Complete Setup & Launch Guide

---

## 📁 Files Included

| File | Description |
|------|-------------|
| `index.html` | Homepage |
| `style.css` | All styles (dark gaming theme) |
| `script.js` | Navigation + interactions |
| `category-mice.html` | Gaming Mice category page |
| `article-best-gaming-mouse-under-30.html` | Article 1 |
| `article-rgb-setup-under-100.html` | Article 2 |
| `article-best-budget-keyboard-2025.html` | Article 3 |
| `article-streaming-setup-under-150.html` | Article 4 |
| `article-best-gaming-headset-under-50.html` | Article 5 |
| `affiliate-disclosure.html` | Legal page (required by Amazon) |
| `sitemap.xml` | SEO sitemap |

---

## 🚀 5-Step Launch Checklist

### Step 1: Get Your Amazon Affiliate Tag
1. Go to: https://affiliate-program.amazon.com (or .co.uk / .de for European)
2. Sign up for Amazon Associates
3. Your tag will look like: `gearforge-21` or `yourname-20`
4. Find & replace ALL instances of `YOUR-AFFILIATE-TAG` with your tag

### Step 2: Replace Product Links
Each product card has a link like:
```
https://www.amazon.com/dp/B091V1LJ4Q?tag=YOUR-AFFILIATE-TAG
```
- Verify each ASIN (product code) is still valid on Amazon
- Get fresh links from Amazon SiteStripe bar (top of Amazon pages when logged in as Associate)
- For European visitors: use Amazon OneLink to auto-redirect to local stores

### Step 3: Replace Placeholder Images
- Replace `https://via.placeholder.com/...` with real Amazon product images
- Get images from: Amazon product pages → right-click image → copy URL
- Or use Amazon's Product Advertising API for dynamic images

### Step 4: Upload & Publish
**Option A — Free hosting (GitHub Pages):**
1. Create a GitHub account
2. New repository → upload all files
3. Settings → Pages → Deploy from main branch
4. Your site: `https://yourusername.github.io/gearforge`

**Option B — Paid hosting (recommended):**
- Hostinger (~€3/month) or SiteGround (~€4/month)
- Upload via File Manager or FTP
- Point your domain to the host

### Step 5: SEO Setup
1. Open `sitemap.xml` → replace `https://www.gearforge.com` with your real domain
2. Submit sitemap to Google Search Console: https://search.google.com/search-console
3. Also submit to Bing Webmaster Tools
4. Wait 2-6 weeks for Google to index your pages

---

## 💰 Monetization Strategy

### How Amazon Associates Works
- Visitor clicks your affiliate link → goes to Amazon
- If they buy **anything** within 24 hours → you earn 1–10% commission
- Gaming accessories typically earn 3–5% commission
- €35 keyboard sale = ~€1.05–€1.75 per click that converts

### Realistic Revenue Projections
| Monthly Traffic | Conv. Rate | Avg. Order | Monthly Revenue |
|----------------|------------|------------|-----------------|
| 500 visitors | 3% | €30 | ~€13–27 |
| 2,000 visitors | 3% | €35 | ~€63–105 |
| 10,000 visitors | 4% | €40 | ~€480–800 |

### How to Grow Traffic
1. **Publish 2-3 new articles/month** — target "best [product] under €X" keywords
2. **Internal linking** — link between related articles and category pages
3. **Update articles quarterly** — Google rewards fresh content
4. **Social sharing** — Reddit (r/buildapc, r/gamingpc), Twitter, Discord servers
5. **YouTube** — create video versions of top articles, link back to site

### High-Value Keywords to Target Next
- "best gaming mouse under 50"
- "gaming desk setup budget"
- "best wireless gaming headset under 100"
- "gaming keyboard and mouse combo under 50"
- "best budget gaming chair"
- "gaming monitor under 200"

---

## ✏️ Customization Guide

### Change Brand Name
Find & replace `GearForge` with your preferred site name in all HTML files.

### Change Colors
In `style.css`, edit the CSS variables at the top:
```css
--neon-cyan: #00f5ff;    /* Main accent color */
--neon-purple: #bf00ff;  /* Secondary accent */
--neon-green: #00ff88;   /* Prices + wins */
```

### Add More Category Pages
Copy `category-mice.html`, rename it, update:
- `<title>` tag
- `<meta name="description">`
- Product cards
- Internal links

### Add More Articles
Copy any article HTML file, rename it, update:
- `<title>` and `<meta>` tags
- H1 heading
- All product names, prices, and affiliate links
- Add to sitemap.xml

---

## 📋 Legal Requirements (Don't Skip!)

Amazon Associates requires:
1. **Affiliate disclosure** on every page — ✅ Already included in footer
2. **Full disclosure page** — ✅ `affiliate-disclosure.html` included
3. **No fake reviews** — all prices and reviews must be real
4. **No price claims** — never guarantee a specific price (prices change)
5. **Update prices regularly** — "~€24" (approximate) is safer than "€24.99"

---

## 🆘 Need Help?

- Amazon Associates help: https://affiliate-program.amazon.com/help
- Google Search Console: https://search.google.com/search-console
- Free hosting: https://pages.github.com

Good luck! 🚀

# Neural Nurture Website

Modern, responsive website for Neural Nurture - An emerging AI research lab built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- ✅ Built with Next.js 14 (App Router)
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Google Analytics integration
- ✅ Formspree contact form integration
- ✅ Google Maps embed
- ✅ Fully responsive design
- ✅ Dark mode toggle
- ✅ Smooth scrolling navigation
- ✅ Optimized for Netlify deployment
- ✅ SEO-friendly with metadata

## 📋 Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager
- A Namecheap domain (for custom domain)
- Formspree account (for contact form)
- Google Analytics account (optional)

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your credentials:

```env
# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-Y45VVZJ240

# Formspree (Get from https://formspree.io)
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/mzzelegy
```

**Note:** These values are already configured as fallbacks in the code, so the site will work even without the `.env.local` file.

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Configuration Guide

### Google Analytics Setup

1. Go to [Google Analytics](https://analytics.google.com)
2. Create a new property for your website
3. Get your Measurement ID (format: G-XXXXXXXXXX)
4. Add it to `.env.local` as `NEXT_PUBLIC_GA_MEASUREMENT_ID`

### Formspree Setup

1. Go to [Formspree.io](https://formspree.io)
2. Create a new form
3. Copy your form endpoint URL
4. Add it to `.env.local` as `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
5. Update the endpoint in `src/components/Contact.tsx` if needed

### Google Maps

The map is already embedded in `src/components/Contact.tsx`. To customize:

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your location
3. Click "Share" → "Embed a map"
4. Copy the iframe src URL
5. Replace the iframe src in `Contact.tsx`

## 🚢 Deployment to Netlify

### Method 1: Deploy via GitHub (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/neural-nurture.git
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to [Netlify](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `out`
   - Add environment variables in Netlify:
     - `NEXT_PUBLIC_GA_MEASUREMENT_ID`
     - `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
   - Click "Deploy site"

3. **Set up Custom Domain (Namecheap):**
   - In Netlify, go to Site settings → Domain management
   - Click "Add custom domain"
   - Enter your domain (e.g., neuralnurture.com)
   - Follow Netlify's DNS instructions
   - In Namecheap:
     - Go to Domain List → Manage → Advanced DNS
     - Add/Update these records:
       ```
       Type: A Record
       Host: @
       Value: 75.2.60.5 (Netlify's load balancer IP)
       
       Type: CNAME Record
       Host: www
       Value: your-site-name.netlify.app
       ```
   - Wait for DNS propagation (can take up to 48 hours)
   - Enable HTTPS in Netlify (automatic)

### Method 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

## 📁 Project Structure

```
neural-nurture-nextjs/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with GA
│   │   ├── page.tsx            # Main page
│   │   └── globals.css         # Global styles
│   └── components/
│       ├── Navigation.tsx      # Header with navigation
│       ├── Hero.tsx            # Hero section
│       ├── About.tsx           # About section
│       ├── Team.tsx            # Team section
│       ├── Services.tsx        # Services section
│       ├── Waitlist.tsx        # Waitlist section
│       ├── Careers.tsx         # Careers section
│       ├── Contact.tsx         # Contact form (Formspree)
│       └── Footer.tsx          # Footer
├── public/                     # Static files
├── .env.example                # Environment variables template
├── .env.local                  # Your environment variables (create this)
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── next.config.js
├── netlify.toml                # Netlify configuration
└── README.md
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change the color scheme.

### Content
All content is in the component files under `src/components/`. Edit these files to update:
- Company information
- Team profiles
- Services descriptions
- Career listings

### Styling
- Global styles: `src/app/globals.css`
- Component-specific styles: Inline Tailwind classes in each component

## 🔍 SEO

Metadata is configured in `src/app/layout.tsx`. Update:
- Title
- Description
- Keywords

## 🐛 Troubleshooting

### Build fails on Netlify
- Check that all environment variables are set in Netlify
- Ensure Node.js version is 18.17 or later
- Check build logs for specific errors

### Form not working
- Verify Formspree endpoint is correct
- Check browser console for errors
- Ensure email field has `name="email"` attribute

### Analytics not tracking
- Verify GA Measurement ID is correct
- Check that the ID is in the correct format (G-XXXXXXXXXX)
- Allow 24-48 hours for data to appear in GA

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🤝 Support

For issues or questions:
- Email: neuralnurtureindia@gmail.com
- Create an issue in the GitHub repository

## 📄 License

© 2024 Neural Nurture. All rights reserved.

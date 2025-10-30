# Gallery Page Guide

## Overview
The Gallery page is a premium, cinematic showcase of your advertising campaigns designed to match Apple's aesthetic with smooth animations, elegant layouts, and immersive user experience.

## Features Implemented

### ✅ Hero Section (Featured Gallery)
- **Dynamic Bento-style Grid**: Variable-sized image tiles create visual interest
- **8 Featured Images**: Handpicked campaigns displayed prominently
- **Smooth Animations**: Staggered fade-in-scale effects on scroll
- **Hover Effects**:
  - 1.1x zoom on images
  - Gradient overlays
  - Zoom icon with backdrop blur
  - Corner accent highlights
  - Shimmer effect animation

### ✅ Full Gallery Section
- **Batch Loading**: Loads 5 images at a time after clicking "View Full Gallery"
- **Responsive Grid**: 1 column (mobile) → 2 (tablet) → 3 (desktop) → 5 (XL screens)
- **Lazy Loading**: Images only load when needed
- **Progressive Disclosure**: Smooth transitions as new batches appear

### ✅ Premium Lightbox
- **Full-Screen Modal**: Black backdrop with blur
- **Keyboard Navigation**: 
  - `←` Previous image
  - `→` Next image  
  - `Esc` Close lightbox
- **Image Counter**: Shows current position (e.g., "15 / 40")
- **Smooth Transitions**: Fade effects between images

### ✅ Navigation Integration
- **Desktop**: Gallery link in main header navigation
- **Mobile**: 
  - Gallery icon in bottom navigation bar
  - Promotional CTA card on homepage

### ✅ SEO & Accessibility
- **Alt Text**: Every image has descriptive alt attributes
- **Semantic HTML**: Proper section structure
- **Performance**: 
  - Next.js Image optimization
  - Lazy loading for images below fold
  - Priority loading for hero images

## How to Add Your Images

### Step 1: Upload to Cloudinary
1. Upload your landscape images to your Cloudinary account
2. Get the Cloudinary URL for each image
3. Ensure images are landscape format (4:3 or 16:9 ratio works best)

### Step 2: Update the Gallery Array
Open `src/app/gallery/page.tsx` and find the `GALLERY_IMAGES` array (around line 6).

**For Featured Hero Images** (first 8-10 images):
```typescript
{
  id: 1,
  url: 'https://res.cloudinary.com/YOUR_CLOUD/image/upload/f_auto,q_auto,w_1920/v1234567890/your-image-name.jpg',
  alt: 'Descriptive text for SEO and accessibility',
  featured: true,
  size: 'large' // Options: 'large', 'medium', 'small'
},
```

**Size Guide for Bento Layout**:
- `large`: Takes 2 columns × 2 rows (hero images)
- `medium`: Takes 2 columns × 1 row (standard)
- `small`: Takes 1 column × 1 row (accent images)

**For Additional Gallery Images**:
```typescript
{
  id: 9,
  url: 'https://res.cloudinary.com/YOUR_CLOUD/image/upload/f_auto,q_auto,w_1920/v1234567890/your-image-name.jpg',
  alt: 'Descriptive text for SEO and accessibility',
  featured: false,
  size: 'medium' // Size doesn't affect full gallery grid
},
```

### Step 3: Image Optimization Parameters
Always include these Cloudinary parameters in your URLs:
- `f_auto` - Automatic format selection (WebP, AVIF)
- `q_auto` - Automatic quality optimization
- `w_1920` - Max width for performance

Example URL structure:
```
https://res.cloudinary.com/diwa9giv2/image/upload/f_auto,q_auto,w_1920/v1761208133/billboard-campaign.jpg
```

## Configuration Options

### Adjust Load More Count
Change how many images load at once:
```typescript
const LOAD_MORE_COUNT = 5; // Change to 3, 5, 8, etc.
```

### Adjust Featured Count
Change number of featured hero images:
```typescript
const FEATURED_COUNT = 8; // Change to 6, 8, 10, etc.
```

## Design Principles Applied

### 🎨 Apple-Inspired Aesthetics
- **Generous Whitespace**: Breathing room between elements
- **Subtle Shadows**: Depth without distraction
- **Smooth Transitions**: All animations use easing curves
- **Glass Morphism**: Frosted glass effects on overlays

### ⚡ Performance First
- **Lazy Loading**: Images load progressively
- **Next.js Image**: Automatic optimization and responsive sizes
- **Animation Stagger**: Prevents jank on initial load
- **Batch Loading**: Controlled data fetching

### 📱 Responsive Design
- **Mobile-First**: Optimized for smallest screens
- **Fluid Typography**: Scales from mobile to desktop
- **Touch-Friendly**: Large tap targets (min 44×44px)
- **Adaptive Grid**: Layout changes per breakpoint

## Brand Consistency

### Color Palette Used
- **Primary Sky**: `#0BB4E4` - Accents, CTAs
- **Primary Deep Blue**: `#0064C8` - Gradients, buttons
- **Primary Bright Green**: `#6DCE2E` - Secondary accents
- **Secondary Dark**: `#1E1E1E` - Text, contrast

### Typography
- **Display Font**: Headlines and CTAs
- **Sans Font**: Body text and descriptions

### Animation Timings
- **Fast**: 0.3s - Hover effects, small transitions
- **Medium**: 0.5-0.8s - Section reveals, image transitions
- **Slow**: 1.0s+ - Shimmer effects, parallax

## Troubleshooting

### Images Not Loading
1. Check Cloudinary URL is correct
2. Verify image is public (not private)
3. Ensure `next.config.ts` includes Cloudinary domain

### Layout Breaking on Mobile
1. Check image aspect ratios are landscape
2. Verify grid classes are responsive
3. Test on actual devices, not just browser resize

### Slow Performance
1. Reduce image file sizes before uploading
2. Use Cloudinary's quality parameter (`q_auto`)
3. Consider reducing `w_1920` to `w_1200` for smaller screens

## Future Enhancements

Consider adding:
- **Filters**: Category tags (Digital Screens, Billboards, etc.)
- **Search**: Find images by keyword
- **Infinite Scroll**: Auto-load instead of "Load More" button
- **Video Support**: Add campaign videos to gallery
- **Download**: Allow users to download high-res versions
- **Social Share**: Share individual images on social media

## Support

For questions or customization needs, refer to:
- Next.js Image Docs: https://nextjs.org/docs/app/api-reference/components/image
- Cloudinary Optimization: https://cloudinary.com/documentation/image_transformations
- Tailwind CSS: https://tailwindcss.com/docs

---

**Built with**: Next.js 15, TypeScript, Tailwind CSS, Lucide Icons
**Design Style**: Apple-inspired minimalism with premium animations
**Status**: Production Ready ✅

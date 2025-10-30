# Gallery Page Setup Guide

## 🎉 Overview

A premium, modern gallery page has been created for Stake Digital Media with the following features:

### ✨ Key Features

1. **Progressive Loading**
   - Shows 8 attractive featured images initially
   - "View All" button to reveal remaining images
   - Load More functionality (5 images at a time)

2. **Image Optimization**
   - Uses Next.js Image component for automatic optimization
   - Lazy loading for images below the fold
   - Responsive image sizing for different screen sizes
   - Cloudinary-ready URLs

3. **Modern UI/UX**
   - Premium gradient backgrounds matching brand colors
   - Smooth animations and hover effects
   - Filter by category (All, Digital Screens, Billboards)
   - Lightbox/modal view for full-size images
   - Navigation between images in lightbox

4. **Brand Consistency**
   - Uses brand colors: Sky Blue (#0BB4E4), Deep Blue (#0064C8), Bright Green (#6DCE2E)
   - Matches existing website design patterns
   - Consistent typography and spacing

5. **Navigation**
   - Desktop: Direct link in the header navigation
   - Mobile: Link in bottom navigation bar + promotional section on homepage

## 📍 File Locations

- **Gallery Page**: `src/app/gallery/page.tsx`
- **Desktop Nav**: `src/components/Navbar.tsx` (updated)
- **Mobile Nav**: `src/components/MobileBottomNav.tsx` (updated)
- **Homepage**: `src/app/page.tsx` (mobile CTA added)

## 🖼️ How to Add Your Cloudinary Images

### Step 1: Locate the Image Array

Open `src/app/gallery/page.tsx` and find the `GALLERY_IMAGES` constant (around line 9).

### Step 2: Replace Placeholder URLs

Currently, the array uses placeholder URLs like:
```typescript
url: 'https://via.placeholder.com/1200x675/0BB4E4/FFFFFF?text=Gallery+Image+1'
```

Replace each URL with your actual Cloudinary URL. For example:
```typescript
url: 'https://res.cloudinary.com/your-cloud-name/image/upload/f_auto,q_auto,w_1920/your-image-id.jpg'
```

### Step 3: Cloudinary URL Optimization

For best performance, use Cloudinary's automatic optimization:

```typescript
// Recommended Cloudinary URL format:
url: 'https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/f_auto,q_auto,w_1920/v1234567890/your-image-name.jpg'
```

**Parameters explained:**
- `f_auto` - Auto format (delivers WebP for modern browsers)
- `q_auto` - Auto quality (balances quality vs file size)
- `w_1920` - Max width 1920px (landscape images)

### Step 4: Update Image Metadata

For each image, update:
```typescript
{
  id: 1, // Keep unique IDs
  url: 'YOUR_CLOUDINARY_URL',
  title: 'Descriptive title for the image',
  category: 'digital-screens' or 'billboards',
}
```

### Example with Actual Data

```typescript
{
  id: 1,
  url: 'https://res.cloudinary.com/diwa9giv2/image/upload/f_auto,q_auto,w_1920/v1761208531/soweto_digital_screen.jpg',
  title: 'Digital Screen Campaign - Soweto Shopping Center',
  category: 'digital-screens',
},
{
  id: 2,
  url: 'https://res.cloudinary.com/diwa9giv2/image/upload/f_auto,q_auto,w_1920/v1761208565/jhb_billboard.jpg',
  title: 'Premium Billboard - Johannesburg Highway',
  category: 'billboards',
},
```

## 🎨 Customization Options

### Change Featured Images Count

In `src/app/gallery/page.tsx`, modify:
```typescript
const FEATURED_COUNT = 8; // Change this number (currently 8)
```

### Change Load More Count

```typescript
const LOAD_MORE_COUNT = 5; // Change this number (currently 5)
```

### Modify Categories

Update the filter buttons and categories to match your needs:
```typescript
// In the GALLERY_IMAGES array
category: 'your-category-name'

// In the filter section
<button onClick={() => setFilter('your-category-name')}>
  Your Category Label
</button>
```

## 📱 Navigation Setup

### Desktop Navigation
The Gallery link appears in the main header between "About Us" and "Contact".

### Mobile Navigation
1. **Bottom Nav Bar**: Gallery icon (grid icon) in the mobile bottom navigation
2. **Homepage CTA**: Promotional section on homepage (visible only on mobile) that promotes the gallery

## 🎯 Best Practices

### Image Specifications

For optimal performance and quality:

1. **Aspect Ratio**: 16:9 (landscape)
2. **Recommended Size**: 1920x1080px or higher
3. **Format**: JPG or PNG (Cloudinary will auto-convert to WebP)
4. **File Size**: Aim for under 500KB per image (Cloudinary optimizes automatically)

### Cloudinary Upload Settings

When uploading to Cloudinary:
1. Use descriptive filenames (helps with SEO)
2. Enable auto-format and auto-quality
3. Consider using Cloudinary's responsive images feature
4. Add transformations in the URL rather than uploading multiple versions

### SEO Optimization

Update image titles with descriptive, keyword-rich text:
```typescript
title: 'Digital LED Screen Advertisement at Supabets Soweto - High Traffic Location'
```

## 🚀 Deployment Checklist

Before going live:

- [ ] Replace all 43 placeholder URLs with actual Cloudinary URLs
- [ ] Update all image titles with accurate descriptions
- [ ] Verify categories are correctly assigned
- [ ] Test gallery on mobile devices
- [ ] Test lightbox navigation
- [ ] Verify image loading performance
- [ ] Test filter functionality
- [ ] Check responsive design on various screen sizes

## 🔧 Troubleshooting

### Images not loading?
- Verify Cloudinary URLs are accessible
- Check if the domain is whitelisted in `next.config.ts`
- Ensure URLs start with `https://`

### Images look low quality?
- Add `q_auto:good` or `q_auto:best` to Cloudinary URL
- Increase `w_` parameter (e.g., `w_2400`)

### Slow loading?
- Verify lazy loading is working (it should load the first 8 immediately)
- Reduce image file sizes in Cloudinary
- Use `f_auto` and `q_auto` parameters

## 📞 Support

For questions or issues with the gallery implementation, refer to:
- Next.js Image documentation
- Cloudinary transformation documentation
- Lucide React icons documentation

## 🎨 Design Notes

The gallery follows the established design system:
- **Primary Colors**: Sky Blue, Deep Blue, Bright Green
- **Typography**: Display font for headings, Sans for body
- **Animations**: Smooth transitions matching the rest of the site
- **Spacing**: Consistent with existing pages

All interactions are smooth and premium-feeling, matching the high-quality brand image of Stake Digital Media.

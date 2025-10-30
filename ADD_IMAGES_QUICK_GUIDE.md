# Quick Reference: Adding Your Cloudinary Images

## 📍 Where to Add Image URLs

**File**: `src/app/gallery/page.tsx`  
**Line**: ~9 (look for `const GALLERY_IMAGES`)

## 🔄 Simple 3-Step Process

### Step 1: Get Your Cloudinary URL

From Cloudinary dashboard, your URL should look like:
```
https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/v1234567890/image-name.jpg
```

### Step 2: Add Optimization Parameters

Recommended format for best quality and performance:
```
https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/f_auto,q_auto,w_1920/v1234567890/image-name.jpg
```

### Step 3: Replace in the Array

Find this in `page.tsx`:
```typescript
const GALLERY_IMAGES = [
  {
    id: 1,
    url: 'https://via.placeholder.com/1200x675/0BB4E4/FFFFFF?text=Gallery+Image+1',  ← REPLACE THIS
    title: 'Digital Screen Campaign - Soweto',                                       ← UPDATE THIS
    category: 'digital-screens',                                                     ← VERIFY THIS
  },
  // ... repeat for all 43 images
];
```

With your actual data:
```typescript
const GALLERY_IMAGES = [
  {
    id: 1,
    url: 'https://res.cloudinary.com/diwa9giv2/image/upload/f_auto,q_auto,w_1920/v1761208531/soweto_screen.jpg',
    title: 'Digital Screen at Supabets Soweto - High Traffic Gaming Venue',
    category: 'digital-screens',
  },
  {
    id: 2,
    url: 'https://res.cloudinary.com/diwa9giv2/image/upload/f_auto,q_auto,w_1920/v1761208565/jhb_billboard.jpg',
    title: 'LED Billboard on M1 Highway - Johannesburg CBD',
    category: 'billboards',
  },
  // ... continue for all 43 images
];
```

## 📋 Cloudinary URL Parameters Explained

| Parameter | Purpose | Example |
|-----------|---------|---------|
| `f_auto` | Auto-format (WebP for modern browsers, JPG fallback) | `f_auto` |
| `q_auto` | Auto-quality (balances size vs quality) | `q_auto` |
| `w_1920` | Max width (landscape images) | `w_1920` |

**Full optimized URL pattern:**
```
https://res.cloudinary.com/CLOUD_NAME/image/upload/f_auto,q_auto,w_1920/v1234567890/IMAGE_NAME.jpg
                          ^^^^^^^^^^^                ^^^^^^^^^^^^^^^^^^^^^^
                          Your cloud name            Optimization parameters
```

## ✅ Checklist for Each Image

- [ ] Valid Cloudinary URL
- [ ] Includes optimization parameters (`f_auto,q_auto,w_1920`)
- [ ] Descriptive title (helps with SEO)
- [ ] Correct category (`digital-screens` or `billboards`)
- [ ] Unique ID number

## 🎯 Example - Complete Replacement

### BEFORE (Placeholder):
```typescript
const GALLERY_IMAGES = [
  {
    id: 1,
    url: 'https://via.placeholder.com/1200x675/0BB4E4/FFFFFF?text=Gallery+Image+1',
    title: 'Digital Screen Campaign - Soweto',
    category: 'digital-screens',
  },
  {
    id: 2,
    url: 'https://via.placeholder.com/1200x675/6DCE2E/FFFFFF?text=Gallery+Image+2',
    title: 'Billboard Advertisement - Johannesburg',
    category: 'billboards',
  },
];
```

### AFTER (Your Images):
```typescript
const GALLERY_IMAGES = [
  {
    id: 1,
    url: 'https://res.cloudinary.com/diwa9giv2/image/upload/f_auto,q_auto,w_1920/v1234567890/soweto_supabets_digital.jpg',
    title: 'Digital Screen Display - Supabets Soweto Branch, High Dwell Time',
    category: 'digital-screens',
  },
  {
    id: 2,
    url: 'https://res.cloudinary.com/diwa9giv2/image/upload/f_auto,q_auto,w_1920/v1234567890/m1_highway_billboard.jpg',
    title: 'Premium LED Billboard - M1 Highway North, 500k Monthly Impressions',
    category: 'billboards',
  },
];
```

## 🖼️ Image Requirements

### Aspect Ratio
- **Recommended**: 16:9 (landscape)
- **Examples**: 1920x1080, 1600x900, 1280x720

### File Format
- **Upload**: JPG or PNG
- **Delivered**: WebP (auto via Cloudinary)

### File Size
- **Before optimization**: Any size
- **After Cloudinary**: ~150-300KB (automatic)

### Quality
- **Original**: High quality (Cloudinary will optimize)
- **Don't**: Pre-compress images yourself

## 🚫 Common Mistakes to Avoid

❌ **DON'T** use URLs without optimization:
```typescript
url: 'https://res.cloudinary.com/name/image/upload/image.jpg'
```

✅ **DO** include optimization parameters:
```typescript
url: 'https://res.cloudinary.com/name/image/upload/f_auto,q_auto,w_1920/image.jpg'
```

❌ **DON'T** use generic titles:
```typescript
title: 'Image 1'
```

✅ **DO** use descriptive, SEO-friendly titles:
```typescript
title: 'Digital Screen Campaign at Soweto Mall - 30min+ Dwell Time'
```

❌ **DON'T** forget the category:
```typescript
category: '',  // Empty!
```

✅ **DO** specify the correct category:
```typescript
category: 'digital-screens',  // or 'billboards'
```

## 💡 Pro Tips

1. **Batch Upload**: Upload all images to Cloudinary first, then copy URLs
2. **Naming Convention**: Use descriptive filenames (e.g., `soweto_screen_1.jpg`)
3. **Test One First**: Replace one image and test before doing all 43
4. **Keep IDs Sequential**: id: 1, 2, 3, ... 43 (easier to manage)
5. **Backup**: Keep a copy of your image URLs in a spreadsheet

## 🔍 Testing Your Changes

After adding URLs:

1. **Save the file**: `Ctrl + S`
2. **Check for errors**: Look at the bottom of VS Code
3. **Run dev server**: `npm run dev`
4. **Open gallery**: `http://localhost:3000/gallery`
5. **Test features**:
   - Image loading
   - Filters work
   - Lightbox opens
   - Navigation works

## 📞 Need Help?

If images aren't loading:
1. Check Cloudinary URL is accessible in browser
2. Verify no typos in URL
3. Ensure URL starts with `https://`
4. Check VS Code for error messages
5. Refer to `GALLERY_SETUP_GUIDE.md` for troubleshooting

## 🎉 You're Ready!

Just replace the 43 placeholder URLs with your Cloudinary URLs and you're done!

**Remember**: 
- First 8 images = Featured (shown immediately)
- Remaining 35 = Revealed with "View All" button

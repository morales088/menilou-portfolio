# Adding Portfolio Images Guide

## Overview
The portfolio system is now set up to display individual CLIENT pages with service-grouped galleries. Each client can showcase multiple images and videos organized by service type.

## Current Status
✅ Portfolio structure created
✅ 6 client profiles configured
✅ Dynamic routing implemented
✅ Image galleries with lazy loading
✅ Error handling for missing images

## Adding Beauty Aesthetic Images

### Step 1: Download Images from Google Drive
Your Beauty Aesthetic images are stored at:
https://drive.google.com/drive/folders/1lj_xBOJbaaYj-rmdpM2Fb8q98XMgriTe

### Step 2: Select and Prepare Images
1. Download **6-9 of your best images** from the folder
2. Choose images that showcase:
   - Social media posts (Instagram/Facebook)
   - Graphic designs
   - Content variety (promotional, educational, aesthetic)

### Step 3: Rename and Organize

**For Social Media Management section:**
- Rename 6 images as: `social-1.jpg`, `social-2.jpg`, ... `social-6.jpg`

**For Graphic Design section:**
- Rename 3 images as: `design-1.jpg`, `design-2.jpg`, `design-3.jpg`

**For Cover Image:**
- Pick your most impressive image
- Rename as: `cover.jpg`

### Step 4: Place Images in Correct Folder
Copy all renamed images to:
```
public/portfolio/beauty-aesthetic/
```

Your folder should look like:
```
public/portfolio/beauty-aesthetic/
├── cover.jpg
├── social-1.jpg
├── social-2.jpg
├── social-3.jpg
├── social-4.jpg
├── social-5.jpg
├── social-6.jpg
├── design-1.jpg
├── design-2.jpg
└── design-3.jpg
```

### Step 5: Optimize Images (Recommended)
- **Format:** JPG or WebP
- **Dimensions:** 1200x1200px (square) for gallery
- **Cover image:** 1600x900px (16:9)
- **File size:** Under 500KB each
- Use tools like TinyPNG or Squoosh.app

## Adding Images for Other Clients

### Fitness Coach Client
**Folder:** `public/portfolio/fitness/`
```
cover.jpg
social-1.jpg
social-2.jpg
lead-1.jpg
```

### Real Estate Client
**Folder:** `public/portfolio/realestate/`
```
cover.jpg
email-1.jpg
email-2.jpg
crm-1.jpg
```

### E-commerce Client
**Folder:** `public/portfolio/ecommerce/`
```
cover.jpg
shopify-1.jpg
shopify-2.jpg
email-1.jpg
email-2.jpg
social-1.jpg
```

### Pet Wellness Client
**Folder:** `public/portfolio/pet/`
```
cover.jpg
ghl-1.jpg
ghl-2.jpg
social-1.jpg
```

### Swimwear Client
**Folder:** `public/portfolio/swimwear/`
```
cover.jpg
social-1.jpg
social-2.jpg
influencer-1.jpg
```

## Testing Your Changes

1. **Start development server:**
   ```bash
   npm run dev
   ```

2. **Visit homepage:**
   - Scroll to "Some of our Finest Work" section
   - Click on "Beauty Aesthetic Client" card

3. **Check client detail page:**
   - Verify images load correctly
   - Check both service sections display properly
   - Test image lazy loading

## Adding More Images Later

To add more images to any client:

1. **Place image in client folder:**
   - Use descriptive filename: `social-7.jpg`, `design-4.jpg`

2. **Update data file:**
   Edit `lib/clientsData.ts`
   ```typescript
   media: [
     // existing images...
     { type: 'image', url: '/portfolio/beauty-aesthetic/social-7.jpg', alt: 'New post' },
   ]
   ```

3. **Rebuild and test**

## Video Support

Videos are supported! Just:
1. Place video file (`.mp4`) in client folder
2. Add to media array with `type: 'video'`

Example:
```typescript
{ 
  type: 'video', 
  url: '/portfolio/beauty-aesthetic/reel-1.mp4', 
  alt: 'Instagram Reel' 
}
```

## Troubleshooting

### Images not showing?
- Check file names match exactly (case-sensitive)
- Verify images are in correct folder
- Check browser console for errors
- Refresh browser cache (Ctrl+F5)

### Image too large?
- Compress using TinyPNG.com
- Resize to recommended dimensions
- Convert to WebP format

### Need to change client info?
Edit `lib/clientsData.ts` to update:
- Client names
- Services offered
- Tools used
- Outcomes achieved

## Questions?
Check the file structure in `public/portfolio/README.md`

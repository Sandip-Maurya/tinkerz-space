# Image Management Guide

This guide explains how to add, remove, or replace images in the Tinkerz Space project while maintaining image optimization.

## Current Setup

- **Image Location**: `src/assets/images/`
- **Configuration**: `src/config/assets.ts`
- **Component**: `src/components/ImageContainer.astro`
- **Optimization**: Images are automatically optimized to WebP format during build

## Adding New Images

### Step 1: Add Image File
Place your new image file in `src/assets/images/` directory.

**Example:**
```
src/assets/images/
  ├── new-section-mobile.png
  ├── new-section-tablet.png
  └── new-section-laptop.png
```

### Step 2: Import in assets.ts
Add imports at the top of `src/config/assets.ts`:

```typescript
// Import content images for optimization
import newSectionMobile from '../assets/images/new-section-mobile.png';
import newSectionTablet from '../assets/images/new-section-tablet.png';
import newSectionLaptop from '../assets/images/new-section-laptop.png';
```

### Step 3: Add to assets.content
Add your image configuration in the `content` section:

```typescript
content: {
  // ... existing images
  newSection: {
    mobile: {
      src: newSectionMobile,
      aspectRatio: '9/16', // Adjust based on your image
    },
    tablet: {
      src: newSectionTablet,
      aspectRatio: '2/3', // Adjust based on your image
    },
    laptop: {
      src: newSectionLaptop,
      aspectRatio: '16/9', // Adjust based on your image
    },
    alt: 'Description of the image',
    description: 'Image for New Section',
    placeholder: false,
  },
}
```

### Step 4: Use in Component
Use the image in your component:

```astro
---
import { assets } from '../config/assets.ts';
import ImageContainer from './ImageContainer.astro';
---

<ImageContainer
  srcMobile={assets.content.newSection.mobile.src}
  srcTablet={assets.content.newSection.tablet.src}
  srcLaptop={assets.content.newSection.laptop.src}
  alt={assets.content.newSection.alt}
  placeholderText="New section image"
  placeholderIcon="default"
  aspectRatioMobile={assets.content.newSection.mobile.aspectRatio}
  aspectRatioTablet={assets.content.newSection.tablet.aspectRatio}
  aspectRatioLaptop={assets.content.newSection.laptop.aspectRatio}
/>
```

### Step 5: Rebuild
Run the build to optimize the new images:

```bash
npm run build
```

---

## Removing Images

### Step 1: Remove from Component Usage
Remove or update any components that use the image.

### Step 2: Remove from assets.ts
1. Remove the import statement at the top
2. Remove the image entry from the `content` object

**Example:**
```typescript
// Remove this import
import oldSectionMobile from '../assets/images/old-section-mobile.png';

// Remove this from content object
oldSection: {
  // ... remove entire object
}
```

### Step 3: Delete Image Files
Delete the image files from `src/assets/images/`:

```bash
# Remove files
rm src/assets/images/old-section-mobile.png
rm src/assets/images/old-section-tablet.png
rm src/assets/images/old-section-laptop.png
```

### Step 4: Rebuild
Run the build to clean up:

```bash
npm run build
```

---

## Replacing Images

### Option A: Same Filename (Recommended)
If you want to keep the same filename:

1. **Replace the file** in `src/assets/images/` with the same name
   - Example: Replace `vision-mobile.png` with a new version
2. **No code changes needed** - the import will automatically use the new file
3. **Rebuild** to optimize the new image:
   ```bash
   npm run build
   ```

### Option B: Different Filename
If you want to use a different filename:

1. **Add new image files** to `src/assets/images/`
2. **Update imports** in `assets.ts`:
   ```typescript
   // Old
   import visionMobile from '../assets/images/vision-mobile.png';
   
   // New
   import visionMobile from '../assets/images/vision-mobile-v2.png';
   ```
3. **Update aspect ratios** if the new image has different dimensions
4. **Delete old files** from `src/assets/images/`
5. **Rebuild**:
   ```bash
   npm run build
   ```

---

## Important Notes

### Image Formats
- **Supported formats**: PNG, JPG, JPEG, GIF, SVG, WebP, AVIF
- **Output format**: Images are automatically converted to WebP during build
- **Original format**: Keep your source images in PNG or JPG for best compatibility

### Aspect Ratios
When adding images, make sure to set the correct aspect ratios:
- **Mobile**: Usually portrait (9/16) or square (1/1)
- **Tablet**: Usually 2/3, 1/1, or 16/9
- **Laptop**: Usually landscape (16/9) or 3/2

Calculate aspect ratio: `width/height` (e.g., 1920/1080 = 16/9)

### Image Sizes
- **Mobile images**: Typically 400-800px width
- **Tablet images**: Typically 800-1200px width
- **Laptop images**: Typically 1200-1920px width

Larger images will be automatically optimized, but starting with appropriately sized images improves build performance.

### Build Process
- Images are optimized **during build time**, not at runtime
- Always run `npm run build` after adding/changing images
- Optimized images are stored in `dist/_astro/` directory
- The build process shows optimization results:
  ```
  ▶ /_astro/vision-mobile.webp (before: 2023kB, after: 114kB)
  ```

### Development Mode
- In development (`npm run dev`), images are still optimized but may be slower
- For production, always use `npm run build`

---

## Quick Reference

### Adding a Single Image (Non-Responsive)
If you only need one image for all breakpoints:

```typescript
// In assets.ts
import singleImage from '../assets/images/single-image.png';

content: {
  singleImage: {
    src: singleImage,
    aspectRatio: '16/9',
    alt: 'Single image description',
  },
}
```

```astro
<!-- In component -->
<ImageContainer
  src={assets.content.singleImage.src}
  alt={assets.content.singleImage.alt}
  aspectRatio={assets.content.singleImage.aspectRatio}
/>
```

### Troubleshooting

**Build fails with "Could not resolve" error:**
- Check that the file path in the import is correct
- Verify the file exists in `src/assets/images/`
- Check for typos in filename

**Image not displaying:**
- Verify the image is imported correctly in `assets.ts`
- Check that you're using the correct path: `assets.content.sectionName.mobile.src`
- Ensure the component is using `ImageContainer` correctly

**Image quality issues:**
- Source images should be high quality
- Astro will optimize them automatically
- If quality is too low, check your source image resolution

---

## Example: Complete Workflow

Let's say you want to add a new "About Us" section with images:

1. **Add files**:
   ```
   src/assets/images/about-us-mobile.png
   src/assets/images/about-us-tablet.png
   src/assets/images/about-us-laptop.png
   ```

2. **Update `src/config/assets.ts`**:
   ```typescript
   import aboutUsMobile from '../assets/images/about-us-mobile.png';
   import aboutUsTablet from '../assets/images/about-us-tablet.png';
   import aboutUsLaptop from '../assets/images/about-us-laptop.png';
   
   // In content object:
   aboutUs: {
     mobile: {
       src: aboutUsMobile,
       aspectRatio: '9/16',
     },
     tablet: {
       src: aboutUsTablet,
       aspectRatio: '2/3',
     },
     laptop: {
       src: aboutUsLaptop,
       aspectRatio: '16/9',
     },
     alt: 'About Us section image',
     description: 'Image for About Us section',
   },
   ```

3. **Create/Update component** (`src/components/AboutUs.astro`):
   ```astro
   ---
   import { assets } from '../config/assets.ts';
   import ImageContainer from './ImageContainer.astro';
   ---
   
   <section>
     <ImageContainer
       srcMobile={assets.content.aboutUs.mobile.src}
       srcTablet={assets.content.aboutUs.tablet.src}
       srcLaptop={assets.content.aboutUs.laptop.src}
       alt={assets.content.aboutUs.alt}
       placeholderText="About Us"
       aspectRatioMobile={assets.content.aboutUs.mobile.aspectRatio}
       aspectRatioTablet={assets.content.aboutUs.tablet.aspectRatio}
       aspectRatioLaptop={assets.content.aboutUs.laptop.aspectRatio}
     />
   </section>
   ```

4. **Build**:
   ```bash
   npm run build
   ```

5. **Verify**: Check the build output for optimization results.

---

That's it! Your images will be automatically optimized to WebP format with significant file size reductions.

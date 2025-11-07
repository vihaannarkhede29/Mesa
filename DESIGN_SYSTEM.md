# Mesa Design System

## Color Palette

### Primary Color (Trust + Clarity)
**Soft Sky Blue**
- Primary: `#5BA3E8` (main brand color)
- Light: `#7BB8F0` (hover states)
- Dark: `#4A8FD4` (active states)
- Background: `#E8F4FD` (subtle backgrounds)

### Secondary Color (Energy + Collaboration)
**Gentle Lavender / Violet**
- Primary: `#9B8AE8` (secondary actions)
- Light: `#B5A8F0` (hover states)
- Dark: `#7D6BC4` (active states)
- Background: `#F3F1FC` (subtle backgrounds)

### Accent Color (Call-to-action highlights)
**Fresh Green**
- Primary: `#4ECB71` (success, progress, learning)
- Light: `#6DD88A` (hover states)
- Dark: `#3BA85A` (active states)
- Background: `#E8F8ED` (subtle backgrounds)

### Neutral Grays
- **Light Background:** `#FAFAFA` (page backgrounds)
- **Medium Gray:** `#6B7280` (body text, subtle borders)
- **Dark Gray:** `#1F2937` (headings in light mode)
- **Dark Mode Background:** `#0B0B0D` (dark mode default)
- **Dark Mode Text:** `#F9FAFB` (text in dark mode)
- **Border Gray:** `#E5E7EB` (light borders)

### Status Colors
- **Success:** `#4ECB71`
- **Warning:** `#F59E0B`
- **Error:** `#EF4444`
- **Info:** `#5BA3E8`

## Typography

### Font Families
- **Headings:** Plus Jakarta Sans (Google Font)
  - Weights: 500 (Medium), 600 (Semibold), 700 (Bold)
- **Body:** Inter (Google Font)
  - Weights: 400 (Regular), 500 (Medium)

### Type Scale
- **H1:** 48px / 56px line-height, Bold (700)
- **H2:** 36px / 44px line-height, Semibold (600)
- **H3:** 28px / 36px line-height, Medium (500)
- **H4:** 24px / 32px line-height, Medium (500)
- **H5:** 20px / 28px line-height, Medium (500)
- **H6:** 18px / 26px line-height, Medium (500)
- **Body:** 16-18px / 28px line-height, Regular (400)
- **Small:** 14px / 20px line-height, Regular (400)

## Buttons

### Primary Button
- **Background:** Primary Color (`#5BA3E8`)
- **Text:** White
- **Shape:** Fully rounded (pill-shaped, `rounded-full`)
- **Padding:** `px-8 py-3` (medium)
- **Shadow:** Soft drop shadow (`shadow-sm`)
- **Hover:** Slightly brighter (`#7BB8F0`)
- **Active:** Slightly darker (`#4A8FD4`)
- **Disabled:** 40% opacity
- **Text Style:** Friendly, lowercase preferred
- **Example:** "get help now — it's free"

### Secondary Button
- **Background:** Transparent or white
- **Border:** 2px solid Primary Color
- **Text:** Primary Color
- **Hover:** Primary Color background, white text

### Accent Button (Green)
- **Background:** Accent Green (`#4ECB71`)
- **Text:** White
- **Use:** Special CTAs, success states

## Cards

- **Background:** White (light mode) or `#1A1A1C` (dark mode)
- **Border Radius:** `rounded-2xl` (16px)
- **Shadow:** Soft shadow (`shadow-sm` to `shadow-md`)
- **Padding:** `p-6` to `p-10` depending on content
- **Border:** Subtle (`border border-gray-200` or `border-white/10` in dark mode)

## Inputs

- **Background:** White or `#1A1A1C` (dark mode)
- **Border:** `border border-gray-300` or `border-white/20` (dark mode)
- **Border Radius:** `rounded-xl` (12px)
- **Padding:** `px-4 py-3`
- **Focus:** Primary Color border, soft shadow

## Layout Spacing Scale

- **xs:** 4px (0.25rem)
- **sm:** 8px (0.5rem)
- **md:** 16px (1rem)
- **lg:** 24px (1.5rem)
- **xl:** 32px (2rem)
- **2xl:** 48px (3rem)
- **3xl:** 64px (4rem)
- **4xl:** 96px (6rem)

## Shadows

- **sm:** `0 1px 2px 0 rgba(0, 0, 0, 0.05)`
- **md:** `0 4px 6px -1px rgba(0, 0, 0, 0.1)`
- **lg:** `0 10px 15px -3px rgba(0, 0, 0, 0.1)`
- **Soft:** Very subtle, no harsh edges

## Icons

- **Style:** Flat, minimal, outline-style
- **Size:** 20px (default), 24px (medium), 32px (large)
- **Color:** Inherit from text color or use Primary Color

## Accessibility

- All color combinations meet **WCAG AA** contrast requirements
- Focus states clearly visible
- Interactive elements have sufficient touch targets (min 44x44px)


# Mesa Component Style Guide

## Buttons

### Primary Button
```tsx
<button className="btn-primary">
  get help now — it's free
</button>
```

**Styles Applied:**
- `px-8 py-3` - Medium padding
- `rounded-full` - Fully rounded (pill-shaped)
- `bg-primary-400` - Primary sky blue background
- `text-white` - White text
- `font-medium` - Medium weight
- `shadow-soft` - Soft drop shadow
- Hover: `bg-primary-500` (lighter shade)
- Active: `bg-primary-600` (darker shade)
- Disabled: `opacity-40`

### Secondary Button
```tsx
<button className="btn-secondary">
  learn more
</button>
```

**Styles Applied:**
- `px-8 py-3` - Medium padding
- `rounded-full` - Fully rounded
- `bg-white` - White background
- `border-2 border-primary-400` - Primary color border
- `text-primary-400` - Primary color text
- Hover: Inverts to primary background with white text

### Accent Button (Green)
```tsx
<button className="btn-accent">
  start learning
</button>
```

**Styles Applied:**
- Same as primary but uses `accent-400` color
- Use for special CTAs or success states

## Cards

### Standard Card
```tsx
<div className="card">
  {/* Content */}
</div>
```

**Styles Applied:**
- `bg-white` - White background
- `rounded-card` - 16px border radius
- `p-6` - Padding (adjust to `p-8` or `p-10` for larger cards)
- `shadow-soft` - Soft shadow
- `border border-neutral-border` - Subtle border

### Colored Card Background
```tsx
<div className="card bg-primary-50 border-primary-200">
  {/* Content */}
</div>
```

## Headings

### H1
```tsx
<h1 className="text-h1 font-heading font-bold text-neutral-dark">
  Main headline
</h1>
```

### H2
```tsx
<h2 className="text-h2 font-heading font-semibold text-neutral-dark">
  Section title
</h2>
```

### H3-H6
```tsx
<h3 className="text-h3 font-heading font-medium text-neutral-dark">
  Subsection
</h3>
```

## Inputs

### Standard Input
```tsx
<input 
  type="text" 
  className="input"
  placeholder="Enter your question..."
/>
```

**Styles Applied:**
- `w-full` - Full width
- `px-4 py-3` - Padding
- `rounded-input` - 12px border radius
- `border border-neutral-border` - Border
- `bg-white` - White background
- Focus: Primary color ring and border

## Layout Spacing

### Section Padding
```tsx
<section className="py-20 px-4 sm:px-6 lg:px-8">
  {/* Content */}
</section>
```

### Container Max Width
```tsx
<div className="max-w-7xl mx-auto">
  {/* Content */}
</div>
```

### Grid Layouts
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {/* Cards */}
</div>
```

## Text Styles

### Body Text
```tsx
<p className="text-body text-neutral-medium">
  Regular paragraph text
</p>
```

### Large Body Text
```tsx
<p className="text-body-lg text-neutral-medium">
  Larger paragraph for hero sections
</p>
```

### Small Text
```tsx
<p className="text-small text-neutral-medium">
  Fine print or captions
</p>
```

## Color Usage

### Primary Color (Sky Blue)
- Use for: Primary buttons, links, brand elements, trust indicators
- Hex: `#5BA3E8`

### Secondary Color (Lavender)
- Use for: Secondary actions, accents, variety
- Hex: `#9B8AE8`

### Accent Color (Green)
- Use for: Success states, progress indicators, special CTAs
- Hex: `#4ECB71`

### Neutral Colors
- Light background: `#FAFAFA`
- Medium text: `#6B7280`
- Dark text: `#1F2937`
- Borders: `#E5E7EB`

## Shadows

- `shadow-soft` - Subtle shadow for cards
- `shadow-soft-md` - Medium shadow
- `shadow-soft-lg` - Larger shadow for emphasis

## Border Radius

- `rounded-full` - Buttons (pill-shaped)
- `rounded-card` - Cards (16px)
- `rounded-input` - Inputs (12px)

## Accessibility Notes

- All interactive elements have minimum 44x44px touch targets
- Focus states use primary color ring
- Color contrast meets WCAG AA standards
- Text uses relaxed line-height for readability


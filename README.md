# github-mwsh3z

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/contactxpai/github-mwsh3z)

## Codebase Documentation

### Project Structure
```
src/
├── components/         # React components
├── contexts/          # React contexts (e.g., LanguageContext)
└── data/             # Static data and translations
```

### Key Features
- **Bi-directional Support**: Full RTL (Hebrew) and LTR (English) support
- **Responsive Design**: Mobile-first approach with tailored desktop layouts
- **Component Consistency**: Shared patterns across similar components
- **Type Safety**: TypeScript throughout the codebase

### Core Components

#### Language System
- `LanguageContext`: Manages current language state
- `DirectionalText`: Handles text alignment based on language
- `translations.ts`: Contains all text content in both languages

#### Layout Components
1. **Navigation**
   - Responsive navbar with language switcher
   - Consultation button with language-specific styling

2. **Hero Section**
   - Full-width banner with CTA
   - Bi-directional text alignment

3. **Ordered Content Components**
Both `HowToStart` and `WhyChooseUs` handle bi-directional content display with identical behavior:

##### Desktop View
- **Hebrew**: Items displayed right-to-left (natural reading order)
- **English**: Items displayed left-to-right (natural reading order)
  - Uses `md:flex md:flex-row-reverse` for layout
  - Numbers start from 1 on the left

##### Mobile View
- Both languages: Items displayed top-to-bottom in natural order (1→2→3/4)
- Uses simple `grid-cols-1` layout

##### Implementation Details
```tsx
// Layout structure
<div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${
  language === 'en' ? 'md:flex md:flex-row-reverse' : ''
}`}>

// Natural order maintained in the data
const items = content.section.items;

// Simple number display
<div className="number-indicator">
  {index + 1}
</div>
```

4. **Contact Form**
   - Form validation with error messages
   - Email submission handling
   - Bi-directional form layout

### Styling System
- **Tailwind CSS**: Utility-first CSS framework
- **Custom Colors**: Brand-specific color palette
- **Responsive Classes**: Mobile-first with `md:` breakpoint modifiers
- **Hover States**: Interactive elements with consistent hover effects

### Best Practices
1. **Component Structure**
   - Single responsibility principle
   - Consistent prop interfaces
   - Shared styling patterns

2. **Bi-directional Implementation**
   - CSS-based layout control
   - Language-aware component structure
   - Consistent text alignment

3. **Responsive Design**
   - Mobile-first approach
   - Breakpoint-specific layouts
   - Content-appropriate stacking

4. **Performance**
   - Minimal state management
   - CSS-based animations
   - Optimized rendering

This approach:
- Maintains natural reading order in both languages
- Uses CSS for layout control instead of array manipulation
- Keeps the implementation simple and consistent across components
- Ensures maintainable and scalable code
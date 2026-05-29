# PathBloom - React + Tailwind CSS Career Guidance Platform

## ✨ Project Setup Complete!

Your PathBloom project has been fully configured with a modern React + Tailwind CSS foundation for a student career guidance platform.

---

## 📦 Installed Dependencies

- **react-router-dom** - Client-side routing for navigation
- **framer-motion** - Smooth animations and transitions
- **lucide-react** - Beautiful icon library
- **tailwindcss** - Utility-first CSS framework
- **postcss & autoprefixer** - CSS processing

---

## 📁 Folder Structure

```
src/
├── components/
│   ├── Sidebar.jsx      # Navigation sidebar with mobile support
│   └── Navbar.jsx       # Top navigation with search & theme toggle
├── pages/
│   ├── Home.jsx         # Landing page with hero section
│   ├── After10th.jsx    # Education pathways after 10th grade
│   ├── After12th.jsx    # Higher education options
│   ├── Careers.jsx      # Career exploration with salary insights
│   ├── Scholarships.jsx # Scholarship opportunities
│   ├── Colleges.jsx     # College explorer with filters
│   └── Quiz.jsx         # Career discovery quiz
├── layouts/
│   └── MainLayout.jsx   # Primary layout component with sidebar & navbar
├── routes/
│   └── routes.jsx       # React Router configuration
└── data/
    └── (for future data files)
```

---

## 🎨 Design Features

### Modern UI Elements
- **Glassmorphism**: Frosted glass effects with backdrop blur
- **Gradient Backgrounds**: Eye-catching color transitions
- **Smooth Animations**: Powered by Framer Motion
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Dark Mode Support**: Full dark theme with color scheme switching

### Component Features
- **Sidebar Navigation**
  - Fixed on desktop (≥1024px)
  - Collapsible on mobile
  - Active state indicators
  - Smooth animations
  - Quick access toggle button

- **Navbar**
  - Search bar with focus states
  - Dark/light mode toggle
  - Notification bell
  - User profile placeholder
  - Responsive design

- **Layout System**
  - Flexible main content area
  - Smooth page transitions
  - Consistent spacing
  - Centered max-width container

---

## 🛣️ Navigation Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Landing page with features overview |
| `/after-10th` | After10th | Education pathways for 10th grade students |
| `/after-12th` | After12th | Higher education programs and options |
| `/careers` | Careers | Career exploration with salary & growth data |
| `/scholarships` | Scholarships | Scholarship opportunities and filters |
| `/colleges` | Colleges | College explorer with search & ratings |
| `/quiz` | Quiz | Interactive career discovery quiz |

---

## 🎯 Page Features

### Home Page
- Hero section with gradient background
- Feature cards showcasing platform capabilities
- Statistics section
- Call-to-action buttons

### After 10th & After 12th
- Educational pathways in cards
- Eligibility criteria
- Career options
- Subject information
- Consultation booking section

### Careers
- Career cards with salary ranges
- Market demand indicators
- Growth percentages
- Key skills display
- Learning resources

### Scholarships
- Scholarship cards with categories
- Eligibility requirements
- Deadline information
- Award amounts
- Filter system for scholarship types

### Colleges
- College listings with ratings
- Location information
- Student population
- Placement rates
- Progress bars for metrics
- Search functionality

### Quiz
- Multi-step questionnaire
- Progress tracking
- Result matching system
- Career recommendations
- Next steps guidance
- Retake option

---

## 🚀 Getting Started

### 1. Start Development Server
```bash
cd d:\PathBloom\PathBloom
npm run dev
```
The app will be available at `http://localhost:5173`

### 2. Build for Production
```bash
npm run build
```
Creates optimized production bundle in `dist/` folder

### 3. Preview Production Build
```bash
npm run preview
```

---

## 🎨 Tailwind Configuration

Custom theme extensions available in `tailwind.config.js`:
- Primary, Secondary, Accent color palettes
- Custom gradients (primary, secondary, accent)
- Glass shadow effects
- Animation utilities (float, pulse-slow)
- Extended animations for smooth transitions

### Color Palettes
- **Primary**: Blues (brand color)
- **Secondary**: Purples (complementary)
- **Accent**: Pinks (highlights)

---

## 🌓 Dark Mode

Dark mode is fully implemented:
- Toggle via the moon/sun icon in navbar
- Persists across components
- Tailwind `dark:` classes used throughout
- Smooth transitions between themes

---

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (sidebar hidden, collapsible)
- **Tablet**: 768px - 1024px (compact layout)
- **Desktop**: ≥ 1024px (full sidebar visible)

---

## 🔌 Component Props

### Sidebar
```jsx
<Sidebar isOpen={boolean} setIsOpen={function} />
```

### Navbar
```jsx
<Navbar onMenuClick={function} isDark={boolean} setIsDark={function} />
```

### MainLayout
```jsx
<MainLayout>{children}</MainLayout>
```

---

## 🎬 Animation Features

Powered by **Framer Motion**:
- Page transitions (fade + slide)
- Component hover effects
- Staggered animations for lists
- Progress bar animations
- Modal transitions
- Button click effects

---

## 🔄 State Management

Currently using React hooks:
- `useState` for component state
- `useLocation` from React Router for active route detection
- `useEffect` for side effects

For larger state needs, consider:
- Context API
- Redux / Zustand
- Jotai

---

## 📊 Next Steps

### To Add Data
1. Create files in `src/data/` directory
2. Import and use in page components
3. Consider using JSON or API calls

### To Add Backend
1. Set up API calls using `fetch` or `axios`
2. Add error handling
3. Implement loading states
4. Add authentication later if needed

### To Add More Features
1. Create new pages in `src/pages/`
2. Add routes in `src/routes/routes.jsx`
3. Create specific components in `src/components/`
4. Add navigation items in `Sidebar.jsx`

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3000
```

### Tailwind Classes Not Applying
- Clear `.vite` cache
- Restart dev server
- Check `tailwind.config.js` content paths

### Lucide Icons Not Showing
- Ensure `lucide-react` is installed
- Check icon names are correct
- Icons are imported: `import { IconName } from 'lucide-react'`

---

## 📚 Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [React Router Guide](https://reactrouter.com)
- [Framer Motion API](https://www.framer.com/motion)
- [Lucide Icons](https://lucide.dev)
- [Vite Documentation](https://vitejs.dev)

---

## 📝 Notes

- All components use modern React (hooks)
- CSS-in-JS with Tailwind utilities
- Mobile-first responsive design
- Accessibility considerations included
- Performance optimized with lazy loading ready

---

**Happy coding! 🚀 Your PathBloom journey begins here!**

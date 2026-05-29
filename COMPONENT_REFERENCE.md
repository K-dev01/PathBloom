# PathBloom - Component API Reference

## Component Documentation

---

## 🎯 Sidebar Component

**File**: `src/components/Sidebar.jsx`

### Overview
Navigation sidebar with mobile responsiveness, active route highlighting, and smooth animations.

### Props
```typescript
interface SidebarProps {
  isOpen: boolean;           // Sidebar visibility state
  setIsOpen: (boolean) => void;  // Setter for sidebar state
}
```

### Features
- ✅ Fixed on desktop (≥1024px)
- ✅ Collapsible overlay on mobile
- ✅ Active route highlighting with gradient
- ✅ Hover animations
- ✅ Quick toggle button
- ✅ Company branding (logo + name)
- ✅ Footer info section

### Usage
```jsx
import Sidebar from './components/Sidebar';

// In parent component
const [sidebarOpen, setSidebarOpen] = useState(false);

<Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
```

### Navigation Items
The sidebar includes 7 navigation items:
1. Home (/)
2. After 10th (/after-10th)
3. After 12th (/after-12th)
4. Careers (/careers)
5. Scholarships (/scholarships)
6. Colleges (/colleges)
7. Quiz (/quiz)

### Icons Used
- Home, BookOpen, GraduationCap, Briefcase, Trophy, Building2, Brain
- ChevronLeft, ChevronRight (for animations)

### Styling
- Background: Gradient slate (slate-900 → slate-800)
- Text: White with gray-300 alternatives
- Active state: Blue to purple gradient with shadow
- Animations: Framer Motion spring physics

---

## 🔝 Navbar Component

**File**: `src/components/Navbar.jsx`

### Overview
Top navigation bar with search, theme toggle, notifications, and user profile.

### Props
```typescript
interface NavbarProps {
  onMenuClick: () => void;        // Sidebar toggle callback
  isDark: boolean;                 // Dark mode state
  setIsDark: (boolean) => void;   // Dark mode setter
}
```

### Features
- ✅ Sticky positioning
- ✅ Search bar (desktop) + search button (mobile)
- ✅ Dark/light mode toggle
- ✅ Notification bell with indicator
- ✅ User profile button
- ✅ Mobile menu toggle
- ✅ Backdrop blur effect

### Usage
```jsx
import Navbar from './components/Navbar';

const [isDark, setIsDark] = useState(false);

<Navbar
  onMenuClick={() => setSidebarOpen(!sidebarOpen)}
  isDark={isDark}
  setIsDark={setIsDark}
/>
```

### Buttons
- Menu toggle (mobile only)
- Search (with input field)
- Notifications
- Dark/Light mode toggle
- User profile

### Icons Used
- Search, Menu, Bell, Sun, Moon, User

### Styling
- Background: White with backdrop blur (80% opacity)
- Dark mode: slate-900
- Buttons: Hover states with background change

---

## 📐 MainLayout Component

**File**: `src/layouts/MainLayout.jsx`

### Overview
Primary layout wrapper combining Sidebar, Navbar, and content area with theme management.

### Props
```typescript
interface MainLayoutProps {
  children: React.ReactNode;  // Page content
}
```

### Features
- ✅ Flexbox layout
- ✅ Integrated sidebar state management
- ✅ Dark mode state management
- ✅ Smooth content transitions
- ✅ Responsive viewport
- ✅ Max-width content container

### Usage
```jsx
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';

<MainLayout>
  <Home />
</MainLayout>
```

### Internal State
- `sidebarOpen`: boolean - Sidebar visibility
- `isDark`: boolean - Dark mode toggle

### Structure
```
<div class="flex h-screen">
  <Sidebar />
  <div class="flex-1 flex-col">
    <Navbar />
    <main class="flex-1 overflow-y-auto">
      {children}
    </main>
  </div>
</div>
```

---

## 📄 Page Components

### Home.jsx
**Route**: `/`

**Features**:
- Hero section with gradient background
- 4 Feature cards with icons
- Statistics grid (4 metrics)
- Responsive grid layout

**Content Sections**:
- Welcome message
- Platform features
- Key metrics

---

### After10th.jsx
**Route**: `/after-10th`

**Features**:
- 4 Educational pathway cards
- Subject listings
- Career options
- Consultation booking section

**Pathways**:
1. Science Stream
2. Commerce Stream
3. Humanities Stream
4. Vocational Courses

---

### After12th.jsx
**Route**: `/after-12th`

**Features**:
- 4 Higher education programs
- Duration information
- Career opportunities grid
- Tips section (3 items)

**Programs**:
1. Bachelor Degree (3-4 years)
2. Diploma Programs (2-3 years)
3. Professional Courses (1-2 years)
4. Skill Development (Flexible)

---

### Careers.jsx
**Route**: `/careers`

**Features**:
- 6 Career cards
- Salary ranges
- Market demand indicators
- Required skills
- Resources section

**Data Points Per Career**:
- Title
- Salary (in LPA)
- Demand level
- Annual growth percentage
- Key skills (3 items)

---

### Scholarships.jsx
**Route**: `/scholarships`

**Features**:
- 6 Scholarship opportunities
- Filter buttons (5 categories)
- Eligibility criteria
- Deadline information
- Award amounts

**Scholarship Categories**:
- Merit-Based
- Need-Based
- Special (Women)
- Sports
- Category-Based
- International

---

### Colleges.jsx
**Route**: `/colleges`

**Features**:
- 6 College listings
- Rating system (5-star)
- Location information
- Placement rates with progress bar
- Student population
- Search functionality
- Filter options (4 types)

---

### Quiz.jsx
**Route**: `/quiz`

**Features**:
- 5-question interactive quiz
- Progress bar
- Multiple choice options (4 per question)
- Result matching system
- 3 Career recommendations
- Next steps guidance
- Retake functionality

**Question Topics**:
1. Interests
2. Working style
3. Work environment
4. Societal contribution
5. Career timeline

---

## 🎨 Styling Classes

### Tailwind Utilities Used

#### Layout
- `flex`, `flex-col`, `grid`, `gap-*`
- `w-*`, `h-*`, `max-w-*`
- `p-*`, `m-*` (padding, margin)

#### Colors & Backgrounds
- `bg-gradient-to-*`
- `from-*`, `to-*`, `via-*`
- `text-*`, `text-white`, `text-gray-*`

#### Effects
- `shadow-*`, `shadow-lg`
- `rounded-*`, `rounded-full`
- `border`, `border-*`
- `backdrop-blur-md`
- `opacity-*`

#### Responsive
- `hidden`, `block`
- `md:`, `lg:` prefixes
- `flex-1`, `flex-grow`

---

## 🔄 State Management

### Component State Patterns

**Sidebar Toggle**:
```jsx
const [sidebarOpen, setSidebarOpen] = useState(false);
```

**Theme Toggle**:
```jsx
const [isDark, setIsDark] = useState(false);
```

**Quiz Progress**:
```jsx
const [currentQuestion, setCurrentQuestion] = useState(0);
const [selectedAnswers, setSelectedAnswers] = useState({});
const [showResults, setShowResults] = useState(false);
```

---

## 🎬 Animation Patterns

### Framer Motion Usage

**Container Animations**:
```jsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};
```

**Item Animations**:
```jsx
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
```

**Hover Effects**:
```jsx
<motion.button whileHover={{ scale: 1.05 }} />
```

**Page Transitions**:
```jsx
<motion.main
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
/>
```

---

## 🔗 Routing

### Route Configuration (src/routes/routes.jsx)

```javascript
export const router = createBrowserRouter([
  { path: '/', element: <MainLayout><Home /></MainLayout> },
  { path: '/after-10th', element: <MainLayout><After10th /></MainLayout> },
  { path: '/after-12th', element: <MainLayout><After12th /></MainLayout> },
  { path: '/careers', element: <MainLayout><Careers /></MainLayout> },
  { path: '/scholarships', element: <MainLayout><Scholarships /></MainLayout> },
  { path: '/colleges', element: <MainLayout><Colleges /></MainLayout> },
  { path: '/quiz', element: <MainLayout><Quiz /></MainLayout> },
]);
```

### Active Route Detection
```jsx
const location = useLocation();
const isActive = (path) => location.pathname === path;
```

---

## 🎯 Icon Library (Lucide React)

### Icons Used Across Components

**Navigation**:
- Home, BookOpen, GraduationCap, Briefcase, Trophy, Building2, Brain

**UI Controls**:
- ChevronLeft, ChevronRight, Menu, Search, Bell, Sun, Moon, User

**Content**:
- Sparkles, ArrowRight, CheckCircle, RotateCcw, Star, MapPin, Building2

**Data Display**:
- TrendingUp, Users, DollarSign, Calendar, Award, Filter

---

## 📊 Data Patterns

### Card Pattern
```jsx
<motion.div
  whileHover={{ y: -8 }}
  className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-6"
>
  {/* Card content */}
</motion.div>
```

### Grid Layout Pattern
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Grid items */}
</div>
```

### Section Pattern
```jsx
<motion.section
  variants={sectionVariants}
  className="space-y-12"
>
  {/* Section content */}
</motion.section>
```

---

## ✨ Best Practices Used

1. **Component Composition**: Small, reusable components
2. **Props Interface**: Clear prop definitions
3. **State Management**: Minimal, local state
4. **Animations**: Smooth, purposeful motion
5. **Responsive Design**: Mobile-first approach
6. **Accessibility**: Semantic HTML, ARIA attributes
7. **Performance**: Optimized re-renders
8. **Code Organization**: Clear folder structure

---

## 🚀 Extending Components

### Adding a New Page

1. Create `src/pages/NewPage.jsx`
2. Add route in `src/routes/routes.jsx`
3. Add navigation item in `Sidebar.jsx`
4. Export from routes

### Adding a New Component

1. Create `src/components/NewComponent.jsx`
2. Define props interface
3. Implement component logic
4. Export and use

### Adding a New Route

1. Create page component
2. Import in `routes.jsx`
3. Add route definition
4. Update navigation

---

## 📞 Common Customizations

### Change Colors
Edit `tailwind.config.js` theme colors

### Change Fonts
Modify `tailwindcss` config

### Add Animations
Use Framer Motion variants

### Adjust Spacing
Use Tailwind spacing utilities

---

**Happy coding! 🎓**

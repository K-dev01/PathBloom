# PathBloom - Quick Start Guide 🚀

## Get Your Project Running in 2 Minutes!

---

## Step 1: Navigate to Project Directory

```bash
cd d:\PathBloom\PathBloom
```

---

## Step 2: Start the Development Server

### Option A: Using PowerShell (Recommended)
```powershell
powershell -ExecutionPolicy Bypass -Command "npm run dev"
```

### Option B: Using Command Prompt
```cmd
npm run dev
```

### Option C: Using Git Bash
```bash
npm run dev
```

---

## Step 3: Open in Browser

Once you see the message:
```
Local:   http://localhost:5173/
```

Open your browser and visit: **http://localhost:5173/**

---

## 🎯 What to Test

### Navigation
1. Click on all sidebar navigation items
2. Verify each page loads with correct content
3. Test active route highlighting

### Responsive Design
1. **Desktop**: Open browser at full width
   - Sidebar should be visible
   - Full layout displayed
   
2. **Tablet**: Resize to 768px - 1024px
   - Sidebar may be collapsible
   - Adjust spacing
   
3. **Mobile**: Resize below 768px
   - Sidebar hidden by default
   - Hamburger menu button appears
   - Click menu icon to toggle sidebar

### Dark Mode
1. Click the moon icon in navbar
2. UI should transition to dark theme
3. Click sun icon to return to light theme

### Interactive Features
1. **Home Page**: 
   - Hover over feature cards (should animate up)
   - View statistics

2. **Careers Page**:
   - Hover over career cards
   - View salary and growth info

3. **Quiz Page**:
   - Select answers
   - Progress bar updates
   - Submit quiz
   - View results
   - Click "Retake Quiz" button

4. **Scholarships**:
   - Click filter buttons
   - View scholarship details

### Animations
- Smooth page transitions
- Button hover effects
- Icon animations
- Card elevation on hover
- Progress bar animations

---

## 📱 Testing on Different Devices

### Using Chrome DevTools
1. Press `F12` to open DevTools
2. Click device toolbar (Ctrl+Shift+M)
3. Select different device sizes:
   - iPhone SE (375px)
   - iPad (768px)
   - iPad Pro (1024px)
   - Desktop (1920px)

---

## 🎨 File Structure Reference

```
PathBloom/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── After10th.jsx
│   │   ├── After12th.jsx
│   │   ├── Careers.jsx
│   │   ├── Scholarships.jsx
│   │   ├── Colleges.jsx
│   │   └── Quiz.jsx
│   ├── layouts/
│   │   └── MainLayout.jsx
│   ├── routes/
│   │   └── routes.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── vite.config.js
```

---

## 🛠️ Common Commands

### Development
```bash
npm run dev      # Start dev server (http://localhost:5173)
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Check code quality
```

### Troubleshooting
```bash
# Clear cache and reinstall
rm -r node_modules package-lock.json
npm install

# Update dependencies
npm update

# Check for security vulnerabilities
npm audit
```

---

## 📝 Pages to Visit

| URL | Page | Content |
|-----|------|---------|
| http://localhost:5173/ | Home | Hero, features, stats |
| http://localhost:5173/after-10th | After 10th | Education pathways |
| http://localhost:5173/after-12th | After 12th | Higher education |
| http://localhost:5173/careers | Careers | Career options, salary |
| http://localhost:5173/scholarships | Scholarships | Funding opportunities |
| http://localhost:5173/colleges | Colleges | College finder |
| http://localhost:5173/quiz | Quiz | Career discovery quiz |

---

## 🎯 What's Included

✅ **2 Components**
- Sidebar (navigation)
- Navbar (top bar)

✅ **1 Layout**
- MainLayout (wrapper)

✅ **7 Pages**
- Home, After10th, After12th, Careers, Scholarships, Colleges, Quiz

✅ **7 Routes**
- All pages routable via React Router

✅ **Modern Design**
- Tailwind CSS styling
- Dark mode support
- Glassmorphism effects
- Framer Motion animations

✅ **Responsive Design**
- Mobile (< 768px)
- Tablet (768px - 1024px)
- Desktop (≥ 1024px)

✅ **25+ Lucide Icons**
- Navigation icons
- UI control icons
- Content icons

---

## 🎨 Design Highlights

### Colors
- **Primary**: Blue shades
- **Secondary**: Purple shades
- **Accent**: Pink shades
- **Dark Mode**: Full dark theme support

### Typography
- Modern sans-serif fonts
- Responsive text sizes
- Clear hierarchy

### Effects
- Gradient backgrounds
- Glass blur effects
- Smooth shadows
- Hover animations

---

## ⌨️ Keyboard Navigation

- `Tab`: Navigate between elements
- `Enter`: Activate buttons
- `Escape`: Close mobile sidebar
- `Arrow Keys`: Quiz options

---

## 🔍 Features to Explore

1. **Sidebar Navigation**
   - Click items to navigate
   - Active item highlighted
   - Collapses on mobile
   - Smooth animations

2. **Search Bar**
   - Visible on desktop
   - Hidden on mobile (search button instead)
   - Placeholder text for context

3. **Theme Toggle**
   - Moon icon = Light mode
   - Sun icon = Dark mode
   - Smooth transition

4. **Quiz Functionality**
   - 5 questions
   - Progress bar
   - Answer selection
   - Result matching
   - Career recommendations

5. **Cards & Grids**
   - Responsive grid layouts
   - Hover animations
   - Smooth transitions
   - Icon integration

---

## 📊 Browser Console

Check for any errors:
1. Press `F12` to open DevTools
2. Go to "Console" tab
3. Look for any red error messages
4. Green checkmarks = all good!

---

## 🚀 Next Steps After Testing

### Ready to Customize?

1. **Change Colors**
   - Edit `tailwind.config.js`

2. **Add More Pages**
   - Create in `src/pages/`
   - Add route in `src/routes/routes.jsx`
   - Add nav item in `Sidebar.jsx`

3. **Modify Content**
   - Edit page components
   - Update text and images
   - Adjust layouts

4. **Connect Backend**
   - Add API calls
   - Implement authentication
   - Connect database

---

## 📚 Documentation Files

- **SETUP_GUIDE.md** - Comprehensive setup guide
- **PROJECT_SUMMARY.md** - Project overview
- **COMPONENT_REFERENCE.md** - Component API docs
- **CHECKLIST.md** - Implementation checklist

---

## 💡 Tips

1. **DevTools Responsive Mode** - Test on all device sizes
2. **Dark Mode** - Toggle theme in navbar
3. **Animations** - Hover over cards to see animations
4. **Quiz** - Complete the 5-question quiz to see results
5. **Sidebar** - Toggle on mobile using menu button

---

## ⚠️ Troubleshooting

### Dev server won't start?
```bash
# Clear cache
npm cache clean --force

# Reinstall dependencies
npm install

# Try again
npm run dev
```

### Styles look weird?
```bash
# Restart dev server (usually fixes it)
# Press Ctrl+C to stop, then npm run dev
```

### Routes not working?
- Check URL matches route in `routes.jsx`
- Verify page component imports
- Check browser console for errors

---

## 🎓 Learning Resources

All included in the project:
- React Router documentation links
- Tailwind CSS examples
- Framer Motion animation patterns
- Component composition patterns

---

## ✨ You're All Set!

Your PathBloom project is fully functional and ready for:
- 🧪 Testing
- 🎨 Customization
- 🚀 Development
- 📦 Deployment

**Start exploring: http://localhost:5173/** 🎉

---

**Happy coding! 🚀**

If you need help, refer to:
- SETUP_GUIDE.md - Setup instructions
- COMPONENT_REFERENCE.md - Component details
- PROJECT_SUMMARY.md - Project overview

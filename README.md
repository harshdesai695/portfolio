# 🌟 3D Interactive Portfolio

A modern, immersive portfolio website built with React and Three.js, featuring stunning 3D visualizations and smooth scroll-based animations. This portfolio showcases professional experience, projects, and skills in an engaging and interactive manner.

![Portfolio Preview](https://img.shields.io/badge/Status-Active-success)
![React](https://img.shields.io/badge/React-19.1.1-blue)
![Three.js](https://img.shields.io/badge/Three.js-0.180.0-black)

## ✨ Features

- **🎨 3D Interactive Elements**: Dynamic icosahedron that responds to scroll position
- **⭐ Particle Star Field**: Animated background with 5000+ particles
- **📜 Smooth Scroll Experience**: Seamless transitions between sections using R3F ScrollControls
- **🎭 Framer Motion Animations**: Elegant entrance and hover animations
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **⚡ Performance Optimized**: Lazy loading and efficient rendering
- **🎯 Modern UI/UX**: Glassmorphism effects and clean design

## 🛠️ Tech Stack

### Core Technologies
- **React 19.1.1** - UI library
- **Three.js 0.180.0** - 3D graphics
- **@react-three/fiber 9.4.0** - React renderer for Three.js
- **@react-three/drei 10.7.6** - Useful helpers for R3F
- **Framer Motion 12.23.24** - Animation library
- **Vite 7.1.7** - Build tool and dev server

### Additional Libraries
- **React Router DOM 7.9.4** - Routing
- **React Icons 5.5.0** - Icon library
- **Maath 0.10.8** - Math utilities for 3D

## 📂 Project Structure

```
portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── canvas/
│   │   │   ├── Scene.jsx          # Main 3D icosahedron
│   │   │   └── Stars.jsx          # Particle star field
│   │   ├── About.jsx              # About section
│   │   ├── Contact.jsx            # Contact section with social links
│   │   ├── Experience.jsx         # Professional experience
│   │   ├── Hero.jsx               # Landing section
│   │   ├── Loader.jsx             # Loading component
│   │   ├── Projects.jsx           # Project showcase
│   │   └── Skills.jsx             # Skills display
│   ├── App.jsx                    # Main app component
│   ├── App.css
│   ├── index.css                  # Global styles
│   └── main.jsx                   # Entry point
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v20.19.0 or >=22.12.0)
- **npm** (v8.0.0 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 🎨 Customization Guide

### Updating Personal Information

#### 1. Hero Section
Edit `src/components/Hero.jsx`:
```jsx
<h1 className="hero-h1">
  Hi, I'm <span style={{ color: 'var(--name-color)' }}>Your Name</span>
</h1>
```

#### 2. About Section
Modify `src/components/About.jsx` to reflect your background and expertise.

#### 3. Experience
Update `src/components/Experience.jsx`:
```javascript
const experience = {
  company: "Your Company",
  role: "Your Role",
  duration: "Your Duration",
  points: [
    "Your achievement 1",
    "Your achievement 2",
    // ... more points
  ]
};
```

#### 4. Projects
Edit the projects array in `src/components/Projects.jsx`:
```javascript
const projects = [
  {
    name: 'Project Name',
    description: 'Project description',
    tech: ['Tech1', 'Tech2'],
    url: 'https://github.com/username/project',
  },
  // ... more projects
];
```

#### 5. Skills
Update skills in `src/components/Skills.jsx`:
```javascript
const skillsData = {
  Languages: ['JavaScript', 'Python', ...],
  Frameworks: ['React', 'Node.js', ...],
  // ... more categories
};
```

#### 6. Contact Links
Modify social links in `src/components/Contact.jsx`:
```javascript
const socialLinks = [
  {
    icon: <FaEnvelope size={30} />,
    href: "mailto:your.email@example.com",
    label: "Email",
    hoverColor: "#EA4335"
  },
  // ... more links
];
```

### Styling Customization

Edit CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #1a1a1a;      /* Background color */
  --secondary-color: #f0f0f0;    /* Text color */
  --accent-color: #646cff;       /* Accent color */
  --name-color: #ff6f61;         /* Name highlight color */
}
```

### 3D Scene Customization

#### Icosahedron Properties
Edit `src/components/canvas/Scene.jsx`:
```jsx
<Icosahedron args={[2, 0]}>  {/* [radius, detail] */}
  <meshStandardMaterial
    color="#a3a8ff"        {/* Change color */}
    wireframe={false}      {/* Toggle wireframe */}
    roughness={0.3}        {/* Adjust roughness */}
    metalness={0.7}        {/* Adjust metalness */}
  />
</Icosahedron>
```

#### Star Field Properties
Edit `src/components/canvas/Stars.jsx`:
```jsx
const [sphere] = useState(() => 
  random.inSphere(new Float32Array(5000), { radius: 15 })
  // Adjust particle count (5000) and radius (15)
);

<PointMaterial
  color="#f0f0f0"        {/* Star color */}
  size={0.02}            {/* Star size */}
/>
```

## 🌐 Deployment

### Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** through Netlify's web interface or CLI

### Deploy to GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update `vite.config.js`**
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/repository-name/'
   })
   ```

3. **Add scripts to `package.json`**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

## 🎯 Performance Optimization Tips

1. **Lazy Load Components**: Already implemented with `Suspense`
2. **Optimize Images**: Use WebP format for better compression
3. **Code Splitting**: Vite handles this automatically
4. **Reduce Particle Count**: Lower the star count on mobile devices
5. **Use Production Build**: Always deploy production builds

## 🐛 Troubleshooting

### Common Issues

**Issue: White screen on load**
- Check browser console for errors
- Ensure all dependencies are installed
- Clear browser cache

**Issue: 3D elements not rendering**
- Update GPU drivers
- Try a different browser
- Check if WebGL is supported: https://get.webgl.org/

**Issue: Performance problems**
- Reduce star particle count
- Simplify 3D geometry
- Check system specifications

**Note**: WebGL support required for 3D features


## 👤 Author

**Harsh Desai**

- LinkedIn: [@harshdesaihd](https://www.linkedin.com/in/harshdesaihd/)
- GitHub: [@harshdesai695](https://github.com/harshdesai695)
- Email: harshdesai.hd123@gmail.com
- LeetCode: [@Harsh_Desai](https://leetcode.com/u/Harsh_Desai/)

## 📊 Stats

![GitHub repo size](https://img.shields.io/github/repo-size/harshdesai695/portfolio)
![GitHub stars](https://img.shields.io/github/stars/harshdesai695/portfolio?style=social)
![GitHub forks](https://img.shields.io/github/forks/harshdesai695/portfolio?style=social)

---

⭐ If you found this project helpful, please give it a star!

**Made with ❤️ using React and Three.js**

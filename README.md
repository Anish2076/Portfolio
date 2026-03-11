## 🌐 Live Website
https://anish2076.github.io/Portfolio/
# 💼 Anish Kumar M - Portfolio Website

A professional, fully-responsive portfolio website built with **React**, **HTML5**, **CSS3**, and **JavaScript**. Showcase your skills, projects, resume, and contact information with smooth animations and modern design.

## 🚀 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations** - Professional entrance animations, hover effects, and interactive elements
- **Profile Photo Upload** - Upload and save your profile photo with base64 conversion
- **Skills Section** - Display your technical skills with animated underlines and hover effects
- **Projects Showcase** - Link to your GitHub repositories with project descriptions
- **Resume Integration** - Download and view your resume directly from the portfolio
- **Contact Information** - Email, phone, location with clickable links
- **Social Media Links** - Connect with LinkedIn, GitHub, and other platforms
- **Modern UI** - Dark theme with orange accents and glassmorphism effects
- **Photo Animations** - Bouncing effect, glowing aura, spinning border, and zoom pulse animations

## 🛠 Technologies Used

- **React 18** - UI library (via CDN)
- **Babel Standalone** - JSX transpilation (via CDN)
- **HTML5** - Document structure
- **CSS3** - Styling and animations
- **JavaScript (ES6+)** - Interactivity and state management
- **FileReader API** - Image to base64 conversion
- **Clipboard API** - Copy functionality

## 📋 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── app.js             # React component & logic
├── style.css          # Styling and animations
├── resume.pdf         # Your resume (add your resume file)
├── my profile pic.jpg # Profile photo (optional)
└── README.md          # This file
```

## 🎯 Sections Included

1. **Navigation Bar** - Sticky navbar with links to all sections
2. **Hero Section** - Welcome message with CTA button and profile image
3. **About Me** - Detailed information about you and your career goals
4. **Technical Skills** - List of your technical skills with animations
5. **Featured Projects** - Grid showcasing your GitHub projects
6. **Resume** - Download and view your resume
7. **Contact** - Contact information and social media links
8. **Footer** - Copyright information

## 🚀 How to Use

### 1. Download/Clone the Project
```bash
git clone https://github.com/Anish2076/portfolio.git
cd portfolio
```

### 2. Open in Browser
Simply open `index.html` in your web browser:
- Double-click the file, or
- Right-click → Open with → Browser

### 3. Customize Content
Edit `app.js` to update:
- Your full name (line 54)
- Profile photo (line 4)
- Projects array (lines 12-15)
- Skills list (line 19)
- Contact information (lines 21-24)
- Social media links (lines 26-29)

### 4. Add Your Resume
- Place your resume file in the portfolio folder
- Update the filename in line 171 if needed

### 5. Add Profile Photo
- Click **+ Upload Photo** on the portfolio
- Or update the filename on line 4 of `app.js`

## 📸 Adding Your Profile Photo

Two methods:

**Method 1: Upload via Browser**
1. Open portfolio in browser
2. Click **+ Upload Photo** button
3. Select your image
4. Click **📋 Copy Code to Save** to copy base64
5. Paste it in line 4 of `app.js`

**Method 2: Direct File Path**
Replace line 4 in `app.js`:
```javascript
const [profilePhoto, setProfilePhoto] = useState('my profile pic.jpg');
```

## 📄 Customization Guide

### Update Your Name
In `app.js` line 54:
```javascript
<div className="logo">💼 Your Name Here</div>
```

### Update Projects
In `app.js` lines 12-15:
```javascript
const projects = [
  { id: 1, name: 'Project Name', description: 'Description', url: 'https://github.com/your-username/repo' },
  // Add more projects...
];
```

### Update Skills
In `app.js` line 19:
```javascript
const skills = ['HTML', 'CSS', 'JavaScript', 'REACT', 'Java', 'Your Skill'];
```

### Change Color Scheme
In `style.css`, search for `#ff4500` (orange) and `#0a0a0a` (dark background) to customize colors.

## 🎨 Animation Features

- **Fade In** - Elements fade in on page load
- **Slide In** - Sections slide in from different directions
- **Bounce** - Profile photo bounces continuously
- **Glow** - Pulsing orange glow effects
- **Rotate** - Spinning border and icons
- **Zoom Pulse** - Subtle zoom on hover
- **Shimmer** - Shimmering text effects
- **Float** - Floating placeholder icons

## 🔗 Deployment

Deploy your portfolio for free using:

1. **GitHub Pages**
   - Push to GitHub
   - Go to Settings → Pages → Select main branch
   - Your site will be live at `https://username.github.io/portfolio`

2. **Netlify**
   - Drag & drop your folder
   - Instant deployment

3. **Vercel**
   - Connect GitHub repo
   - Auto-deploys on push

## 📞 Contact Information

- **Email**: anishjogi10@gmail.com
- **Phone**: +91 8217634422
- **Location**: Bangalore, India
- **GitHub**: https://github.com/Anish2076
- **LinkedIn**: https://www.linkedin.com/in/anish-kumar-m-876478302

## 💡 Tips for Best Results

1. Use a high-quality profile photo (square format, 500x500px minimum)
2. Keep project descriptions concise and impactful
3. Add relevant keywords to your skills section
4. Make sure resume PDF is properly formatted
5. Test on mobile devices before deploying
6. Update content regularly with new projects

## 🤝 Contributing

Feel free to modify and customize this portfolio for your needs!

## 📝 License

This project is open source and available for personal and commercial use.

## ✨ Credits

Built with ❤️ by Anish Kumar M

---

**Made with React & CSS Magic** ✨


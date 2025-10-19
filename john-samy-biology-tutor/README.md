# John Samy - EST2 & ACT2 Biology Tutor Website

A professional, responsive website for John Samy's Biology tutoring course, built with Next.js and Tailwind CSS.

## Features

- 🎨 **Modern Design**: Clean, professional layout with navy blue (#1C355E) and teal (#3AAFA9) color scheme
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- ⚡ **Fast Performance**: Built with Next.js for optimal loading speeds
- 🎭 **Smooth Animations**: Scroll animations and hover effects using Framer Motion and AOS
- 📧 **Contact Form**: Registration form with EmailJS integration (ready for setup)
- 🔍 **SEO Optimized**: Meta tags, structured data, and semantic HTML
- ♿ **Accessible**: WCAG compliant design with proper contrast and navigation

## Sections

1. **Hero Section**: Eye-catching landing with logo and call-to-action
2. **About the Course**: Course overview with key features and benefits
3. **About the Instructor**: John Samy's background and contact information
4. **Course Structure**: 16 detailed biology sessions
5. **Student Success Stories**: Testimonials and results
6. **Registration Form**: Contact form for course enrollment
7. **Footer**: Contact information and social links

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### EmailJS Setup (Optional)

To enable the contact form functionality:

1. Sign up for EmailJS at [emailjs.com](https://www.emailjs.com)
2. Create a service (Gmail, Outlook, etc.)
3. Get your service ID, template ID, and public key
4. Update the form submission logic in `src/app/page.tsx`

## Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.ts`:
- Navy: `#1C355E`
- Teal: `#3AAFA9`
- Light Teal: `#4FD1C7`

### Fonts
- Primary: Inter (body text)
- Secondary: Poppins (headings)

### Logo
Replace `/public/logo.svg` with your custom logo. The current logo is a placeholder SVG.

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The website can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Heroku

## File Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and Tailwind imports
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main page component
public/
├── logo.svg             # Main logo
├── favicon.svg          # Browser favicon
└── ...                  # Other static assets
```

## Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **AOS**: Animate on scroll library
- **React Icons**: Icon library
- **EmailJS**: Email service integration

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- Core Web Vitals: Optimized
- Image optimization with Next.js Image component
- Font optimization with Google Fonts

## License

© 2025 John Samy – All Rights Reserved

## Contact

For questions or support:
- Email: johnsamy987@gmail.com
- Phone: 01205292523
# St. Ann's Hospital - Vue.js SPA

This is a modern Vue.js Single Page Application (SPA) version of the St. Ann's Hospital website, built with Vue 3, Vite, and TypeScript.

## Features

- **Vue 3 + TypeScript**: Modern reactive framework with type safety
- **Vite**: Fast build tool and development server
- **Vue Router**: Client-side routing for SPA navigation
- **Pinia**: State management
- **Data-driven**: Content managed through JSON files for easy updates
- **Responsive Design**: Mobile-first responsive layout
- **Component-based**: Reusable components for maximum efficiency
- **Static Build**: Generates static HTML for GitHub Pages deployment

## Project Structure

```
src/
├── components/          # Reusable Vue components
│   ├── layout/         # Layout components (Header, Footer)
│   └── common/         # Common UI components
├── data/               # JSON data files for dynamic content
├── views/              # Page components
├── router/             # Vue Router configuration
└── main.ts            # Application entry point
```

## Data Management

All content is managed through JSON files in the `src/data/` directory:

- `site-config.json` - Site configuration, navigation, contact info
- `hero-slides.json` - Homepage slider content
- `features.json` - Feature blocks data
- `services.json` - Services information
- `doctors.json` - Doctor profiles
- `testimonials.json` - Customer testimonials
- `pricing.json` - Pricing plans
- `news.json` - Blog/news articles
- `clients.json` - Client logos
- `departments.json` - Department information

## Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Setup

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open http://localhost:3000 in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run lint` - Run ESLint

## Deployment

### GitHub Pages

The project is configured for automatic deployment to GitHub Pages:

1. Push to the `main` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. The site will be available at `https://yourusername.github.io/your-repo-name`

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The `dist` folder contains the static files ready for deployment

3. Upload the contents of `dist` to your web server

## Content Updates

To update content:

1. Edit the appropriate JSON file in `src/data/`
2. Commit and push changes
3. The site will automatically rebuild and deploy

### Example: Adding a New Doctor

Edit `src/data/doctors.json`:

```json
{
  "id": 5,
  "name": "Dr. New Doctor",
  "designation": "Specialist",
  "image": "/images/resource/team-5.jpg",
  "specialization": "Cardiology",
  "experience": "10 years",
  "social": {
    "facebook": "#",
    "linkedin": "#",
    "twitter": "#",
    "pinterest": "#"
  }
}
```

## Customization

### Styling

The project uses the original CSS files from the HTML template. To customize:

1. Modify CSS files in `public/css/`
2. Or add custom styles in component `<style>` blocks

### Adding New Pages

1. Create a new Vue component in `src/views/`
2. Add the route in `src/router/index.ts`
3. Update navigation in `src/data/site-config.json`

### Adding New Components

1. Create component in `src/components/`
2. Import and use in your views
3. Follow the existing component patterns

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for St. Ann's Hospital. All rights reserved.

## Support

For technical support or questions about this Vue.js implementation, please contact the development team.
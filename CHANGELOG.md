# Changelog

All notable changes to this project will be documented in this file.

## [1.0.3] - 2026-02-22

### Changed
- Extracted Formspree handling to external `formspree.js` file
- Rewrote form handler using vanilla JavaScript (removed jQuery dependency)
- Added proper email validation with regex
- Improved error handling with inline error messages
- Modular `FormspreeHandler` object for maintainability

## [1.0.2] - 2026-02-22

### Changed
- Updated color theme to calm healthcare-inspired palette
- **Primary colors**: Calm blue (#2B7CFF, #1F6EDC) for trust and stability
- **Secondary colors**: Soft green (#22C55E, #4ADE80) for care and healing
- **Surface colors**: Light gray backgrounds (#F8FAFC, #F1F5F9)
- **Text colors**: Dark gray (#1F2933, #374151) for readability
- Added blue-to-green gradients for hero, buttons, step numbers, and feature icons
- Updated all buttons with gradient styling and soft shadows
- Redesigned feature cards with gradient icon backgrounds
- Updated trust badges with rounded corners and hover effects
- Applied soft shadow utilities throughout for depth
- Enhanced accessibility with high contrast text

## [1.0.1] - 2026-02-22

### Changed
- Integrated Formspree (formspree.io/f/xbdazakn) for waitlist email signups
- Added AJAX form submission with loading state ("Joining...")
- Added error handling with user feedback for failed submissions

## [1.0.0] - 2026-02-22

### Added
- Initial landing page for Ehsana platform
- **Hero section** with headline, description, and CTA button
- **Features section** with 3 feature cards (Real-time Updates, Wellbeing Insights, Simple Communication)
- **How it Works section** with 3 steps explaining the onboarding process
- **Email signup form** (frontend only) with success state
- **Trust/Privacy section** highlighting GDPR compliance, encryption, no data selling, and user control
- **Footer** with contact information, social links, and legal links
- Mobile-responsive navigation with hamburger menu
- Tailwind CSS integration via CDN
- Custom calming healthcare color palette (primary green, secondary blue, accent orange)
- Accessibility features (ARIA labels, semantic HTML, good color contrast)
- Smooth scroll behavior
- Well-commented HTML structure
- Ready for GitHub Pages deployment

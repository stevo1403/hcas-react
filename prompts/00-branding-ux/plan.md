# Branding, Visual Identity & UX Guidelines

- **Logo:** `_logo.png`
- **Color Palette:**
  - Primary: #2E7D32
  - Secondary: #00897B
  - Accent: #FFB74D
  - Error: #D32F2F
  - Success: #7CB342
  - Background: #FAFAFA
  - Surface: #F5F5F5
  - Text Primary: #212121
  - Text Secondary: #757575
  - Divider: #E0E0E0

- **Font:** Inter

- **Overall Feel:** Clinical, clean, minimal

- **Web (Material UI):**
  - Theme: Implement using MUI ThemeProvider with custom palette
  - Typography: Inter font family via MUI Typography
  - Navigation: Responsive AppBar + Drawer, Profile always accessible
  - Component Library: Material UI (MUI)

- **Native (React Native Paper):**
  - Theme: Implement using PaperProvider with custom theme
  - Typography: Inter font family
  - Navigation: Bottom tab navigation (React Navigation)
  - Component Library: React Native Paper

- **Common Elements:**
  - Onboarding: Email/password only
  - Transitions: Smooth transitions between screens/routes
  - Feedback/Notifications: Snackbars, alerts, modals as appropriate
  - Dark Mode: Fully supported (MUI dark theme/React Native Paper dark theme)
  - Accessibility: ARIA for web, React Native Accessibility API for native
  - Appointments UI: List/Table view
  - Medical Records UI: Card-based
  - Notifications: Dedicated screen
  - Loading/Progress: Circular progress indicators
  - Error Handling: User-friendly error messages
  - Offline Support: Works offline with appropriate feedback
  - Responsive Design: Mobile, tablet, and desktop support 
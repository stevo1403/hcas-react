# User Role Selection Screen

**Purpose:**
- Allow the user to select their role before authentication.
- Streamline onboarding for Patients and Staff (Other).

**Web Implementation (React + Material UI):**
- **Component Structure:**
  - Container with MUI AppBar (with "Back" IconButton)
  - Centered Box with logo image
  - Typography for title: "Welcome! Please select your role" (Inter font)
  - Two MUI Cards for selection:
    - **Patient Card:**
      - Uses primary color (#2E7D32) for styling
      - MUI Icon for patient (e.g., PersonIcon)
      - Typography for title and subtext
    - **Other Card:**
      - Uses secondary color (#00897B) for styling
      - MUI Icon for staff (e.g., WorkIcon)
      - Typography for title and subtext
  - MUI CircularProgress for loading state if needed
  - Responsive Grid layout

- **Implementation Notes:**
  - Use React Router for navigation
  - Use Redux Toolkit for role storage if needed
  - Implement motion/transitions with MUI transitions or framer-motion
  - Apply responsive design with MUI's Grid system

**Native Implementation (React Native + Paper):**
- **Component Structure:**
  - SafeAreaView/View container
  - Appbar.Header with back button
  - Image component for logo
  - Text component for title
  - Two Paper.Card components:
    - **Patient Card:**
      - Primary color theme
      - Icon component
      - Title and Paragraph components
    - **Other Card:**
      - Secondary color theme
      - Icon component
      - Title and Paragraph components
  - ActivityIndicator for loading state

- **Implementation Notes:**
  - Use React Navigation for screen transitions
  - Use TouchableRipple for card press effects
  - Implement responsive design with Dimensions API

**Behavior (Both Platforms):**
- Tapping **Patient** navigates to the patient authentication screen (register/login)
- Tapping **Other** navigates to the staff login screen (login only)
- Smooth animated transitions between screens
- Loading indicator if any async operations are needed

**Accessibility:**
- **Web:** 
  - ARIA roles and labels for all elements
  - Keyboard navigation support
  - High contrast colors
  - Focus indicators

- **Native:**
  - accessibilityLabel props for screen readers
  - accessibilityHint props for additional context
  - Large touch targets

**Layout Example:**
```
+-----------------------------+
| [Back]        [Logo]        |
|                             |
| Welcome! Please select...   |
|                             |
|  [ Patient Card ]           |
|   (icon, primary color)     |
|   Register or login as...   |
|                             |
|  [ Other Card ]             |
|   (icon, secondary color)   |
|   Staff login only          |
+-----------------------------+
``` 
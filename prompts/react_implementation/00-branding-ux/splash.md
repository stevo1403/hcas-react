# Splash Screen

**Purpose:**
- Display the app logo and name with the primary color as background.
- Optionally show a loading spinner.
- While showing, check authentication status and initialize resources.
- After a short delay or once ready, navigate to login or dashboard as appropriate.

**Web Implementation (React + Material UI):**
- **Component Structure:**
  - Full-screen div with primary color background (#2E7D32)
  - Centered logo (`_logo.png`) using MUI Box and Grid components
  - App name in "Inter" font using MUI Typography
  - Optional: CircularProgress component below the logo
- **Implementation Notes:**
  - Use React hooks (useState, useEffect) for timing and auth check
  - Use React Router for navigation to login or dashboard
  - Use JWT from localStorage for auth check
  - Implement via lazy loading or route-based code splitting

**Native Implementation (React Native + Paper):**
- **Component Structure:**
  - Full-screen View with primary color background
  - Centered logo using Image component
  - App name in "Inter" font using Text component
  - Optional: ActivityIndicator component below the logo
- **Implementation Notes:**
  - Use React hooks for timing and auth check
  - Use React Navigation for routing to login or dashboard
  - Use AsyncStorage for auth token retrieval
  - Consider implementing via a separate screen in the navigation stack

**Behavior (Both Platforms):**
- Show for 1–2 seconds or until initialization/auth check is complete.
- No user interaction required.
- If authenticated, navigate to dashboard; if not, navigate to login.
- Use Redux Toolkit to check auth state if applicable.

**Layout Example:**
```
+-----------------------------+
|                             |
|           [Logo]            |
|                             |
|      Health Center App      |
|                             |
|         [Spinner]           |
|                             |
+-----------------------------+
``` 
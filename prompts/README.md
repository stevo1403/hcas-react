# HCAS React Frontend Implementation Plan

This folder is a self-contained, step-by-step implementation plan for building the Health Center Automation System (HCAS) React frontend (TypeScript). Each numbered folder represents a logical phase or feature group. Every folder contains:

- `plan.md`: Overview, user flows, and UI/UX guidelines for the feature (React web + React Native).
- `endpoints.md`: All API endpoints used in this feature, with request/response details.
- `models.md`: Data models/schemas relevant to this feature, with field descriptions and validation rules.

## Tech Stack & Approach
- **Web:** React (TypeScript) + Material UI (MUI)
- **Native:** React Native (TypeScript) + React Native Paper
- **State:** Redux Toolkit
- **Routing:** React Router (web), React Navigation (native)
- **Forms:** Formik + Yup
- **API:** Axios + React Query
- **Auth:** JWT (localStorage/web, AsyncStorage/native)
- **i18n:** react-i18next
- **Testing:** Jest + React Testing Library (web), Jest + React Native Testing Library (native)
- **Linting:** ESLint
- **CI/CD:** Vercel, Netlify, Expo
- **Analytics:** Sentry

## Folder Structure

```
00-branding-ux/           # Branding, color, font, and UX guidelines
01-core-setup/           # Project setup, theming, navigation, state management
02-auth/                 # Authentication (register, login, password reset)
03-user-management/      # User profiles, CRUD, department management
04-appointments/         # Appointment booking, approval, reminders
05-medical-records/      # Medical records, lab test uploads
06-notifications/        # In-app and push notifications
07-admin-dashboard/      # Admin analytics, user management, system settings
99-best-practices/       # Testing, accessibility, performance, deployment
```

## Dual Web & Native Support
- All UI/UX prompts specify both Material UI (web) and React Native Paper (native) components and patterns.
- Where UI/UX differs, prompts include both, clearly labeled.
- All code and component examples are in TypeScript.

## How to Use

1. Start at `00-branding-ux/` and proceed in order.
2. For each folder:
   - Read `plan.md` for context and user flows.
   - Use `endpoints.md` to generate API integration code.
   - Use `models.md` to generate data models and validation logic.
   - Follow UI/UX notes for screen and component generation (web + native).
3. All assets and documentation are self-contained—no references outside this folder.

This structure is designed for both human and AI agents to generate robust, maintainable React code and ensure seamless API integration for both web and native platforms. 
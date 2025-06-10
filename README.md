# Health Center Automation System (HCAS) Frontend

A comprehensive healthcare management system built with React, TypeScript, and Material-UI.

## Features

- **Authentication & Authorization**: Role-based access control for patients, staff, and administrators
- **Patient Management**: Complete patient registration, profile management, and medical history
- **Appointment Scheduling**: Book, approve, and manage appointments with calendar integration
- **Medical Records**: Digital medical records with lab test uploads and prescription management
- **Pharmacy Management**: Drug inventory, prescription dispensing, and stock management
- **Lab Results**: Lab test management and result tracking
- **Notifications**: Real-time notifications and alerts
- **Admin Dashboard**: System analytics, user management, and configuration
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark Mode**: Full dark mode support with theme switching

## Tech Stack

- **Frontend**: React 18+ with TypeScript
- **UI Framework**: Material-UI (MUI) 5+
- **State Management**: Redux Toolkit
- **Routing**: React Router v6
- **Forms**: Formik + Yup validation
- **API Integration**: Axios + React Query
- **Authentication**: JWT tokens
- **Testing**: Jest + React Testing Library
- **Code Quality**: ESLint + Prettier

## Getting Started

### Prerequisites

- Node.js 16+ and npm
- Modern web browser

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd hcas-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Configure environment variables in `.env`:
```
REACT_APP_API_BASE_URL=http://localhost:8000/api
```

5. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`.

## Available Scripts

- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── common/         # Shared components
│   └── layouts/        # Layout components
├── features/           # Feature-specific components
│   ├── auth/          # Authentication components
│   ├── patients/      # Patient management
│   ├── appointments/  # Appointment scheduling
│   └── ...
├── hooks/             # Custom React hooks
├── pages/             # Page components
├── routes/            # Routing configuration
├── services/          # API services
├── store/             # Redux store and slices
├── theme/             # Material-UI theme configuration
├── types/             # TypeScript type definitions
└── utils/             # Utility functions
```

## Key Features

### Authentication
- Email/password authentication
- Role-based access control (Patient, Staff, Admin)
- JWT token management with refresh
- Protected routes

### Dashboard
- Role-specific dashboards
- Key metrics and statistics
- Recent activity feed
- Quick action buttons

### Patient Management
- Patient registration and profiles
- Medical history tracking
- Search and filtering
- Export capabilities

### Appointment System
- Calendar-based scheduling
- Appointment approval workflow
- Automated reminders
- Status tracking

### Medical Records
- Digital record creation
- Lab test integration
- Prescription management
- File attachments

## API Integration

The frontend integrates with a REST API using Axios and React Query for:
- Data fetching and caching
- Optimistic updates
- Error handling
- Loading states

## Deployment

### Production Build

```bash
npm run build
```

The build folder contains the production-ready files.

### Environment Configuration

Configure the following environment variables for production:

- `REACT_APP_API_BASE_URL` - Backend API URL
- `REACT_APP_ENVIRONMENT` - Environment name (production, staging, etc.)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Code Style

This project uses ESLint and Prettier for code formatting. Run `npm run lint:fix` to automatically fix formatting issues.

## Testing

Run tests with:
```bash
npm test
```

## License

This project is licensed under the MIT License.
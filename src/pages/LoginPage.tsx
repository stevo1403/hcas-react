import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import AuthLayout from '../components/layouts/AuthLayout';
import LoginForm from '../features/auth/LoginForm';
import RegisterForm from '../features/auth/RegisterForm';

const LoginPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <AuthLayout title="Welcome to HCAS" subtitle="Health Center Automation System">
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={activeTab} onChange={handleTabChange} aria-label="auth tabs" centered>
          <Tab label="Sign In" />
          <Tab label="Sign Up" />
        </Tabs>
      </Box>

      {activeTab === 0 && <LoginForm onSwitchToRegister={() => setActiveTab(1)} />}
      {activeTab === 1 && <RegisterForm onSwitchToLogin={() => setActiveTab(0)} />}
    </AuthLayout>
  );
};

export default LoginPage;

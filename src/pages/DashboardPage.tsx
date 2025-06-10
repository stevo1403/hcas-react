import React from 'react';
import {
  Grid,
  Paper,
  Typography,
  Box,
  Card,
  CardContent,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Chip,
} from '@mui/material';
import {
  People,
  CalendarToday,
  Assignment,
  TrendingUp,
  Person,
  Schedule,
} from '@mui/icons-material';
import { useAuth } from '../hooks/useAuth';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactElement;
  color: string;
  trend?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, color, trend }) => (
  <Card sx={{ height: '100%' }}>
    <CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Avatar sx={{ bgcolor: color, mr: 2 }}>{icon}</Avatar>
        <Box>
          <Typography variant="h4" component="div" fontWeight="bold">
            {value}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
        </Box>
      </Box>
      {trend && (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TrendingUp sx={{ color: 'success.main', mr: 0.5, fontSize: 16 }} />
          <Typography variant="caption" color="success.main">
            {trend}
          </Typography>
        </Box>
      )}
    </CardContent>
  </Card>
);

const DashboardPage: React.FC = () => {
  const { user } = useAuth();

  // Mock data - replace with real API calls
  const stats = [
    {
      title: 'Total Patients',
      value: 1234,
      icon: <People />,
      color: '#2E7D32',
      trend: '+12% from last month',
    },
    {
      title: "Today's Appointments",
      value: 28,
      icon: <CalendarToday />,
      color: '#00897B',
      trend: '+5% from yesterday',
    },
    {
      title: 'Pending Records',
      value: 15,
      icon: <Assignment />,
      color: '#FFB74D',
    },
    {
      title: 'Active Staff',
      value: 45,
      icon: <Person />,
      color: '#7CB342',
    },
  ];

  const recentActivities = [
    {
      id: 1,
      title: 'New patient registered',
      subtitle: 'John Doe - ID: P001234',
      time: '2 minutes ago',
      type: 'patient',
    },
    {
      id: 2,
      title: 'Appointment scheduled',
      subtitle: 'Dr. Smith - 2:00 PM',
      time: '15 minutes ago',
      type: 'appointment',
    },
    {
      id: 3,
      title: 'Lab result uploaded',
      subtitle: 'Blood test - Patient ID: P001230',
      time: '1 hour ago',
      type: 'lab',
    },
    {
      id: 4,
      title: 'Medical record updated',
      subtitle: 'Patient ID: P001225',
      time: '2 hours ago',
      type: 'record',
    },
  ];

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'patient':
        return 'primary';
      case 'appointment':
        return 'secondary';
      case 'lab':
        return 'warning';
      case 'record':
        return 'success';
      default:
        return 'default';
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Welcome back, {user?.name || user?.email}!
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Here's what's happening at your health center today.
      </Typography>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <StatCard {...stat} />
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        {/* Recent Activity */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, height: '400px' }}>
            <Typography variant="h6" gutterBottom>
              Recent Activity
            </Typography>
            <List>
              {recentActivities.map((activity) => (
                <ListItem key={activity.id} divider>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'grey.100' }}>
                      <Schedule color="action" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={activity.title}
                    secondary={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
                        <Typography variant="body2" color="text.secondary">
                          {activity.subtitle}
                        </Typography>
                        <Chip
                          label={activity.type}
                          size="small"
                          color={getActivityColor(activity.type) as any}
                          variant="outlined"
                        />
                      </Box>
                    }
                  />
                  <Typography variant="caption" color="text.secondary">
                    {activity.time}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Quick Actions */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, height: '400px' }}>
            <Typography variant="h6" gutterBottom>
              Quick Actions
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
              <Card
                variant="outlined"
                sx={{ cursor: 'pointer', '&:hover': { bgcolor: 'action.hover' } }}
              >
                <CardContent sx={{ py: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <People sx={{ mr: 2, color: 'primary.main' }} />
                    <Typography variant="body1">Register New Patient</Typography>
                  </Box>
                </CardContent>
              </Card>

              <Card
                variant="outlined"
                sx={{ cursor: 'pointer', '&:hover': { bgcolor: 'action.hover' } }}
              >
                <CardContent sx={{ py: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <CalendarToday sx={{ mr: 2, color: 'secondary.main' }} />
                    <Typography variant="body1">Schedule Appointment</Typography>
                  </Box>
                </CardContent>
              </Card>

              <Card
                variant="outlined"
                sx={{ cursor: 'pointer', '&:hover': { bgcolor: 'action.hover' } }}
              >
                <CardContent sx={{ py: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Assignment sx={{ mr: 2, color: 'warning.main' }} />
                    <Typography variant="body1">Create Medical Record</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardPage;

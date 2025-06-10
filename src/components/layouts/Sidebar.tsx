import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Divider,
  Collapse,
} from '@mui/material';
import {
  Dashboard,
  People,
  CalendarToday,
  Assignment,
  Science,
  LocalPharmacy,
  Business,
  Notifications,
  Settings,
  AdminPanelSettings,
  ExpandLess,
  ExpandMore,
  PersonAdd,
  Group,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useState } from 'react';

interface MenuItem {
  text: string;
  icon: React.ReactElement;
  path?: string;
  roles?: string[];
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    text: 'Dashboard',
    icon: <Dashboard />,
    path: '/dashboard',
  },
  {
    text: 'Patients',
    icon: <People />,
    children: [
      {
        text: 'Patient List',
        icon: <Group />,
        path: '/patients',
        roles: ['staff', 'admin'],
      },
      {
        text: 'Register Patient',
        icon: <PersonAdd />,
        path: '/patients/register',
        roles: ['staff', 'admin'],
      },
    ],
  },
  {
    text: 'Appointments',
    icon: <CalendarToday />,
    path: '/appointments',
  },
  {
    text: 'Medical Records',
    icon: <Assignment />,
    path: '/medical-records',
  },
  {
    text: 'Lab Results',
    icon: <Science />,
    path: '/lab-results',
  },
  {
    text: 'Pharmacy',
    icon: <LocalPharmacy />,
    path: '/pharmacy',
    roles: ['staff', 'admin'],
  },
  {
    text: 'Departments',
    icon: <Business />,
    path: '/departments',
    roles: ['admin'],
  },
  {
    text: 'Notifications',
    icon: <Notifications />,
    path: '/notifications',
  },
  {
    text: 'Settings',
    icon: <Settings />,
    path: '/settings',
  },
  {
    text: 'Admin',
    icon: <AdminPanelSettings />,
    path: '/admin',
    roles: ['admin'],
  },
];

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const [openItems, setOpenItems] = useState<string[]>([]);

  const handleItemClick = (item: MenuItem) => {
    if (item.children) {
      const isOpen = openItems.includes(item.text);
      if (isOpen) {
        setOpenItems(openItems.filter((text) => text !== item.text));
      } else {
        setOpenItems([...openItems, item.text]);
      }
    } else if (item.path) {
      navigate(item.path);
    }
  };

  const isItemVisible = (item: MenuItem) => {
    if (!item.roles) return true;
    return user && item.roles.includes(user.role);
  };

  const isItemActive = (path?: string) => {
    if (!path) return false;
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const renderMenuItem = (item: MenuItem, level = 0) => {
    if (!isItemVisible(item)) return null;

    const hasChildren = item.children && item.children.length > 0;
    const isOpen = openItems.includes(item.text);
    const isActive = isItemActive(item.path);

    return (
      <React.Fragment key={item.text}>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => handleItemClick(item)}
            selected={isActive}
            sx={{
              pl: 2 + level * 2,
              '&.Mui-selected': {
                backgroundColor: 'primary.main',
                color: 'primary.contrastText',
                '&:hover': {
                  backgroundColor: 'primary.dark',
                },
                '& .MuiListItemIcon-root': {
                  color: 'primary.contrastText',
                },
              },
            }}
          >
            <ListItemIcon
              sx={{
                color: isActive ? 'primary.contrastText' : 'inherit',
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
            {hasChildren && (isOpen ? <ExpandLess /> : <ExpandMore />)}
          </ListItemButton>
        </ListItem>
        {hasChildren && (
          <Collapse in={isOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.children!.map((child) => renderMenuItem(child, level + 1))}
            </List>
          </Collapse>
        )}
      </React.Fragment>
    );
  };

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          HCAS
        </Typography>
      </Toolbar>
      <Divider />
      <List sx={{ flexGrow: 1 }}>{menuItems.map((item) => renderMenuItem(item))}</List>
    </Box>
  );
};

export default Sidebar;

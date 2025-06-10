import { useCallback } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useAppDispatch, useAppSelector } from '../store/index.ts';
import { loginStart, loginSuccess, loginFailure, logout } from '../store/slices/authSlice.ts';
import { LoginRequest, RegisterRequest, User } from '../types/index.ts';
import axiosInstance from '../services/axios.ts';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { user, token, isAuthenticated, isLoading, error } = useAppSelector((state) => state.auth);

  // Login mutation
  const loginMutation = useMutation({
    mutationFn: async (credentials: LoginRequest) => {
      const response = await axiosInstance.post('/auth/login', credentials);
      return response.data;
    },
    onMutate: () => {
      dispatch(loginStart());
    },
    onSuccess: (data) => {
      dispatch(loginSuccess(data));
    },
    onError: (error: any) => {
      dispatch(loginFailure(error.response?.data?.message || 'Login failed'));
    },
  });

  // Register mutation
  const registerMutation = useMutation({
    mutationFn: async (userData: RegisterRequest) => {
      const response = await axiosInstance.post('/auth/register', userData);
      return response.data;
    },
    onMutate: () => {
      dispatch(loginStart());
    },
    onSuccess: (data) => {
      dispatch(loginSuccess(data));
    },
    onError: (error: any) => {
      dispatch(loginFailure(error.response?.data?.message || 'Registration failed'));
    },
  });

  // Logout function
  const handleLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  // Get current user
  const { data: currentUser } = useQuery<User>({
    queryKey: ['currentUser'],
    queryFn: async () => {
      const response = await axiosInstance.get('/users/me');
      return response.data.user;
    },
    enabled: isAuthenticated && !!token,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  return {
    user: currentUser || user,
    token,
    isAuthenticated,
    isLoading: isLoading || loginMutation.isPending || registerMutation.isPending,
    error,
    login: loginMutation.mutate,
    register: registerMutation.mutate,
    logout: handleLogout,
  };
};
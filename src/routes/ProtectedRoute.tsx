import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCurrentToken } from '@/store/authSlice';

export const ProtectedRoute = () => {
  const token = useSelector(getCurrentToken);

  // If there's a token, render the child routes. Otherwise, redirect to sign-in.
  return token ? <Outlet /> : <Navigate to='/sign-in' replace />;
};

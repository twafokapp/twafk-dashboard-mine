import { ErrorBoundaryComponent } from '../common/errorBoundary/errorBoundary';

const ErrorBoundaryRoutes = ({ children }: { children: React.ReactNode }) => {
  return <ErrorBoundaryComponent>{children}</ErrorBoundaryComponent>;
};

export default ErrorBoundaryRoutes;

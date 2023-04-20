import { Outlet } from 'react-router-dom';

// Outlet -> placeholder -marker- for rendering children
import MainNavigation from '../components/MainNavigation';
export default function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

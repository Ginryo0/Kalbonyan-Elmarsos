import { useAppCtx } from '../context/appCtx';
import NavBar from '../components/NavBar';
import { Navigate, Outlet } from 'react-router-dom';
import Alert from '../components/Alert';

const DashboardLayout = () => {
  const { user, theme, showAlert } = useAppCtx();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      {showAlert && <Alert />}
      <NavBar />
      <main
        className={`${
          theme != 'dark' ? 'bg-white bg-dash-light' : 'bg-dark-1 bg-dash-dark'
        } bg-no-repeat min-[1450px]:bg-contain bg-fill min-w-screen min-h-screen flex justify-center md:pb-0 pb-4`}
      >
        <div className="flex flex-col gap-6 mt-[150px] w-[540px] max-w-screen md:px-0 px-4">
          <Outlet />
        </div>
      </main>
    </>
  );
};
export default DashboardLayout;

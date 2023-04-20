import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function RootLayout() {
  // const navigation = useNavigation();
  // loading effect -> added to a page that's visible while loading -> not page you're going to

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading./..</p>} */}
        <Outlet />
      </main>
    </>
  );
}

import { Link } from 'react-router-dom';
import { useAppCtx } from '../context/appCtx';
import { useState } from 'react';

const NavBar = () => {
  const { lang, switchLang, switchTheme, user, logOut, theme } = useAppCtx();
  const [showUserInfo, setShowUserInfo] = useState(false);
  const toggleUserInfo = () => {
    setShowUserInfo((prev) => !prev);
  };

  return (
    <>
      <nav
        className={`w-full flex ${
          lang == 'ar' ? 'flex-row-reverse' : ''
        } justify-between items-center h-[62px] md:px-12 px-4 fixed ${
          theme != 'dark' ? 'bg-white' : 'bg-dark-1'
        } z-50 shadow-md`}
      >
        <Link to={'/'} className="flex gap-2 items-center">
          <img src="/pink_logo.svg" alt="logo" width={32} height={30} />
          <div className="text-primary md:text-[32px] text-[24px]">
            Your Notes
          </div>
        </Link>
        <div className="flex  items-center justify-center md:gap-10 gap-4">
          <button
            onClick={() => {
              switchLang();
            }}
            className="text-primary xs:text-[32px] text-[24px] font-medium my-0 py-0 flex items-center justify-center pt-2 max-h-[26px]"
          >
            {lang == 'en' ? 'Ar' : 'En'}
          </button>
          <button
            onClick={() => {
              switchTheme();
            }}
          >
            <img
              src={`${theme == 'dark' ? '/light.svg' : '/dark.svg'} `}
              alt="theme"
              width={26}
              className="xs:w-[26px] w-[22px]"
            />
          </button>
          <button
            onClick={() => {
              toggleUserInfo();
            }}
          >
            <img
              src="/user.svg"
              alt="user"
              width={26}
              className="xs:w-[26px] w-[22px]"
            />
          </button>
        </div>
        {showUserInfo && (
          <div
            className={` md:absolute md:top-[80px] md:w-[260px] md:h-[230px] md:rounded-xl  md:shadow-md md:px-2 md:py-8 flex flex-col md:gap-0 items-center md:justify-between fixed h-[100%] bg-[#000000b3] w-full top-[62px] ${
              lang == 'en' ? 'md:right-[32px] right-0' : 'md:left-[32px] left-0'
            } justify-center px-8 gap-4 ${
              theme != 'dark' ? 'md:bg-white' : 'md:bg-dark-1'
            }`}
          >
            <div className="font-bold text-primary text-[20px] md:mt-2 flex gap-1">
              {lang == 'en' && <span>hi</span>}
              {user
                ? user.username.charAt(0).toUpperCase() + user.username.slice(1)
                : 'User'}

              {lang == 'ar' && <span>مرحبًا</span>}
            </div>
            <div className="flex flex-col w-full gap-4">
              <Link
                className={`w-full  text-[20px] text-center rounded-md md:py-1 py-[6px] ${
                  theme != 'dark'
                    ? 'bg-[#7C8495] text-white'
                    : 'bg-white text-dark-1'
                }`}
                to={'/account'}
                onClick={() => {
                  setShowUserInfo(false);
                }}
              >
                {lang == 'en' ? 'Modify User Info' : 'تعديل بيانات الحساب '}
              </Link>
              <button
                className="w-full bg-primary text-white text-[20px] text-center  rounded-md md:py-1 py-[6px]"
                onClick={() => {
                  setShowUserInfo(false);
                  logOut();
                }}
              >
                {lang == 'en' ? 'Logout' : 'تسجيل الخروج'}
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
export default NavBar;

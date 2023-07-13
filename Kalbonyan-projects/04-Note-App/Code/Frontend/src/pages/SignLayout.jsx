/* eslint-disable react/prop-types */
import { useAppCtx } from '../context/appCtx';
import Alert from '../components/Alert';
import { Navigate } from 'react-router-dom';

const SignLayout = ({ children }) => {
  const { lang, showAlert, user, token, switchLang } = useAppCtx();
  if (user && token) {
    return <Navigate to={'/'} />;
  }

  if (lang == 'en') {
    return (
      <>
        {showAlert && <Alert />}
        <div className=" w-full h-full bg-sign bg-cover bg-no-repeat min-h-screen flex items-center justify-center">
          <div className="md:w-[960px] md:h-[600px] md:px-0 flex md:flex-row flex-col w-full px-4 md:py-0 py-4">
            <div className="md:w-1/2 bg-signMini bg-no-repeat bg-cover flex items-center justify-center px-[40px] py-[75px] relative">
              <div className="bg-white bg-opacity-30 rounded-sm h-full w-full flex flex-col items-center justify-center gap-4 py-4">
                <img src="./logo.svg" alt="Your Notes" width={70} height={66} />
                <h2 className="md:text-[64px] xs:text-[48px] text-[36px] text-white text-center">
                  Your Notes
                </h2>
              </div>
              <button
                className="absolute bottom-2 left-2 w-12 h-12 bg-white flex items-center justify-center rounded text-primary text-[20px] font-bold shadow-md"
                onClick={() => {
                  switchLang();
                }}
              >
                {lang == 'en' ? 'Ar' : 'En'}
              </button>
            </div>
            <div className="bg-white md:w-1/2">{children}</div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        {showAlert && <Alert />}
        <div className=" w-full h-full bg-sign bg-cover bg-no-repeat min-h-screen flex items-center justify-center">
          <div className="md:w-[960px] md:h-[600px] md:px-0 flex md:flex-row flex-col-reverse w-full px-4 md:py-0 py-4">
            <div className="bg-white md:w-1/2">{children}</div>
            <div className="md:w-1/2 bg-signMini bg-no-repeat bg-cover flex items-center justify-center px-[40px] py-[75px] relative">
              <div className="bg-white bg-opacity-30 rounded-sm h-full w-full flex flex-col items-center justify-center gap-4 py-4">
                <img src="./logo.svg" alt="Your Notes" width={70} height={66} />
                <h2 className="md:text-[64px] xs:text-[48px] text-[36px] text-white text-center">
                  Your Notes
                </h2>
              </div>
              <button
                className="absolute bottom-2 left-2 w-12 h-12 bg-white flex items-center justify-center rounded text-primary text-[20px] font-bold shadow-md"
                onClick={() => {
                  switchLang();
                }}
              >
                {lang == 'en' ? 'Ar' : 'En'}
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
};
export default SignLayout;

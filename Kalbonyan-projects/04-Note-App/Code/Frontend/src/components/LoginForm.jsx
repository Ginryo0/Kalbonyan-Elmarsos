import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import en from '../assets/constants/en';
import ar from '../assets/constants/ar';
import { useAppCtx } from '../context/appCtx';
import Loader from './Loader';

const LoginForm = () => {
  const {
    isLoading,
    startLoading,
    finishLoading,
    lang,
    displayDangerAlert,
    displaySuccessAlert,
    signUser,
  } = useAppCtx();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  let text = lang == 'en' ? en.login : ar.login;

  const inputChangeHandler = (e) => {
    setUser((state) => ({ ...state, [e.target.name]: e.target.value }));
  };
  const onSubmit = async () => {
    for (let key of Object.keys(user)) {
      if (!user[key]) {
        console.log(`${key} must be filled.`);
      }
    }
    try {
      startLoading();
      const res = await axios.post('/api/auth/login', {
        ...user,
      });
      const { user: signedUser, token, message } = res.data;
      signUser({ user: signedUser, token });
      finishLoading();
      displaySuccessAlert(message);
    } catch (err) {
      finishLoading();
      if (err.response) {
        displayDangerAlert(err.response.data.message);
      }
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-[41.5px] py-[20px]">
      <h2 className="text-primary xs:text-[48px] text-[40px] font-bold text-center mb-[25px]">
        {text.title}
      </h2>
      <form className="w-full flex flex-col gap-4 ">
        <div
          className={`w-full flex flex-col ${
            lang == 'en' ? 'items-start' : 'items-end'
          } gap-2`}
        >
          <label htmlFor="email" className="text-secondary font-bold ml-1">
            {text.email}
          </label>
          <input
            onChange={inputChangeHandler}
            value={user.email}
            type="email"
            name="email"
            id="email"
            className="w-full px-3 py-2 h-[50px] border-[1px] border-[#3C42572a] rounded-md shadow-sm focus:outline-none focus:border-primary text-secondary"
          />
        </div>
        <div
          className={`w-full flex flex-col ${
            lang == 'en' ? 'items-start' : 'items-end'
          } gap-2`}
        >
          <label htmlFor="password" className="text-secondary font-bold ml-1">
            {text.password}
          </label>
          <input
            onChange={inputChangeHandler}
            value={user.password}
            type="password"
            name="password"
            id="password"
            className="w-full px-3 py-2 h-[50px] border-[1px] border-[#3C42572a] rounded-md shadow-sm focus:outline-none focus:border-primary text-secondary"
          />
        </div>

        {isLoading && <Loader />}
        {!isLoading && (
          <button
            type="button"
            onClick={onSubmit}
            className="bg-primary text-white h-[50px] mt-3 font-bold text-[24px] rounded-md  flex items-center justify-center gap-2"
          >
            {lang == 'en' ? text.complete : ''}
            <img
              src={lang == 'en' ? `./arrow-right.svg` : `./arrow-left.svg`}
              alt="right arrow"
              width={14}
              height={14}
            />
            {lang != 'en' ? text.complete : ''}
          </button>
        )}
        <p className="flex gap-2 w-full justify-center text-secondary xs:text-[18px] text-[14px] mt-2">
          {lang == 'en' ? text.user : ''}
          <Link
            to={'/signup'}
            className="xs:text-[16px] text-[14px] text-primary"
          >
            {text.login}
          </Link>
          {lang != 'en' ? text.user : ''}
        </p>
      </form>
    </div>
  );
};
export default LoginForm;

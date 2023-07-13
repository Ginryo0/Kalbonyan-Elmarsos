import { useState } from 'react';
import { useAppCtx } from '../context/appCtx';
import en from '../assets/constants/en';
import ar from '../assets/constants/ar';
import axios from 'axios';
import Loader from '../components/Loader';

const Account = () => {
  const {
    user,
    token,
    theme,
    lang,
    displayDangerAlert,
    displaySuccessAlert,
    updateUser,
    isLoading,
    startLoading,
    finishLoading,
  } = useAppCtx();

  const [userInfo, setUserInfo] = useState({
    ...user,
    password: '',
  });

  let text = lang == 'en' ? en.modify : ar.modify;

  const { email, password, username, phone, birthYear } = userInfo;

  const onChange = (e) => {
    setUserInfo((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onSubmit = async () => {
    for (let key of Object.keys(userInfo)) {
      if (!userInfo[key]) {
        displayDangerAlert(`${key} must be filled.`);
        return;
      }
    }

    try {
      startLoading();
      const { data } = await axios.patch(
        '/api/auth/update-user',
        { ...userInfo },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const { user: signedUser, message } = data;

      updateUser(signedUser);
      displaySuccessAlert(message);
      finishLoading();
    } catch (err) {
      finishLoading();
      if (err.response) {
        displayDangerAlert(err.response.data.message);
      }
    }
  };

  return (
    <>
      <div
        className={`w-full gap-4 items-center shadow-sm px-5 py-4 ${
          theme != 'dark' ? 'bg-white text-primary' : 'bg-dark-2 text-white'
        } rounded-md text-center font-bold text-[20px]`}
      >
        {text.title}
      </div>
      <div className="flex flex-col md:gap-10 gap-8">
        <form
          className={`flex flex-col ${
            theme != 'dark' ? 'bg-white text-primary' : 'bg-dark-2 text-white'
          } py-[37px] px-[67px] shadow-md rounded-md flex flex-col gap-4`}
        >
          <div
            className={`w-full flex flex-col ${
              lang == 'en' ? 'items-start' : 'items-end'
            } gap-2`}
          >
            <label htmlFor="email" className="text-secondary font-bold ml-1">
              {text.email}
            </label>
            <input
              onChange={onChange}
              value={email}
              type="email"
              name="email"
              id="email"
              className={`w-full px-3 py-2 h-[47px] border-[1px] border-[#3C42572a] rounded-md shadow-sm focus:outline-none focus:border-primary ${
                lang == 'ar' ? 'text-right' : ''
              } ${
                theme != 'dark'
                  ? 'bg-white text-secondary'
                  : 'bg-dark-3 text-white'
              }`}
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
              onChange={onChange}
              value={password}
              type="password"
              name="password"
              placeholder="********"
              id="password"
              className={`w-full px-3 py-2 h-[47px] border-[1px] border-[#3C42572a] rounded-md shadow-sm focus:outline-none focus:border-primary ${
                lang == 'ar' ? 'text-right' : ''
              } ${
                theme != 'dark'
                  ? 'bg-white text-secondary'
                  : 'bg-dark-3 text-white'
              }`}
            />
          </div>
          <div
            className={`w-full flex flex-col ${
              lang == 'en' ? 'items-start' : 'items-end'
            } gap-2`}
          >
            <label htmlFor="username" className="text-secondary font-bold ml-1">
              {text.username}
            </label>
            <input
              onChange={onChange}
              value={username}
              type="text"
              name="username"
              id="username"
              className={`w-full px-3 py-2 h-[47px] border-[1px] border-[#3C42572a] rounded-md shadow-sm focus:outline-none focus:border-primary ${
                lang == 'ar' ? 'text-right' : ''
              } ${
                theme != 'dark'
                  ? 'bg-white text-secondary'
                  : 'bg-dark-3 text-white'
              }`}
            />
          </div>
          <div
            className={`w-full flex flex-col ${
              lang == 'en' ? 'items-start' : 'items-end'
            } gap-2`}
          >
            <label htmlFor="phone" className="text-secondary font-bold ml-1">
              {text.phone}
            </label>
            <input
              onChange={onChange}
              value={phone}
              type="number"
              name="phone"
              id="phone"
              className={`w-full px-3 py-2 h-[47px] border-[1px] border-[#3C42572a] rounded-md shadow-sm focus:outline-none focus:border-primary ${
                lang == 'ar' ? 'text-right' : ''
              } ${
                theme != 'dark'
                  ? 'bg-white text-secondary'
                  : 'bg-dark-3 text-white'
              }`}
            />
          </div>
          <div
            className={`w-full flex flex-col ${
              lang == 'en' ? 'items-start' : 'items-end'
            } gap-2`}
          >
            <label
              htmlFor="birthYear"
              className="text-secondary font-bold ml-1"
            >
              {text.birthyear}
            </label>
            <input
              onChange={onChange}
              value={birthYear}
              type="number"
              name="birthYear"
              id="birthYear"
              className={`w-full px-3 py-2 h-[47px] border-[1px] border-[#3C42572a] rounded-md shadow-sm focus:outline-none focus:border-primary ${
                lang == 'ar' ? 'text-right' : ''
              } ${
                theme != 'dark'
                  ? 'bg-white text-secondary'
                  : 'bg-dark-3 text-white'
              }`}
            />
          </div>
        </form>
        {isLoading && <Loader />}
        {!isLoading && (
          <button
            type="button"
            onClick={onSubmit}
            className="bg-primary text-white py-3 font-bold text-[20px] rounded-md  shadow-sm"
          >
            {text.submit}
          </button>
        )}
      </div>
    </>
  );
};
export default Account;

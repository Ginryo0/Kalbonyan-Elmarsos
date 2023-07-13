/* eslint-disable react/prop-types */
import { useState } from 'react';
import axios from 'axios';
import ar from '../assets/constants/ar';
import { useAppCtx } from '../context/appCtx';
import { Link } from 'react-router-dom';
import Loader from './Loader';

let text = ar.signUp;

const StageOne = ({ onClick, onChange, email, password, confirmPassword }) => {
  return (
    <>
      <h2 className="text-primary xs:text-[48px] text-[40px] font-bold text-center mb-[25px]">
        {text.title}
      </h2>
      <form className="w-full flex flex-col gap-4 ">
        <div className="w-full flex flex-col items-end gap-2">
          <label
            htmlFor="email"
            className="text-secondary font-bold mr-1 xs:text-[16px] text-[14px]"
          >
            {text.email}
          </label>
          <input
            type="email"
            value={email}
            onChange={onChange}
            name="email"
            id="email"
            className="w-full px-3 text-right py-2 h-[50px] border-[1px] border-[#3C42572a] rounded-md shadow-sm focus:outline-none focus:border-primary text-secondary"
          />
        </div>
        <div className="w-full flex flex-col items-end gap-2">
          <label
            htmlFor="password"
            className="text-secondary font-bold mr-1 xs:text-[16px] text-[14px]"
          >
            {text.password}
          </label>
          <input
            type="password"
            value={password}
            onChange={onChange}
            name="password"
            id="password"
            className="w-full px-3 text-right py-2 h-[50px] border-[1px] border-[#3C42572a] rounded-md shadow-sm focus:outline-none focus:border-primary text-secondary"
          />
        </div>
        <div className="w-full flex flex-col items-end gap-2">
          <label
            htmlFor="confirmPassword"
            className="text-secondary font-bold mr-1 xs:text-[16px] text-[14px]"
          >
            {text.confirmPassword}
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={onChange}
            name="confirmPassword"
            id="confirmPassword"
            className="w-full px-3 text-right py-2 h-[50px] border-[1px] border-[#3C42572a] rounded-md shadow-sm focus:outline-none focus:border-primary text-secondary"
          />
        </div>
        <button
          type="button"
          onClick={onClick}
          className="bg-primary text-white h-[50px] mt-3 font-bold xs:text-[24px] rounded-md  flex items-center justify-center gap-2"
        >
          <img
            src={'./arrow-left.svg'}
            alt="left arrow"
            width={14}
            height={14}
          />
          {text.complete}
        </button>
        <p className="xs:text-[18px] text-[12px] flex gap-2 w-full justify-center text-secondary mt-2">
          <Link
            className="xs:text-[16px] text-[12px] text-primary"
            to={'/login'}
          >
            {text.login}
          </Link>
          {text.user}
        </p>
      </form>
    </>
  );
};

const StageTwo = ({
  onClick,
  onChange,
  onSubmit,
  username,
  birthYear,
  phone,
}) => {
  let text = ar.completeSignUp;
  const { isLoading } = useAppCtx();
  return (
    <>
      <h2 className="text-primary xs:text-[40px] text-[32px] font-bold text-center mb-[25px]">
        {text.title}
      </h2>
      <form className="w-full flex flex-col gap-4 ">
        <div className="w-full flex flex-col items-end gap-2">
          <label
            htmlFor="username"
            className="text-secondary font-bold mr-1 xs:text-[16px] text-[14px]"
          >
            {text.username}
          </label>
          <input
            onChange={onChange}
            value={username}
            type="text"
            name="username"
            id="username"
            className="w-full px-3 text-right py-2 h-[50px] border-[1px] border-[#3C42572a] rounded-md shadow-sm focus:outline-none focus:border-primary text-secondary"
          />
        </div>
        <div className="w-full flex flex-col items-end gap-2">
          <label
            htmlFor="phone"
            className="text-secondary font-bold mr-1 xs:text-[16px] text-[14px]"
          >
            {text.phone}
          </label>
          <input
            onChange={onChange}
            value={phone}
            type="number"
            name="phone"
            id="phone"
            className="w-full px-3 text-right py-2 h-[50px] border-[1px] border-[#3C42572a] rounded-md shadow-sm focus:outline-none focus:border-primary text-secondary"
          />
        </div>
        <div className="w-full flex flex-col items-end gap-2">
          <label
            htmlFor="birthYear"
            className="text-secondary font-bold mr-1 xs:text-[16px] text-[14px]"
          >
            {text.birthyear}
          </label>
          <input
            onChange={onChange}
            value={birthYear}
            type="number"
            name="birthYear"
            id="birthYear"
            className="w-full px-3 text-right py-2 h-[50px] border-[1px] border-[#3C42572a] rounded-md shadow-sm focus:outline-none focus:border-primary text-secondary"
          />
        </div>
        {isLoading && <Loader />}
        {!isLoading && (
          <button
            type="button"
            onClick={onSubmit}
            className="bg-primary text-white h-[50px] mt-3 font-bold text-[24px] rounded-md  flex items-center justify-center gap-2"
          >
            <img
              src="./arrow-left.svg"
              alt="right arrow"
              width={14}
              height={14}
            />
            {text.complete}
          </button>
        )}
        <button
          type="button"
          onClick={onClick}
          className="bg-secondary text-white h-[50px] font-bold text-[24px] rounded-md  flex items-center justify-center gap-2"
        >
          {text.back}
          <img
            src="./arrow-right.svg"
            alt="right arrow"
            width={14}
            height={14}
          />
        </button>
        <p className="xs:text-[18px] text-[12px] flex gap-2 w-full justify-center text-secondary mt-2">
          <Link
            className="xs:text-[16px] text-[12px] text-primary"
            to={'/login'}
          >
            {text.login}
          </Link>
          {text.user}
        </p>
      </form>
    </>
  );
};

const SignFormAr = () => {
  const {
    displayDangerAlert,
    displaySuccessAlert,
    signUser,
    startLoading,
    finishLoading,
  } = useAppCtx();
  const [stage, setStage] = useState('one');
  const [user, setUser] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    username: '',
    phone: '',
    birthYear: '',
  });
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
      const res = await axios.post('/api/auth/signup', {
        ...user,
      });
      const { user: signedUser, token, message } = res.data;
      signUser({ user: signedUser, token });
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
    <div className="w-full h-full flex flex-col justify-center items-center px-[41.5px] py-[20px]">
      {stage == 'one' ? (
        <StageOne
          onClick={() => {
            if (!user.email || !user.password || !user.confirmPassword) {
              displayDangerAlert('Please fill all fields.');
              return;
            }
            setStage('two');
          }}
          onChange={inputChangeHandler}
          email={user.email}
          password={user.password}
          confirmPassword={user.confirmPassword}
        />
      ) : (
        <StageTwo
          onClick={() => {
            setStage('one');
          }}
          onChange={inputChangeHandler}
          onSubmit={onSubmit}
          username={user.username}
          phone={user.phone}
          birthYear={user.birthYear}
        />
      )}
    </div>
  );
};
export default SignFormAr;

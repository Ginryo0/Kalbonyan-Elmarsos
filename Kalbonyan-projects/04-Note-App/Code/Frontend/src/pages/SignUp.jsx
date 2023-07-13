import SignForm from '../components/SignForm';
import SignLayout from './SignLayout';
import { useAppCtx } from '../context/appCtx';
import SignFormAr from '../components/SignFormAr';

const SignUp = () => {
  const { lang } = useAppCtx();

  let form = lang == 'en' ? <SignForm /> : <SignFormAr />;
  return <SignLayout>{form} </SignLayout>;
};
export default SignUp;

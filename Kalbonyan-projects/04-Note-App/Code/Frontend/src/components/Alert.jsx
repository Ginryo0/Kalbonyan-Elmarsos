import { useAppCtx } from '../context/appCtx';

const Alert = () => {
  const { alertType, alertText } = useAppCtx();
  return (
    <div className="w-full flex justify-center">
      <div className={`alert alert-${alertType}`}>{alertText}</div>
    </div>
  );
};
export default Alert;

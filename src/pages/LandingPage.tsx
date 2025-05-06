import { useNavigate } from "react-router-dom";
import Button from '../components/Button';

const LandingPage = () => {
  const navigate = useNavigate();
  const handleNaigate = () => {
    navigate("/game");
  };
  return (
    <>
      <div className="h-screen w-screen flex font-mono justify-center items-center">
        <Button onClick={handleNaigate} />
      </div>
    </>
  );
};

export default LandingPage;

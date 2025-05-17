import { useNavigate } from "react-router-dom";
import Button from '../components/Button';
import {motion} from 'motion/react'

const LandingPage = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/game");
  };
  return (
    <>
      <motion.div
      initial={{ opacity: 0 , y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 flex justify-center items-center font-mono overflow-hidden">
        <Button onClick={handleNavigate} />
      </motion.div>
    </>
  );
};

export default LandingPage;

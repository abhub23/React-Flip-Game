import { useNavigate } from "react-router-dom";

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate("/game");
  };
  return (
    <div className="bg-white dark:bg-zinc-950 flex flex-col justify-center items-center h-screen">
      <div className="font-mono font-bold lg:text-6xl text-[36px] mb-2 text-black dark:text-white">Error 404</div>
      <div className="font-mono font-bold lg:text-4xl text-[20px] mb-5 text-black dark:text-white">Page Not Found</div>
      <div className="font-mono text-bold lg:text-xl text-[14px] mb-5 text-black dark:text-white mx-[22px] text-center">
        It seems like the page you're looking for isn't available
      </div>
      <button
        onClick={handleButton}
        className="lg:h-10 h-[30px] lg:p-[6px] p-[3px] font-mono lg:text-[18px] text-[12px] rounded-[6px] border-[2px] text-white dark:text-black border-black bg-black dark:bg-white transition duration-500 cursor-pointer"
      >
        Back to Game
      </button>
    </div>
  );
};

export default ErrorPage;

import { useNavigate } from "react-router-dom"

const ErrorPage: React.FC = () => {
    const navigate = useNavigate()

    const handleButton = () => {
        navigate("/")
    }
    return (
        <div className="bg-white flex flex-col justify-center items-center h-screen">
            <div className="font-mono font-bold text-6xl mb-2">
                Error 404
            </div>
            <div className="font-mono font-bold text-4xl mb-5">
                Page Not Found
            </div>
            <div className="font-mono text-bold text-xl mb-5">
                It seems like the page you're looking for isn't available
            </div>
            <button onClick={handleButton} className="h-12 w-40 font-mono text-xl rounded-3xl border-4 border-zinc-400 hover:bg-gray-300 transition duration-500">
                Back to Game
            </button>
        </div>
    )
}


export default ErrorPage
import { useNavigate } from "react-router-dom";

export const Btnbasic = () => {

    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate("/");
    }

  return (
    <button onclick={handleSubmit}>Go To Home</button>
  )
}


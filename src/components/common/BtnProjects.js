import { useNavigate } from "react-router-dom";

export const BtnProjects = () => {

    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate("/");
    }

  return (
    <button onclick={handleSubmit}>Go To Projects</button>
  )
}


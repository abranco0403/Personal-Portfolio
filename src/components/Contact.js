import { useNavigate, Outlet } from 'react-router-dom'

export const Contact = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    return navigate('/');
  }
  return (
    <>
      <div>Contact</div>
      <button onclick={handleSubmit}>Submit Form</button>
      <Outlet />
    </>
  )
}

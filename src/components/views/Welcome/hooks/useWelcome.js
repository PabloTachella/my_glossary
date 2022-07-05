import { useNavigate } from "react-router-dom"

export const useWelcome = () => {
  const navigate = useNavigate()

  const start = () => navigate('/practice-demo')

  const goToLogin = () => navigate('/login')

  return { start, goToLogin}
}
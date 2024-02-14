import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Components/Context/UserContext";

function Logout() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    setUser();
    navigate("/");
  }, []);
  return <></>;
}

export default Logout;

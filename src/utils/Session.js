// import { useNavigate } from "react-router-dom";

export const Logout = () => {
    window.location.href= '/login';
    // const navigate = useNavigate();
    // navigate("/login");
    localStorage.clear();
}

export const WidthSidebar = () => {
   const parentList =  document.querySelector('.listMenu').parentNode;
   parentList.style.width = "300px";
}
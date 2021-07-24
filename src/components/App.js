import Router from "./Router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useSelector } from "react-redux";

const App = () => {
  const alerts = useSelector((state) => state.alerts);

  if (alerts.type === "error") {
    toast.error(alerts.message);
  }
  if (alerts.type === "success") {
    toast.success(alerts.message);
  }

  return (
    <>
      <ToastContainer />
      <Router />
    </>
  );
};

export default App;

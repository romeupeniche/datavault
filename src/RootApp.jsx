import { useSelector } from "react-redux";
import CountdownTimer from "./components/CountdownTimer";
import { Route, Routes } from "react-router";
import App from "./App";
import HackPage from "./pages/hack/HackPage";
import SystemGuard from "./components/SystemGuard.jsx";

function RootApp() {
  const isShutdown = useSelector((state) => state.general.isSystemShutDown);

  if (isShutdown) return <SystemGuard />;

  return (
    <>
      <CountdownTimer />
      <Routes>
        <Route index element={<App />} />
        <Route path="elysium" element={<HackPage />} />
      </Routes>
    </>
  );
}

export default RootApp;

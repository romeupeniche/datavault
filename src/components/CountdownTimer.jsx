import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { shutDownSystem } from "../store/generalSlice";

const COUNTDOWN_KEY = "amuris_countdown_end";

export default function CountdownTimer() {
  const dispatch = useDispatch();
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const checkAndStart = () => {
      const endTime = localStorage.getItem(COUNTDOWN_KEY);
      if (endTime) {
        const remaining = parseInt(endTime) - Date.now();
        if (remaining <= 0) {
          dispatch(shutDownSystem(false));
          localStorage.removeItem(COUNTDOWN_KEY);
          return;
        }
        setTimeLeft(remaining);
      }
    };

    checkAndStart();

    const interval = setInterval(() => {
      const endTime = localStorage.getItem(COUNTDOWN_KEY);
      if (!endTime) return;

      const remaining = parseInt(endTime) - Date.now();
      if (remaining <= 0) {
        setTimeLeft(0);
        dispatch(shutDownSystem(false));
        localStorage.removeItem(COUNTDOWN_KEY);
      } else {
        setTimeLeft(remaining);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch]);

  const formatTime = (ms) => {
    const total = Math.floor(ms / 1000);
    const minutes = String(Math.floor(total / 60)).padStart(2, "0");
    const seconds = String(total % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  if (timeLeft === null) return null; // só mostra quando ativado

  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        left: 20,
        background: "rgba(0,0,0,0.7)",
        color: "#f44336",
        fontFamily: "monospace",
        padding: "8px 12px",
        borderRadius: "6px",
        fontSize: "18px",
        zIndex: 1000,
      }}
    >
      {timeLeft > 0 ? formatTime(timeLeft) : "ACESSO ENCERRADO"}
    </div>
  );
}

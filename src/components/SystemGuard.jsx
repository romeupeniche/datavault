import { useEffect } from "react";
import { persistor } from "../store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export default function SystemGuard() {
  const goodEnd = useSelector((state) => state.general.goodEnd);
  const navigate = useNavigate();
  const handleRestart = async () => {
    await persistor.purge();
    navigate("/");
    window.location.reload();
  };
  useEffect(() => {
    // Força o background do <body> a ser branco
    if (goodEnd) {
      document.title = "Server Disconnected";
    } else {
      document.title = "Access Denied";
    }
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
    document.body.style.fontFamily = "monospace";
    document.body.style.display;

    // Se quiser garantir que o body não tenha margin ou padding
    document.body.style.margin = "0";
    document.body.style.minHeight = "0";
    document.body.style.padding = "20px";
    document.body.style.placeItems = "flex-start";
    document.body.style.display = "block";
    document.documentElement.style.backgroundColor = "#fff";

    const existingFavicon = document.querySelector("link[rel='icon']");
    if (existingFavicon) {
      existingFavicon.remove();
    }

    const root = document.getElementById("root");
    if (root) {
      root.style.textAlign = "left";
      root.style.padding = "0";
      root.style.margin = "0";
    }

    return () => {
      document.body.style = "";
      if (root) {
        root.style = "";
      }
    };
  }, [goodEnd]);
  return (
    <div
      style={{
        backgroundColor: "#fff",
        color: "#000",
        fontFamily: "monospace",
        fontSize: "16px",
        whiteSpace: "pre-wrap",
      }}
    >
      {goodEnd ? (
        <>
          ERR-CODE: 503X – Server Disconnected Permanently{"\n\n"}
          Todos os processos foram encerrados. Nenhum recurso está disponível.
        </>
      ) : (
        <>
          ERR-CODE: 403F – Access Denied{"\n\n"}
          Sua sessão foi encerrada. Acesso bloqueado por tentativa não
          autorizada.
        </>
      )}
      {"\n\n"}Desenvolvido por Romeu Peniche.
      {"\n\n"}
      <button onClick={handleRestart} style={{ color: "black" }}>
        reiniciar?
      </button>
      <p style={{ marginTop: 64, color: "#fefefe" }}>nagpadayon?</p>
    </div>
  );
}

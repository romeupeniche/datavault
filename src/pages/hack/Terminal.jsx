import { useState } from "react";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import {
  changeBlackListShown,
  changeMessageAvailability,
  changeUpdateAvailability,
} from "../../store/gameSlice";
import { useDispatch } from "react-redux";
import { shutDownSystem } from "../../store/generalSlice";
const triggerFileDownload = (filename, data) => {
  const blob = new Blob([data], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

function startCountdown() {
  const COUNTDOWN_DURATION = 30 * 1000; // 1 minuto
  const endTime = Date.now() + COUNTDOWN_DURATION;
  localStorage.setItem("amuris_countdown_end", endTime);
}
export default function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState(["Digite 'help' para comandos."]);
  const dispatch = useDispatch();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      const command = input.trim().toLowerCase();
      let output = "";

      switch (command) {
        case "help":
          output =
            "Comandos disponíveis: help, clear, admin, echo [mensagem], [...]";
          break;
        case "admin":
          output = `Bem Vindo, ***** ********. Acesse nome@sobrenome.com.
          ???: (00), (01), (10), (11)`;
          triggerFileDownload(
            "DNA.txt",
            "TCGT TCCT ACGC TGTA TCCT TCGT TCAT TGAG ACGC TCGA TCAT ACGC TCGC TCCT TCTG TGAC TCAT TCGC ACGC TCGA TCCT TGAG TGTA TCGG TCGC"
          );
          dispatch(
            changeUpdateAvailability({ updateId: 113627, available: true })
          );
          break;
        case "elysium":
          output =
            "Projeto principal da CIA, conduzido por múltiplas nacionalidades; para continuar, analise o código como: 'sarara', 'palabra', 'letter' — o cabeçalho não está incluído, inclua ':', '/' e '.' na contagem (eles estarão destacados), hífens apenas separam e não são contados, use tudo em minúsculo e boa sorte.";
          dispatch(
            changeMessageAvailability({ messageId: 112931, available: true })
          );
          break;
        case "diario1":
          triggerFileDownload(
            "diario1.txt",
            `??/??/2025
              
            Hoje tomei um esporro do chefe, disse pra apressar mais o projeto, estou tentando mostrar resultado, mas mesmo pra mim, trabalhar em duas coisas ao mesmo tempo é complicado.
            Estou escondendo esse terminal dentro do portal principal deles, dessa forma me sinto fazendo algo útil para a sociedade. Isso não está certo, mas eu não consigo fazer nada a respeito disso.
            O prisioneiro falou comigo sim, me incentivou a iniciar esse projeto escondido, disse que confia muito em quem está do lado de fora.
              
            Enfim, seja isso verdade ou mentira, estou fazendo a minha parte.
              
            R.
              
            -------------------------------------------
            Código de verificação - Ignorar
            -------------------------------------------
            RW50cmUgbmEgbGlzdGEgZGUgcHJvY3VyYWRvcy4gQSBzZW5oYSBqw6EgZm9pIHByZXZpYW1lbnRlIGRpdGEsIHZvbHRlIGFsZ3VucyBwYXNzb3MgZSBhIGVuY29udHJlLg==
              `
          );
          dispatch(
            changeUpdateAvailability({ updateId: 122701, available: true })
          );
          break;
        case "diarium2":
          triggerFileDownload(
            "diarium2.txt",
            `??/??/2025
              
            Ok, então no fim das contas você realmente existe, e eu fui tão longe a ponto de encontrar essa mensagem, que imagino que já sabe o que ela significa.
            Muito obrigado por enxergar esta mensagem. Parabéns por conseguir chegar tão longe. Precisa encontrar as anotações do Dr. Rennard. Estão na minha pasta.
            Precisa ver como isso destrói o corpo humano. Envie para "Flying Scotsman" a seguinte mensagem:
              
            -------------------------------------------
            Código de verificação - Ignorar
            -------------------------------------------
            MzU3NE0wNTcwRDA1QzBORDNONEQwNVAzUkQwMy1OMDVQMDE1UDNDNE0wNQ==
              `
          );
          break;
        case "youtube":
          output = "https://youtu.be/VOvfAXi1daE";
          break;
        case "4m0rv1r0u53qu3nc14":
          dispatch(changeBlackListShown());
          output = "Comando 4M0RV1R0U53QU3NC14 não existe.";
          triggerFileDownload("password.txt", "https://ibb.co/Lh9MrJS4");
          break;
        case "remove(lr-1910)":
        case "remove(zk-1945)":
          output = "Remova todos nós.";
          triggerFileDownload("rbl.txt", "https://ibb.co/bMqB0KMq");
          break;
        case "remove(473-elx)":
        case "remove(xj-3827)":
          output = "Não foi possível remover.";
          break;
        case "remove(191024)":
          output = "Removidos com sucesso.";
          dispatch(
            changeUpdateAvailability({ updateId: 114515, available: true })
          );
          startCountdown();
          break;
        case "remove(id)":
          output = "Insira um 'id' para executar.";
          break;
        case "kill()":
          output = "done.";
          dispatch(shutDownSystem());
          break;
        case "clear":
          setHistory([]);
          setInput("");
          return;
        default:
          output = command.startsWith("echo ")
            ? command.slice(5)
            : `Comando '${command}' não encontrado.`;
      }

      setHistory((prev) => [...prev, `> ${input}`, output]);
      setInput("");
    }
  };

  return (
    <>
      <Box
        sx={{
          width: "80vw",
          maxWidth: "800px",
          height: "60vh",
          bgcolor: "black",
          color: "lime",
          fontFamily: "'Fira Code', monospace",
          p: 2,
          overflowY: "auto",
          borderRadius: 2,
          boxShadow: "0 0 12px white",
        }}
      >
        {history.map((line, index) => (
          <Typography fontFamily="'Fira Code', monospace" key={index}>
            {line}
          </Typography>
        ))}
        <TextField
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          variant="standard"
          autoFocus
          slotProps={{
            input: {
              disableUnderline: true,
              style: { color: "lime", fontFamily: "'Fira Code', monospace" },
              startAdornment: (
                <InputAdornment position="start">{">"}</InputAdornment>
              ),
            },
          }}
          sx={{
            bgcolor: "black",
            mt: 1,
            "& .MuiTypography-root": {
              color: "lime",
            },
          }}
        />
      </Box>
      <Typography color="#141416">
        O terminal pode explicar termos chaves. Sempre que os encontrar,
        pergunte-o. 'Elysium' é um deles.
      </Typography>
    </>
  );
}

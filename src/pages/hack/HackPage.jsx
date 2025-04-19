import { Container, Typography } from "@mui/material";
import Header from "../../components/hack/Header";
import { useState } from "react";
import Terminal from "./Terminal";
function HackPage() {
  const [currentPage, setCurrentPage] = useState("");

  return (
    <Container>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage == "terminal" ? (
        <Terminal />
      ) : (
        <Typography fontFamily="'Fira Code', monospace">
          Bem-vindo ao Terminal. Você está prestes a se infiltrar em sistemas
          altamente protegidos. Desafios estão à frente, e cada erro pode ter
          consequências. Preste atenção em "Ama Granas". Boa sorte.
        </Typography>
      )}
    </Container>
  );
}

export default HackPage;

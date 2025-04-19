import { Box, Button, Container, Divider, Typography } from "@mui/material";
import { persistor } from "../../store";
import NotLoggedHomeHero from "../../components/main/NotLoggedHomeHero";
import LoggedHomeHero from "../../components/main/LoggedHomeHero";
import { useSelector } from "react-redux";

function Home() {
  const isLoggedIn = useSelector((state) => state.general.loggedIn);
  return (
    <Container
      maxWidth="xl"
      sx={{
        width: 600,
        boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
        p: 8,
        borderRadius: 10,
      }}
    >
      {isLoggedIn ? <LoggedHomeHero /> : <NotLoggedHomeHero />}
      <Button onClick={() => persistor.purge()}>
        Resetar Persist (não faz parte do jogo)
      </Button>
    </Container>
  );
}

export default Home;

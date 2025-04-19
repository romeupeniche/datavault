import { Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/generalSlice";
function Login({ setCurrentPage }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const setCurrentPageHome = () => setCurrentPage("home");
  const dispatch = useDispatch();
  const checkLogin = () => {
    if (
      username == "marco@grestepa.com" &&
      password == "mi.timas.la.nigran.liston"
    ) {
      alert("Login successful!");
      dispatch(login());
      setCurrentPageHome();
    } else {
      alert("Invalid credentials!");
    }
  };
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: 350,
        py: 8,
        backgroundColor: "#151618",
        borderRadius: 10,
        boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Typography mb={4} fontSize="1.5rem">
        Log In
      </Typography>
      <TextField
        fullWidth
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        sx={{
          mb: 4,
          input: {
            color: "#fff",
          },
        }}
      />
      <TextField
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
        sx={{
          input: {
            color: "#fff",
          },
        }}
      />
      <Button sx={{ mt: 2 }} variant="outlined" fullWidth onClick={checkLogin}>
        Enter
      </Button>
    </Container>
  );
}

export default Login;

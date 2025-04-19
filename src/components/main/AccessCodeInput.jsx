import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

function AccessCodeInput({ correctPassword, handleCorrectPassword }) {
  const [password, setPassword] = useState("");
  const [buttonDisable, setButtonDisable] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password == correctPassword) {
      handleCorrectPassword();
    } else {
      alert("A código inserido está incorreto. Tente novamente.");
    }
  };
  const handleSetPassword = (e) => {
    const pass = e.target.value;
    setPassword(pass);
    setButtonDisable(pass.length == 0);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography fontSize={40} mb={4}>
        Código de acesso
      </Typography>
      <TextField
        value={password}
        onChange={handleSetPassword}
        type="password"
        sx={{
          mb: 4,
          input: {
            color: "#fff",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "gray",
            },
            "&:hover fieldset": {
              borderColor: "#aaa",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#fff",
            },
          },
        }}
      />
      <Button onClick={handleSubmit} disabled={buttonDisable} color="#fff">
        Enviar
      </Button>
    </Box>
  );
}

export default AccessCodeInput;

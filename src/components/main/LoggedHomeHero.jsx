import { Box, Divider, Typography } from "@mui/material";

function LoggedHomeHero() {
  return (
    <>
      <Box mb={4}>
        <Typography textAlign="left" variant="h5">
          Bem Vindo, Marco Grestepa.
        </Typography>
        <Typography textAlign="left" ml={2}>
          Este é um sistema de uso exclusivo para funcionários autorizados.
          Acesso não autorizado será monitorado.
        </Typography>
      </Box>
      <Box
        sx={{
          ml: 4,
          borderRadius: 5,
          p: 2,
          boxShadow: "0 0 5px#fff",
        }}
      >
        <Typography textAlign="left" fontSize="1.1rem">
          Informações Gerais
        </Typography>
        <Divider sx={{ bgcolor: "#fff", mb: 2 }} />
        <Box ml={2}>
          <Typography textAlign="left">
            Última atualização:{" "}
            <Typography component="span" color="green">
              27/03/2025 - 14:32 EST
            </Typography>
          </Typography>
          <Typography textAlign="left">
            Status do Servidor:{" "}
            <Typography component="span" color="green">
              Online
            </Typography>
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default LoggedHomeHero;

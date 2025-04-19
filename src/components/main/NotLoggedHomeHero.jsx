import { Box, Divider, Typography } from "@mui/material";

function NotLoggedHomeHero() {
  return (
    <>
      <Box mb={4}>
        <Typography textAlign="left" variant="h5">
          CIA DataVault - Restricted Access
        </Typography>
        <Typography textAlign="left" ml={2}>
          Este é um sistema de uso exclusivo para funcionários autorizados.
          Acesso não autorizado será monitorado.
        </Typography>
      </Box>
    </>
  );
}

export default NotLoggedHomeHero;

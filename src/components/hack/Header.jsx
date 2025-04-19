import { AppBar, Box, Button, Toolbar } from "@mui/material";

function Header({ setCurrentPage, currentPage }) {
  const pages = ["terminal"];

  return (
    <AppBar
      sx={{
        boxShadow: 2,
        bgcolor: "#151618",
        backdropFilter: "blur(5px)",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "64px",
        }}
      >
        {pages.map((page) => {
          return (
            <Box sx={{ flexGrow: 1 }}>
              <Button
                color="#fff"
                onClick={() => setCurrentPage(page)}
                key={page}
                sx={{
                  transition: "color 0.1s ease-in-out",
                  "&:not(:focus):hover": {
                    color: "grey",
                  },
                  borderBottom: `${
                    currentPage == page ? "1px solid grey" : "none"
                  }`,
                  fontFamily: "'Fira Code', monospace",
                }}
              >
                {page}
              </Button>
            </Box>
          );
        })}
      </Toolbar>
    </AppBar>
  );
}

export default Header;

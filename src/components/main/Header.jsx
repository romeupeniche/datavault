import { AppBar, Badge, Box, Button, Toolbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/generalSlice";

function Header({ setCurrentPage, currentPage }) {
  const pathFns = {
    home: () => setCurrentPage("home"),
    login: () => setCurrentPage("login"),
    messages: () => setCurrentPage("messages"),
    updates: () => setCurrentPage("updates"),
  };
  const isLoggedIn = useSelector((state) => state.general.loggedIn);
  // const isLoggedIn = true;
  const unseenMessages = useSelector((state) => state.game.unseenMessages);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

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
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: "64px",
        }}
      >
        <Box flexGrow={2}>
          <Box
            sx={{ cursor: "pointer" }}
            onClick={pathFns.home}
            component="img"
            src="./header_logo.png"
            maxWidth={50}
          />
        </Box>
        {isLoggedIn &&
          ["messages", "updates"].map((msg) => {
            if (msg === "messages") {
              return (
                <Box sx={{ flexGrow: 1 }}>
                  <Badge
                    badgeContent={unseenMessages}
                    sx={{
                      "& .MuiBadge-badge": {
                        bgcolor: "transparent",
                        color: "#fff",
                        fontWeight: "bold",
                        boxShadow: "0 0 2px #fff",
                      },
                    }}
                  >
                    <Button
                      onClick={pathFns[`${msg}`]}
                      color="#fff"
                      key={msg}
                      sx={{
                        transition: "color 0.1s ease-in-out",

                        "&:not(:focus):hover": {
                          color: `${
                            currentPage == "messages" ? "#fff" : "grey"
                          }`,
                        },
                        borderBottom: `${
                          currentPage == "messages" ? "1px solid grey" : "none"
                        }`,
                      }}
                    >
                      {msg}
                    </Button>
                  </Badge>
                </Box>
              );
            }
            return (
              <Box sx={{ flexGrow: 1 }}>
                <Button
                  color="#fff"
                  onClick={pathFns[`${msg}`]}
                  key={msg}
                  sx={{
                    transition: "color 0.1s ease-in-out",
                    "&:not(:focus):hover": {
                      color: "grey",
                    },
                    borderBottom: `${
                      currentPage == msg ? "1px solid grey" : "none"
                    }`,
                  }}
                >
                  {msg}
                </Button>
              </Box>
            );
          })}
        {!isLoggedIn ? (
          <Box flexGrow={2}>
            <Button
              variant="outlined"
              onClick={pathFns.login}
              color="#fff"
              sx={{
                transition: "color 0.1s ease-in-out",
                "&:not(:focus):hover": {
                  color: "grey",
                },
              }}
            >
              Login
            </Button>
          </Box>
        ) : (
          <Box flexGrow={2}>
            <Button
              variant="outlined"
              onClick={handleLogout}
              color="#fff"
              sx={{
                transition: "color 0.1s ease-in-out",
                "&:not(:focus):hover": {
                  color: "grey",
                },
              }}
            >
              Logout
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;

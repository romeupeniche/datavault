import { Box, Container, Divider, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import CustomTabPanel from "../../components/main/CustomTabPanel";
import BlackList from "../../components/main/BlackList";
import WantedList from "../../components/main/WantedList";
import UpdatesList from "../../components/main/UpdatesList";

const labelStyles = {
  textTransform: "none",
  color: "gray",
  fontSize: "1rem",
  "&.Mui-selected": { color: "white" },
  transition: "color 0.1s ease-in-out",
};

function Updates() {
  const [currentTab, setCurrentTab] = useState(0);
  const blackListShown = useSelector((state) => state.game.blackListShown);

  return (
    <Container>
      <Box
        width="70vw"
        height="70vh"
        maxWidth={800}
        boxShadow="0 0 5px #fff"
        borderRadius={4}
        display="flex"
        flexDirection="column"
      >
        <Box sx={{ pt: 1 }}>
          <Tabs
            value={currentTab}
            onChange={(_, value) => {
              setCurrentTab(value);
            }}
            slotProps={{
              indicator: { style: { display: "none" } },
            }}
          >
            <Tab
              disableRipple
              label="Atualizações"
              sx={{
                ...labelStyles,
                "&:not(:focus):hover": {
                  color: `${currentTab == 0 ? "white" : "#aaa"}`,
                },
                borderRight: "2px solid #fff",
                my: 1,
              }}
            />
            {["Procurados", "Lista Negra"].map((label, i) => (
              <Tab
                disableRipple
                label={label}
                value={i + 1}
                sx={{
                  ...labelStyles,
                  "&:not(:focus):hover": {
                    color: `${currentTab == i + 1 ? "white" : "#aaa"}`,
                  },
                  display:
                    label === "Lista Negra" && !blackListShown
                      ? "none"
                      : "block",
                }}
              />
            ))}
          </Tabs>
        </Box>
        <Divider sx={{ bgcolor: "#fff" }} variant="middle" />
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
          }}
        >
          <CustomTabPanel value={currentTab} index={0}>
            <UpdatesList />
          </CustomTabPanel>
          <CustomTabPanel value={currentTab} index={1}>
            <WantedList />
          </CustomTabPanel>
          <CustomTabPanel value={currentTab} index={2}>
            <BlackList />
          </CustomTabPanel>
        </Box>
      </Box>
    </Container>
  );
}

export default Updates;

import { Box, Divider, Tab, Typography, Tabs } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import FolderMessages from "./FolderMessages";
import { useState } from "react";
import { markMessageAsSeen } from "../../store/gameSlice";
import ReadMessageModal from "./ReadMessageModal";
import CustomTabPanel from "./CustomTabPanel";

const labelStyles = {
  textTransform: "none",
  color: "gray",
  fontSize: "1rem",
  "&.Mui-selected": { color: "white" },
  transition: "color 0.1s ease-in-out",
};

function ReceivedMsgs() {
  const [currentTab, setCurrentTab] = useState(0);
  const [isMsgModalOpen, setIsMsgModalOpen] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(null);
  const dispatch = useDispatch();

  const handleOpenMsgModal = (msg) => {
    setCurrentMessage(msg);
    setIsMsgModalOpen(true);
    dispatch(markMessageAsSeen(msg.id));
  };

  const handleCloseMsgModal = () => {
    setIsMsgModalOpen(false);
    setCurrentMessage(null);
  };
  const availableMessages = useSelector((state) => state.game.messages);
  return (
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
          onChange={(_, value) => setCurrentTab(value)}
          slotProps={{
            indicator: { style: { display: "none" } },
          }}
        >
          <Tab
            disableRipple
            label="Principal"
            value={0}
            sx={{
              ...labelStyles,
              "&:not(:focus):hover": {
                color: `${currentTab == 0 ? "white" : "#aaa"}`,
              },
            }}
          />
        </Tabs>
      </Box>
      <Divider sx={{ bgcolor: "#fff" }} variant="middle" />
      <Box sx={{ flex: 1, overflowY: "auto" }}>
        <CustomTabPanel value={currentTab} index={0}>
          <FolderMessages
            availableMessages={availableMessages}
            handleOpenMsgModal={handleOpenMsgModal}
          />
        </CustomTabPanel>
      </Box>
      {isMsgModalOpen && (
        <ReadMessageModal
          open={isMsgModalOpen}
          onClose={handleCloseMsgModal}
          msg={currentMessage}
        />
      )}
    </Box>
  );
}

export default ReceivedMsgs;

import { Box, Container, Fab, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import NewMsgModal from "../../components/main/NewMsgModal";
import ReceivedMsgs from "../../components/main/ReceivedMsgs";

function Messages() {
  const [openNewMsgModal, setOpenNewMsgModal] = useState(false);
  return (
    <Container>
      <ReceivedMsgs />
      <Fab
        onClick={() => setOpenNewMsgModal(true)}
        sx={{
          position: "fixed",
          bottom: 30,
          right: 30,
          color: "white",
          backgroundColor: "#222",
          borderRadius: 50,
          boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
          "&:hover": {
            backgroundColor: "#333",
          },
        }}
      >
        <AddIcon />
      </Fab>
      <NewMsgModal
        open={openNewMsgModal}
        onClose={() => setOpenNewMsgModal(false)}
      />
    </Container>
  );
}

export default Messages;

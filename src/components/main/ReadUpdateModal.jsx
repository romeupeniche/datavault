import { Box, Button, Divider, Modal, Typography } from "@mui/material";

const boxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#151618",
  borderRadius: 4,
  boxShadow: "0 0 5px #fff",
  p: 4,
  width: "70vw",
  height: "70vh",
  maxWidth: 800,
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
};

function handleFileDownload(file) {
  const link = document.createElement("a");
  link.href = file;
  link.download = file.split("/").pop();
  link.click();
}

function ReadUpdateModal({ open, onClose, update }) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={boxStyle}>
        <Box
          id="header"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 2,
            pt: 2,
            mb: 1,
            borderRadius: 4,
            color: "#F8F9FA",
            fontSize: ".8rem",
            fontWeight: 700,
          }}
        >
          <Typography fontSize="1.5rem">{update.title}</Typography>
          <Typography color="grey" fontSize=".8rem">
            {update.fullDate}
          </Typography>
        </Box>
        <Divider sx={{ bgcolor: "#fff" }} />

        <Box
          id="message-body"
          sx={{
            boxShadow: "0 0 10px #000",
            borderRadius: 4,
            p: 2,
            mt: 2,
            flexGrow: 1,
            overflowY: "auto",
          }}
        >
          <Typography whiteSpace="pre-line">{update.message}</Typography>
        </Box>

        {update.files.length > 0 && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              position: "sticky",
              bottom: 0,
              background: "#151618",
              p: 2,
              mt: 2,
            }}
          >
            {update.files.map((file, index) => (
              <Button
                key={index}
                variant="outlined"
                onClick={() => handleFileDownload(file)}
                color="#fff"
                sx={{
                  mr: 1,
                  textTransform: "none",
                  fontSize: "0.9rem",
                  "&:hover": { backgroundColor: "#555" },
                }}
              >
                {file.split("/").pop()}
              </Button>
            ))}
          </Box>
        )}
      </Box>
    </Modal>
  );
}

export default ReadUpdateModal;

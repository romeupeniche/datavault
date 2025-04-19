import { Box, Button, Divider, Modal, Typography } from "@mui/material";

function handleFileDownload(file) {
  const link = document.createElement("a");
  link.href = file;
  link.download = file.split("/").pop();
  link.click();
}

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

function ReadMessageModal({ open, onClose, msg }) {
  return (
    <>
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
            <Box
              id="left-header"
              sx={{
                display: "flex",
                alignItems: "center",
                "& img": {
                  borderRadius: "50%",
                  width: 40,
                  height: 40,
                },
              }}
            >
              <Box component="img" src={msg.photo} width={40} />
              <Box>
                <Typography component="span" textAlign="center" pl={2}>
                  {msg.name}{" "}
                  <Typography
                    component="span"
                    fontSize=".7rem"
                    color="grey"
                    textAlign="left"
                  >
                    {`<${msg.email}>`}
                  </Typography>
                  <Typography
                    fontSize=".8rem"
                    color="grey"
                    textAlign="left"
                    pl={2}
                  >
                    {msg.role}
                  </Typography>
                </Typography>
              </Box>
            </Box>
            <Box
              id="right-header"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography color="grey" fontSize=".8rem">
                {msg.fullDate}
              </Typography>
            </Box>
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
            <Typography whiteSpace="pre-line">{msg.message}</Typography>
          </Box>
          {msg.files.length > 0 && (
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
              {msg.files.map((file, index) => (
                <Button
                  key={index}
                  variant="outlined"
                  onClick={() => handleFileDownload(file)}
                  color="#fff"
                  sx={{
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
    </>
  );
}

export default ReadMessageModal;

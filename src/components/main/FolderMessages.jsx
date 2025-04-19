import { Box, Typography } from "@mui/material";

function FolderMessages({ availableMessages, handleOpenMsgModal }) {
  const getAvailableMessages = (messages) => {
    return messages.filter((msg) => msg.available);
  };
  const noMessagesText = "Você não possui mensagens novas.";
  const filteredMessages = getAvailableMessages(availableMessages);
  const handleMsgClick = (msg) => {
    handleOpenMsgModal(msg);
  };
  return (
    <>
      {filteredMessages.length > 0 ? (
        // tem email
        <>
          {filteredMessages.map((msg) => (
            <Box
              onClick={() => handleMsgClick(msg)}
              key={`${msg.code}${msg.message}${msg.date}${msg.id}`}
              px={2}
              py={1}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                m: 2,
                borderRadius: 4,
                color: `${msg.seen ? "#ddd" : "#fff"}`,
                boxShadow: `${msg.seen ? "0 0 1px grey" : "0 0 2px #fff"}`,
                cursor: "pointer",
                ":hover": {
                  backgroundColor: "#000",
                },
              }}
            >
              <Typography
                textAlign="left"
                component="span"
                fontWeight="bold"
                width={300}
              >
                {msg.name}
              </Typography>
              <Typography
                sx={{
                  width: 200,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {msg.message}
              </Typography>
              <Typography width={200} textAlign="right">
                {msg.date}
              </Typography>
            </Box>
          ))}
        </>
      ) : (
        // nao tem email
        <Typography pt={2}>{noMessagesText}</Typography>
      )}
    </>
  );
}

export default FolderMessages;

import { Box, Typography } from "@mui/material";
import { useState } from "react";
import ReadUpdateModal from "./ReadUpdateModal";
import { useSelector } from "react-redux";

function UpdatesList() {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [currentUpdate, setCurrentUpdate] = useState(null);
  const availableUpdates = useSelector((state) =>
    state.game.updates.filter((update) => update.available)
  );

  const handleOpenUpdateModal = (update) => {
    setCurrentUpdate(update);
    setIsUpdateModalOpen(true);
  };

  const handleCloseUpdateModal = () => {
    setIsUpdateModalOpen(false);
    setCurrentUpdate(null);
  };

  return (
    <>
      {availableUpdates.map((update) => (
        <Box
          onClick={() => handleOpenUpdateModal(update)}
          key={`${update.code}${update.message}${update.date}${update.id}`}
          px={2}
          py={1}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            m: 2,
            borderRadius: 4,
            boxShadow: "0 0 2px #fff",
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
            fontSize="1.2rem"
            noWrap
          >
            {update.title}
          </Typography>

          <Typography width={200} textAlign="right">
            {update.date}
          </Typography>
        </Box>
      ))}
      {isUpdateModalOpen && (
        <ReadUpdateModal
          onClose={handleCloseUpdateModal}
          open={isUpdateModalOpen}
          update={currentUpdate}
        />
      )}
    </>
  );
}

export default UpdatesList;

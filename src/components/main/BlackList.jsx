import { Box, Card, CardContent, Chip, Typography } from "@mui/material";
import { useState } from "react";
import AccessCodeInput from "./AccessCodeInput";
import { useSelector } from "react-redux";
import { red } from "@mui/material/colors";
const getStatusColor = (status) => {
  if (status.includes("Morto")) return red[700];
  if (status.includes("Capturado")) return "#4caf50";
  return "#e67e22";
};

function BlackList() {
  const correctPassword = "liapopo";
  const [allowAccess, setAllowAccess] = useState(false);
  const currentBlackList = useSelector((state) => state.game.currentBlackList);

  const handleCorrectPassword = () => {
    setAllowAccess(true);
  };

  return (
    <>
      {allowAccess ? (
        <Box>
          {currentBlackList.map((person) => (
            <Card
              key={person.id}
              sx={{
                backgroundColor: "#1a1a1a",
                color: "white",
                mb: 3,
                boxShadow: "0 0 4px #000",
                borderLeft: `4px solid ${getStatusColor(person.status)}`,
              }}
            >
              <CardContent>
                <Typography variant="h6">{person.name}</Typography>
                <Typography variant="body2" color="gray">
                  ID: {person.id}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Última Localização: <b>{person.lastSeen}</b>
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Status:{" "}
                  <Chip
                    label={person.status}
                    size="small"
                    sx={{
                      backgroundColor: getStatusColor(person.status),
                      color: "white",
                      fontWeight: "bold",
                    }}
                  />
                </Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  <i>{person.info}</i>
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {person.notes}
                </Typography>
                {person.files.length > 0 &&
                  person.files.map((file) => {
                    return (
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        Arquivo:{" "}
                        <a
                          href={`./${file}`}
                          style={{ color: "#64b5f6" }}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {file}
                        </a>
                      </Typography>
                    );
                  })}
              </CardContent>
            </Card>
          ))}
        </Box>
      ) : (
        <AccessCodeInput
          correctPassword={correctPassword}
          handleCorrectPassword={handleCorrectPassword}
        />
      )}
    </>
  );
}

export default BlackList;

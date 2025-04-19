import {
  Autocomplete,
  Box,
  Button,
  Divider,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  changeMessageAvailability,
  changeUpdateAvailability,
} from "../../store/gameSlice";

const boxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#151618",
  borderRadius: 4,
  boxShadow: "0 0 5px #fff",
  p: 4,
};
function NewMsgModal({ onClose, open }) {
  const [selectedReceiver, setSelectedReceiver] = useState(null);
  const [message, setMessage] = useState("");
  const [typed, setTyped] = useState("");
  const dispatch = useDispatch();

  const onCloseHandler = () => {
    setSelectedReceiver(null);
    setMessage("");
    onClose();
  };

  const sendMessageHandler = (e) => {
    e.preventDefault();
    window.alert("Message sent.");
    onCloseHandler();
    if (
      message.trim() == "amar a justiça" &&
      selectedReceiver.email == "jreeves@cia.gov"
    ) {
      dispatch(
        changeMessageAvailability({ messageId: 153701, available: true })
      );
      dispatch(changeUpdateAvailability({ updateId: 120504, available: true }));
    } else if (
      message.trim() == "3574M0570D05C0ND3N4D05P3RD03-N05P015P3C4M05" &&
      selectedReceiver.email == "tgallagher@cia.gov"
    ) {
      dispatch(
        changeMessageAvailability({ messageId: 112708, available: true })
      );
    }
  };

  const isNotAbleToSend =
    message.length > 0 && (selectedReceiver || typed.length > 0);

  return (
    <Modal open={open} onClose={onCloseHandler}>
      <Box sx={boxStyle}>
        <Typography variant="h6" component="h2" textAlign="center" mb={4}>
          Nova Mensagem
        </Typography>
        <Autocomplete
          sx={{
            "& .MuiInput-underline:before": {
              border: "none",
            },
            "&:hover .MuiInput-underline:before": {
              border: "none",
            },
            "& .MuiInput-underline:after": {
              border: "none",
            },
            width: 300,
            borderBottom: "1px solid grey",
            "& .MuiInput-root": {
              color: "#fff",
            },
            "& .MuiInputLabel-root": {
              color: "#fff", // Cor da label
            },
            "& .MuiSvgIcon-root": {
              color: "#fff !important", // Cor do ícone
            },
          }}
          value={selectedReceiver}
          onChange={(_, newValue) => {
            setSelectedReceiver(newValue);
          }}
          freeSolo
          options={emailList}
          autoHighlight
          getOptionLabel={(option) => option.email}
          renderOption={(props, option) => {
            const { key, ...optionProps } = props;
            return (
              <Box
                key={key}
                component="li"
                sx={{
                  "& > img": { mr: 2, flexShrink: 0 },
                  p: 0,
                  backgroundColor: "#151618", // Fundo do dropdown
                }}
                {...optionProps}
              >
                <img
                  loading="lazy"
                  width="20"
                  srcSet={`${option.photo} 2x`}
                  src={option.photo}
                  alt=""
                />
                {option.name} ({option.code})
              </Box>
            );
          }}
          slotProps={{
            paper: {
              sx: {
                boxShadow: "0 0 5px #fff",
                backgroundColor: "black", // Fundo do modal de opções
                "&:hover": {
                  backgroundColor: "#000",
                },
                "& .MuiAutocomplete-listbox": {
                  paddingTop: "0px !important", // Remove padding superior
                },
                "& .MuiAutocomplete-noOptions": {
                  backgroundColor: "#151618 !important", // Fundo preto da mensagem
                  border: "2px solid #000",
                  color: "white !important", // Texto branco
                  padding: "10px", // Ajuste no padding
                },
                p: 0,
                color: "#fff", // Cor da fonte dentro do modal
              },
            },
          }}
          renderInput={(params) => (
            <Box display="flex" alignItems="center">
              <Box sx={{ mr: 1, mb: 0.5, color: "#fff" }}>
                <label htmlFor={params.id}>To:</label>
              </Box>
              <TextField
                value={typed}
                onChange={(e) => setTyped(e.target.value)}
                variant="standard"
                {...params}
                name="To"
                slotProps={{
                  inputName: {
                    style: { color: "#fff" }, // Cor do name
                  },
                }}
              />
            </Box>
          )}
        />
        <Divider sx={{ bgcolor: "#fff", mt: 2 }} />
        <TextField
          multiline
          rows={6} // Define a altura inicial
          fullWidth
          variant="outlined"
          margin="normal"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          sx={{
            fontSize: "0.7rem",
            border: "1px solid grey",
            borderRadius: "5px",
            "&:hover": {
              borderColor: "#fff",
            },
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                border: "none",
              },
            },
          }}
          slotProps={{
            input: {
              style: {
                color: "#fff", // Texto preto
              },
            },
            inputLabel: {
              style: {
                color: "#fff", // Cor da label
              },
            },
          }}
        />
        <Button
          variant="outlined"
          sx={{ ml: "80%", mt: 2 }}
          disabled={!isNotAbleToSend}
          onClick={sendMessageHandler}
        >
          Enviar
        </Button>
      </Box>
    </Modal>
  );
}

export default NewMsgModal;

const emailList = [
  {
    name: "Jonathan Reeves",
    email: "jreeves@cia.gov",
    code: "XJ-3827",
    role: "Programador e Pesquisador Chefe",
    photo: "header_logo.png",
  },
  {
    name: "Emily Carter",
    email: "ecarter@cia.gov",
    code: "EC-9012",
    role: "Especialista em Segurança Cibernética",
    photo: "header_logo.png",
  },
  {
    name: "Sophia Hernandez",
    email: "shernandez@cia.gov",
    code: "SH-6645",
    role: "Diretora de Inteligência Estratégica",
    photo: "header_logo.png",
  },
  {
    name: "Robert Sinclair",
    email: "rsinclair@cia.gov",
    code: "RS-5508",
    photo: "header_logo.png",
    role: "Oficial de Campo",
  },
  {
    name: "Olivia Bennett",
    email: "obennett@cia.gov",
    code: "OB-3382",
    photo: "header_logo.png",
    role: "Especialista em Interrogatórios",
  },
  {
    name: "Ethan Wallace",
    email: "ewallace@cia.gov",
    code: "EW-1298",
    photo: "header_logo.png",
    role: "Criptógrafo Chefe",
  },
  {
    name: "Myra Kessler",
    email: "mkessler@cia.gov",
    code: "TG-7754",
    photo: "header_logo.png",
    role: "Engenheira Neural",
  },
  {
    name: "Thomas Gallagher",
    code: "HF-4472",
    email: "tgallagher@cia.gov",
    photo: "header_logo.png",
    role: "Diretor do Departamento Neural",
  },
  {
    name: "Natalie Russo",
    email: "nrusso@cia.gov",
    code: "NR-6639",
    photo: "header_logo.png",
    role: "Coordenadora de Inteligência Eletrônica",
  },
];

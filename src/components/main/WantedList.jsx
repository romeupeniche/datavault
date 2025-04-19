import { useState } from "react";
import AccessCodeInput from "./AccessCodeInput";
import { Box, Typography } from "@mui/material";

const currentWantedList = [
  {
    name: "Anastasia Velrov",
    codename: "Ghost Thread",
    lastSeen: "Desconhecido",
    accusations: [
      "Infiltração em redes militares",
      "Roubo de identidades operacionais",
      "Apoio logístico ao Projeto Elysium",
    ],
    dangerLevel: "Extrema",
    status: "Desconhecida",
    notes:
      "Nunca capturada. Movimentações detectadas apenas por logs criptografados. Possível arquiteta do sistema de rastreamento emocional.",
  },
  {
    name: "Daisuke Morimoto",
    codename: "Pulse Echo",
    lastSeen: "Kyoto, Japão",
    accusations: [
      "Criação de IA não autorizada",
      "Engenharia reversa de protocolos internos",
      "Distribuição de tecnologia sensível",
    ],
    dangerLevel: "Alta",
    status: "Monitorado",
    notes:
      "Ligado à fundação dos códigos-base de Elysium. Aparentemente neutro, mas possui motivação desconhecida.",
  },
  {
    name: "Renata Krueger",
    codename: "Red Wire",
    lastSeen: "Berlim, Alemanha",
    accusations: [
      "Explosão de servidores de backup",
      "Destruição de evidências",
      "Cumplicidade em fuga de cobaia",
    ],
    dangerLevel: "Alta",
    status: "Foragida",
    notes:
      "Suspeita de estar conectada com a destruição da Zona 4. Última transmissão captada indicava código 'RE-13'.",
  },
  {
    name: "Silas Moreau",
    codename: "Null Prophet",
    lastSeen: "Marselha, França",
    accusations: [
      "Manipulação psicoquímica não autorizada",
      "Tentativa de recriar Amuris em ambiente externo",
      "Recrutamento de agentes rebeldes",
    ],
    dangerLevel: "Alta",
    status: "Em observação",
    notes:
      "Ex-cientista expulso do projeto original. Acredita-se que esteja tentando replicar a substância com recursos próprios. Perfil instável, porém altamente inteligente.",
  },
  {
    name: "Elena Jurovich",
    codename: "Mirage Bloom",
    lastSeen: "Oslo, Noruega",
    accusations: [
      "Encobrimento de falhas experimentais",
      "Falsificação de dados de testes com Amuris",
      "Obstrução de investigações internas",
    ],
    dangerLevel: "Média",
    status: "Desaparecida",
    notes:
      "Antiga pesquisadora júnior promovida rapidamente. Rumores indicam que sabia dos efeitos colaterais fatais da substância antes da aplicação em cobaias humanas.",
  },
];

function WantedList() {
  const correctPassword = "georgejohntenet";
  const [allowAccess, setAllowAccess] = useState(false);
  const handleCorrectPassword = () => {
    setAllowAccess(true);
  };
  return (
    <>
      {allowAccess ? (
        currentWantedList.map((suspect) => (
          <Box
            key={suspect.name}
            mb={2}
            boxShadow="0 0 2px #fff"
            p={2}
            borderRadius={4}
          >
            <Typography textAlign="left">
              {">"} {suspect.name} ({suspect.lastSeen}) - {suspect.dangerLevel}{" "}
              ({suspect.status})
            </Typography>
            {suspect.accusations.map((acc) => (
              <Typography textAlign="left" ml={2} fontSize={12}>
                - {acc}
              </Typography>
            ))}
            <Typography fontSize={14} textAlign="left" mt={1}>
              {suspect.notes}
            </Typography>
          </Box>
        ))
      ) : (
        <AccessCodeInput
          correctPassword={correctPassword}
          handleCorrectPassword={handleCorrectPassword}
        />
      )}
    </>
  );
}

export default WantedList;

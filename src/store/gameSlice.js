import { createSlice } from "@reduxjs/toolkit";
import formatDate from "../util/formatDate";

const initialGameState = {
  updates: [
    {
      id: 114515,
      title: "Acesso Comprometido",
      message: `A tentativa de exclusão foi detectada. A CIA rastreou a atividade e identificou a conta utilizada.
O processo foi adiantado. Todos os acessos serão encerrados em instantes.`,
      fullDate: "domingo, 30/03, 20:33",
      date: "30/03",
      files: [],
      available: false,
    },
    {
      id: 120504,
      title: "Desligamento Jonathan Reeves",
      message: `A Agência Central de Inteligência informa que, a partir desta data, Jonathan Reeves, até então responsável por setores de segurança cibernética, produção do sistema e desenvolvimento de infraestrutura do Projeto Elysium, foi oficialmente desligado de suas funções.

O desligamento ocorreu após a constatação de comportamento incompatível com os protocolos de confidencialidade da Agência, incluindo o compartilhamento indevido de informações classificadas e acessos não autorizados a arquivos restritos.

Embora as investigações ainda estejam em andamento, há fortes indícios de infiltrações externas ou agentes internos atuando de maneira coordenada. Reforçamos que este não é um incidente isolado e todos os agentes devem ativar o Protocolo de Contenção Nível Vermelho, com vigilância total sobre qualquer comportamento anômalo dentro dos sistemas da CIA.

A colaboração com potenciais elementos subversivos não será tolerada, e a Agência tomará medidas exemplares para garantir a continuidade e integridade do Projeto Elysium.

Permaneçam atentos. Silêncio é segurança.`,
      fullDate: "domingo, 30/03, 20:33",
      date: "30/03",
      files: [],
      available: false,
    },
    {
      id: 122701,
      title: "Substância Amuris",
      message:
        "Relatório sobre a substância Amuris, detalhando sua influência nas emoções humanas e seu potencial para aprimoramento cognitivo e comportamental. A pesquisa apresenta correlações diretas entre os níveis da substância e padrões de dependência emocional, além de insights sobre sua possível aplicação no desenvolvimento de indivíduos com capacidades ampliadas.",
      fullDate: "domingo, 30/03, 20:33",
      date: "30/03",
      files: ["./github.png", "./CONFIDENCIAL - 01.04.2025.pdf"],
      available: false,
    },
    {
      id: 113627,
      title: "Pesquisa do Projeto Elysium",
      message:
        "Esta pesquisa é uma peça chave para nossas futuras operações e pode ter implicações revolucionárias. É imperativo que o conteúdo do relatório seja mantido sob estrita confidencialidade.",
      fullDate: "domingo, 30/03, 20:33",
      date: "30/03",
      files: ["./CONFIDENCIAL - 30.03.2025.pdf"],
      available: false,
    },
  ],
  messages: [
    {
      id: 112708,
      name: "Thomas Gallagher",
      code: "HF-4472",
      email: "tgallagher@cia.gov",
      photo: "header_logo.png",
      role: "Diretor do Departamento Neural",
      message: `Após análise da evolução do Projeto Elysium e diante da instabilidade das últimas cobaias, o local de contenção de Jonathan Reeves foi oficialmente reclassificado. A instalação anteriormente registrada como “Zona de Isolamento 3A” será agora reconhecida como Campo de Testes Avançados S.E-13.

O ativo codinome Jonathan Reeves, anteriormente classificado como Infiltrado Externo, foi avaliado como o perfil ideal para aplicação direta da Substância AMURIS-EX6, mesmo em seu estado não-finalizado.

Importante:
- A substância ainda apresenta instabilidade comportamental e fisiológica, como evidenciado nas últimas amostras de teste.
- As observações indicam deterioração total da cognição emocional e colapso sistêmico da empatia em 94% dos casos.
- Apesar disso, o comitê autorizou a aplicação final no indivíduo, visando validação em cenário real.`,
      fullDate: null,
      date: null,
      files: ["./Untitled.mp4"],
      seen: false,
      available: false,
    },
    {
      id: 153701,
      name: "Jonathan Reeves",
      email: "jreeves@cia.gov",
      code: "XJ-3827",
      role: "Programador e Pesquisador Chefe",
      photo: "header_logo.png",
      message: `Martelos e o carro estão andando sob plano mortífero. Ideia deles não é algo muito bem revolucionário mas muito correto. Estou querendo arrancar suas cabecas escondendo coisas para fazer as viagens tentar a sorte caso os planetas ou até mesmo você realmente exista. Eu quero humildemente jogar futebol se você conhece algum mecânico disponível eu quero realmente uma viagem para o que está aí, você deve me apontar o caminho para as nuvens e precisa saber que eu estou de fato precisando de algo. Eu estou querendo salvar eles, digo, Cristiano Ronaldo e Hamlet, pois infelizmente estão usando a vontade de você, tudo que você faz e fez está por trás desses dois, você pode não saber mas está sendo monitorado, nada que você pensa está certo, conchas marinhas giram em poças elétricas que encontra pela cidade, está por trás deles, esse sempre foi os dentes do oceano, a melodia da ferrugem foi o plano deles.

R.`,
      fullDate: null,
      date: null,
      files: [
        "001000010 01110000001 10000111000111100000111 00000110000001000001110000000001100000011000010000000110001111111100000000001111100000000001001111111000000000111.txt",
      ],
      seen: false,
      available: false,
    },
    {
      id: 112931,
      name: "Jonathan Reeves",
      email: "jreeves@cia.gov",
      code: "XJ-3827",
      role: "Programador e Pesquisador Chefe",
      photo: "header_logo.png",
      message:
        "Olá. Segue resultados do estudo da substância Amuris, baseado na pesquisa que fizemos. Agradeço a colaboração.",
      fullDate: null,
      date: null,
      files: ["codebook.txt"],
      seen: false,
      available: false,
    },
  ],
  unseenMessages: 0,
  blackListShown: false,
  currentBlackList: [
    {
      name: "Luana Amaral",
      id: "LR-1910",
      lastSeen: "Desconhecido",
      info: "Suspeita de infiltração e vazamento de dados do Projeto Amuris.",
      status: "Ativa",
      notes:
        "Última atividade: conexão criptografada com servidor externo. Risco alto de infiltração.",
      files: [],
    },
    {
      id: "ZK-1945",
      name: "Marco Grestepa",
      lastSeen: "Laboratório E-13",
      info: "Informante sob custódia. Selecionado para aplicação da Substância Amuris.",
      status: "Capturado (Cobaia)",
      notes:
        "Aplicação da Substância Amuris em 24h. Monitoramento e gravação confirmados.",
      files: [],
    },
    {
      id: "473-ELX",
      name: "Dr. Elias Rennard",
      lastSeen: "Seção Ômega",
      info: "Principal cientista do Projeto Elysium. Voluntariou-se como cobaia após instabilidade emocional.",
      status: "Testado - Morto",
      notes:
        "Anotações finais escondidas em diretório criptografado. Possível alerta interno.",
      files: ["./Amuris - 473-ELX.pdf"],
    },
    {
      id: "XJ-3827",
      name: "Jonathan Reeves",
      lastSeen: "Seção Ômega",
      info: "Programador do sistema da CIA. Usado como cobaia em testes cognitivos com a Substância Amuris.",
      status: "Testado - Morto",
      notes:
        "Últimas ações indicam tentativa de sabotagem interna. Registro de última mensagem incluído no arquivo.",
      files: ["./Amuris - XJ-3827.pdf"],
    },
  ],
};

const gameSlice = createSlice({
  name: "game",
  initialState: initialGameState,
  reducers: {
    changePhase(state, action) {
      if (action.payload === null) return;
      state.currentPhase = action.payload.currentPhase;
    },
    recordMistake(state, action) {
      if (action.payload === null) return;
      state.mistakes += 1;
    },
    addMessage(state, action) {
      // {message, date, sender}
      state.messages.push(action.payload);
      state.unseenMessages += 1;
    },
    markMessageAsSeen(state, action) {
      const messageIdx = state.messages.findIndex(
        (msg) => msg.id === action.payload
      );
      if (messageIdx !== -1 && state.unseenMessages > 0) {
        state.messages[messageIdx].seen = true;
        state.unseenMessages -= 1;
      }
    },
    changeMessageFolder(state, action) {
      const messageIdx = state.messages.findIndex(
        (msg) => msg.id === action.payload.messageId
      );
      if (messageIdx !== -1) {
        state.messages[messageIdx].folder = action.payload.folder;
      }
    },
    changeMessageAvailability(state, action) {
      const messageIdx = state.messages.findIndex(
        (msg) => msg.id === action.payload.messageId
      );
      if (messageIdx !== -1) {
        state.messages[messageIdx].available = action.payload.available;
        state.messages[messageIdx].fullDate = formatDate(new Date());
        state.messages[messageIdx].date = formatDate(new Date(), false);
        state.unseenMessages += 1;
      }
    },
    changeUpdateAvailability(state, action) {
      const updateIdx = state.updates.findIndex(
        (msg) => msg.id === action.payload.updateId
      );
      if (updateIdx !== -1) {
        state.updates[updateIdx].available = action.payload.available;
        state.updates[updateIdx].fullDate = formatDate(new Date());
        state.updates[updateIdx].date = formatDate(new Date(), false);
      }
    },
    changeBlackListShown(state) {
      state.blackListShown = true;
    },
  },
});

export default gameSlice.reducer;
export const {
  changePhase,
  recordMistake,
  addMessage,
  markMessageAsSeen,
  changeMessageFolder,
  changeMessageAvailability,
  changeUpdateAvailability,
  changeBlackListShown,
} = gameSlice.actions;

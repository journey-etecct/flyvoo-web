type Pergunta = { pergunta: string; resposta: string; keywords: string[] };

const DATA: Pergunta[] = [
  {
    pergunta: "Esqueci minha senha, como posso redefini-la?",
    resposta:
      "Você pode redefinir sua senha clicando no botão “Esqueci minha senha” na tela de login. Em seguida, você receberá um e-mail com um link para criar uma nova senha. Lembre-se de escolher uma senha forte e fácil de lembrar.",
    keywords: [
      "esqueci",
      "senha",
      "redefinir",
      "recuperar",
      "recuperação",
      "redefinir",
      "minha",
      "conta",
      "segurança",
      "email",
      "login",
      "forte",
      "e-mail",
      "link",
    ],
  },
  {
    pergunta: "Posso usar o aplicativo em vários dispositivos?",
    resposta:
      "Sim, você pode usar o aplicativo em vários dispositivos, desde que você faça login com a mesma conta. Assim, você poderá acessar seus dados e resultados em qualquer dispositivo com acesso à internet.",
    keywords: [
      "dispositivos",
      "vários",
      "conta",
      "login",
      "dado",
      "resultado",
      "dados",
      "resultados",
      "internet",
      "acesso",
      "mesma",
      "acessar",
      "outro",
      "dispositivo",
    ],
  },
  {
    pergunta:
      "O aplicativo possui um recurso de backup ou sincronização de dados?",
    resposta:
      "Sim, todos os dados dos usuários do aplicativo são salvos na nuvem 24 horas e sempre disponíveis para o usuário a qualquer momento.",
    keywords: [
      "backup",
      "sincronização",
      "sincronizar",
      "dados",
      "usuário",
      "disponível",
      "24",
      "sempre",
      "aplicativo",
      "dado",
    ],
  },
  {
    pergunta: "Posso personalizar as notificações que eu recebo?",
    resposta:
      "Sim, na aba Mais vá em Minha Conta -> Configurações Gerais. A opção Minha Conta só está disponível para usuários cadastrados.",
    keywords: [
      "notificações",
      "receber",
      "notificação",
      "configuração",
      "configurações",
      "configurar",
      "usuário",
      "conta",
      "dispositivo",
      "cadastrado",
    ],
  },
  {
    pergunta: "Como faço para encerrar minha conta no aplicativo?",
    resposta:
      "Se você deseja encerrar sua conta no aplicativo, você pode fazê-lo na aba Mais do aplicativo, logo clique em Minha Conta -> Excluir minha conta [em vermelho]. Você precisará confirmar sua senha e aceitar os termos de encerramento da conta. Lembre-se que ao encerrar sua conta, você perderá todos os seus dados e resultados salvos no aplicativo.",
    keywords: [
      "encerrar",
      "deletar",
      "minha",
      "conta",
      "apagar",
      "excluir",
      "encerramento",
      "perigo",
      "vermelho",
      "aplicativo",
      "senha",
      "termos",
      "feedback",
      "dados",
      "dado",
      "perder",
      "confirmar",
      "confirmação",
    ],
  },
  {
    pergunta: "O aplicativo está disponível offline?",
    resposta:
      "Não, você precisa de uma conexão com a internet para usar o aplicativo e acessar seus dados e resultados.",
    keywords: [
      "offline",
      "off-line",
      "off",
      "aplicativo",
      "internet",
      "acesso",
    ],
  },
  {
    pergunta:
      "Há um recurso de feedback no aplicativo para relatar problemas ou fornecer sugestões de melhoria?",
    resposta:
      "Sim, você pode acessar esse recurso na aba Mais do aplicativo, ir em Minha Conta -> Nos dê um feedback! e enviar sua opinião ou reclamação. Nós agradecemos seu feedback e melhoraremos o aplicativo com base nele. O feedback só está disponível uma vez para cada usuário. Para mais informações mande um email para journeycompany2023@gmail.com",
    keywords: [
      "feedback",
      "Journey",
      "melhoria",
      "melhorias",
      "reclamar",
      "reclamação",
      "informação",
      "conta",
      "minha",
      "email",
      "opinião",
      "sugerir",
      "sugestão",
      "aplicativo",
    ],
  },
  {
    pergunta:
      "Como o aplicativo lida com a possibilidade de múltiplas áreas de identificação ou interesse?",
    resposta:
      "Oferecemos algumas opções para você explorar e descobrir suas preferências e aptidões. Você pode fazer testes e atividades que irão ajudá-lo a conhecer melhor suas habilidades e interesses.",
    keywords: [
      "área",
      "múltiplas",
      "múltipla",
      "identificação",
      "preferência",
      "opções",
      "aptidâo",
      "aptidôes",
      "teste",
      "testes",
      "atividade",
      "interesse",
      "pesquisa",
      "cursos",
      "trabalho",
      "curso",
      "ajuda",
      "habilidade",
    ],
  },
  {
    pergunta:
      "Posso compartilhar os resultados obtidos através do aplicativo em redes sociais ou com outras pessoas?",
    resposta:
      "Sim, você pode compartilhar os resultados obtidos através do aplicativo em redes sociais ou com outras pessoas. Você pode fazer isso clicando no botão “Compartilhar” na tela dos resultados e escolhendo a rede social ou o contato que deseja enviar seu resultado.",
    keywords: [
      "compartilhar",
      "compartilhamento",
      "resultado",
      "resultados",
      "rede",
      "social",
      "contato",
      "whatsapp",
      "Whatsapp",
      "pessoal",
    ],
  },
  {
    pergunta:
      "Como o aplicativo garante a privacidade e segurança das informações fornecidas?",
    resposta:
      "Nós garantimos sua privacidade e segurança das informações fornecidas utilizando criptografia e protocolos seguros para proteger seus dados pessoais. O aplicativo também segue as normas legais vigentes sobre proteção de dados e não compartilha suas informações com terceiros sem sua autorização.",
    keywords: [
      "privacidade",
      "segurança",
      "informações",
      "criptografia",
      "protocolo",
      "protocolos",
      "autorização",
    ],
  },
  {
    pergunta:
      "Como o aplicativo de ajuda para descobrir a área que se identifica funciona?",
    resposta:
      "Para descobrir a área que se identifica, utilizamos algoritmos inteligentes que analisam suas respostas aos testes, jogos, quiz e atividades que você realiza no aplicativo. O aplicativo então sugere as áreas que mais se adequam ao seu perfil, personalidade e preferências.",
    keywords: [
      "aplicativo",
      "área",
      "identifica",
      "identificação",
      "algoritmo",
      "como",
      "funciona",
      "teste",
      "jogos",
      "testes",
      "jogo",
      "quiz",
      "quizes",
      "atividade",
      "atividades",
      "áreas",
      "perfil",
      "personalidade",
    ],
  },
  {
    pergunta: "Como posso atualizar minhas informações pessoais no aplicativo?",
    resposta:
      "Você pode atualizar suas informações pessoais no aplicativo nas configurações do seu perfil [Mais -> Minha Conta -> Editar Perfil]. Você pode alterar seu nome, gênero ou foto do jeito que desejar.",
    keywords: [
      "informações",
      "informação",
      "pessoal",
      "pessoais",
      "editar",
      "perfil",
      "nome",
      "gênero",
      "foto",
      "pronome",
      "pronomes",
    ],
  },
  {
    pergunta:
      "Como faço para entrar em contato com o suporte ao cliente do aplicativo?",
    resposta:
      "Basta mandar um Feedback na área Minha Conta ou mandar um email para journeycompany2023@gmail.com",
    keywords: [
      "contato",
      "email",
      "e-mail",
      "gmail",
      "feedback",
      "cliente",
      "suporte",
      "ajuda",
      "aplicativo",
    ],
  },
];

export default DATA;

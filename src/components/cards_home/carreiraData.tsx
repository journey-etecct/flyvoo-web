export interface Carreira {
    id: number;
    titulo: string;
    imgSrc: string;
    tipo: { inteligencia: string; percentual: number }[];
    estrelas: number;
    breveDescricao: string;
    salario: string;
    cargaHoraria: string;
    observacao: string;
}

export const carreiraData: Carreira[] = [
    {
        id: 1,
        titulo: "Medicina",
        imgSrc: "/img/naturalista.svg",
        tipo: [
            { inteligencia: "carreira9", percentual: 40 },
            { inteligencia: "carreira4", percentual: 40 },
            { inteligencia: "carreira7", percentual: 20 },
        ],
        estrelas: 3,
        breveDescricao:
            "A Medicina é a ciência responsável por prevenir, diagnosticar e tratar doenças, promovendo a saúde e o bem-estar das pessoas...",
        salario: "R$ 17.742,78",
        cargaHoraria: "20 horas semanais",
        observacao: "Longo período de estudo.",
    },
    {
        id: 2,
        titulo: "Direito",
        imgSrc: "/img/linguistica.svg",
        tipo: [
            { inteligencia: "carreira6", percentual: 60 },
            { inteligencia: "carreira4", percentual: 20 },
            { inteligencia: "carreira7", percentual: 20 },
        ],
        estrelas: 3,
        breveDescricao:
            "Atua na defesa dos direitos ou interesses de indivíduos, empresas e instituições em qualquer instância, avalia os casos, provas orais e documentais, recomenda procedimentos e encaminha processos para justiça. Realiza pesquisas jurídicas, elabora peças iniciais, contestações, petições e recursos, acompanha e comparece em audiências.",
        salario: "R$ 4.578,45",
        cargaHoraria: "20 horas semanais",
        observacao: "Longo estudo e necessidade de ser um bom argumentador.",
    },
    {
        id: 3,
        titulo: "Psicologia",
        imgSrc: "/img/interpessoal.svg",
        tipo: [
            { inteligencia: "carreira4", percentual: 40 },
            { inteligencia: "carreira3", percentual: 35 },
            { inteligencia: "carreira5", percentual: 25 },
        ],
        estrelas: 3,
        breveDescricao:
            "A Psicologia é o estudo da mente e do comportamento humano, bem como suas interações com o meio ambiente. É uma ciência que visa diagnosticar, compreender, explicar e promover mudanças nos comportamentos humanos.",
        salario: "R$ 2.660,00",
        cargaHoraria: "30 horas semanais",
        observacao: "",
    },
    {
        id: 4,
        titulo: "Pedagogia",
        imgSrc: "/img/interpessoal.svg",
        tipo: [
            { inteligencia: "carreira4", percentual: 60 },
            { inteligencia: "carreira6", percentual: 30 },
            { inteligencia: "carreira3", percentual: 10 },
        ],
        estrelas: 3,
        breveDescricao:
            "A Pedagogia é a ciência que estuda a educação, seus processos, métodos e técnicas para a formação de indivíduos. Estuda a relação entre professor e aluno, bem como a interação entre os membros da comunidade educacional, além da conexão entre ensino e aprendizagem.",
        salario: "R$ 2.595,03 até R$ 5.754,30",
        cargaHoraria: "40 horas semanais",
        observacao: "",
    },
    {
        id: 5,
        titulo: "Finanças",
        imgSrc: "/img/logico.svg",
        tipo: [
            { inteligencia: "carreira7", percentual: 85 },
            { inteligencia: "carreira4", percentual: 15 },
        ],
        estrelas: 3,
        breveDescricao:
            "Gerir adequadamente as finanças, seja no âmbito particular ou público, integra o processo determinante para o sucesso orçamentário de organizações e empresas. Os procedimentos englobam a destinação de recursos para setores específicos, controle de gastos, geração de receitas, investimentos, entre outros fatores que contribuem para o aprimoramento do fluxo de caixa.",
        salario: "R$ 4.778 até R$ 26.750",
        cargaHoraria: "30 horas semanais",
        observacao: "",
    },
    {
        id: 6,
        titulo: "Marketing",
        imgSrc: "/img/interpessoal.svg",
        tipo: [
            { inteligencia: "carreira4", percentual: 40 },
            { inteligencia: "carreira6", percentual: 30 },
            { inteligencia: "carreira2", percentual: 30 },
        ],
        estrelas: 3,
        breveDescricao:
            "Marketing é o conjunto de estratégias e ações que visam criar valor para o cliente e gerar lucro para a empresa. Envolve atividades como pesquisa de mercado, desenvolvimento de produtos, comunicação, promoção e distribuição, com o objetivo de identificar, satisfazer e fidelizar, garantindo a competitividade e o sucesso da empresa no mercado.",
        salario: "R$ 2.326 e R$ 22.200",
        cargaHoraria: "42 horas semanais",
        observacao: "",
    },
    {
        id: 7,
        titulo: "Nutrição",
        imgSrc: "/img/naturalista.svg",
        tipo: [
            { inteligencia: "carreira9", percentual: 40 },
            { inteligencia: "carreira4", percentual: 35 },
            { inteligencia: "carreira1", percentual: 25 },
        ],
        estrelas: 3,
        breveDescricao:
            "A nutrição é a ciência que estuda os nutrientes presentes nos alimentos, suas funções no organismo e a forma como devem ser consumidos para garantir uma alimentação equilibrada e saudável, visando a prevenção e tratamento de doenças e a promoção da saúde.",
        salario: "média de R$ 2.917,29",
        cargaHoraria: "44 horas semanais",
        observacao: "",
    },
    {
        id: 8,
        titulo: "Odontologia",
        imgSrc: "/img/naturalista.svg",
        tipo: [
            { inteligencia: "carreira9", percentual: 40 },
            { inteligencia: "carreira4", percentual: 35 },
            { inteligencia: "carreira1", percentual: 25 },
        ],
        estrelas: 3,
        breveDescricao:
            "A Odontologia é a ciência que estuda e trata as doenças relacionadas à saúde bucal. O objetivo dessa área é prevenir e solucionar problemas bucais, além de promover a estética e a função dos dentes e tecidos orais. Os profissionais graduados em Odontologia são chamados de odontologistas ou dentistas.",
        salario: "média de R$ 4.122,98",
        cargaHoraria: "30 horas semanais",
        observacao: "Não ter problemas com questões de higiene bucal alheia.",
    },
    {
        id: 9,
        titulo: "Ciência da Computação",
        imgSrc: "/img/logico.svg",
        tipo: [
            { inteligencia: "carreira7", percentual: 70 },
            { inteligencia: "carreira2", percentual: 30 },
        ],
        estrelas: 3,
        breveDescricao:
            "A Ciência da Computação é o campo que estuda o desenvolvimento de algoritmos, estruturas de dados e sistemas de computação, abrangendo áreas como programação, inteligência artificial, redes de computadores e segurança. Seu objetivo é resolver problemas e criar tecnologias relacionadas à computação.",
        salario: "R$ 3.368,11",
        cargaHoraria: "20 horas semanais",
        observacao: "",
    },
    {
        id: 10,
        titulo: "Turismo",
        imgSrc: "/img/espacial.svg",
        tipo: [
            { inteligencia: "carreira2", percentual: 30 },
            { inteligencia: "carreira9", percentual: 30 },
            { inteligencia: "carreira6", percentual: 20 },
            { inteligencia: "carreira4", percentual: 20 },
        ],
        estrelas: 3,
        breveDescricao:
            "Turismo é a atividade que envolve o deslocamento temporário de pessoas para fora do seu ambiente habitual, com fins de lazer, negócios ou outros motivos. Envolve diversos serviços, como hospedagem, transporte, alimentação e atrações turísticas, gerando impactos econômicos, sociais e culturais.",
        salario: "R$ 8.564,13",
        cargaHoraria: "40 horas semanais",
        observacao: "",
    },
    {
        id: 11,
        titulo: "Engenharia Civil",
        imgSrc: "/img/espacial.svg",
        tipo: [
            { inteligencia: "carreira2", percentual: 40 },
            { inteligencia: "carreira7", percentual: 40 },
            { inteligencia: "carreira1", percentual: 20 },
        ],
        estrelas: 3,
        breveDescricao:
            "Engenharia Civil é a área responsável pelo projeto, construção e manutenção de infraestruturas públicas e privadas, como edifícios, pontes, estradas, entre outras. Os profissionais dessa área buscam soluções eficientes e seguras para garantir a integridade das estruturas.",
        salario: "R$ 6.884,73",
        cargaHoraria: "40 horas semanais",
        observacao: "Exige habilidades técnicas e conhecimento avançado em cálculos.",
    },
    {
        id: 12,
        titulo: "Arquitetura",
        imgSrc: "/img/espacial.svg",
        tipo: [
            { inteligencia: "carreira2", percentual: 50 },
            { inteligencia: "carreira6", percentual: 30 },
            { inteligencia: "carreira7", percentual: 20 },
        ],
        estrelas: 3,
        breveDescricao:
            "Arquitetura é a arte e ciência de projetar espaços habitáveis, alinhando estética, funcionalidade e sustentabilidade. Os arquitetos são responsáveis por criar projetos de edifícios, paisagismo e design de interiores, considerando aspectos técnicos, culturais e sociais.",
        salario: "R$ 5.318,12",
        cargaHoraria: "40 horas semanais",
        observacao: "Requer criatividade, senso estético e conhecimentos técnicos.",
    },
    {
        id: 13,
        titulo: "Gastronomia",
        imgSrc: "/img/interpessoal.svg",
        tipo: [
            { inteligencia: "carreira4", percentual: 30 },
            { inteligencia: "carreira9", percentual: 30 },
            { inteligencia: "carreira1", percentual: 20 },
            { inteligencia: "carreira6", percentual: 20 },
        ],
        estrelas: 3,
        breveDescricao:
            "Gastronomia é a arte e técnica de preparar alimentos de maneira estética e sensorialmente agradável. Os profissionais dessa área, chamados de chefs, podem atuar em restaurantes, hotéis, eventos e até mesmo em consultorias gastronômicas.",
        salario: "Varia de acordo com a experiência e local de trabalho",
        cargaHoraria: "Varia de acordo com a função",
        observacao: "Requer paixão pela culinária, criatividade e habilidades técnicas.",
    },
    {
        id: 14,
        titulo: "Jornalismo",
        imgSrc: "/img/linguistica.svg",
        tipo: [
            { inteligencia: "carreira6", percentual: 40 },
            { inteligencia: "carreira4", percentual: 30 },
            { inteligencia: "carreira1", percentual: 30 },
        ],
        estrelas: 3,
        breveDescricao:
            "Jornalismo é a prática de coletar, redigir, editar e publicar informações para diversos meios de comunicação, como jornais, revistas, rádio, televisão e internet. Os jornalistas têm o papel de informar a sociedade de maneira ética e imparcial.",
        salario: "R$ 3.345,71",
        cargaHoraria: "40 horas semanais",
        observacao: "Requer boa comunicação, curiosidade e ética profissional.",
    },
    {
        id: 15,
        titulo: "Fisioterapia",
        imgSrc: "/img/corporal-cinestesico.svg",
        tipo: [
            { inteligencia: "carreira1", percentual: 40 },
            { inteligencia: "carreira4", percentual: 35 },
            { inteligencia: "carreira9", percentual: 25 },
        ],
        estrelas: 3,
        breveDescricao:
            "Fisioterapia é a área da saúde responsável por prevenir, tratar e reabilitar pacientes por meio de técnicas como exercícios terapêuticos, massagens e aparelhos específicos. O fisioterapeuta atua em diferentes contextos, como hospitais, clínicas e consultórios.",
        salario: "R$ 3.244,58",
        cargaHoraria: "30 horas semanais",
        observacao: "Requer conhecimento técnico, empatia e habilidade manual.",
    },
    {
        id: 16,
        titulo: "Administração",
        imgSrc: "/img/interpessoal.svg",
        tipo: [
            { inteligencia: "carreira4", percentual: 40 },
            { inteligencia: "carreira6", percentual: 30 },
            { inteligencia: "carreira2", percentual: 30 },
        ],
        estrelas: 3,
        breveDescricao:
            "Administração é a ciência que planeja, organiza, dirige e controla os recursos humanos, financeiros e materiais de uma organização. Os profissionais de administração podem atuar em empresas privadas, órgãos públicos ou empreender seus próprios negócios.",
        salario: "R$ 4.835,08",
        cargaHoraria: "40 horas semanais",
        observacao: "Requer habilidades de liderança, organização e visão estratégica.",
    },
    {
        id: 17,
        titulo: "Engenharia de Software",
        imgSrc: "/img/logico.svg",
        tipo: [
            { inteligencia: "carreira7", percentual: 60 },
            { inteligencia: "carreira6", percentual: 40 },
        ],
        estrelas: 3,
        breveDescricao:
            "Engenharia de Software é a disciplina que aplica princípios de engenharia no desenvolvimento, manutenção e organização de software. Os engenheiros de software lidam com análise de requisitos, design, implementação, testes e manutenção de sistemas de software.",
        salario: "R$ 7.982,22",
        cargaHoraria: "40 horas semanais",
        observacao: "Requer habilidades lógicas, conhecimento técnico e trabalho em equipe.",
    },
    {
        id: 18,
        titulo: "Biomedicina",
        imgSrc: "/img/linguistica.svg",
        tipo: [
            { inteligencia: "carreira6", percentual: 40 },
            { inteligencia: "carreira9", percentual: 30 },
            { inteligencia: "carreira1", percentual: 30 },
        ],
        estrelas: 3,
        breveDescricao:
            "Biomedicina é a área da saúde que atua na pesquisa e análise de processos biológicos, com foco em diagnóstico, prevenção e tratamento de doenças. Os biomédicos podem trabalhar em laboratórios, hospitais e centros de pesquisa.",
        salario: "R$ 4.129,47",
        cargaHoraria: "40 horas semanais",
        observacao: "Requer afinidade com a área de saúde e habilidades técnicas.",
    },
    {
        id: 19,
        titulo: "Farmácia",
        imgSrc: "/img/logico.svg",
        tipo: [
            { inteligencia: "carreira7", percentual: 40 },
            { inteligencia: "carreira6", percentual: 30 },
            { inteligencia: "carreira9", percentual: 30 },
        ],
        estrelas: 3,
        breveDescricao:
            "Farmácia é a ciência que estuda a composição de medicamentos, suas propriedades e efeitos, além de orientar sobre o uso adequado. Os farmacêuticos podem atuar em drogarias, hospitais, indústrias farmacêuticas e laboratórios de análises clínicas.",
        salario: "R$ 3.707,04",
        cargaHoraria: "40 horas semanais",
        observacao: "Requer responsabilidade, atenção aos detalhes e ética profissional.",
    },
    {
        id: 20,
        titulo: "Cinema",
        imgSrc: "/img/espacial.svg",
        tipo: [
            { inteligencia: "carreira2", percentual: 50 },
            { inteligencia: "carreira6", percentual: 30 },
            { inteligencia: "carreira8", percentual: 20 },
        ],
        estrelas: 3,
        breveDescricao:
            "Cinema é a arte de produzir filmes, envolvendo roteiro, direção, produção, fotografia, edição e outros aspectos. Profissionais do cinema podem trabalhar na criação de longas-metragens, documentários, séries e comerciais, explorando a linguagem audiovisual.",
        salario: "Varia de acordo com a função e produção",
        cargaHoraria: "Varia de acordo com a produção",
        observacao: "Requer criatividade, conhecimento técnico e trabalho em equipe.",
    },
    {
        id: 21,
        titulo: "Engenharia Elétrica",
        imgSrc: "/img/logico.svg",
        tipo: [
            { inteligencia: "carreira7", percentual: 50 },
            { inteligencia: "carreira2", percentual: 30 },
            { inteligencia: "carreira9", percentual: 20 },
        ],
        estrelas: 3,
        breveDescricao:
            "Engenharia Elétrica é a área responsável por projetar, desenvolver e manter sistemas e equipamentos elétricos. Os engenheiros elétricos podem atuar em diferentes setores, como energia, automação industrial, telecomunicações e pesquisa.",
        salario: "R$ 7.356,52",
        cargaHoraria: "40 horas semanais",
        observacao: "Exige habilidades lógicas, conhecimento técnico e inovação.",
    },
    {
        id: 22,
        titulo: "Design Gráfico",
        imgSrc: "/img/espacial.svg",
        tipo: [
            { inteligencia: "carreira6", percentual: 40 },
            { inteligencia: "carreira2", percentual: 30 },
            { inteligencia: "carreira8", percentual: 30 },
        ],
        estrelas: 3,
        breveDescricao:
            "Design Gráfico é a prática de criar soluções visuais para comunicar uma mensagem ou conceito. Os designers gráficos trabalham em projetos como identidade visual, embalagens, websites, publicidade e mídias sociais.",
        salario: "R$ 3.497,52",
        cargaHoraria: "40 horas semanais",
        observacao: "Requer criatividade, domínio de ferramentas de design e atenção aos detalhes.",
    },
    {
        id: 23,
        titulo: "Educação Física",
        imgSrc: "/img/corporal-cinestesico.svg",
        tipo: [
            { inteligencia: "carreira1", percentual: 50 },
            { inteligencia: "carreira4", percentual: 30 },
            { inteligencia: "carreira9", percentual: 20 },
        ],
        estrelas: 3,
        breveDescricao:
            "Educação Física é a área que estuda e promove a prática de atividades físicas e esportes. Os profissionais de Educação Física podem atuar em escolas, academias, clubes esportivos e projetos sociais.",
        salario: "R$ 2.286,14",
        cargaHoraria: "30 horas semanais",
        observacao: "Requer afinidade com esportes, didática e incentivo à saúde.",
    },
    {
        id: 24,
        titulo: "Enfermagem",
        imgSrc: "/img/interpessoal.svg",
        tipo: [
            { inteligencia: "carreira4", percentual: 40 },
            { inteligencia: "carreira1", percentual: 30 },
            { inteligencia: "carreira9", percentual: 30 },
        ],
        estrelas: 3,
        breveDescricao:
            "Enfermagem é a ciência e arte de cuidar da saúde, prevenindo, promovendo e recuperando pacientes. Os enfermeiros atuam em hospitais, clínicas, consultórios, empresas e serviços de saúde em geral.",
        salario: "R$ 3.766,46",
        cargaHoraria: "40 horas semanais",
        observacao: "Requer vocação para cuidar, empatia e conhecimento técnico.",
    },
    {
        id: 25,
        titulo: "Ciências Contábeis",
        imgSrc: "/img/logico.svg",
        tipo: [
            { inteligencia: "carreira7", percentual: 40 },
            { inteligencia: "carreira6", percentual: 30 },
            { inteligencia: "carreira2", percentual: 30 },
        ],
        estrelas: 3,
        breveDescricao:
            "Ciências Contábeis é a área que cuida do registro e análise das atividades financeiras e patrimoniais de uma empresa. Os contadores podem trabalhar em escritórios contábeis, empresas privadas ou como autônomos.",
        salario: "R$ 4.123,97",
        cargaHoraria: "40 horas semanais",
        observacao: "Requer organização, atenção aos detalhes e conhecimento fiscal.",
    },
    {
        id: 26,
        titulo: "Publicidade e Propaganda",
        imgSrc: "/img/linguistica.svg",
        tipo: [
            { inteligencia: "carreira6", percentual: 40 },
            { inteligencia: "carreira4", percentual: 30 },
            { inteligencia: "carreira8", percentual: 30 },
        ],
        estrelas: 3,
        breveDescricao:
            "Publicidade e Propaganda são áreas que planejam e executam campanhas publicitárias para promover produtos, marcas ou serviços. Profissionais dessas áreas podem atuar em agências, veículos de comunicação ou setores de marketing de empresas.",
        salario: "R$ 3.288,95",
        cargaHoraria: "40 horas semanais",
        observacao: "Requer criatividade, habilidades de comunicação e acompanhamento de tendências.",
    },
    {
        id: 27,
        titulo: "Recursos Humanos",
        imgSrc: "/img/interpessoal.svg",
        tipo: [
            { inteligencia: "carreira4", percentual: 40 },
            { inteligencia: "carreira6", percentual: 30 },
            { inteligencia: "carreira2", percentual: 30 },
        ],
        estrelas: 3,
        breveDescricao:
            "Recursos Humanos é a área responsável pela gestão de pessoas nas organizações, envolvendo recrutamento, seleção, treinamento, desenvolvimento e outros processos relacionados aos colaboradores. Profissionais de RH atuam em empresas de diversos setores.",
        salario: "R$ 4.027,44",
        cargaHoraria: "40 horas semanais",
        observacao: "Requer habilidades interpessoais, ética e compreensão do comportamento humano.",
    },
    {
        id: 28,
        titulo: "Medicina Veterinária",
        imgSrc: "/img/naturalista.svg",
        tipo: [
            { inteligencia: "carreira9", percentual: 40 },
            { inteligencia: "carreira1", percentual: 35 },
            { inteligencia: "carreira4", percentual: 25 },
        ],
        estrelas: 3,
        breveDescricao:
            "Medicina Veterinária é a ciência que estuda a saúde e doenças dos animais. Os médicos veterinários podem atuar em clínicas, hospitais, fazendas, zoológicos e instituições de pesquisa, garantindo o bem-estar animal e a saúde pública.",
        salario: "R$ 6.468,35",
        cargaHoraria: "40 horas semanais",
        observacao: "Requer amor pelos animais, responsabilidade e conhecimento técnico.",
    },
    {
        id: 29,
        titulo: "Relações Internacionais",
        imgSrc: "/img/linguistica.svg",
        tipo: [
            { inteligencia: "carreira6", percentual: 40 },
            { inteligencia: "carreira4", percentual: 30 },
            { inteligencia: "carreira2", percentual: 30 },
        ],
        estrelas: 3,
        breveDescricao:
            "Relações Internacionais é a área que estuda as interações entre países, analisando aspectos políticos, econômicos, sociais e culturais. Profissionais de Relações Internacionais podem trabalhar em órgãos governamentais, empresas, ONGs e organismos internacionais.",
        salario: "R$ 3.819,72",
        cargaHoraria: "40 horas semanais",
        observacao: "Requer conhecimento global, habilidades de negociação e domínio de idiomas.",
    },
]
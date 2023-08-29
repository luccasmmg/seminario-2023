export const workshopActivities = [
  {
    _id: '64a811d2ea39bd00105a0035',
    entity: 'workshop',
    data: {
      vacancies: 30,
      ofFiles: [
        {
          _id: '64a810c9ea39bd001059ff99',
          fileRequirement: {
            active: true,
            _id: '5aa857546d0f3d000fe6de09',
            acceptedExtensions: '.pdf',
            fileType: 'activity-program',
            description: 'Programa da atividade',
            name: 'Programa da atividade',
            createdAt: '2018-03-13T22:57:24.123Z',
            __v: 0,
          },
          ownUser: '6494495655c6e8001076f053',
          extension: 'pdf',
          __v: 0,
        },
      ],
      ofProposersUsers: [
        {
          _id: '6494495655c6e8001076f053',
          name: 'Maria Augusta Bezerra da Rocha',
          email: 'augusta.b.rocha@gmail.com',
        },
      ],
      status: 'consolidated',
      deleted: false,
      consolidation: {
        sessions: [
          {
            _id: '64da63bd67aaa40010e32d0a',
            initialDate: '2023-09-12T11:00:29.000Z',
            finalDate: '2023-09-12T12:30:29.000Z',
          },
        ],
        _id: '64e9e531431f3e001047b1e7',
        location: 'Sala F3 - Setor 1',
        vacancies: 30,
      },
      code: 'jl1Iw3c9zE1qi2L',
      _id: '64a811d2ea39bd00105a002f',
      title:
        'MAPEANDO DESIGUALDADES: oficina de sistemas de bases de dados sobre  indicadores sociais e econômicos do Brasil no Século XXI ',
      shift: 0,
      syllabus:
        'A pesquisa social na sua importante capacidade de apreensão da realidade social \nbrasileira e dos subsídios fornecidos para análise, planejamento e avaliação de políticas \nsociais também necessita de base de dados fundamentadas nesses estudos. Por isso, \na oficina visa socializar sítios de pesquisas que podem ser utilizados para apreender \nindicadores sociais e econômicos do Brasil, Nordeste e Rio Grande do Norte no século \nXXI. \nPlataformas como o Instituto Brasileiro de Geografia e Estatística (IBGE) com suas \ndiversas possibilidades como o IBGE Cidades1\n que fornece um panorama estatístico do \nBrasil (indicadores de população, educação, trabalho e rendimento, moradia, economia \ne meio ambiente de Estados e cidades brasileiras) e o Sistema IBGE de Recuperação \nAutomática (SIDRA IBGE)2\n fornecendo dados relativos tanto ao mercado de trabalho \n(condição de ocupação ou desemprego, rendimento, trabalho informal) com a Pesquisa \nNacional por Amostra de Domicílios Contínua Trimestral (PNAD Contínua Trimestral) \nquanto a outras informações da população brasileira como educação, moradia, turismo, \nacesso à tecnologia com a PNAD Anual. \nSerá utilizado ainda o Atlas do Desenvolvimento Humano3\n que complementa a \noficina ao apontar indicadores relativos ao desenvolvimento humano e as desigualdades \nno Brasil e por último as plataformas de consulta sobre informações de acesso aos \nprogramas e políticas sociais como o Sistema de Avaliação e Gestão da Informação4\n do \nMinistério do Desenvolvimento Social (SAGI MDS). \nCom a oficina objetiva-se também treinar a capacidade investigativa de \nestudantes de graduação (e pós-graduação caso participem) na busca de dados sociais \ne econômicos da realidade para utilização em seus estudos como na maior facilidade em \nutilizar recursos da pesquisa científica como gráficos, tabelas e cartogramas. \nDessa forma, a oficina busca contribuir tanto no sentido de socialização de \nimportantes ferramentas de pesquisa para utilização em estudos e reflexões acadêmicas \nquanto no fomento da capacidade investigativa e de manuseio de dados e ferramentas \nestatísticas por estudantes. ',
      ofFields: [
        {
          _id: '64a811d2ea39bd00105a0030',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5aa858e7c9b8c64b76e79c56',
            name: 'goals',
            readableName: 'Objetivos',
            HTMLtype: 'textarea',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value:
            'Objetivo geral: \n Desenvolver conhecimento e habilidades de acesso e manuseio de sistemas e \nbases de dados sobre indicadores sociais e econômicos do Brasil no Século XXI;\nObjetivos específicos: \n Realizar a socialização dos bancos de dados sobre indicadores sociais e \neconômicos a partir das plataformas SIDRA e IBGE Cidades do Instituto Brasileiro \nde Geografia e Estatística (IBGE), do Atlas do Desenvolvimento Humano (Atlas \nBrasil) e da Secretaria de avaliação e Gestão da informação (SAGI);\n Somar na formação acadêmica e científica de estudantes de graduação e pós \nsubsidiando pesquisas com indicadores sociais e econômicos;\n Contribuir para a capacidade técnica e analítica na formulação de tabelas, gráficos \ne formas de exposição estatísticas de indicadores;',
        },
        {
          _id: '64a811d2ea39bd00105a0031',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5aa85926c9b8c64b76e79c57',
            name: 'resources',
            readableName: 'Recursos solicitados',
            HTMLtype: 'textarea',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value:
            'Laboratório de informática com capacidade para 30 pessoas acessarem o computador;\n',
        },
        {
          _id: '64a811d2ea39bd00105a0032',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5ac2671e19dd603e41a11d47',
            name: 'coordinator',
            readableName:
              'Coordenador(Digite mesmo ele já se encontrando na lista de expositores)',
            HTMLtype: 'text',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: 'Roberto Marinho Alves da Silva',
        },
        {
          _id: '64a811d2ea39bd00105a0033',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5ac2673519dd603e41a11d48',
            name: 'phone',
            readableName: 'Telefone do coordenador',
            HTMLtype: 'text',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: '996127696',
        },
        {
          _id: '64a811d2ea39bd00105a0034',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5c6b004f0ec82d34799e74ad',
            name: 'confirmation-email',
            readableName:
              'Email do coordenador(O mesmo da página do SIGAA de preferência)',
            HTMLtype: 'text',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: 'rmas2007@gmail.com',
        },
      ],
      ofEnrollments: [
        {
          _id: '64e3c67767aaa40010e808bc',
          user: {
            _id: '64c9d5deea39bd00105f1b8d',
            name: 'ELIANE ALVES MELO',
            email: 'elianebiblioteca600@gmail.com',
          },
          present: false,
        },
        {
          _id: '64e60e4b431f3e0010450c96',
          user: {
            _id: '5cc4927dbce319000f7fe6b3',
            email: 'adnnaraquel@gmail.com',
            name: 'Adnna Raquel Araujo de Souza',
          },
          present: false,
        },
        {
          _id: '64e61499431f3e0010451740',
          user: {
            _id: '5aac84507b9ca4000fed9b0e',
            email: 'carla.j.s@hotmail.com',
            name: 'Carla Julia da Silva',
          },
          present: false,
        },
        {
          _id: '64e69213431f3e001045814c',
          user: {
            _id: '5aaac2126d0f3d000fe6f667',
            email: 'roberto.alves@ufrn.br',
            name: 'Roberto Marinho Alves da Silva',
          },
          present: false,
        },
        {
          _id: '64e8df33431f3e001047207d',
          user: {
            _id: '64d50d47ea39bd00105fd399',
            name: 'Cinthya Rayanne Dantas de Oliveira',
            email: 'cinthyarayannedantas@gmail.com',
          },
          present: false,
        },
      ],
    },
  },
  {
    _id: '64adeee7ea39bd00105a7454',
    entity: 'workshop',
    data: {
      vacancies: 10000,
      ofFiles: [],
      ofProposersUsers: [
        {
          _id: '64ad3a3cea39bd00105a67b5',
          name: 'Luciano Araújo de Medeiros',
          email: 'luciano.medeiros@ufrn.br',
        },
      ],
      status: 'waiting',
      deleted: false,
      consolidation: null,
      code: 'PZyGXIFmAA8jUeU',
      _id: '64adeee7ea39bd00105a744e',
      title:
        'Fortalecimento da cultura de Segurança da Informação: Um projeto piloto de autotreinamento e conscientização dos usuários',
      shift: 1,
      syllabus:
        'A oficina apresentará aos participantes as etapas para o desenvolvimento do protótipo e sua aplicação na Universidade Federal do Rio Grande do Norte',
      ofFields: [
        {
          _id: '64adeee7ea39bd00105a744f',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5aa858e7c9b8c64b76e79c56',
            name: 'goals',
            readableName: 'Objetivos',
            HTMLtype: 'textarea',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value:
            'Apresentar um protótipo que contribui para o fortalecimento da cultura organizacional em Segurança da Informação na Universidade Federal do Rio Grande do Norte',
        },
        {
          _id: '64adeee7ea39bd00105a7450',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5ac2673519dd603e41a11d48',
            name: 'phone',
            readableName: 'Telefone do coordenador',
            HTMLtype: 'text',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: '8498828-9417',
        },
        {
          _id: '64adeee7ea39bd00105a7451',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5ac2671e19dd603e41a11d47',
            name: 'coordinator',
            readableName:
              'Coordenador(Digite mesmo ele já se encontrando na lista de expositores)',
            HTMLtype: 'text',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: 'Luciano Araújo de Medeiros',
        },
        {
          _id: '64adeee7ea39bd00105a7452',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5aa85926c9b8c64b76e79c57',
            name: 'resources',
            readableName: 'Recursos solicitados',
            HTMLtype: 'textarea',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: 'Google Meet',
        },
        {
          _id: '64adeee7ea39bd00105a7453',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5c6b004f0ec82d34799e74ad',
            name: 'confirmation-email',
            readableName:
              'Email do coordenador(O mesmo da página do SIGAA de preferência)',
            HTMLtype: 'text',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: 'luciano.medeiros@ufrn.br',
        },
      ],
      ofEnrollments: [],
    },
  },
  {
    _id: '64afe596ea39bd00105a9700',
    entity: 'workshop',
    data: {
      vacancies: 15,
      ofFiles: [
        {
          _id: '64afe4a5ea39bd00105a96ed',
          fileRequirement: {
            active: true,
            _id: '5aa857546d0f3d000fe6de09',
            acceptedExtensions: '.pdf',
            fileType: 'activity-program',
            description: 'Programa da atividade',
            name: 'Programa da atividade',
            createdAt: '2018-03-13T22:57:24.123Z',
            __v: 0,
          },
          ownUser: '64afd879ea39bd00105a923d',
          extension: 'pdf',
          __v: 0,
        },
      ],
      ofProposersUsers: [
        {
          _id: '64afd879ea39bd00105a923d',
          name: 'Amanda Freire de Avíncola Viçosi Caetano',
          email: 'amanda.avincola@ufrn.br',
        },
        {
          _id: '64afde3eea39bd00105a95c0',
          name: 'Milena de Macedo Barbosa Nascimento',
          email: 'milena.macedo@ufrn.br',
        },
      ],
      status: 'consolidated',
      deleted: false,
      consolidation: {
        sessions: [
          {
            _id: '64da639167aaa40010e32cdc',
            initialDate: '2023-09-13T16:30:29.000Z',
            finalDate: '2023-09-13T18:00:29.000Z',
          },
        ],
        _id: '64edd0a7431f3e00104af1ec',
        location: 'Sala E3 - Setor 1',
        vacancies: 15,
      },
      code: 'Zz5YRIDdOam0XMI',
      _id: '64afe596ea39bd00105a96fa',
      title: 'A arte de contar histórias para crianças',
      shift: 1,
      syllabus:
        '1. Introdução à arte da contação de histórias;\n2. Explorando diferentes tipos de histórias;\n3. Técnicas de narrativa oral;\n4. Seleção e adaptação de histórias;\n5. Recursos para enriquecer a contação de histórias;\n6. Prática de contação de histórias;\n7. Explorando espaços de contação de histórias;\n8. Promovendo a leitura através da contação de histórias.',
      ofFields: [
        {
          _id: '64afe596ea39bd00105a96fb',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5aa858e7c9b8c64b76e79c56',
            name: 'goals',
            readableName: 'Objetivos',
            HTMLtype: 'textarea',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value:
            'A oficina tem como objetivos introduzir aos participantes a contação de histórias, ampliar o repertório de histórias, desenvolver habilidades de narração oral, estimular a criatividade, utilizar recursos e promover a leitura através da contação de histórias.',
        },
        {
          _id: '64afe596ea39bd00105a96fc',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5aa85926c9b8c64b76e79c57',
            name: 'resources',
            readableName: 'Recursos solicitados',
            HTMLtype: 'textarea',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: 'Projetor;\nCaixa de som;',
        },
        {
          _id: '64afe596ea39bd00105a96fd',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5ac2671e19dd603e41a11d47',
            name: 'coordinator',
            readableName:
              'Coordenador(Digite mesmo ele já se encontrando na lista de expositores)',
            HTMLtype: 'text',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: 'Amanda Freire de Avíncola Viçosi Caetano',
        },
        {
          _id: '64afe596ea39bd00105a96fe',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5ac2673519dd603e41a11d48',
            name: 'phone',
            readableName: 'Telefone do coordenador',
            HTMLtype: 'text',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: '84 99131 9339',
        },
        {
          _id: '64afe596ea39bd00105a96ff',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5c6b004f0ec82d34799e74ad',
            name: 'confirmation-email',
            readableName:
              'Email do coordenador(O mesmo da página do SIGAA de preferência)',
            HTMLtype: 'text',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: 'amanda.avincola@ufrn.br',
        },
      ],
      ofEnrollments: [],
    },
  },
  {
    _id: '64b5526cea39bd00105b09f8',
    entity: 'workshop',
    data: {
      vacancies: 20,
      ofFiles: [
        {
          _id: '64b55251ea39bd00105b09d7',
          fileRequirement: {
            active: true,
            _id: '5aa857546d0f3d000fe6de09',
            acceptedExtensions: '.pdf',
            fileType: 'activity-program',
            description: 'Programa da atividade',
            name: 'Programa da atividade',
            createdAt: '2018-03-13T22:57:24.123Z',
            __v: 0,
          },
          ownUser: '64b54babea39bd00105b0791',
          extension: 'pdf',
          __v: 0,
        },
      ],
      ofProposersUsers: [
        {
          _id: '64b54babea39bd00105b0791',
          name: 'CLEOMARA CRISTINA AZEVEDO SILVA',
          email: 'cleomara.azevedo@ufrn.br',
        },
      ],
      status: 'consolidated',
      deleted: false,
      consolidation: {
        sessions: [
          {
            _id: '64da639167aaa40010e32cdc',
            initialDate: '2023-09-13T16:30:29.000Z',
            finalDate: '2023-09-13T18:00:29.000Z',
          },
        ],
        _id: '64edd072431f3e00104af17e',
        location: 'Sala E1 - Setor 1',
        vacancies: 20,
      },
      code: 'CyzrMlHNZPV4C3c',
      _id: '64b5526cea39bd00105b09f2',
      title: 'Hack Pocket: Ideação de startups ',
      shift: 1,
      syllabus:
        'Conceitos Básicos: a) Entendendo o que é uma startup e sua importância na inovação. b) Explorando a metodologia do Hack Pocket como ferramenta para a criação de startups.\nEstimulando a Criatividade:  a) Desenvolvimento do processo criativo como base para a concepção de produtos, serviços e processos inovadores.\nFramework de Cralves:  a) Apresentação e aplicação do Framework de Cralves, uma ferramenta para estruturar ideias e soluções inovadoras. b) Exercícios práticos para aplicação do Framework em ideias de startups.\nCanvas de Startup: a) Introdução ao conceito de Canvas e sua cultura no desenvolvimento de startups. b) Aplicação prática do Canvas para descrever, analisar e aprimorar modelos de negócios\n',
      ofFields: [
        {
          _id: '64b5526cea39bd00105b09f3',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5aa858e7c9b8c64b76e79c56',
            name: 'goals',
            readableName: 'Objetivos',
            HTMLtype: 'textarea',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value:
            'A oficina busca capacitar os participantes na idealização de startups, familiarizando-os com a metodologia do Hack Pocket e estimulando o processo criativo para o desenvolvimento de produtos, serviços e processos inovadores. Ao longo das atividades, os participantes terão a oportunidade de aplicar o Framework de Cralves e o Canvas de Startup em suas ideias, fortalecendo suas habilidades empreendedoras e inovadoras.',
        },
        {
          _id: '64b5526cea39bd00105b09f4',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5aa85926c9b8c64b76e79c57',
            name: 'resources',
            readableName: 'Recursos solicitados',
            HTMLtype: 'textarea',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value:
            '1 resma de Folhas A4, 20 canetas, 10 marca-texto e 20 post-it. ',
        },
        {
          _id: '64b5526cea39bd00105b09f5',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5ac2671e19dd603e41a11d47',
            name: 'coordinator',
            readableName:
              'Coordenador(Digite mesmo ele já se encontrando na lista de expositores)',
            HTMLtype: 'text',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: 'Cleomara Cristina Azevedo Silva',
        },
        {
          _id: '64b5526cea39bd00105b09f6',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5ac2673519dd603e41a11d48',
            name: 'phone',
            readableName: 'Telefone do coordenador',
            HTMLtype: 'text',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: '84998660677',
        },
        {
          _id: '64b5526cea39bd00105b09f7',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5c6b004f0ec82d34799e74ad',
            name: 'confirmation-email',
            readableName:
              'Email do coordenador(O mesmo da página do SIGAA de preferência)',
            HTMLtype: 'text',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: 'cleomara.azevedo@ufrn.br',
        },
      ],
      ofEnrollments: [
        {
          _id: '64ed073d431f3e00104a25b8',
          user: {
            _id: '64e874aa431f3e001046a888',
            name: 'Artur Capistrano Braga',
            email: 'arturcbbraga@gmail.com',
          },
          present: false,
        },
      ],
    },
  },
  {
    _id: '64bb0f18ea39bd00105b754e',
    entity: 'workshop',
    data: {
      vacancies: 30,
      ofFiles: [],
      ofProposersUsers: [
        {
          _id: '64b5c35aea39bd00105b2034',
          name: 'Lorran Lima de Almeida',
          email: 'lorran.lima.010@ufrn.edu.br',
        },
      ],
      status: 'consolidated',
      deleted: false,
      consolidation: {
        sessions: [
          {
            _id: '64da634e67aaa40010e32bd6',
            initialDate: '2023-09-12T21:30:29.000Z',
            finalDate: '2023-09-12T23:00:00.000Z',
          },
        ],
        _id: '64e3984a67aaa40010e7f0fb',
        location: 'Sala B1 - Setor 1',
        vacancies: 30,
      },
      code: 'aoqxSocanZZAWaf',
      _id: '64bb0f18ea39bd00105b7548',
      title: 'Como elaborar parecer de artigo científico? ',
      shift: 2,
      syllabus:
        'Esta oficina surge a partir da minha experiência enquanto parecerista e membro da comissão editorial de uma revista discente de antropologia social. O parecer é uma avaliação qualitativa do trabalho de pesquisa apresentado pelo autor, que visa contribuir para o aprimoramento da qualidade científica e editorial da publicação. O parecer deve configurar uma opinião técnica sobre o trabalho avaliado. Portanto, o objetivo desta oficina é compartilhar  informações sobre a elaboração desse documento. Durante o encontro será abordado o processo de avaliação por pares, elementos que devem ser apresentados no documento e exemplos práticos de como avaliar um artigo e criar um parecer. A oficina é destinada a discentes de pós-graduação que desejem elaborar pareceres de forma a contribuir com o trabalho dos autores e com o que está sendo publicado atualmente.',
      ofFields: [
        {
          _id: '64bb0f18ea39bd00105b7549',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5aa858e7c9b8c64b76e79c56',
            name: 'goals',
            readableName: 'Objetivos',
            HTMLtype: 'textarea',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value:
            '\nO objetivo da oficina é dialogar sobre como avaliar a qualidade de artigos científicos e como elaborar pareceres sobre essa avaliação.',
        },
        {
          _id: '64bb0f18ea39bd00105b754a',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5aa85926c9b8c64b76e79c57',
            name: 'resources',
            readableName: 'Recursos solicitados',
            HTMLtype: 'textarea',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: 'Sala com projetor.',
        },
        {
          _id: '64bb0f18ea39bd00105b754b',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5ac2671e19dd603e41a11d47',
            name: 'coordinator',
            readableName:
              'Coordenador(Digite mesmo ele já se encontrando na lista de expositores)',
            HTMLtype: 'text',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: 'Lorran Lima',
        },
        {
          _id: '64bb0f18ea39bd00105b754c',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5ac2673519dd603e41a11d48',
            name: 'phone',
            readableName: 'Telefone do coordenador',
            HTMLtype: 'text',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: '(84) 999303043',
        },
        {
          _id: '64bb0f18ea39bd00105b754d',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5c6b004f0ec82d34799e74ad',
            name: 'confirmation-email',
            readableName:
              'Email do coordenador(O mesmo da página do SIGAA de preferência)',
            HTMLtype: 'text',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: 'lorran.lima@hotmail.com',
        },
      ],
      ofEnrollments: [
        {
          _id: '64e0333f67aaa40010e6e888',
          user: {
            _id: '64df3deb67aaa40010e59644',
            name: 'michele rodrigues dias',
            email: 'michele.dias.011@ufrn.edu.br',
          },
          present: false,
        },
        {
          _id: '64e8a1ca431f3e001046dcd2',
          user: {
            _id: '6494495655c6e8001076f053',
            name: 'Maria Augusta Bezerra da Rocha',
            email: 'augusta.b.rocha@gmail.com',
          },
          present: false,
        },
        {
          _id: '64ec6f25431f3e001048ee76',
          user: {
            _id: '6492f2df55c6e8001076e0bd',
            name: 'GRASIELLY CRISTINA ONORATO DE LIMA',
            email: 'grasielly.lima.124@ufrn.edu.br',
          },
          present: false,
        },
        {
          _id: '64ed31dc431f3e00104a8fcb',
          user: {
            _id: '5aad7fb47b9ca4000feda172',
            email: 'kellycvilela@hotmail.com',
            name: 'Kelly Cristina Cunha Vilela',
          },
          present: false,
        },
      ],
    },
  },
  {
    _id: '64bff534ea39bd00105b965b',
    entity: 'workshop',
    data: {
      vacancies: 10,
      ofFiles: [
        {
          _id: '64bff512ea39bd00105b9648',
          fileRequirement: {
            active: true,
            _id: '5aa857546d0f3d000fe6de09',
            acceptedExtensions: '.pdf',
            fileType: 'activity-program',
            description: 'Programa da atividade',
            name: 'Programa da atividade',
            createdAt: '2018-03-13T22:57:24.123Z',
            __v: 0,
          },
          ownUser: '64bfe9bdea39bd00105b954b',
          extension: 'pdf',
          __v: 0,
        },
      ],
      ofProposersUsers: [
        {
          _id: '64bfe9bdea39bd00105b954b',
          name: 'Mayane Paulino de Brito e Silva',
          email: 'mayanepaulino.b@gmail.com',
        },
      ],
      status: 'consolidated',
      deleted: false,
      consolidation: {
        sessions: [
          {
            _id: '64da639167aaa40010e32cdc',
            initialDate: '2023-09-13T16:30:29.000Z',
            finalDate: '2023-09-13T18:00:29.000Z',
          },
        ],
        _id: '64edd088431f3e00104af1b5',
        location: 'Sala E2 - Setor 1',
        vacancies: 10,
      },
      code: 'xgYzyoh3hclKiwm',
      _id: '64bff534ea39bd00105b9655',
      title:
        'Organização temática da informação: prática de construção de tesauros no Núcleo Temático da Seca e do Semiárido.',
      shift: 1,
      syllabus: 'Abordagens, estratégias e práticas da construção de tesauros.',
      ofFields: [
        {
          _id: '64bff534ea39bd00105b9656',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5aa858e7c9b8c64b76e79c56',
            name: 'goals',
            readableName: 'Objetivos',
            HTMLtype: 'textarea',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value:
            'Apresentar brevemente sobre os Sistemas de Organização do Conhecimento, enfatizando a tipologia do tesauro e suas aplicações; Expor a metodologia adotada para a construção do Tesauro do Núcleo Temático da Seca e do Semiárido; Praticar a construção de tesauros utilizando o material do Núcleo Temático da Seca e do Semiárido.\n',
        },
        {
          _id: '64bff534ea39bd00105b9657',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5aa85926c9b8c64b76e79c57',
            name: 'resources',
            readableName: 'Recursos solicitados',
            HTMLtype: 'textarea',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: '1 data show\n1 notebook',
        },
        {
          _id: '64bff534ea39bd00105b9658',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5ac2671e19dd603e41a11d47',
            name: 'coordinator',
            readableName:
              'Coordenador(Digite mesmo ele já se encontrando na lista de expositores)',
            HTMLtype: 'text',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: 'Mayane Paulino de Brito e Silva',
        },
        {
          _id: '64bff534ea39bd00105b9659',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5ac2673519dd603e41a11d48',
            name: 'phone',
            readableName: 'Telefone do coordenador',
            HTMLtype: 'text',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: '84994448934',
        },
        {
          _id: '64bff534ea39bd00105b965a',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5c6b004f0ec82d34799e74ad',
            name: 'confirmation-email',
            readableName:
              'Email do coordenador(O mesmo da página do SIGAA de preferência)',
            HTMLtype: 'text',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: 'mayane.paulino@ufrn.br/ mayanepaulino.b@gmail.com',
        },
      ],
      ofEnrollments: [],
    },
  },
  {
    _id: '64c1642aea39bd00105bc85b',
    entity: 'workshop',
    data: {
      vacancies: 30,
      ofFiles: [],
      ofProposersUsers: [
        {
          _id: '5ab2a2ca847c86000f7d82af',
          email: 'edzana@hotmail.com',
          name: 'EDZANA ROBERTA FERREIRA DA CUNHA VIEIRA LUCENA',
        },
      ],
      status: 'consolidated',
      deleted: false,
      consolidation: {
        sessions: [
          {
            _id: '64da63c467aaa40010e32d21',
            initialDate: '2023-09-13T11:00:29.000Z',
            finalDate: '2023-09-13T12:30:29.000Z',
          },
        ],
        _id: '64edc2a7431f3e00104acae2',
        location: 'Sala D2 - Setor 1',
        vacancies: 30,
      },
      code: 'Pi0EsxPCF8FW1gY',
      _id: '64c1642aea39bd00105bc855',
      title:
        'A utilização do jogo Power Grid como metodologia de ensino em Ciências Contábeis',
      shift: 0,
      syllabus:
        '•\tEficiência\n•\tGestão de estoques\n•\tContabilidade (escrituração contábil e elaboração de Balanço Patrimonial e Demonstração de Resultado)    \n•\tRetorno sobre o investimento\n•\tOferta e demanda\n•\tCompetição\n•\tSistemas de informações\n•\tFunções do controller\n•\tTomada de decisão\n•\tTrabalho em grupo \n',
      ofFields: [
        {
          _id: '64c1642aea39bd00105bc856',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5aa858e7c9b8c64b76e79c56',
            name: 'goals',
            readableName: 'Objetivos',
            HTMLtype: 'textarea',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value:
            'Utilizar jogos como ferramenta para facilitar o processo de ensino aprendizagem.',
        },
        {
          _id: '64c1642aea39bd00105bc857',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5aa85926c9b8c64b76e79c57',
            name: 'resources',
            readableName: 'Recursos solicitados',
            HTMLtype: 'textarea',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: 'Um birô e cadeiras',
        },
        {
          _id: '64c1642aea39bd00105bc858',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5ac2671e19dd603e41a11d47',
            name: 'coordinator',
            readableName:
              'Coordenador(Digite mesmo ele já se encontrando na lista de expositores)',
            HTMLtype: 'text',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value:
            'Edzana Roberta Ferreira da Cunha Vieira Lucena e Marke Geisy da Silva Dantas',
        },
        {
          _id: '64c1642aea39bd00105bc859',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5ac2673519dd603e41a11d48',
            name: 'phone',
            readableName: 'Telefone do coordenador',
            HTMLtype: 'text',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: '84 999054437',
        },
        {
          _id: '64c1642aea39bd00105bc85a',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5c6b004f0ec82d34799e74ad',
            name: 'confirmation-email',
            readableName:
              'Email do coordenador(O mesmo da página do SIGAA de preferência)',
            HTMLtype: 'text',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: 'edzana@hotmail.com',
        },
      ],
      ofEnrollments: [
        {
          _id: '64e12e9867aaa40010e72304',
          user: {
            _id: '64e12dca67aaa40010e72190',
            name: 'Rodolfo Fernando Carvalho Vieira',
            email: 'rodolfo.vieira.079@ufrn.edu.br',
          },
          present: false,
        },
        {
          _id: '64e7dae5431f3e001046593b',
          user: {
            _id: '64dfd82467aaa40010e65336',
            name: 'BRENDA GLEYZIANY DA SILVA',
            email: 'brenda.gleyziany.silva.702@ufrn.edu.br',
          },
          present: false,
        },
        {
          _id: '64ed34c0431f3e00104a9e91',
          user: {
            _id: '64e0d84967aaa40010e6fba8',
            name: 'Isis Maria Pereira Fernandes',
            email: 'isis.fernandes.018@ufrn.edu.br',
          },
          present: false,
        },
        {
          _id: '64ed3544431f3e00104aa31d',
          user: {
            _id: '64ed34f8431f3e00104aa0c4',
            name: 'Thiago Fernandes de Araujo',
            email: 'thiagothiff@gmail.com',
          },
          present: false,
        },
        {
          _id: '64ed37a7431f3e00104aa886',
          user: {
            _id: '64ed3226431f3e00104a911a',
            name: 'Evannielle de Oliveira',
            email: 'evannielleoliveira@gmail.com',
          },
          present: false,
        },
        {
          _id: '64ed7e30431f3e00104abb31',
          user: {
            _id: '64e65cba431f3e00104560e4',
            name: 'Maria Luiza Bento Mateus',
            email: 'luiza.bento.017@ufrn.edu.br',
          },
          present: false,
        },
      ],
    },
  },
  {
    _id: '64c7f116ea39bd00105d75cd',
    entity: 'workshop',
    data: {
      vacancies: 15,
      ofFiles: [],
      ofProposersUsers: [
        {
          _id: '5e66a95ee68d160011045474',
          name: 'Janaynna de Moura Ferraz',
          email: 'janaynna.ferraz@ufrn.br',
        },
        {
          _id: '5aa7097ef4a164000f9fe3fb',
          email: 'luanapinheiroborges@gmail.com',
          name: 'Luana de Andrade Pinheiro Borges',
        },
      ],
      status: 'consolidated',
      deleted: false,
      consolidation: {
        sessions: [
          {
            _id: '64da633d67aaa40010e32ba8',
            initialDate: '2023-09-14T21:30:29.000Z',
            finalDate: '2023-09-14T23:00:00.000Z',
          },
        ],
        _id: '64de56f667aaa40010e518f0',
        location: 'Sala B2 - Setor 1',
        vacancies: 15,
      },
      code: 'Lw0kxp3dijWHQwW',
      _id: '64c7f116ea39bd00105d75c7',
      title:
        'Estudos críticos sobre a prática empreendedora: operacionalização de agenda de pesquisa',
      shift: 2,
      syllabus:
        'Apresentar elementos introdutórios sobre uma crítica marxista ao conceito de empreendedorismo no contexto brasileiro.',
      ofFields: [
        {
          _id: '64c7f116ea39bd00105d75c8',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5aa858e7c9b8c64b76e79c56',
            name: 'goals',
            readableName: 'Objetivos',
            HTMLtype: 'textarea',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value:
            'a) Introduzir os conceitos da crítica marxista na Administração;\nb) Expor a categoria prática empreendedora no contexto brasileiro;\nc) Indicar as principais fontes de consultas, tais como: livros, revistas e relatórios;\nd) Apresentar softwares e técnicas de pesquisa qualitativa para realização desses estudos.',
        },
        {
          _id: '64c7f116ea39bd00105d75c9',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5aa85926c9b8c64b76e79c57',
            name: 'resources',
            readableName: 'Recursos solicitados',
            HTMLtype: 'textarea',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: 'Computador; data show; caneta para quadro branco; apagador.',
        },
        {
          _id: '64c7f116ea39bd00105d75ca',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5ac2671e19dd603e41a11d47',
            name: 'coordinator',
            readableName:
              'Coordenador(Digite mesmo ele já se encontrando na lista de expositores)',
            HTMLtype: 'text',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: 'Janaynna de Moura Ferraz',
        },
        {
          _id: '64c7f116ea39bd00105d75cb',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5ac2673519dd603e41a11d48',
            name: 'phone',
            readableName: 'Telefone do coordenador',
            HTMLtype: 'text',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: '(79) 999588484',
        },
        {
          _id: '64c7f116ea39bd00105d75cc',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5c6b004f0ec82d34799e74ad',
            name: 'confirmation-email',
            readableName:
              'Email do coordenador(O mesmo da página do SIGAA de preferência)',
            HTMLtype: 'text',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: 'janaynna.ferraz@ufrn.br',
        },
      ],
      ofEnrollments: [],
    },
  },
  {
    _id: '64c82555ea39bd00105e0072',
    entity: 'workshop',
    data: {
      vacancies: 40,
      ofFiles: [
        {
          _id: '64c82537ea39bd00105e003b',
          fileRequirement: {
            active: true,
            _id: '5aa857546d0f3d000fe6de09',
            acceptedExtensions: '.pdf',
            fileType: 'activity-program',
            description: 'Programa da atividade',
            name: 'Programa da atividade',
            createdAt: '2018-03-13T22:57:24.123Z',
            __v: 0,
          },
          ownUser: '5abc228ac9ea41000ffa080f',
          extension: 'pdf',
          __v: 0,
        },
      ],
      ofProposersUsers: [
        {
          _id: '5abc228ac9ea41000ffa080f',
          email: 'jessyca.r.henrique@gmail.com',
          name: 'Jessyca Rodrigues Henrique da Silva',
        },
      ],
      status: 'consolidated',
      deleted: false,
      consolidation: {
        sessions: [
          {
            _id: '64da63bd67aaa40010e32d0a',
            initialDate: '2023-09-12T11:00:29.000Z',
            finalDate: '2023-09-12T12:30:29.000Z',
          },
        ],
        _id: '64e4c90267aaa40010e883ef',
        location: 'Sala D5 - Setor 1',
        vacancies: 40,
      },
      code: 'Eg4idtHdh7E5FC2',
      _id: '64c82555ea39bd00105e006c',
      title:
        'Caminhos para a pós-graduação em turismo: processos e orientações para ingresso no PPGTUR/UFRN',
      shift: 0,
      syllabus:
        'Pós-Graduação Latu sensu e Stricto sensu: Objetivos do Programa de Pós-Graduação em Turismo da UFRN; Mestrado e Doutorado - principais diferenças: Linhas de pesquisa: Etapas do processo seletivo: Dicas de preparação para participar da seleção do PPGTUR/UFRN.',
      ofFields: [
        {
          _id: '64c82555ea39bd00105e006d',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5aa858e7c9b8c64b76e79c56',
            name: 'goals',
            readableName: 'Objetivos',
            HTMLtype: 'textarea',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value:
            'Conhecer o processo para ingresso no mestrado e doutorado em turismo da UFRN, suas características, etapas e orientações básicas para obter êxito na seleção.',
        },
        {
          _id: '64c82555ea39bd00105e006e',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5aa85926c9b8c64b76e79c57',
            name: 'resources',
            readableName: 'Recursos solicitados',
            HTMLtype: 'textarea',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: 'Datashow • Quadro-branco • Caneta Pilot',
        },
        {
          _id: '64c82555ea39bd00105e006f',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5ac2671e19dd603e41a11d47',
            name: 'coordinator',
            readableName:
              'Coordenador(Digite mesmo ele já se encontrando na lista de expositores)',
            HTMLtype: 'text',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: 'Jéssyca Rodrigues Henrique da Silva ',
        },
        {
          _id: '64c82555ea39bd00105e0070',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5ac2673519dd603e41a11d48',
            name: 'phone',
            readableName: 'Telefone do coordenador',
            HTMLtype: 'text',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: '(84)99943-8777',
        },
        {
          _id: '64c82555ea39bd00105e0071',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5c6b004f0ec82d34799e74ad',
            name: 'confirmation-email',
            readableName:
              'Email do coordenador(O mesmo da página do SIGAA de preferência)',
            HTMLtype: 'text',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: 'jessyca.r.henrique@gmail.com',
        },
      ],
      ofEnrollments: [
        {
          _id: '64edcc97431f3e00104ae327',
          user: {
            _id: '625d62f60eabf50010b4748f',
            name: 'Andréia de Andrade Cavalcante',
            email: 'andreia.andrade.016@ufrn.edu.br',
          },
          present: false,
        },
      ],
    },
  },
  {
    _id: '64c82988ea39bd00105e0e6b',
    entity: 'workshop',
    data: {
      vacancies: 40,
      ofFiles: [
        {
          _id: '64c82984ea39bd00105e0e1f',
          fileRequirement: {
            active: true,
            _id: '5aa857546d0f3d000fe6de09',
            acceptedExtensions: '.pdf',
            fileType: 'activity-program',
            description: 'Programa da atividade',
            name: 'Programa da atividade',
            createdAt: '2018-03-13T22:57:24.123Z',
            __v: 0,
          },
          ownUser: '5a7b428489cf91000f2fe60a',
          extension: 'pdf',
          __v: 0,
        },
      ],
      ofProposersUsers: [
        {
          _id: '5a7b428489cf91000f2fe60a',
          email: 'almirfbo@yahoo.com.br',
          name: 'Almir Félix Batista de Oliveira',
        },
      ],
      status: 'consolidated',
      deleted: false,
      consolidation: {
        sessions: [
          {
            _id: '64da639167aaa40010e32cdc',
            initialDate: '2023-09-13T16:30:29.000Z',
            finalDate: '2023-09-13T18:00:29.000Z',
          },
        ],
        _id: '64e4c91767aaa40010e88426',
        location: 'Sala E4 - Setor 1 ',
        vacancies: 40,
      },
      code: 'GNOukCRaoWBzum9',
      _id: '64c82988ea39bd00105e0e65',
      title: 'Roteiros Turístico-Culturais: possibilidades',
      shift: 1,
      syllabus:
        'Roteiros Turísticos; O uso do Patrimônio Cultural pelo Turismo; Lugares de Memória e o Turismo; A Interpretação Patrimonial nos roteiros turísticos; Construindo Roteiros Turísticos: possibilidade.',
      ofFields: [
        {
          _id: '64c82988ea39bd00105e0e66',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5aa858e7c9b8c64b76e79c56',
            name: 'goals',
            readableName: 'Objetivos',
            HTMLtype: 'textarea',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value:
            '1-Discutir a construção de Roteiros Turísticos;\n2-Avaliar o uso do Patrimônio Cultural em roteiros Turísticos;\n3-Apreender o uso da Interpretação do Patrimônio na criação dos Roteiros Turísticos\n4-Observar a possibilidade da construção de Roteiros Turístico.',
        },
        {
          _id: '64c82988ea39bd00105e0e67',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5aa85926c9b8c64b76e79c57',
            name: 'resources',
            readableName: 'Recursos solicitados',
            HTMLtype: 'textarea',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: 'Computador com Data Show.',
        },
        {
          _id: '64c82988ea39bd00105e0e68',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5ac2671e19dd603e41a11d47',
            name: 'coordinator',
            readableName:
              'Coordenador(Digite mesmo ele já se encontrando na lista de expositores)',
            HTMLtype: 'text',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: 'Almir Félix Batista de Oliveira',
        },
        {
          _id: '64c82988ea39bd00105e0e69',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5ac2673519dd603e41a11d48',
            name: 'phone',
            readableName: 'Telefone do coordenador',
            HTMLtype: 'text',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: '(84) 994011949',
        },
        {
          _id: '64c82988ea39bd00105e0e6a',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5c6b004f0ec82d34799e74ad',
            name: 'confirmation-email',
            readableName:
              'Email do coordenador(O mesmo da página do SIGAA de preferência)',
            HTMLtype: 'text',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: 'almirfbo@yahoo.com.br',
        },
      ],
      ofEnrollments: [],
    },
  },
  {
    _id: '64c8577bea39bd00105e86ad',
    entity: 'workshop',
    data: {
      vacancies: 25,
      ofFiles: [
        {
          _id: '64c85722ea39bd00105e867d',
          fileRequirement: {
            active: true,
            _id: '5aa857546d0f3d000fe6de09',
            acceptedExtensions: '.pdf',
            fileType: 'activity-program',
            description: 'Programa da atividade',
            name: 'Programa da atividade',
            createdAt: '2018-03-13T22:57:24.123Z',
            __v: 0,
          },
          ownUser: '64923f7155c6e8001076d939',
          extension: 'pdf',
          __v: 0,
        },
      ],
      ofProposersUsers: [
        {
          _id: '64923f7155c6e8001076d939',
          name: 'Marco Bruno Miranda Clementino',
          email: 'marcobruno@jfrn.jus.br',
        },
      ],
      status: 'consolidated',
      deleted: false,
      consolidation: {
        sessions: [
          {
            _id: '64da639167aaa40010e32cdc',
            initialDate: '2023-09-13T16:30:29.000Z',
            finalDate: '2023-09-13T18:00:29.000Z',
          },
        ],
        _id: '64e8c2b1431f3e001047051a',
        location: 'Sala G1 - Setor 1',
        vacancies: 25,
      },
      code: 'Fouk4tYcWYrzXYB',
      _id: '64c8577bea39bd00105e86a7',
      title:
        'Construindo reputações: marketing jurídico por estudantes de direito',
      shift: 1,
      syllabus:
        'MARKETING JURÍDICO. ESTRATÉGIAS. ESTUDANTE DE DIREITO. CONSTRUÇÃO DE REPUTAÇÃO. USO DE REDES SOCIAIS. LIMITES ÉTICOS. LEGISLAÇÃO APLICÁVEL. ',
      ofFields: [
        {
          _id: '64c8577bea39bd00105e86a8',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5aa858e7c9b8c64b76e79c56',
            name: 'goals',
            readableName: 'Objetivos',
            HTMLtype: 'textarea',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value:
            'Apresentar as principais estratégias de marketing jurídico;\nDebater os limites éticos referentes ao marketing jurídico;\nDebater modalidades de marketing jurídico possíveis de serem empregadas por estudantes de direito;\nRealizar exercício prático sobre como o marketing jurídico pode ser promovido por estudantes de direito como início de construção de imagem profissional.\n',
        },
        {
          _id: '64c8577bea39bd00105e86a9',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5aa85926c9b8c64b76e79c57',
            name: 'resources',
            readableName: 'Recursos solicitados',
            HTMLtype: 'textarea',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: 'Computador e projetor',
        },
        {
          _id: '64c8577bea39bd00105e86aa',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5ac2671e19dd603e41a11d47',
            name: 'coordinator',
            readableName:
              'Coordenador(Digite mesmo ele já se encontrando na lista de expositores)',
            HTMLtype: 'text',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: 'Marco Bruno Miranda Clementino',
        },
        {
          _id: '64c8577bea39bd00105e86ab',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5ac2673519dd603e41a11d48',
            name: 'phone',
            readableName: 'Telefone do coordenador',
            HTMLtype: 'text',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: '84-996099651',
        },
        {
          _id: '64c8577bea39bd00105e86ac',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5c6b004f0ec82d34799e74ad',
            name: 'confirmation-email',
            readableName:
              'Email do coordenador(O mesmo da página do SIGAA de preferência)',
            HTMLtype: 'text',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: 'marcobruno@jfrn.jus.br',
        },
      ],
      ofEnrollments: [
        {
          _id: '64e8a5ac431f3e001046e51e',
          user: {
            _id: '64e8a53e431f3e001046e0b4',
            name: 'Giordano Bruno Xavier de Andrade Filho',
            email: 'giordano.filho.099@ufrn.edu.br',
          },
          present: false,
        },
      ],
    },
  },
  {
    _id: '64c8589fea39bd00105e8858',
    entity: 'workshop',
    data: {
      vacancies: 25,
      ofFiles: [
        {
          _id: '64c8587dea39bd00105e882d',
          fileRequirement: {
            active: true,
            _id: '5aa857546d0f3d000fe6de09',
            acceptedExtensions: '.pdf',
            fileType: 'activity-program',
            description: 'Programa da atividade',
            name: 'Programa da atividade',
            createdAt: '2018-03-13T22:57:24.123Z',
            __v: 0,
          },
          ownUser: '64923f7155c6e8001076d939',
          extension: 'pdf',
          __v: 0,
        },
      ],
      ofProposersUsers: [
        {
          _id: '64923f7155c6e8001076d939',
          name: 'Marco Bruno Miranda Clementino',
          email: 'marcobruno@jfrn.jus.br',
        },
        {
          _id: '64b52221ea39bd00105af00a',
          name: 'Arlindo Francisco de Queiroz Neto',
          email: 'arlindoneto578@gmail.com',
        },
        {
          _id: '64b5d08fea39bd00105b28aa',
          name: 'Pedro Mariano Dias Pinheiro Dantas',
          email: 'pedro.dias.110@ufrn.edu.br',
        },
      ],
      status: 'consolidated',
      deleted: false,
      consolidation: {
        sessions: [
          {
            _id: '64da63c467aaa40010e32d21',
            initialDate: '2023-09-13T11:00:29.000Z',
            finalDate: '2023-09-13T12:30:29.000Z',
          },
        ],
        _id: '64e4eccf67aaa40010e88f43',
        location: 'Sala E2 - Setor 1',
        vacancies: 25,
      },
      code: 'knWRAVDuKmH8hHj',
      _id: '64c8589fea39bd00105e8852',
      title: 'A aplicação das técnicas de direito visual em peças jurídicas',
      shift: 0,
      syllabus:
        'DIREITO VISUAL. INOVAÇÃO JURÍDICA. APLICAÇÃO DA TÉCNICA EM DOCUMENTOS JURÍDICOS. COMUNICAÇÃO JURÍDICA EMPÁTICA E INCLUSIVA. DEMOCRATIZAÇÃO. SIMPLIFICAÇÃO. PERSUASÃO.',
      ofFields: [
        {
          _id: '64c8589fea39bd00105e8853',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5aa858e7c9b8c64b76e79c56',
            name: 'goals',
            readableName: 'Objetivos',
            HTMLtype: 'textarea',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value:
            'Geral: Apresentar as técnicas de Direito Visual e como aplica-las em peças jurídicas.\n\nEspecíficos:\nIntroduzir os conceitos princípios básicos para a aplicação do direito visual;\nApresentar as técnicas e regras de aplicação do direito visual em peças jurídicas;\nDemonstrar a aplicação do direito visual em textos jurídicos fazendo uso de ferramentas com gráficos, linhas do tempo, imagens e fluxogramas;\nDemonstrar como aplicar recursos de direito visual em ferramentas de texto, como Word;\nExplanar sobre a importância do uso do direito visual e seu impacto na melhor compreensão do texto.',
        },
        {
          _id: '64c8589fea39bd00105e8854',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5aa85926c9b8c64b76e79c57',
            name: 'resources',
            readableName: 'Recursos solicitados',
            HTMLtype: 'textarea',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: 'Computador e projetor',
        },
        {
          _id: '64c8589fea39bd00105e8855',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5ac2671e19dd603e41a11d47',
            name: 'coordinator',
            readableName:
              'Coordenador(Digite mesmo ele já se encontrando na lista de expositores)',
            HTMLtype: 'text',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: 'Marco Bruno Miranda Clementino',
        },
        {
          _id: '64c8589fea39bd00105e8856',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5ac2673519dd603e41a11d48',
            name: 'phone',
            readableName: 'Telefone do coordenador',
            HTMLtype: 'text',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: '84-996099651',
        },
        {
          _id: '64c8589fea39bd00105e8857',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5c6b004f0ec82d34799e74ad',
            name: 'confirmation-email',
            readableName:
              'Email do coordenador(O mesmo da página do SIGAA de preferência)',
            HTMLtype: 'text',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: 'marcobruno@jfrn.jus.br',
        },
      ],
      ofEnrollments: [
        {
          _id: '64e7e4a0431f3e00104679b1',
          user: {
            _id: '64e7d8e5431f3e001046538c',
            name: 'Carlos José Fernandes Rêgo',
            email: 'carlosjrego@gmail.com',
          },
          present: false,
        },
      ],
    },
  },
  {
    _id: '64c928b5ea39bd00105ee2ba',
    entity: 'workshop',
    data: {
      vacancies: 25,
      ofFiles: [
        {
          _id: '64c928a9ea39bd00105ee24f',
          fileRequirement: {
            active: true,
            _id: '5aa857546d0f3d000fe6de09',
            acceptedExtensions: '.pdf',
            fileType: 'activity-program',
            description: 'Programa da atividade',
            name: 'Programa da atividade',
            createdAt: '2018-03-13T22:57:24.123Z',
            __v: 0,
          },
          ownUser: '5cadd571452c13000fee6a7b',
          extension: 'pdf',
          __v: 0,
        },
      ],
      ofProposersUsers: [
        {
          _id: '5bc658857194dd000f5b4e3b',
          email: 'assuero.lima@hotmail.com',
          name: 'Assuero Correia de Lima Melo',
        },
      ],
      status: 'consolidated',
      deleted: false,
      consolidation: {
        sessions: [
          {
            _id: '64da639167aaa40010e32cdc',
            initialDate: '2023-09-13T16:30:29.000Z',
            finalDate: '2023-09-13T18:00:29.000Z',
          },
        ],
        _id: '64e4c98567aaa40010e8845d',
        location: 'Sala G2 - Setor 1 ',
        vacancies: 25,
      },
      code: 'zexrrFmwSoXsU3p',
      _id: '64c928b5ea39bd00105ee2b4',
      title:
        'Desvendando o Setor Comercial de um Hotel - Estratégias de Vendas e Marketing para Alunos de Turismo.',
      shift: 2,
      syllabus:
        'A oficina tem como objetivo proporcionar aos estudantes do curso de turismo um conhecimento abrangente sobre as atividades e processos do setor comercial em hotéis, com enfoque nas ferramentas de gestão e estratégias integradas de vendas e marketing. O intuito é oferecer uma visão prática e abrangente das principais atividades e rotinas do setor comercial na hotelaria.\n\nO formato da oficina será interativo, dialogado e expositivo, combinando apresentações teóricas, estudos de caso, exercícios práticos e dinâmicas em grupo. Dessa forma, os alunos terão a oportunidade de debater ideias, compartilhar experiências e aplicar os conceitos aprendidos.\n\nSerão abordados diversos tópicos relevantes durante a oficina, incluindo o papel crucial do setor comercial em um hotel, as estratégias de marketing digital específicas para o setor hoteleiro, as táticas eficazes de vendas para hotéis e a gestão adequada da reputação online e do feedback dos hóspedes.',
      ofFields: [
        {
          _id: '64c928b5ea39bd00105ee2b5',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5aa858e7c9b8c64b76e79c56',
            name: 'goals',
            readableName: 'Objetivos',
            HTMLtype: 'textarea',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value:
            '- Apresentar o funcionamento do setor comercial de um hotel, incluindo suas principais atividades e funções.\n- Demonstrar a importância da integração entre as equipes de vendas e marketing para o sucesso do setor.\n- Compreender a jornada do cliente desde o interesse inicial até a conversão em reserva.\n- Explorar as tendências e desafios atuais no cenário hoteleiro.',
        },
        {
          _id: '64c928b5ea39bd00105ee2b6',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5aa85926c9b8c64b76e79c57',
            name: 'resources',
            readableName: 'Recursos solicitados',
            HTMLtype: 'textarea',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value:
            '• Projetor multimídia para apresentações.\n• Acesso à internet para demonstrações online.\n• Material de apoio impresso para os participantes.',
        },
        {
          _id: '64c928b5ea39bd00105ee2b7',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5ac2671e19dd603e41a11d47',
            name: 'coordinator',
            readableName:
              'Coordenador(Digite mesmo ele já se encontrando na lista de expositores)',
            HTMLtype: 'text',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: 'Michel Vieira',
        },
        {
          _id: '64c928b5ea39bd00105ee2b8',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5ac2673519dd603e41a11d48',
            name: 'phone',
            readableName: 'Telefone do coordenador',
            HTMLtype: 'text',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: '84988030731',
        },
        {
          _id: '64c928b5ea39bd00105ee2b9',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5c6b004f0ec82d34799e74ad',
            name: 'confirmation-email',
            readableName:
              'Email do coordenador(O mesmo da página do SIGAA de preferência)',
            HTMLtype: 'text',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: 'michel.vieira@ufrn.br',
        },
      ],
      ofEnrollments: [],
    },
  },
  {
    _id: '64dc172467aaa40010e3e146',
    entity: 'workshop',
    data: {
      vacancies: 25,
      ofFiles: [
        {
          _id: '64dc16d667aaa40010e3e0a8',
          fileRequirement: {
            active: true,
            _id: '5aa857546d0f3d000fe6de09',
            acceptedExtensions: '.pdf',
            fileType: 'activity-program',
            description: 'Programa da atividade',
            name: 'Programa da atividade',
            createdAt: '2018-03-13T22:57:24.123Z',
            __v: 0,
          },
          ownUser: '5cbf63a54f5229000fcac5f7',
          extension: 'pdf',
          __v: 0,
        },
      ],
      ofProposersUsers: [
        {
          _id: '5cbf63a54f5229000fcac5f7',
          email: 'rebeka.coelho@gmail.com',
          name: 'Rebeka Coelho de Almeida Alves',
        },
      ],
      status: 'waiting',
      deleted: true,
      consolidation: null,
      code: 'zFF6OHojyc63DBT',
      _id: '64dc172467aaa40010e3e140',
      title:
        'Descobrindo a escrita acadêmica: Como pesquisar em base de dados científicas e melhorar trabalhos acadêmicos em Ciências Sociais Aplicadas.',
      shift: 1,
      syllabus:
        'Tipos de trabalhos acadêmicos; Apresentação e uso do periodicos.capes.gov.br; Escolha das bases de dados; Uso de operadores booleanos e escolha de  strings de busca; Análise de metadados; Tipos e técnicas de revisões bibliográficas.',
      ofFields: [
        {
          _id: '64dc172467aaa40010e3e141',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5aa858e7c9b8c64b76e79c56',
            name: 'goals',
            readableName: 'Objetivos',
            HTMLtype: 'textarea',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value:
            'Desenvolver a escrita científica dos alunos de graduação a partir do uso de bases de dados; \nMapear o processo de revisões bibliográficas (operadores booleanos, strings de busca etc); \nApresentar caminhos metodológicos possíveis; \nEstimular o senso crítico e análise de metadados de artigos. ',
        },
        {
          _id: '64dc172467aaa40010e3e142',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5aa85926c9b8c64b76e79c57',
            name: 'resources',
            readableName: 'Recursos solicitados',
            HTMLtype: 'textarea',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value:
            'É preferível que haja o apoio de sala com computadores ou solicitação aos participantes que levem seus notebooks. É necessário wifi. ',
        },
        {
          _id: '64dc172467aaa40010e3e143',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5ac2671e19dd603e41a11d47',
            name: 'coordinator',
            readableName:
              'Coordenador(Digite mesmo ele já se encontrando na lista de expositores)',
            HTMLtype: 'text',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: 'Anatália Saraiva ',
        },
        {
          _id: '64dc172467aaa40010e3e144',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5c6b004f0ec82d34799e74ad',
            name: 'confirmation-email',
            readableName:
              'Email do coordenador(O mesmo da página do SIGAA de preferência)',
            HTMLtype: 'text',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: 'anataliasaraiva@gmail.com',
        },
        {
          _id: '64dc172467aaa40010e3e145',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5ac2673519dd603e41a11d48',
            name: 'phone',
            readableName: 'Telefone do coordenador',
            HTMLtype: 'text',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: '+55 84 8807-3324',
        },
      ],
      ofEnrollments: [
        {
          _id: '64e62601431f3e0010452226',
          user: {
            _id: '64e62594431f3e0010451feb',
            name: 'Suzana Letícia  Dantas',
            email: 'suzana.dantas.073@ufrn.edu.br',
          },
          present: false,
        },
        {
          _id: '64e7617b431f3e001045e5fa',
          user: {
            _id: '64e760c5431f3e001045e385',
            name: 'FRANCISCO NONATO DE PAIVA JUNIOR',
            email: 'jrengcomp@gmail.com',
          },
          present: false,
        },
      ],
    },
  },
  {
    _id: '64dc1a4a67aaa40010e3e23a',
    entity: 'workshop',
    data: {
      vacancies: 25,
      ofFiles: [
        {
          _id: '64dc1a1d67aaa40010e3e219',
          fileRequirement: {
            active: true,
            _id: '5aa857546d0f3d000fe6de09',
            acceptedExtensions: '.pdf',
            fileType: 'activity-program',
            description: 'Programa da atividade',
            name: 'Programa da atividade',
            createdAt: '2018-03-13T22:57:24.123Z',
            __v: 0,
          },
          ownUser: '5cbf63a54f5229000fcac5f7',
          extension: 'pdf',
          __v: 0,
        },
      ],
      ofProposersUsers: [
        {
          _id: '5cbf63a54f5229000fcac5f7',
          email: 'rebeka.coelho@gmail.com',
          name: 'Rebeka Coelho de Almeida Alves',
        },
      ],
      status: 'consolidated',
      deleted: false,
      consolidation: {
        sessions: [
          {
            _id: '64da639167aaa40010e32cdc',
            initialDate: '2023-09-13T16:30:29.000Z',
            finalDate: '2023-09-13T18:00:29.000Z',
          },
        ],
        _id: '64e9e4f9431f3e001047b1ad',
        location: 'Sala F3 - Setor 1',
        vacancies: 25,
      },
      code: 'NBwAhINm2d3R93J',
      _id: '64dc1a4a67aaa40010e3e234',
      title:
        'Descobrindo a escrita acadêmica: Como pesquisar em base de dados científicas e melhorar trabalhos acadêmicos em Ciências Sociais Aplicadas.',
      shift: 1,
      syllabus:
        'Tipos de trabalhos acadêmicos; Apresentação e uso do\nperiodicos.capes.gov.br; Escolha das bases de dados; Uso de operadores\nbooleanos e escolha de strings de busca; Análise de metadados; Tipos e técnicas\nde revisões bibliográficas.',
      ofFields: [
        {
          _id: '64dc1a4a67aaa40010e3e235',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5aa858e7c9b8c64b76e79c56',
            name: 'goals',
            readableName: 'Objetivos',
            HTMLtype: 'textarea',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value:
            'Desenvolver a escrita científica dos alunos de graduação a partir do\nuso de bases de dados; Mapear o processo de revisões bibliográficas (operadores\nbooleanos, strings de busca etc); Apresentar caminhos metodológicos possíveis;\nEstimular o senso crítico e análise de metadados de artigos.',
        },
        {
          _id: '64dc1a4a67aaa40010e3e236',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5aa85926c9b8c64b76e79c57',
            name: 'resources',
            readableName: 'Recursos solicitados',
            HTMLtype: 'textarea',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value:
            'Sala de aula com computadores ou, pelo menos, wifi para que os participantes levem seus notebooks. ',
        },
        {
          _id: '64dc1a4a67aaa40010e3e237',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5ac2671e19dd603e41a11d47',
            name: 'coordinator',
            readableName:
              'Coordenador(Digite mesmo ele já se encontrando na lista de expositores)',
            HTMLtype: 'text',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: 'Rebeka Coelho de Almeida Alves ',
        },
        {
          _id: '64dc1a4a67aaa40010e3e238',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5ac2673519dd603e41a11d48',
            name: 'phone',
            readableName: 'Telefone do coordenador',
            HTMLtype: 'text',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: '84 999363123',
        },
        {
          _id: '64dc1a4a67aaa40010e3e239',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5c6b004f0ec82d34799e74ad',
            name: 'confirmation-email',
            readableName:
              'Email do coordenador(O mesmo da página do SIGAA de preferência)',
            HTMLtype: 'text',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: 'rebeka.coelho.016@ufrn.edu.br',
        },
      ],
      ofEnrollments: [
        {
          _id: '64ecd333431f3e001049cd67',
          user: {
            _id: '64eccc2a431f3e001049bf39',
            name: 'Carla Daniele Barros de Souza',
            email: 'daniele.barros.715@ufrn.edu.br',
          },
          present: false,
        },
        {
          _id: '64ed3833431f3e00104aa990',
          user: {
            _id: '64ed3226431f3e00104a911a',
            name: 'Evannielle de Oliveira',
            email: 'evannielleoliveira@gmail.com',
          },
          present: false,
        },
      ],
    },
  },
  {
    _id: '64dd076467aaa40010e45123',
    entity: 'workshop',
    data: {
      vacancies: 50,
      ofFiles: [],
      ofProposersUsers: [
        {
          _id: '5a72113f1ab163000f8c4728',
          email: 'seminario@ccsa.ufrn.br',
          name: 'Coordenação do Seminário',
        },
      ],
      status: 'consolidated',
      deleted: false,
      consolidation: {
        sessions: [
          {
            _id: '64da639867aaa40010e32cf3',
            initialDate: '2023-09-14T16:30:29.000Z',
            finalDate: '2023-09-14T18:00:29.000Z',
          },
        ],
        _id: '64dd109467aaa40010e45848',
        location: 'Auditório 2 - Nepsa 2',
        vacancies: 50,
      },
      code: 'j2D4VNXQUzj6OlX',
      _id: '64dd076467aaa40010e45122',
      title: 'Qualidade de Vida e Bem-estar no trabalho',
      shift: 0,
      syllabus: 'Responsável e palestrante: Antonio Alves ',
      ofFields: [],
      ofEnrollments: [
        {
          _id: '64e12fde67aaa40010e72693',
          user: {
            _id: '64e12dca67aaa40010e72190',
            name: 'Rodolfo Fernando Carvalho Vieira',
            email: 'rodolfo.vieira.079@ufrn.edu.br',
          },
          present: false,
        },
      ],
    },
  },
  {
    _id: '64dfcdd867aaa40010e63554',
    entity: 'workshop',
    data: {
      vacancies: 30,
      ofFiles: [],
      ofProposersUsers: [
        {
          _id: '5a72113f1ab163000f8c4728',
          email: 'seminario@ccsa.ufrn.br',
          name: 'Coordenação do Seminário',
        },
      ],
      status: 'consolidated',
      deleted: false,
      consolidation: {
        sessions: [
          {
            _id: '64da639867aaa40010e32cf3',
            initialDate: '2023-09-14T16:30:29.000Z',
            finalDate: '2023-09-14T18:00:29.000Z',
          },
        ],
        _id: '64dfcdfc67aaa40010e6363a',
        location: 'Laboratório do Hotel Escola Senac Barreira Roxa',
        vacancies: 30,
      },
      code: 'Q6hhhHNUNMjz1Dn',
      _id: '64dfcdd867aaa40010e63550',
      title: 'Técnicas em massas assadas na confeitaria',
      shift: 1,
      syllabus:
        'A atividade consiste em apresentar os alunos competidores CSEP em apresentação de técnicas no preparo de sobremesa',
      ofFields: [
        {
          _id: '64dfcdd867aaa40010e63551',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5aa85926c9b8c64b76e79c57',
            name: 'resources',
            readableName: 'Recursos solicitados',
            HTMLtype: 'textarea',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value:
            'Equipamentos presentes no laboratório do Hotel Escola Senac Barreira Roxa',
        },
        {
          _id: '64dfcdd867aaa40010e63552',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5aa858e7c9b8c64b76e79c56',
            name: 'goals',
            readableName: 'Objetivos',
            HTMLtype: 'textarea',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: '',
        },
        {
          _id: '64dfcdd867aaa40010e63553',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5ac2671e19dd603e41a11d47',
            name: 'coordinator',
            readableName:
              'Coordenador(Digite mesmo ele já se encontrando na lista de expositores)',
            HTMLtype: 'text',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value: 'Michel Vieira (UFRN) e Eliane Soares Senac',
        },
      ],
      ofEnrollments: [],
    },
  },
  {
    _id: '64e37de667aaa40010e7c92b',
    entity: 'workshop',
    data: {
      vacancies: 30,
      ofFiles: [],
      ofProposersUsers: [
        {
          _id: '5a72113f1ab163000f8c4728',
          email: 'seminario@ccsa.ufrn.br',
          name: 'Coordenação do Seminário',
        },
      ],
      status: 'consolidated',
      deleted: false,
      consolidation: {
        sessions: [
          {
            _id: '64da638867aaa40010e32cc5',
            initialDate: '2023-09-12T16:30:29.000Z',
            finalDate: '2023-09-12T18:00:29.000Z',
          },
        ],
        _id: '64edceb1431f3e00104aebb3',
        location: 'Sala A3 - Setor 1',
        vacancies: 30,
      },
      code: 'L6dyAMEQ5EoRFvU',
      _id: '64e37de667aaa40010e7c929',
      title:
        'DESVENDANDO A PERÍCIA CONTÁBIL - UM ESTUDO PRÁTICO COM ANÁLISE PROCESSUAL',
      shift: 0,
      syllabus:
        'Objetivo 1- Ambientar o participante no contexto das perícias contábeis\n    • Proporcionar aos participantes uma compreensão simplificada sobre a perícia contábil, a sua importância no contexto judicial e como ela contribui para a resolução de litígios judiciais;\n    • Fornecer uma visão geral das leis, regulamentos e normas que norteiam a perícia contábil, garantindo que os participantes estejam cientes das obrigações legais e dos padrões profissionais relevantes;\n    • Explorar os elementos essenciais à perícia contábil, incluindo a confecção de laudos e petições;\n    • Abordar os aspectos práticos relacionados ao credenciamento do perito contábil junto aos tribunais.\n\nObjetivo 2- Demonstrar um caso prático de cálculo pericial\n    • Apresentar a sequência lógica para leitura do processo judicial;\n    • Identificar termos chaves para a elaboração dos cálculos;\n    • Expor documentos que fundamentam os cálculos a serem elaborados;\n    • Explicar tratamento dado a atualização de valores dispostos em sentenças judiciais.',
      ofFields: [
        {
          _id: '64e37de667aaa40010e7c92a',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5aa858e7c9b8c64b76e79c56',
            name: 'goals',
            readableName: 'Objetivos',
            HTMLtype: 'textarea',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value:
            'Objetivo 1- Ambientar o participante no contexto das perícias contábeis\n    • Proporcionar aos participantes uma compreensão simplificada sobre a perícia contábil, a sua importância no contexto judicial e como ela contribui para a resolução de litígios judiciais;\n    • Fornecer uma visão geral das leis, regulamentos e normas que norteiam a perícia contábil, garantindo que os participantes estejam cientes das obrigações legais e dos padrões profissionais relevantes;\n    • Explorar os elementos essenciais à perícia contábil, incluindo a confecção de laudos e petições;\n    • Abordar os aspectos práticos relacionados ao credenciamento do perito contábil junto aos tribunais.\n\nObjetivo 2- Demonstrar um caso prático de cálculo pericial\n    • Apresentar a sequência lógica para leitura do processo judicial;\n    • Identificar termos chaves para a elaboração dos cálculos;\n    • Expor documentos que fundamentam os cálculos a serem elaborados;\n    • Explicar tratamento dado a atualização de valores dispostos em sentenças judiciais.\n',
        },
      ],
      ofEnrollments: [
        {
          _id: '64e47f1d67aaa40010e85913',
          user: {
            _id: '64de905d67aaa40010e54e3e',
            name: 'Thamiris steyce soares dos santos',
            email: 'thamiris.steyce.087@ufrn.edu.br',
          },
          present: false,
        },
        {
          _id: '64e68ba7431f3e0010457cdb',
          user: {
            _id: '64e6899a431f3e0010457821',
            name: 'Daniely Vieira de Souza do Nascimento',
            email: 'danielyvieiranascimento@gmail.com',
          },
          present: false,
        },
        {
          _id: '64e794de431f3e00104607b5',
          user: {
            _id: '64de273a67aaa40010e4d4b1',
            name: 'Victória Letícia dos Santos',
            email: 'victoria_leticia@live.com',
          },
          present: false,
        },
        {
          _id: '64e7ffff431f3e00104696fe',
          user: {
            _id: '64e7d8e5431f3e001046538c',
            name: 'Carlos José Fernandes Rêgo',
            email: 'carlosjrego@gmail.com',
          },
          present: false,
        },
        {
          _id: '64e88c7b431f3e001046bbb6',
          user: {
            _id: '64e85bdb431f3e001046a47e',
            name: 'Ana Caroline Alves Carlos',
            email: 'carolinecarlos234@gmail.com',
          },
          present: false,
        },
        {
          _id: '64e8aa3c431f3e001046ec30',
          user: {
            _id: '64e643b2431f3e0010453cc5',
            name: 'ANNE GISELLE BRITO DINIZ MEDEIROS VERAS',
            email: 'giselle.medeiros.702@ufrn.edu.br',
          },
          present: false,
        },
        {
          _id: '64ea86a6431f3e0010481274',
          user: {
            _id: '5cb742c84f5229000fc9b354',
            email: 'julia_nogueira03@outlook.com',
            name: 'JÚLIA MARIA DA SILVA NOGUEIRA',
          },
          present: false,
        },
        {
          _id: '64ebc8b2431f3e001048adec',
          user: {
            _id: '64ebc6e4431f3e001048a94a',
            name: 'Hadassa Adna Siqueira Ferreira',
            email: 'hadassasiqueiraa@gmail.com',
          },
          present: false,
        },
        {
          _id: '64ecaf8f431f3e001049941d',
          user: {
            _id: '64b2aaaeea39bd00105ac9db',
            name: 'Jéssica de Oliveira Sertão Camarão',
            email: 'jessica.oliveira.099@ufrn.edu.br',
          },
          present: false,
        },
        {
          _id: '64eccb12431f3e001049bb41',
          user: {
            _id: '64eccace431f3e001049b96f',
            name: 'Itamara Diniz de Figueiredo',
            email: 'itamaraf70@gmail.com',
          },
          present: false,
        },
        {
          _id: '64ed0c7d431f3e00104a353e',
          user: {
            _id: '64dd515567aaa40010e47bed',
            name: 'Dayane Cristine Costa Pires',
            email: 'dayane.pires.703@ufrn.edu.br',
          },
          present: false,
        },
        {
          _id: '64ed0c7e431f3e00104a3576',
          user: {
            _id: '64dd515567aaa40010e47bed',
            name: 'Dayane Cristine Costa Pires',
            email: 'dayane.pires.703@ufrn.edu.br',
          },
          present: false,
        },
        {
          _id: '64ed12c4431f3e00104a42a2',
          user: {
            _id: '64e3e4ea67aaa40010e81e9d',
            name: 'IRLAN SOARES DE LIMA JUNIOR',
            email: 'irlanjr699@gmail.com',
          },
          present: false,
        },
        {
          _id: '64ed318b431f3e00104a8da0',
          user: {
            _id: '64e0d84967aaa40010e6fba8',
            name: 'Isis Maria Pereira Fernandes',
            email: 'isis.fernandes.018@ufrn.edu.br',
          },
          present: false,
        },
        {
          _id: '64ed34eb431f3e00104aa05b',
          user: {
            _id: '64de54d067aaa40010e513fa',
            name: 'Agatha Priscila de Souto Lobato',
            email: 'agathapriscilaofc@gmail.com',
          },
          present: false,
        },
        {
          _id: '64ed3638431f3e00104aa5c5',
          user: {
            _id: '64ed3226431f3e00104a911a',
            name: 'Evannielle de Oliveira',
            email: 'evannielleoliveira@gmail.com',
          },
          present: false,
        },
        {
          _id: '64edd501431f3e00104affee',
          user: {
            _id: '64db661a67aaa40010e37fd4',
            name: 'CECILIA DE ARAUJO DUARTE',
            email: 'ceciduarte03@gmail.com',
          },
          present: false,
        },
      ],
    },
  },
  {
    _id: '64ed0cdb431f3e00104a38a4',
    entity: 'workshop',
    data: {
      vacancies: 0,
      ofFiles: [],
      ofProposersUsers: [
        {
          _id: '5a72113f1ab163000f8c4728',
          email: 'seminario@ccsa.ufrn.br',
          name: 'Coordenação do Seminário',
        },
      ],
      status: 'consolidated',
      deleted: false,
      consolidation: {
        sessions: [
          {
            _id: '64da638867aaa40010e32cc5',
            initialDate: '2023-09-12T16:30:29.000Z',
            finalDate: '2023-09-12T18:00:29.000Z',
          },
        ],
        _id: '64edced6431f3e00104aebea',
        location: 'Sala A2 - Setor 1',
        vacancies: 30,
      },
      code: 'S4X0jT8AuRnQiKW',
      _id: '64ed0cdb431f3e00104a38a2',
      title:
        'UTILIZANDO A PLATAFORMA EIKON-REFINITV PARA BAIXAR DADOS ECONÔMICOS E FINANCERIOS',
      shift: 1,
      syllabus:
        '- Conhecer as informações econômico-financeiras disponíveis na plataforma EIKON-REFINITV\n- Aprender sobre as formas possíveis de baixar dados e utilizá-los em trabalhos científicos ou para análise financeira.',
      ofFields: [
        {
          _id: '64ed0cdb431f3e00104a38a3',
          request: {
            editable: true,
            required: true,
            destroy: false,
            _id: '5aa858e7c9b8c64b76e79c56',
            name: 'goals',
            readableName: 'Objetivos',
            HTMLtype: 'textarea',
            createdAt: '2023-08-29T12:02:49.745Z',
          },
          value:
            '- Conhecer as informações econômico-financeiras disponíveis na plataforma EIKON-REFINITV\n- Aprender sobre as formas possíveis de baixar dados e utilizá-los em trabalhos científicos ou para análise financeira.2',
        },
      ],
      ofEnrollments: [],
    },
  },
]

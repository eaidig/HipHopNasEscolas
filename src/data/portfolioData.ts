import { Track, VideoItem, PhotoItem, CredentialItem, PillarItem } from '../types';

export const ARTIST_INFO = {
  artisticName: 'MANO ORDAI',
  fullName: 'Luciano Adrônico da Silva Ordai',
  birthDate: '03 de Fevereiro de 1973',
  age: '53 anos',
  origin: 'Uruguaiana - RS (Fronteira Oeste)',
  roles: [
    'Rapper & Músico Multi-instrumentista',
    'Professor de História (PUC-RS)',
    'Educador Social & Palestrante',
    'Agente Territorial de Cultura (MinC)',
    'Fundador do Hip Hop nas Escolas',
    'Líder do Ponto de Cultura Pampa Crew',
    'Pioneiro do Skate na Fronteira'
  ],
  tagline: 'A interseção viva entre o asfalto, a história, o batuque e a libertação.',
  manifestoShort: 'O skatista das antigas, o pai e avô que compartilha a música com o neto Bento, o anarquista que questiona as estruturas e o educador que transforma dor em potência coletiva. Nossa história é feita de suor, arte, negritude e muita atitude.',
  youtubeDocUrl: 'https://www.youtube.com/watch?v=X7qv7CQ8nOQ',
  youtubeDocId: 'X7qv7CQ8nOQ',
  spotifyAlbumUrl: 'https://open.spotify.com/intl-pt/album/0FQt3RJ1XyD3QqQE0X1ztw?si=hI6GzGVhQtyPsB1kBN6pJA',
  spotifyEmbedUrl: 'https://open.spotify.com/embed/album/0FQt3RJ1XyD3QqQE0X1ztw?utm_source=generator&theme=0',
  email: 'manoordai.contato@gmail.com',
  whatsappNumber: '5555999998888',
  location: 'Uruguaiana / Rio Grande do Sul - Brasil',
  pampaCrew: 'Ponto de Cultura Pampa Crew (Certificado MinC 2026)',
};

export const PILLARS: PillarItem[] = [
  {
    id: 'raizes',
    title: 'Raízes da Terra & Berço do Samba',
    subtitle: 'Batuque, Carnaval Mirim e Ancestralidade',
    description: 'Cresceu dentro do berço do carnaval de rua em Uruguaiana, embalado pelas memórias de sua mãe Montserrat e pela tradicional escola de samba Os Rouxinóis. Na infância aprendeu todos os instrumentos de percussão, construindo uma base rítmica visceral que reverbera em toda sua obra.',
    quote: '"Minha essência foi embalada pela voz da minha mãe e pelos mestres Clara Nunes, Martinho da Vila e Bezerra da Silva."',
    tags: ['Os Rouxinóis', 'Samba de Raiz', 'Uruguaiana', 'Percussão'],
    iconName: 'Flame'
  },
  {
    id: 'afropunk',
    title: 'Estética & Atitude Afro-Punk / Skate',
    subtitle: 'A Urgência dos Anos 80 e a Contracultura',
    description: 'Pioneiro do skate na Fronteira Oeste desde a década de 1980. Encontrou no punk rock, hardcore e afropunk uma postura ética de não-conformismo. Bebendo na fonte de Spike Lee no cinema, Dead Kennedys (com o baterista negro D.H. Peligro), Run-D.M.C., Public Enemy, Ice-T / Body Count e Inocentes.',
    quote: '"O skate e o som independente nunca foram apenas hobbies, mas ferramentas de autonomia e ocupação do espaço público."',
    tags: ['Skate Anos 80', 'Hardcore', 'Dead Kennedys', 'Run-DMC', 'Public Enemy'],
    iconName: 'Sparkles'
  },
  {
    id: 'pensamento-negro',
    title: 'Ancestralidade & Filosofia Negra',
    subtitle: 'Teoria Crítica e Trincheira de Emancipação',
    description: 'A construção de sua consciência artística e política passa pela literatura, teatro e ativismo negro: o legado de Abdias Nascimento, o pensamento de Djamila Ribeiro e Angela Davis, a filosofia dos Panteras Negras e as narrativas cortantes de Eduardo Galeano.',
    quote: '"A arte e a política caminham juntas na trincheira da emancipação."',
    tags: ['Abdias Nascimento', 'Panteras Negras', 'Angela Davis', 'Djamila Ribeiro'],
    iconName: 'BookOpen'
  },
  {
    id: 'educador',
    title: 'O Professor de História & Crítica Social',
    subtitle: 'Educação Popular que Conecta a Sala de Aula à Rua',
    description: 'Graduado em História pela PUC-RS e especialista em Educação e Relações Étnico-Raciais pela Unipampa. Utiliza o rigor historiográfico e a linguagem da rua para combater o racismo estrutural e resgatar o protagonismo da população negra apagada na história oficial do RS.',
    quote: '"Ser um educador negro significa usar o conhecimento histórico como ferramenta de reparação."',
    tags: ['Historiador PUC-RS', 'ERER Unipampa', 'Educação Popular', 'Descolonização'],
    iconName: 'GraduationCap'
  },
  {
    id: 'lanceiros',
    title: 'A Epopeia dos Lanceiros Negros',
    subtitle: 'O Resgate dos Guerreiros de Porongos',
    description: 'Compositor da aclamada obra "Lanceiros", premiada com a Melhor Letra no Festival Alegretense da Canção. A faixa resgata a memória dos soldados negros combatentes na Revolução Farroupilha traídos na Batalha de Porongos, unindo gaita gaúcha, guitarra punk e rima afiada.',
    quote: '"Traduzindo o rigor acadêmico para uma poética pulsante e visceral."',
    tags: ['Lanceiros Negros', 'Batalha de Porongos', 'Melhor Letra Alegrete', 'Gaita & Guitarra'],
    iconName: 'ShieldAlert'
  }
];

export const TRACKS: Track[] = [
  {
    id: 'lanceiros',
    title: 'Lanceiros',
    subtitle: 'Resgate Histórico & Canção Premiada',
    album: 'EP Sobrevivendo (2024)',
    year: '2024',
    duration: '04:18',
    award: 'Vencedor - Melhor Letra no Festival Alegretense da Canção',
    theme: 'Memória dos Lanceiros Negros e Batalha de Porongos',
    instruments: ['Gaita Gaúcha', 'Guitarra Elétrica', 'Voz / Rima', 'Baixo', 'Bateria Pesada'],
    spotifyUrl: 'https://open.spotify.com/intl-pt/album/0FQt3RJ1XyD3QqQE0X1ztw?si=hI6GzGVhQtyPsB1kBN6pJA',
    description: 'Fusão arrebatadora da gaita tradicionalista dos pampas com guitarras distorcidas e versos cortantes sobre a traição dos Lanceiros Negros na Batalha dos Porongos. Um documento sonoro vivo.',
    lyricsExcerpt: 'Guerreiros de ferro sob o céu do pampa / O sangue que correu não se apaga na estampa / Traídos na noite, heróis sem coroa / A lança que finca na terra ecoa!',
    fullLyrics: [
      'No solo sagrado da fronteira sul,',
      'Homens de coragem sob o manto azul.',
      'Lanceiros de glória, soldados da linha,',
      'Pagando com a vida a história mesquinha.',
      '',
      '[Refrão]',
      'Lanceiros Negros, ergam o clarim!',
      'Nossa memória não terá mais fim!',
      'Entre a gaita e a guitarra na revolta audaz,',
      'O sangue derramado nunca morre em paz!',
      '',
      'Porongos calou o que a história escondeu,',
      'Mas Mano Ordai no verso acendeu.',
      'A lança é a caneta, o verso é o escudo,',
      'Falando bem alto pro mundo que é surdo!'
    ]
  },
  {
    id: 'sobrevivendo',
    title: 'Sobrevivendo',
    subtitle: 'Faixa-Título & Manifesto de Resistência',
    album: 'EP Sobrevivendo (2024)',
    year: '2024',
    duration: '03:45',
    award: 'Faixa Conceitual do EP',
    theme: 'Resiliência, superação do cárcere e sobrevivência urbana',
    instruments: ['Bateria Acústica', 'Baixo Groovado', 'Guitarra Punk', 'Scratches'],
    spotifyUrl: 'https://open.spotify.com/intl-pt/album/0FQt3RJ1XyD3QqQE0X1ztw?si=hI6GzGVhQtyPsB1kBN6pJA',
    description: 'Estabelece o tom inegociável de resistência que permeia o disco. Uma reflexão profunda sobre sair do abismo do cárcere e transformar a dor em arte combativa.',
    lyricsExcerpt: 'Cinco anos de grade não calaram meu grito / No asfalto quente meu destino tá escrito / Sobrevivendo à sombra, renascendo na luz!',
    fullLyrics: [
      'Das celas frias ao microfone aceso,',
      'Não me dobrei, nunca fui indefeso.',
      'O sistema quis trancar minha mente e razão,',
      'Mas fiz da biblioteca a minha redenção.',
      '',
      '[Refrão]',
      'Sobrevivendo! Com orgulho e postura,',
      'No compasso do rap, na nossa cultura.',
      'Sobrevivendo! Pelo povo e pela cria,',
      'Transformando o lamento em pura poesia!'
    ]
  },
  {
    id: 'navios-tumbeiros',
    title: 'Navios Tumbeiros',
    subtitle: 'Diáspora, Ancestralidade & Memória',
    album: 'EP Sobrevivendo (2024)',
    year: '2024',
    duration: '04:02',
    theme: 'Diáspora Africana e travessia dos ancestrais',
    instruments: ['Atabaques / Percussão de Terreiro', 'Violão', 'Baixo', 'Spoken Word'],
    spotifyUrl: 'https://open.spotify.com/intl-pt/album/0FQt3RJ1XyD3QqQE0X1ztw?si=hI6GzGVhQtyPsB1kBN6pJA',
    description: 'Mergulho denso e comovente na travessia transatlântica, honrando a memória dos milhões que vieram forçados e plantaram as sementes da resistência brasileira.',
    lyricsExcerpt: 'O oceano guardou os soluços do cais / O tambor dos orixás que não calam jamais.',
    fullLyrics: [
      'Águas profundas que guardam segredos,',
      'Correntes quebradas em meio aos medos.',
      'Da mãe África a dor que atravessou o mar,',
      'No som do tambor nosso povo a cantar.'
    ]
  },
  {
    id: 'berco-do-samba',
    title: 'Berço do Samba',
    subtitle: 'Homenagem aos Rouxinóis & Dona Montserrat',
    album: 'EP Sobrevivendo (2024)',
    year: '2024',
    duration: '03:30',
    theme: 'Tradição do samba de terreiro e infância carnavalesca',
    instruments: ['Surdo', 'Tamborim', 'Repinique', 'Cavaquinho', 'Beats Boom Bap'],
    spotifyUrl: 'https://open.spotify.com/intl-pt/album/0FQt3RJ1XyD3QqQE0X1ztw?si=hI6GzGVhQtyPsB1kBN6pJA',
    description: 'Celebração comovente da escola mirim, da mãe Montserrat e dos mestres Clara Nunes e Bezerra da Silva. Onde o rap se curva ao samba de raiz.',
    lyricsExcerpt: 'Na verde e branco dos Rouxinóis eu aprendi a cadência / O samba no peito é a minha semente e vivência.',
    fullLyrics: [
      'Minha mãe no terreiro, a batida no couro,',
      'O sorriso da preta valendo mais que ouro.',
      'Cresci com o repique, com o surdo a marcar,',
      'O samba que ensina o preto a lutar.'
    ]
  },
  {
    id: 'ruralismo',
    title: 'Ruralismo',
    subtitle: 'Crítica Social & Denúncia Contundente',
    album: 'EP Sobrevivendo (2024)',
    year: '2024',
    duration: '03:52',
    theme: 'Denúncia ao trabalho análogo à escravidão nas lavouras do RS',
    instruments: ['Guitarras Pesadas', 'Bateria Reta', 'Baixo Distorcido'],
    spotifyUrl: 'https://open.spotify.com/intl-pt/album/0FQt3RJ1XyD3QqQE0X1ztw?si=hI6GzGVhQtyPsB1kBN6pJA',
    description: 'Denúncia corajosa e urgente sobre as condições análogas à escravidão que ainda persistem nos vinhedos e arrozais do interior gaúcho.',
    lyricsExcerpt: 'A colheita do fruto que amarga na mesa / O barão do agronegócio que esconde a vileza.',
    fullLyrics: [
      'Sob o sol escaldante, a colheita amarga,',
      'Nas terras do sul o trabalhador carrega a carga.',
      'Modernos feudos, antigas correntes,',
      'O rap denuncia pra abrir a mente da gente!'
    ]
  },
  {
    id: 'hip-hop-fronteira',
    title: 'Hip Hop na Fronteira',
    subtitle: 'Hino de Uruguaiana & Mostra Itaquiense',
    album: 'Single & Coletânea Circuito Orelhas',
    year: '2022',
    duration: '03:58',
    award: 'Destaque Mostra de Inovação Cultural & Circuito Orelhas',
    theme: 'Territorialidade fronteiriça com Argentina e força do rap do interior',
    instruments: ['Sintetizadores', 'Beats Marcantes', 'Samples de Bandoneón', 'Rimas Rápidas'],
    spotifyUrl: 'https://open.spotify.com/intl-pt/album/0FQt3RJ1XyD3QqQE0X1ztw?si=hI6GzGVhQtyPsB1kBN6pJA',
    description: 'Uma ode vibrante a Uruguaiana e à cultura urbana que dialoga com os vizinhos platinos, abrindo as portas para o rap da Fronteira Oeste no cenário estadual.',
    lyricsExcerpt: 'Do Rio Uruguai até as margens do asfalto / O rap fronteiriço ecoando bem alto!',
    fullLyrics: [
      'Uruguaiana na veia, ponte internacional,',
      'Mistura de sotaque, de língua e de ideal.',
      'O hip hop na fronteira é calor e revolução,',
      'Na batida pesada batendo o coração.'
    ]
  },
  {
    id: 'eterna-mae',
    title: 'Eterna Mãe',
    subtitle: 'Tributo às Mulheres Negras',
    album: 'Festival Alegretense da Canção',
    year: '2023',
    duration: '04:10',
    award: 'Selecionada no Festival Alegretense',
    theme: 'Ancestralidade feminina e afeto materno',
    instruments: ['Violão Acústico', 'Percussão Leve', 'Voz Emocionante'],
    spotifyUrl: 'https://open.spotify.com/intl-pt/album/0FQt3RJ1XyD3QqQE0X1ztw?si=hI6GzGVhQtyPsB1kBN6pJA',
    description: 'Tributo poético e reverente às matriarcas negras que sustentaram as famílias com amor, sacrifício e dignidade inabaláveis.',
    lyricsExcerpt: 'Mãe Montserrat, tuas mãos me abençoam na caminhada / A estrela mais brilhante da minha jornada.',
    fullLyrics: [
      'Nas rugas da tua face o mapa do caminho,',
      'Nunca deixaste teu filho sozinho.',
      'Eterna Mãe, tua luz é meu guia,',
      'Em cada vitória, em cada poesia.'
    ]
  }
];

export const VIDEOS: VideoItem[] = [
  {
    id: 'doc-hip-hop-escolas',
    title: 'Documentário: Hip Hop Nas Escolas (Obra Completa)',
    category: 'documentario',
    categoryLabel: 'Documentário Oficial',
    duration: 'YouTube Oficial',
    year: '2023-2024',
    youtubeId: 'X7qv7CQ8nOQ',
    description: 'Documentário fundamental que retrata o projeto criado por Mano Ordai em 2013, levando o Hip Hop, a consciência étnico-racial e a educação popular às escolas públicas e unidades socioeducativas (FASE).',
    featured: true
  },
  {
    id: 'clipe-lanceiros',
    title: 'Lanceiros - Mano Ordai (Videoclipe & Apresentação)',
    category: 'clipe',
    categoryLabel: 'Música & História',
    duration: '04:18',
    year: '2024',
    youtubeId: 'X7qv7CQ8nOQ',
    description: 'Canção vencedora de Melhor Letra no Festival Alegretense da Canção. A epopeia dos Lanceiros Negros de Porongos musicada com gaita gaúcha e guitarra punk.',
    featured: false
  },
  {
    id: 'pampa-crew-palcos',
    title: 'Ponto de Cultura Pampa Crew - Da Fronteira ao Mundo',
    category: 'aovivo',
    categoryLabel: 'Ponto de Cultura MinC',
    duration: '05:30',
    year: '2025',
    youtubeId: 'X7qv7CQ8nOQ',
    description: 'A trajetória do coletivo Pampa Crew, coordenado por Maria Luiza e Mano Ordai, certificado pelo MinC e expandindo as vozes periféricas para palcos nacionais e da Europa.',
    featured: false
  },
  {
    id: 'palestra-alegrete',
    title: 'Palestras Educativas em Alegrete & Fronteira Oeste',
    category: 'palestra',
    categoryLabel: 'Educação Popular',
    duration: '08:40',
    year: '2024',
    youtubeId: 'X7qv7CQ8nOQ',
    description: 'Intervenções práticas nas escolas Emílio Zuñeda, Dr. Lauro Dorneles e Salgado Filho, dialogando com adolescentes sobre o combate ao racismo estrutural.',
    featured: false
  }
];

export const PHOTOS: PhotoItem[] = [
  {
    id: 'p1',
    title: 'Museu do Hip Hop RS & Portfólio Profissional',
    category: 'museu',
    categoryLabel: 'Museu do Hip Hop',
    caption: 'Mano Ordai com braços cruzados diante do emblemático painel do Museu do Hip Hop RS em Porto Alegre.',
    year: '2024',
    location: 'Porto Alegre / RS',
    placeholderSvgType: 'portrait-stage'
  },
  {
    id: 'p2',
    title: 'Raízes & Atitude com o Skate na Fronteira',
    category: 'skate',
    categoryLabel: 'Afro-Punk & Skate',
    caption: 'Mano Ordai agachado segurando o shape personalizado de skate, colete jeans com patches do Suicidal Tendencies e Dead Kennedys.',
    year: '2023',
    location: 'Uruguaiana / RS',
    placeholderSvgType: 'skate-afropunk'
  },
  {
    id: 'p3',
    title: 'No Palco com o Microfone & Conexão com o Público',
    category: 'palco',
    categoryLabel: 'Ao Vivo nos Palcos',
    caption: 'Performance visceral ao vivo com camisa personalizada "MANO ORDAI", óculos escuros e microfone em punho.',
    year: '2024',
    location: 'Festival Regional de Música',
    placeholderSvgType: 'studio-mic'
  },
  {
    id: 'p4',
    title: 'Cartaz Oficial do Projeto Hip Hop nas Escolas',
    category: 'educacao',
    categoryLabel: 'Hip Hop nas Escolas',
    caption: 'Ilustração emblemática de Mano Ordai com microfone, cercado por jovens estudantes e logo Pampa Crew / Black Force.',
    year: '2024',
    location: 'Alegrete & Uruguaiana',
    placeholderSvgType: 'school-talk'
  },
  {
    id: 'p5',
    title: 'Estúdio de Gravação & Produção do EP Sobrevivendo',
    category: 'palco',
    categoryLabel: 'Produção Musical',
    caption: 'Sessão no estúdio de gravação com fones profissionais e captação vocal das faixas autorais.',
    year: '2024',
    location: 'Estúdio Fronteiriço',
    placeholderSvgType: 'studio-mic'
  },
  {
    id: 'p6',
    title: 'Formação na Unipampa & Articulação Territorial',
    category: 'educacao',
    categoryLabel: 'Unipampa & MinC',
    caption: 'Mano Ordai no campus da Universidade Federal do Pampa (Unipampa), certificando educadores e articulando políticas culturais.',
    year: '2024-2026',
    location: 'Unipampa Campus Uruguaiana',
    placeholderSvgType: 'portrait-stage'
  }
];

export const CREDENTIALS: CredentialItem[] = [
  {
    id: 'grad-historia',
    title: 'Licenciatura Plena em História',
    institution: 'Pontifícia Universidade Católica do Rio Grande do Sul (PUC-RS)',
    year: '2005',
    type: 'Graduação',
    documentTitle: 'Diploma de Licenciado em História - Registro 2056929603-SJS-RS',
    description: 'Formação acadêmica sólida para a desconstrução das narrativas oficiais eurocêntricas e pesquisa profunda sobre a história do negro no Rio Grande do Sul.',
    badge: 'Graduação Universitária'
  },
  {
    id: 'atc-minc',
    title: 'Agente Territorial de Cultura (ATC)',
    institution: 'Ministério da Cultura (MinC) / IF Sul-rio-grandense',
    year: '2024 - 2026',
    type: 'Certificação MinC',
    hours: '160 Horas',
    documentTitle: 'Certificado Nacional de Formação em Políticas Culturais (FIC15/23072024)',
    description: 'Capacitação técnica e política para articulação nas esferas municipal, estadual e federal, formalização de Pontos de Cultura e fomento à cultura periférica.',
    badge: 'Programa Nacional de Comitês de Cultura'
  },
  {
    id: 'erer-unipampa',
    title: 'Educação para as Relações Étnico-Raciais (ERER)',
    institution: 'Universidade Federal do Pampa (Unipampa) - Pró-Reitoria de Extensão',
    year: '2024',
    type: 'Extensão',
    hours: '40 Horas',
    documentTitle: 'Equipe Executora - Formação Docente na Educação Básica (2023.EX.IT.2703)',
    description: 'Atuação na equipe executora e capacitação de professores em mais de 8 municípios da Fronteira e Pampa (Uruguaiana, São Borja, Itaqui, Alegrete, Bagé, Dom Pedrito, etc).',
    badge: 'Extensão Universitária Federal'
  },
  {
    id: 'ponto-de-cultura',
    title: 'Certificação Ponto de Cultura - Pampa Crew',
    institution: 'Ministério da Cultura do Brasil (MinC)',
    year: '2026',
    type: 'Certificação MinC',
    documentTitle: 'Reconhecimento Oficial como Ponto de Cultura da Cultura Urbana',
    description: 'Validação federal de décadas de trabalho coletivo, organização comunitária e resistência artística no interior do Rio Grande do Sul.',
    badge: 'Ponto de Cultura Reconhecido'
  },
  {
    id: 'ciencias-natureza',
    title: 'Graduação em Ciências da Natureza (Em Andamento)',
    institution: 'Universidade Federal do Pampa (Unipampa)',
    year: '2026 - Presente',
    type: 'Graduação',
    documentTitle: 'Matrícula Universitária Unipampa',
    description: 'Expansão transdisciplinar unindo leitura social, compromisso racial e rigor científico na construção do conhecimento libertador.',
    badge: 'Ensino Superior Público'
  },
  {
    id: 'ciclos-transformativos',
    title: 'Residência Cultural "Ciclos Transformativos"',
    institution: 'Associação da Cultura Hip Hop de Esteio (ACHE)',
    year: '2023',
    type: 'Residência Cultural',
    hours: '40 Horas',
    documentTitle: 'Certificado de Residente Cultural Formativo',
    description: 'Imersão nos elementos da cultura hip hop, economia criativa e articulação em rede no Rio Grande do Sul.',
    badge: 'Associação Cultura Hip Hop'
  }
];

export const TIMELINE_EVENTS = [
  {
    year: '1973',
    title: 'Nascimento em Uruguaiana - RS',
    desc: 'Nasce na Fronteira Oeste com a Argentina, imerso no carnaval de rua e na percussão mirim de Os Rouxinóis com sua mãe Montserrat.'
  },
  {
    year: '1980s',
    title: 'Pioneirismo no Skate & Som Subterrâneo',
    desc: 'Pioneiro do skate na fronteira e adesão à energia contestadora do punk rock, hardcore, afropunk e rap seminal.'
  },
  {
    year: '2005',
    title: 'Graduação em História na PUC-RS',
    desc: 'Diploma-se historiador, construindo o alicerce teórico para resgatar a memória negra e descolonizar o currículo.'
  },
  {
    year: '2010 - 2013',
    title: 'Injustiça do Cárcere & Resiliência',
    desc: 'Vítima de prisão injusta decorrente de perseguição e racismo estrutural. No cárcere, transforma o sofrimento em estudo e resistência.'
  },
  {
    year: '2013',
    title: 'Criação do Projeto "Hip Hop nas Escolas"',
    desc: 'Regime semiaberto e fundação do projeto que levará oficinas, palestras e esperança para escolas públicas e jovens da FASE.'
  },
  {
    year: '2023',
    title: 'Melhor Letra no Festival Alegretense ("Lanceiros")',
    desc: 'Consagração poética com a faixa Lanceiros, homenageando os combatentes negros farroupilhas.'
  },
  {
    year: '2024',
    title: 'Lançamento do EP "Sobrevivendo" & Formador ERER',
    desc: 'Lançamento de 5 faixas autorais e atuação como formador de professores pela Unipampa.'
  },
  {
    year: '2026',
    title: 'Ponto de Cultura MinC & Turnê Internacional',
    desc: 'Certificação do Pampa Crew pelo Ministério da Cultura e preparativos para levar a arte da fronteira aos palcos da Europa.'
  }
];


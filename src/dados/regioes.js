/* Cidades do Sul */
const cidadesRS = ["Rio Grande do Sul", {
    nome: "Porto Alegre",
    descricao: "Com uma arquitetura e um clima sem iguais, a cidade proporciona sensações fantásticas seja na culinária gaúcha, na diversão ou na cultura.",
    endereco_img: "https://pactoalegre.poa.br/sites/default/files/2019-03/IMG_03977.jpg"
}, {
        nome: "Gramado",
        descricao: "É uma cidade que faz todos os nossos sentidos despertarem: belas paisagens e arquitetura, o cheiro do chocolate no ar, lojas de artesanatos espalhadas pela cidade, é tudo muito convidativo.",
        endereco_img: "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/02/passagens-aereas-gramado-capa2019-04.jpg"
    }, {
        nome: "Canela",
        descricao: "Além de abrigar a mais alta cascata do Rio Grande do Sul, dentro do Parque do Caracol, a vizinha de Gramado é cercada de flores em jardins bucólicos, matas nativas, morros e vales.",
        endereco_img: "https://quantocustaviajar.com/blog/wp-content/uploads/2017/04/cidades-legais-no-rio-grande-do-sul-canela-768x515.jpg"
    }];

const cidadesPR = ["Paraná", {
    nome: "Curitiba",
    descricao: "Curitiba é uma das capitais mais bem organizadas do Brasil. Seus principais pontos turísticos são os inúmeros parques urbanos espalhados pela cidade.",
    endereco_img: "https://www.viagensecaminhos.com/wp-content/uploads/2018/11/jardim-botanico-curitiba.jpg"
}, {
        nome: "Ilha do Mel",
        descricao: "A Ilha do Mel atrai muitos turistas pela beleza de suas praias, pelas trilhas em meio à natureza e por seu clima rústico. Por lá só se anda a pé ou de barco, os carros ficam em estacionamentos no continente.",
        endereco_img: "https://www.viagensecaminhos.com/wp-content/uploads/2017/08/o-que-fazer-na-ilha-do-mel.jpg"
    }, {
        nome: "Foz do Iguaçu",
        descricao: "Entre as cidades do Paraná, Foz do Iguaçu é a mais famosas de todas. A grande atração é o parque nacional das Cataratas do Iguaçu, na divisa com a Argentina.",
        endereco_img: "https://www.viagensecaminhos.com/wp-content/uploads/2010/08/foz-do-iguacu-cataratas-do-iguacu.jpg"
    }];

const cidadesSC = ["Santa Catarina", {
        nome: "Nova Veneza",
        descricao: " Graças aos imigrantes, tradições e costumes italianos estão presentes até hoje, juntamente com a Festa da Gastronomia.",
        endereco_img: "https://quantocustaviajar.com/blog/wp-content/uploads/2019/07/nova-veneza-gondola.jpg"
    }, {
        nome: "Blumenau",
        descricao: "Em Blumenau é celebrada a segunda maior festa cervejeira do mundo, a Oktoberfest, que dura 17 dias, com roupas, comidas e bebidas típicas da Alemanha.",
        endereco_img: "https://quantocustaviajar.com/blog/wp-content/uploads/2022/03/640px-Blumenau_Brazil.jpg"
    }, {
        nome: "Cocal do Sul",
        descricao: "O castelo foi erguido no interior do estado, inspirado em uma versão Escocesa, e conta com uma coleção de objetos vindos do Reino Unido, despertando a curiosidade do público.",
        endereco_img: "https://quantocustaviajar.com/blog/wp-content/uploads/2022/03/castelo-britanico-persevere.jpg"
    }];

const sul = ["Sul", cidadesRS, cidadesPR, cidadesSC];
/* Cidades do Sudeste */
const cidadesSP = ["São Paulo", {
        nome: "Botucatu",
        descricao: "É pelos bons ares e a bela natureza que Botucatu atrai os turistas, principalmente os mais radicais. A região oferece várias opções como cachoeiras, trilhas e o turismo rural. Em meio a montanhas o visitante pode curtir escalada, canyoning e trekking.",
        endereco_img: "https://www.melhoresdestinos.com.br/wp-content/uploads/2021/07/interior-sao-paulo-botucatu-820x562.jpg"
    }, {
        nome: "Campos do Jordão",
        descricao: "Campos do Jordão tem um estilo europeu repleto de restaurantes e atividades para pessoas de todas as idades.",
        endereco_img: "https://www.melhoresdestinos.com.br/wp-content/uploads/2021/06/campos-jordao-capa-2-820x430.jpeg"
    }, {
        nome: "São Paulo",
        descricao: "É o mais importante centro econômico do Brasil, é a capital da cultura na América Latina, com uma oferta de lazer, conhecimento e entretenimento sem igual.",
        endereco_img: "https://www.zapimoveis.com.br/blog/wp-content/uploads/2022/09/o-que-fazer-em-sao-paulo-a-noite-topo.jpg"
    }];

const cidadesRJ = ["Rio de Janeiro", {
    nome: "Rio de Janeiro",
    descricao: "O Rio de Janeiro tem uma geografia incrível, lá você encontra serras, baías, ilhas, lagoas, rios e mar. Além disso, a sua vegetação é tropical",
    endereco_img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Cidade_Maravilhosa.jpg/1200px-Cidade_Maravilhosa.jpg"
}, {
        nome: "Arraial do Cabo",
        descricao: "É um dos mais espetaculares destinos do Brasil. Com acesso fácil, preços baixos, dias ensolarados e praias deslumbrantes, Arraial é uma excelente pedida para quem deseja curtir um bom descanso.",
        endereco_img: "https://www.melhoresdestinos.com.br/wp-content/uploads/2020/09/arraial-do-cabo-capa2019.jpg"
    }, {
        nome: "Teresópolis",
        descricao: "É uma boa dica para quem quer relaxar ou fazer atividades físicas, como os trekkings do Parque Nacional da Serra dos Órgãos.",
        endereco_img: "https://www.melhoresdestinos.com.br/wp-content/uploads/2020/08/teresopolis-Jorge-Antonio-de-Oliveira-Vicente-820x615.jpg"
    }];

const cidadesMG = ["Minas Gerais", {
    nome: "Belo Horizonte",
    descricao: "Fácil de ser explorada, com diversas atrações gratuitas e roteiros culturais e gastronômicos maravilhosos, BH cabe bem em um feriado prolongado e aquelas viagens de última hora.",
    endereco_img: "https://soubh.uai.com.br/uploads/post/image/13270/main_EAFO.jpg"
}, {
        nome: "Capitólio",
        descricao: "Com dezenas de cachoeiras e banhada pelo incrível Lago de Furnas, Capitólio desponta como um dos melhores lugares para viajar em Minas Gerais, especialmente para os amantes de natureza.",
        endereco_img: "https://www.melhoresdestinos.com.br/wp-content/uploads/2020/06/capitolio-melhor-epoca-2-820x547.jpg"
    }, {
        nome: "Congonhas",
        descricao: "Um paraíso para os amantes da arte, que podem conferir no local peças de incalculável valor. Quem visita Congonhas tem a chance de ver bem de perto a obra “Os Doze Profetas”, com esculturas esculpida em tamanho real e que adornam o adro do Santuário do Bom Jesus dos Matosinhos.",
        endereco_img: "https://www.melhoresdestinos.com.br/wp-content/uploads/2021/03/minas-gerais-congonhas-820x547.jpg"
    }];

const sudeste = ["Sudeste", cidadesSP, cidadesRJ, cidadesMG];
/* Cidades do Centro-Oeste */
const cidadesMT = ["Mato Grosso", {
    nome: "Cuiabá",
    descricao: "Cuiabá é a capital do Mato Grosso e é um ótimo local para iniciar a viagem por esse estado. Além de ser próxima a outros locais turísticos, ela tem ambientes únicos que certamente merecem uma visita.",
    endereco_img: "https://vinhedoscuiaba.com.br/blog/wp-content/uploads/2021/06/DJI_0007-HDR.jpg"
}, {
        nome: "Nobres",
        descricao: "Esse município atrai principalmente as pessoas que gostam de realizar atividades aquáticas, como mergulho, passeios com boias e nado em cachoeiras. Lá, você pode mergulhar em meio à beleza natural do Rio Salobra e do Rio Triste, e se divertir muito fazendo flutuações em rios com águas bem transparentes devido ao seu fundo de calcário.",
        endereco_img: "https://www.viagensecaminhos.com/wp-content/uploads/2022/07/nobres-refugio-agua-azul.jpg"
    }, {
        nome: "Chapada dos Guimarães",
        descricao: "Essa cidade é a escolha certa para os que gostam de aventuras e de contato próximo com a natureza. São tantas cachoeiras, florestas, rios, paredões e grutas que os turistas gostam de reservar alguns dias de viagem para se dedicar apenas à exploração do interior da Chapada.",
        endereco_img: "https://www.mapadomato.info/content/images/2022/12/caverna-aroe-jari-flavio-1.webp"
    }];

const cidadesGO = ["Goiás", {
    nome: "Caldas Novas",
    descricao: "Mundialmente conhecida por ser a maior estância hidrotermal do mundo. Agua é o que não falta nessa viagem",
    endereco_img: "https://cdn.temporadalivre.com/blog-media/posts/cover/9794/size_800_6-motivos-para-visitar-caldas-novas-go-2-dae8f1c8.jpg"
}, {
        nome: "Goiânia",
        descricao: "É uma cidade planejada e a capital brasileira com maior número de área verde por habitante. Sendo assim, nada mais justo que elaborar um roteiro pensando nos belos parques espalhados pela região.",
        endereco_img: "https://static.preparaenem.com/2021/08/goiania-goias.jpg"
    }, {
        nome: "Anápolis",
        descricao: "É caracterizada como município industrial, porque além das 657 indústrias distribuídas em seu território, abriga o maior pólo industrial do estado de Goiás, o Distrito Agroindustrial de Anápolis - DAIA",
        endereco_img: "https://elquarto.com/blog/wp-content/uploads/2021/11/Anapolis-Goias.jpg"
    }];

const cidadesMS = ["Mato Grosso do Sul", {
    nome: "Campo Grande",
    descricao: "Seu principal ponto turístico é o Parque das Nações Indígenas, repleto de atrações, com uma grande área verde em meio à cidade.",
    endereco_img: "https://www.viagensecaminhos.com/wp-content/uploads/2021/05/parque-das-nacoes-indigenas-campo-grande.jpg"
}, {
        nome: "Bonito",
        descricao: "Entre as cidades do Mato Grosso do Sul, Bonito é o principal destaque turístico. A cidade respira o ecoturismo e conta com mais de 80 passeios diferentes distribuídos em dezenas de lugares na zona rural da cidade.",
        endereco_img: "https://www.essemundoenosso.com.br/wp-content/uploads/2022/09/gruta-do-lago-azul-01.jpg"
    }, {
        nome: "Miranda",
        descricao: "Fica no início da área do parque e o município tem boa parte de sua área inserida nele. No município há várias fazendas turísticas situadas dentro do parque, abertas para visitação, como a Fazenda São Francisco e a Fazenda Caiaman.",
        endereco_img: "https://www.acquaviagens.com.br/upload/blog/2022/2/1353/small/miranda-ms-min.jpg"
    }];

const centroOeste = ["Centro-Oeste", cidadesMT, cidadesGO, cidadesMS];
/* Cidades do Nordeste */
const cidadesBH = ["Bahia", {
    nome: "Salvador",
    descricao: "A capital reúne um pouco de tudo que chama atenção nas cidades turísticas da Bahia: conta com paisagens de tirar o fôlego, seu Centro Histórico é um dos mais bonitos do país, a população é sempre muito hospitaleira, existem opções de restaurantes com comida típica para todos os bolsos, além de várias atrações que só podem ser encontradas em cidades grandes como essa.",
    endereco_img: "https://blog.uber-cdn.com/cdn-cgi/image/width=2160,quality=80,onerror=redirect,format=auto/wp-content/uploads/2019/01/Encante-se-com-alguns-dos-lugares-mais-bonitos-em-Salvador.png"
}, {
        nome: "Porto Seguro",
        descricao: "A Chapada Diamantina é um dos principais destinos brasileiros para quem curte o ecoturismo. É impossível ficar indiferente diante das cachoeiras enormes, de cores e formatos diversos, grutas de água cristalina, trilhas, paredões rochosos perfeitos para escaladas e diversos mirantes naturais que nos entregam a imensidão das paisagens.",
        endereco_img: "https://www.melhoresdestinos.com.br/wp-content/uploads/2020/10/feriados-prolongados-chapada-diamantina-820x547.jpg"
    }, {
        nome: "Ilhéus",
        descricao: "As praias do norte são perfeitas para quem deseja um lugar mais calmo e deserto. Dentre as principais praias se destacam: Praia dos Milionários, Praia de Cururupe, Praia Backdoor e Praia do Cristo.",
        endereco_img: "https://www.segueviagem.com.br/wp-content/uploads/2021/12/Ilheus-shutterstock_1092999464.jpg"
    }];

const cidadesPB = ["Paraiba", {
    nome: "João Pessoa",
    descricao: "Se você for do tipo mais sossegado, as praias de João Pessoa oferecem passeios incríveis. Se você curtir uma agitação, irá aproveitar bastante a vida noturna da cidade.",
    endereco_img: "https://www.pbtur.pb.gov.br/wp-content/uploads/2021/10/DJI_0022.jpg"
}, {
        nome: "Campina Grande",
        descricao: "Ao visitá-lo não deixe de ver de perto as estátuas de Luiz Gonzaga e Jackson do Pandeiro, há também a “Os Pioneiros da Borborema”, um monumento muito importante para a história da cidade.",
        endereco_img: "https://portal.ufcg.edu.br/images/2020.2/campina.jpg"
    }, {
        nome: "Cajazeiras",
        descricao: "A pequena Cajazeiras se localiza bem ao oeste do estado. Ainda que não seja uma das cidades turísticas para conhecer na Paraíba com mais atrações turísticas, ela oferece passeios bem legais para quem vier visitá-la.",
        endereco_img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Catedral_de_Nossa_Senhora_da_Piedade%2C_Cajazeiras_-_Para%C3%ADba.jpg"
    }];

const cidadesPI = ["Piauí", {
    nome: "Parnaíba",
    descricao: "Além do Delta do Parnaíba, você também encontra a linda Praia Pedra do Sal, ótima porque atende a dois tipos de gostos: os que buscam apenas paz na praia e os esportistas que buscam ondas mais fortes. Isso porque tem uma pedra que separa a praia em dois lados.",
    endereco_img: "https://www.dicasdeviagem.com/wp-content/uploads/2022/08/praia-pedra-do-sal-1024x588.jpg"
}, {
        nome: "Luís Correia",
        descricao: "A mais badalada é a Praia do Atalaia; isso porque fica em um lugar mais central, possui melhor infraestrutura para receber turistas e também porque é uma graça. A praia Coqueiro é conhecida pela prática do kitesurf, sendo que nela acontecem diversos campeonatos nacionais e mundiais.",
        endereco_img: "https://www.dicasdeviagem.com/wp-content/uploads/2022/08/praia-do-atalaia.jpg"
    }, {
        nome: "Pedro II",
        descricao: "Para quem curte história e cultura, pode conhecer o Museu da Roça, que tem em seu acervo objetos antigos que contam a história dos antepassados da região, espécies botânicas e uma vista linda da Serra dos Matões.",
        endereco_img: "https://s2-g1.glbimg.com/TCbHvnh8x3kuD3bowpdA4nPUwSo=/0x0:984x495/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/9/A/zcIHjNRiqAh1UcEK0jTA/p2.jpg"
    }];

const nordeste = ["Nordeste", cidadesBH, cidadesPB, cidadesPI];
/* Cidades do Norte */
const cidadesAM = ["Amazonas", {
    nome: "Manaus",
    descricao: "Durante a viagem até Manaus é legal dividir os passeios entre os feitos na natureza e também dedicar um tempo para conhecer mais da capital, que conta com inúmeras atrações turísticas.",
    endereco_img: "https://www.cidadeecultura.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2019/08/Manaus-Marcio-Masulino-2562.jpg.webp"
}, {
        nome: "Manacapuru",
        descricao: "O local chama atenção pelas suas praias de água doce, seus lagos e belos igarapés, além disso, conta com várias opções de hotéis na selva, uma forma de hospedagem que foge do comum.",
        endereco_img: "https://static.coalize.com.br/data/images/manacapuru-am.jpg"
    }, {
        nome: "Itacoatiara",
        descricao: "O turismo aqui, assim como em muitas das cidades para visitar no Amazonas, é focado na Natureza, porém, Itacoatiara também conta com o maior festival de música da região Norte do Brasil, o Festival da Canção de Itacoatiara, o que atrai milhares de visitantes. ",
        endereco_img: "https://imaginanaviagem.com/wp-content/uploads/2021/12/praia-de-itacoatiara-4.jpg"
    }];

const cidadesPA = ["Pará", {
    nome: "Belém",
    descricao: "Conhecida por abrigar a festa do Círio de Nazaré, uma das maiores manifestações religiosas do mundo, Belém também oferece sabores únicos, belezas amazônicas e muita história, dentro e fora de museus.",
    endereco_img: "https://www.topensandoemviajar.com/wp-content/uploads/2018/02/onde-ficar-em-belem-feat.jpg"
}, {
        nome: "Santarém",
        descricao: "Para conhecer Santarém, comece o passeio pela orla à beira-rio, onde será possível acompanhar o movimento dos barcos, experimentar alguns petiscos (dê preferência aos maravilhosos peixes da região) e ver o espetáculo do encontro das águas do Rio Amazonas com o Rio Tapajós.",
        endereco_img: "https://www.wilsonsons.com.br/wp-content/uploads/2022/07/porto-de-santarem-1024x589.jpeg"
    }, {
        nome: "Alter do Chão",
        descricao: "Conhecido como o “Caribe Amazônico”, Alter do Chão é um destino que estava em minha lista de desejos fazia tempo e recentemente tive o prazer de conhecer este fantástico destino paraense.",
        endereco_img: "https://santarem.pa.gov.br/storage/posts/September2021/capa-hnLpB9.jpg"
    }];

const cidadesTO = ["Tocantins", {
    nome: "Palmas",
    descricao: "Tem atrações culturais muito interessantes, é o caso do Memorial Coluna Prestes, um museu dedicado à memória do líder comunista Luiz Carlos Prestes. Além de falar muito sobre essa figura histórica tão importante, este lugar conta bastante sobre um momento muito importante da história do Brasil.",
    endereco_img: "https://central.to.gov.br/image/136387?w=883&h=505"
}, {
        nome: "Araguaína",
        descricao: "O Parque Cimba, um dos pontos de encontro mais conhecido da cidade. Este lugar é bem agradável e conta com muito verde. Aqui você pode fazer atividades como ciclismo, caminhada e outras atividades físicas, tudo isso contemplando uma paisagem muito bonita.",
        endereco_img: "https://s2-g1.glbimg.com/cwcqf7MirFCscthbDfZf9AGRixU=/0x0:1280x720/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/u/l/HkHsB6TX2ykH9B7cMAJA/whatsapp-image-2021-12-02-at-15.41.18.jpeg"
    }, {
        nome: "Gurupi",
        descricao: "Este município é muito voltado para as práticas da pecuária e agricultura, o que faz o turismo de negócios do lugar ser muito forte na região. Acostumada a receber visitantes, Gurupi tem uma estrutura muito boa, com vários hotéis e estabelecimentos comerciais.",
        endereco_img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Gurupi_1.jpg/388px-Gurupi_1.jpg"
    }];
const norte = ["Norte", cidadesAM, cidadesPA, cidadesTO];

const regioes = [sul, sudeste, centroOeste, nordeste, norte];

console.log(regioes[0[0]])
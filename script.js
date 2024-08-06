const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está participando de um curso de IA e recebe um projeto que envolve o uso de aprendizado de máquina para análise de dados. Qual é o seu primeiro passo?",
        alternativas: [
            {
                texto: "Estudar os conceitos básicos de aprendizado de máquina e os algoritmos mais comuns para entender como aplicar ao seu projeto.",
                afirmacao: "Optou por começar com uma base sólida, estudando os conceitos fundamentais para aplicar corretamente as técnicas de aprendizado de máquina."
            },
            {
                texto: "Começar a programar diretamente, utilizando bibliotecas e frameworks de IA para implementar o modelo o mais rápido possível.",
                afirmacao: "Prefere aprender na prática e ir ajustando o modelo conforme necessário, com base na experimentação direta."
            }
        ]
    },
    {
        enunciado: "Você está desenvolvendo um chatbot para um projeto escolar. Qual aspecto do design do chatbot você considera mais importante?",
        alternativas: [
            {
                texto: "Focar na criação de respostas precisas e informativas, garantindo que o chatbot possa responder a uma ampla gama de perguntas.",
                afirmacao: "Prioriza a precisão e a abrangência das respostas do chatbot para garantir que ele seja útil e eficaz."
            },
            {
                texto: "Concentrar-se em tornar a interação mais natural e amigável, para que os usuários tenham uma experiência mais agradável.",
                afirmacao: "Valoriza a experiência do usuário e a fluidez das conversas para tornar o chatbot mais acessível e envolvente."
            }
        ]
    },
    {
        enunciado: "Você descobre uma nova ferramenta de IA que promete otimizar tarefas repetitivas no seu trabalho escolar. Como você decide usá-la?",
        alternativas: [
            {
                texto: "Integra a ferramenta ao seu fluxo de trabalho para automatizar tarefas e ganhar mais tempo para se concentrar em outras atividades importantes.",
                afirmacao: "Aproveita a automação para melhorar a eficiência e liberar tempo para tarefas mais complexas."
            },
            {
                texto: "Decide usar a ferramenta apenas ocasionalmente para tarefas específicas, garantindo que você continue desenvolvendo suas próprias habilidades e não dependa totalmente da tecnologia.",
                afirmacao: "Mantém um equilíbrio entre a utilização de ferramentas de IA e o desenvolvimento pessoal de habilidades práticas."
            }
        ]
    },
    {
        enunciado: "Durante uma aula sobre IA, você discute o impacto da IA na privacidade pessoal. Qual ponto você considera mais relevante para a discussão?",
        alternativas: [
            {
                texto: "A necessidade de regulamentações mais rigorosas para garantir que os dados pessoais sejam protegidos e utilizados de forma ética.",
                afirmacao: "Enfatiza a importância de políticas e regulamentações para proteger a privacidade e garantir o uso ético dos dados."
            },
            {
                texto: "A importância de educar os usuários sobre como gerenciar suas configurações de privacidade e compreender como seus dados são coletados e utilizados.",
                afirmacao: "Valoriza a educação e a conscientização dos usuários para que eles possam tomar decisões informadas sobre sua privacidade."
            }
        ]
    },
    {
        enunciado: "Você tem a oportunidade de participar de uma hackathon que utiliza IA para resolver problemas ambientais. Qual projeto você escolheria desenvolver?",
        alternativas: [
            {
                texto: "Desenvolver um sistema de monitoramento de qualidade do ar usando sensores e IA para detectar e prever níveis de poluição.",
                afirmacao: "Foca em um projeto que usa IA para monitorar e prever a qualidade do ar, contribuindo para a proteção ambiental."
            },
            {
                texto: "Criar uma aplicação que usa IA para otimizar o uso de recursos hídricos em áreas agrícolas, ajudando a conservar água e melhorar a eficiência.",
                afirmacao: "Escolhe um projeto que utiliza IA para melhorar a gestão de recursos hídricos, promovendo a sustentabilidade na agricultura."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
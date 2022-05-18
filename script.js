var questoes = [
    {
        questao: 'O mosquito <em>Aedes aegypti</em> só pica de dia?',
        resposta: 'MITO',
        texto: `O Aedes aegypti tem hábitos diurnos. No interior da residência, ele pode ser encontrado,
                preferencialmente, em locais sombreados e escuros, como atrás da geladeira, atrás das cortinas,
                atrás do guarda-roupa. O Aedes pode se alimentar de sangue humano durante o dia inteiro.
                Por isso, o morador deve arejar a casa, abrir as janelas, ventilar o ambiente, pois o inseto tem fotofobia
                - aversão à luz. Assim, recomenda-se manter a casa diariamente arejada e clareada. Mas, atenção: se existir
                algum espécime do vetor dentro de casa, cujo morador passe o dia inteiro fora e inexistir fonte de alimentação,
                pode ocorrer de o Aedes aegypti picar no período da noite. Ele é um mosquito inteiramente adaptado e adaptável
                ao meio urbano. Comumente, ele pica durante o dia, mas dependendo da necessidade e do ambiente, ele pode picar
                à noite também.`
    },
    {
        questao: 'O mosquito <em>Aedes aegypti</em> se reproduz apenas em água limpa?',
        resposta: 'MITO',
        texto: `Isso é um mito! Nos últimos 20 anos, vem ocorrendo um processo de adaptação biológica no vetor.
        Hoje, com os altos índices de infestação, a probabilidade da adaptação é alta. Atualmente, já encontramos Aedes em fossas,
        cisternas, bocas de lobo, ou seja, depósitos que antes não eram explorados pelo mosquito vêm sendo utilizados para a postura dos ovos.
        É possível encontrar o Aedes aegypti na água suja sim.`
    },
    {
        questao: 'O mosquito <em>Aedes aegypti</em> pode transmitir o vírus HIV?',
        resposta: 'MITO',
        texto: `Não. Até o presente momento, o Aedes aegypti transmite, comprovadamente, os vírus causadores de dengue,
        febre amarela urbana, zika e chikungunya. Para que o mosquito se infecte e transmita qualquer vírus,
        deve haver uma interação específica e o vírus precisa vencer algumas barreiras biológicas como o pH intestinal,
        que, no mosquito, é básico e inviabiliza a sobrevivência e a replicação do vírus. Além disso, 
        o HIV está presente em baixa concentração no sangue, e o sangue sugado pelo mosquito é em uma quantidade muito pequena.`
    },
    {
        questao: 'Os vírus da dengue, zika e chikungunya podem ser transmitidos entre os mosquitos na cópula?',
        resposta: 'VERDADE',
        texto: `Já é comprovada, em ensaios laboratoriais, a transmissão sexual de dengue, zika e chikungunya.
        Da mesma maneira que a transmissão vertical, a transmissão sexual apresenta uma baixa taxa de transmissão (em torno de 10%),
        e também não pode ser considerada uma fonte principal de infecção de mosquitos. `
    },
    {
        questao: 'A fêmea do <em>Aedes aegypti</em>, copulando apenas uma vez, pode continuar fazendo postura de ovos o resto de sua vida?',
        resposta: 'VERDADE',
        texto: `Após a cópula, as fêmeas armazenam os espermatozoides em uma estrutura denominada espermateca,
        onde os espermatozoides ficam viáveis e são usados para a fecundação dos ovócitos até o final da vida da fêmea do mosquito.`
    },
    {
        questao: 'Os mosquitos vivem em média dois dias.',
        resposta: 'MITO',
        texto: `Os mosquitos adultos vivem em média 30 dias, dependendo das condições ambientais e fontes de alimentação.`
    },
    {
        questao: 'As fêmeas de <em>Aedes aegypti</em>, por serem vetores, não são afetadas com a presença do vírus.  ',
        resposta: 'MITO',
        texto: `As fêmeas, quando estão infectadas, sofrem alterações em sua biologia e no comportamento,
        como redução em seu tempo de vida, redução do número de ovos viáveis em suas posturas e aumento de voracidade na alimentação sanguínea.`
    }
]


// Gerando as questoes
questoes.forEach(function callback(q, i) {
    console.log(i + ':' + q.questao)
    $('main').append(
        `
        <div id="questao-` + (i+1) + `" class="questao container my-5 text-center" data-valor="` + (i+1) + `">
            <div class="titulo d-flex justify-content-center align-items-center">
                <span>` + q.questao + `</span>
            </div>
            <div class="row py-5">
                <div class="col">
                    <button class="btn opcao" data-valor="MITO">
                        <span class="d-flex h-100 justify-content-center align-items-center">
                            MITO
                        </span>
                    </button>
                </div>
                <div class="col">
                    <button class="btn opcao" data-valor="VERDADE">
                        <span class="d-flex h-100 justify-content-center align-items-center">
                            VERDADE
                        </span>
                    </button>
                </div>
            </div>
        </div>
        <div id="resultado-questao-` + (i+1) + `" class="resultado container my-5 py-5 px-4 d-none flex-column" id="p3">
            <div class="div mb-auto">
                <h2 class="text-center">
                    <strong>
                        `+ q.resposta +`
                    </strong>
                </h2>
                <p class="py-4">
                    ` + q.texto + `
                </p>
            </div>
            <div class="d-flex">
                <button class="botao-voltar btn me-auto" data-valor="` + (i+1) +  `">
                    Voltar
                </button>
                <button class="botao-proxima btn" data-valor="` + (i+2) + `">
                    Próxima pergunta
                </button>
            </div>
        </div>
        `
    )
});

$('.questao').hide();

// Botoes de Voltar e Proxima Pergunta
$('.botao-voltar, .botao-proxima').click(function () {
    var index = $(this).data('valor');
    console.log(index);
    console.log($('#questao-' + index));
    $('#questao-' + index).show();
    $('#questao-' + index).addClass('ativo');
    $('.resultado').removeClass('d-flex');
    $('.resultado').addClass('d-none');
})

// Botoes de opcoes
$('.opcao').click(function () {
    console.log($(this).data('valor'));
    var index = $('.ativo').data('valor');
    $('.ativo').hide();
    $('.ativo').removeClass('ativo');
    $('#resultado-questao-' + index).removeClass('d-none');
    $('#resultado-questao-' + index).addClass('d-flex');
})

// Botao de iniciar
$('#iniciar .btn').click(function () {
    $('#iniciar').removeClass('d-flex');
    $('#iniciar').hide();
    $('#questao-1').show();
    $('#questao-1').addClass('ativo');
})
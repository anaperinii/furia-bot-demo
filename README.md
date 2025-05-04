# FURIA Nation Chat - Telegram Bot

![JavaScript](https://img.shields.io/badge/JavaScript-b54000?style=for-the-badge&logo=javascript&logoColor=FFFFFF)
![Telegram](https://img.shields.io/badge/Telegram-d96d32?style=for-the-badge&logo=telegram&logoColor=FFFFFF)

Este é o código-fonte do Telegram Bot FURIA Nation Chat, uma ferramenta dedicada a manter os fãs do time de CS:GO da FURIA Esports atualizados com informações em tempo real e estatísticas.

## ⚙️ Funcionalidades

* **/start:** Exibe a mensagem de boas-vindas e a lista de comandos disponíveis.
* **/ajuda:** Mostra uma lista detalhada de todos os comandos disponíveis, categorizados por informações do time e jogadores.
* **/matches:** Lista os próximos torneios agendados para a FURIA, incluindo datas, adversários (quando disponíveis) e locais.
* **/results:** Apresenta os resultados das últimas partidas disputadas pela FURIA, com informações sobre torneio, data, adversário, resultado e mapas jogados (incluindo placar e link para VOD, se disponível).
* **/stats:** Fornece estatísticas gerais do time, como ranking mundial, desempenho nos últimos jogos, taxa de vitória nos últimos meses e a sequência atual de resultados.
* **/player [nome]:** Exibe estatísticas de um jogador específico do elenco da FURIA. Se nenhum nome for fornecido, lista o elenco completo com instruções de uso. Permite buscar por nome completo ou parcial, oferecendo sugestões se o nome digitado for semelhante a algum jogador.
* **/proximojogo:** Apresenta informações sobre o próximo jogo da FURIA, incluindo torneio, data, adversário e fase. Inclui uma análise do histórico de confrontos contra o oponente e o status atual do time.
* **/players:** Lista o elenco completo da FURIA.
* **/live:** Fornece links diretos para os canais de transmissão ao vivo oficiais da FURIA e suas principais redes sociais.

## 📌 Aspectos Técnicos

O bot é desenvolvido utilizando a biblioteca `Telegraf` para Node.js e as seguintes dependências:

* `telegraf`: Framework de bot para Telegram.
* `dotenv`: Para carregar variáveis de ambiente (como o token do bot).
* `./data/matches.js`: Contém dados simulados e fictícios sobre os próximos torneios, resultados recentes e histórico de confrontos.
* `./data/players.js`: Contém dados simulados e fictícios sobre os jogadores do time da FURIA, incluindo suas informações e estatísticas.
* `./utils/helpers.js`: Contém funções utilitárias para formatar as informações de torneios, partidas, estatísticas do time e jogadores para serem exibidas no chat.

## 🖥️ Como Usar:

Para interagir com o FURIA Nation Chat, siga estas etapas diretamente no Telegram:

1.  **Abra o Telegram:** Certifique-se de ter o aplicativo Telegram logado.
2.  **Acesse o Bot:** Clique no seguinte link: [https://t.me/ffurianationbot](https://t.me/ffurianationbot). Isso abrirá uma janela de chat com o bot.
3.  **Inicie o Bot e Usufrua dos Comandos:** Toque ou clique no botão **"Iniciar"** ou **"Start"** na parte inferior da tela.


## 🎲 Dados Simulados:

É importante notar que os dados presentes em `data/matches.js` e `data/players.js` são **simulados e fictícios**. Em uma implementação real, esses dados seriam obtidos através de APIs de terceiros ou de uma base de dados atualizada com informações reais sobre partidas e jogadores.


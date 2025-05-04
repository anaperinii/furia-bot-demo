import { Telegraf } from 'telegraf';
import 'dotenv/config';
import { matches } from './data/matches.js';
import { players } from './data/players.js';
import { 
  formatTournaments, 
  formatRecentMatches, 
  formatTeamStats, 
  formatPlayerStats, 
  formatNextMatch
} from './utils/helpers.js';

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

bot.launch().then(() => {
  console.log('🤖 FURIA Nation Bot 2025 está offline!');
});

// Comando inicial
bot.start((ctx) => {
  ctx.replyWithMarkdown(`
🐾🔥 *BEM-VINDO AO FURIA NATION CHAT!* 

*COMANDOS DISPONÍVEIS:*
/start - Mostra esta mensagem
/ajuda - Lista de comandos disponíveis
/player [nome] - Estatísticas detalhadas de um jogador
/proximojogo - Próximo jogo com histórico e análise
/matches - Próximos torneios agendados
/results - Últimos resultados e desempenho
/stats - Estatísticas gerais do time
`);
});

// Comando de ajuda
bot.command('ajuda', (ctx) => {
  ctx.replyWithMarkdown(`
🆘 *AJUDA - COMANDOS DISPONÍVEIS*

🔹 *Informações do Time:*
/stats - Estatísticas gerais
/results - Últimos resultados
/proximojogo - Próximo jogo com análise
/matches - Agenda de torneios
/noticias - Últimas notícias
/live - Canais de comunicação

🔹 *Jogadores:*
/player [nome] - Estatísticas do jogador
/players - Lista completa do elenco
`);
});

// Comando para próximos torneios
bot.command('matches', (ctx) => {
  if (matches.upcomingTournaments.length === 0) {
    return ctx.replyWithMarkdown('ℹ️ *Nenhum torneio agendado no momento.*\nAcompanhe nossas redes para atualizações!');
  }

  ctx.replyWithMarkdown(`
*📅 PRÓXIMOS TORNEIOS DA FURIA* 🔥

${formatTournaments(matches.upcomingTournaments)}

🔔 *Ative as notificações* para não perder nenhum jogo!
📡 *Transmissão ao vivo:* /live
`);
});

// Comando para últimos resultados
bot.command('results', (ctx) => {
  if (matches.recentMatches.length === 0) {
    return ctx.replyWithMarkdown('ℹ️ *Nenhum resultado recente disponível.*');
  }

  ctx.replyWithMarkdown(`
*🎮 ÚLTIMO RESULTADO* 📊

${formatRecentMatches(matches.recentMatches)}

`);
});

// Comando para estatísticas do time
bot.command('stats', (ctx) => {
  ctx.replyWithMarkdown(formatTeamStats(matches.teamStatus));
});

// Comando para informações de jogadores
bot.command('player', async (ctx) => {
  const input = ctx.message.text.split(' ')[1];

  if (!input) {
      const playerList = players.map(p => `- ${p.name}`).join('\n');
      return ctx.replyWithMarkdown(`
⚠️ *Como usar:* \`/player [nome]\`
*Exemplo:* \`/player KSCERATO\`

👥 *ELENCO COMPLETO:*
${playerList}

💡 Digite o nome do jogador após o comando
      `);
  }

  const player = players.find(p =>
      p.name.toLowerCase() === input.toLowerCase() ||
      p.fullName.toLowerCase().includes(input.toLowerCase())
  );

  if (!player) {
      const suggestions = players.filter(p =>
          p.name.toLowerCase().includes(input.toLowerCase())
      );

      if (suggestions.length > 0) {
          return ctx.replyWithMarkdown(
              `🔍 *Jogador não encontrado!* Talvez você quis dizer:\n` +
              suggestions.map(p => `- ${p.name}`).join('\n') +
              `\n\nUse /players para ver a lista completa`
          );
      }
      return ctx.replyWithMarkdown('❌ *Jogador não encontrado.* Use /players para ver a lista completa.');
  }

  
  const playerStatsText = formatPlayerStats(player);
  await ctx.replyWithMarkdown(playerStatsText);
});

// Comando para o próximo jogo
bot.command('proximojogo', async (ctx) => {
  try {
    if (!matches.upcomingTournaments || matches.upcomingTournaments.length === 0) {
      return ctx.replyWithMarkdown('ℹ️ *Não há jogos agendados no momento.*\nAcompanhe nossas redes para atualizações!');
    }

    const tournament = matches.upcomingTournaments[0];
    const nextMatch = tournament?.matches?.[0];

    if (!nextMatch) {
      return ctx.replyWithMarkdown('ℹ️ *Próximo jogo ainda não foi definido.*');
    }

    const opponentStats = matches.headToHead[nextMatch.opponent] || null;
    
    
    await ctx.replyWithMarkdown(formatNextMatch(
      { 
        ...nextMatch, 
        tournament: tournament.name 
      },
      opponentStats,
      matches.teamStatus,
      matches.upcomingTournaments  
    ));
    
    
  } catch (error) {
    console.error('Erro no comando proximojogo:', error);
    ctx.replyWithMarkdown('❌ *Ocorreu um erro ao buscar informações.*\nTente novamente mais tarde.');
  }
});

// Comando para lista de jogadores
bot.command('players', (ctx) => {
  const playerList = players.map(p => 
    `- ${p.name} - ${p.age} anos`
  ).join('\n');
  
  ctx.replyWithMarkdown(`
👥 *ELENCO COMPLETO DA FURIA* 🇧🇷

${playerList}

💡 Use \`/player [nome]\` para ver estatísticas detalhadas
`);
});

// Comando para transmissão ao vivo
bot.command('live', (ctx) => {
  ctx.replyWithMarkdown(`
📡 *ASSISTA A FURIA AO VIVO!*

🔴 [Twitch Oficial](https://www.twitch.tv/furiatv)

*Segue a gente nas redes:*
[Twitter](https://twitter.com/furiatv) | [Instagram](https://instagram.com/furiagg)
`);
});


process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
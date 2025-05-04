/**
 * Formatação das informações sobre torneios futuros
 */
export const formatTournaments = (tournaments) => {
  return tournaments.map(tournament => `
🏆 *${tournament.name}*
📅 ${tournament.dateRange}
📍 ${tournament.location}

${tournament.matches.map(match => `
🗓️ ${match.date} - 🆚 ${match.opponent}
🎮 ${match.stage}
`).join('\n')}
`).join('\n────────────────\n');
};

/**
 * Formatação dos últimos jogos disputados
 */
export const formatRecentMatches = (matches) => {
  return matches.map(match => `
📌 *${match.tournament}*
📅 ${match.date} | 🆚 ${match.opponent}
🏆 Resultado: FURIA ${match.result}

🗺️ *Mapas:*
${match.maps.map(m => `• ${m.name}: ${m.score}`).join('\n')}

📺 [Assistir VOD](${match.vod})
`).join('\n────────────────\n');
};

/**
 * Formatação do histórico contra um adversário específico
 */
export const formatHeadToHead = (opponent, data) => {
  

  return `
📊 *Histórico contra ${opponent}:*

🔹 *Últimos confrontos:*
${data.lastEncounters.slice(0, 3).map(e => 
  `• ${e.date}: FURIA ${e.result} (${e.event})`
).join('\n')}

📈 *Estatísticas:*
• Win Rate: ${data.stats.winRate}
• Performance em mapas:
${Object.entries(data.stats.maps).slice(0, 3).map(([map, stats]) => 
  `  - ${map}: ${stats.wins}V/${stats.losses}D (${Math.round((stats.wins/(stats.wins+stats.losses))*100)}%)`
).join('\n')}
`;
};

export const formatNextMatch = (nextMatch, opponentStats, teamStatus, tournaments) => {
  
  const tournament = tournaments.find(t => 
    t.matches.some(m => m.date === nextMatch.date)
  );

  return `
🔥 *PRÓXIMO JOGO DA FURIA* 🔥

🏆 *Torneio:* ${tournament?.name || nextMatch.tournament || 'Torneio não especificado'}
🗓️ *Data:* ${nextMatch.date}
🆚 *Adversário:* ${nextMatch.opponent}
🌐 *Fase:* ${nextMatch.stage}

${formatHeadToHead(nextMatch.opponent, opponentStats)}


📌 *Status do Time:*
🏅 Ranking: #${teamStatus?.ranking || 'N/A'}
📈 Forma: ${teamStatus?.formLast10Matches || 'N/A'}
🔥 Sequência: ${teamStatus?.currentStreak || 'N/A'}
💪 Win Rate: ${teamStatus?.winRateLast3Months || 'N/A'}

`;
};

/**
 * Formatação das estatísticas gerais do time
 */
export const formatTeamStats = (stats) => {
  return `
📊 *ESTATÍSTICAS DA FURIA*

🏆 *Ranking Mundial:* #${stats.ranking}
📅 *Últimos 3 meses:*
   📈 Win Rate: ${stats.winRateLast3Months}
   🔢 ${stats.formLast10Matches} (últimos 10 jogos)
   
🔥 *Sequência Atual:* ${stats.currentStreak}
🎯 *Próximo Jogo:* ${stats.nextMatch}
`;
};

/**
 * Formatação das estatísticas detalhadas de jogadores
 */
export const formatPlayerStats = (player) => {
  return `
*${player.name.toUpperCase()}*
${player.fullName}, ${player.age} anos
🇧🇷 ${player.nationality}

📊 *ESTATÍSTICAS:*
🔹 Rating: ${player.stats.rating} (últimos 3 meses)
🔹 K/D: ${player.stats.kd}
🔹 HS%: ${player.stats.headshots}%
🔹 Impacto: ${player.stats.impactRating || 'N/A'}

⭐ *DESTAQUES:*
${player.stats.highlights.slice(0, 3).map(h => `• ${h}`).join('\n')}

`;
};


// Contém Dados Simulados e Fictícios
export const matches = {
  upcomingTournaments: [
    {
      id: 1,
      name: "PGL Astana 2025",
      dateRange: "09/05/2025 a 17/05/2025",
      matches: [
        {
          date: "10/05/2025",
          opponent: "The MongolZ",
          stage: "Fase de grupos",
        },
        {
          date: "12/05/2025",
          opponent: "G2 Esports",
          stage: "Fase de grupos",
        }
      ],
      location: "Astana, Cazaquistão"
    },
    {
      id: 2,
      name: "IEM Dallas 2025",
      dateRange: "18/05/2025 a 24/05/2025",
      matches: [
        {
          date: "20/05/2025",
          opponent: "Team Vitality",
          stage: "Quartas de final",
        }
      ],
      location: "Dallas, EUA"
    }
  ],

  recentMatches: [
    {
      id: 101,
      date: "06/04/2025",
      tournament: "PGL Bucharest 2025",
      opponent: "Apogee",
      result: "2-0",
      vod: "https://www.youtube.com/watch?v=9VfFSaYNc2I&pp=ygUaZ2F1bGVzIGZ1cmlhIFBHTCBCdWNoYXJlc3Q%3D",
      maps: [
        { name: "Dust2", score: "13-6" },
        { name: "Mirage", score: "13-7" }
      ]
    }
  ],

  headToHead: {
    "The MongolZ": {
      lastEncounters: [
        { date: "09/04/2025", result: "0-2", event: "PGL Bucharest 2025" },
        { date: "18/07/2024", result: "1-0", event: "Esports World Cup 2024" },
        { date: "31/01/2024", result: "0-1", event: "IEM Katowice 2024" },
        { date: "28/07/2023", result: "0-2", event: "IEM Cologne 2023" }
      ],
      stats: {
        winRate: "45%",
        maps: {
          inferno: { wins: 5, losses: 3 },
          mirage: { wins: 2, losses: 4 }
        }
      }
    },
    "Vitality": {
      lastEncounters: [
        { date: "15/03/2025", result: "1-2", event: "Major 2025" }
      ],
      stats: {
        winRate: "38%",
        maps: {
          ancient: { wins: 3, losses: 2 },
          vertigo: { wins: 1, losses: 3 }
        }
      }
    }
  },

  teamStatus: {
    ranking: 17,
    formLast10Matches: "7V-3D",
    winRateLast3Months: "65%",
    currentStreak: "2 vitórias",
    nextMatch: "10/05/2025 vs The Mongolz (PGL Astana)"
  }
};
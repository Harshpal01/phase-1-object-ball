function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": { number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1 },
          "Reggie Evans": { number: 30, shoe: 14, points: 12, rebounds: 12, assists: 12, steals: 12, blocks: 12, slamDunks: 7 },
          "Brook Lopez": { number: 11, shoe: 17, points: 17, rebounds: 19, assists: 10, steals: 3, blocks: 1, slamDunks: 15 },
          "Mason Plumlee": { number: 1, shoe: 19, points: 26, rebounds: 12, assists: 6, steals: 3, blocks: 8, slamDunks: 5 },
          "Jason Terry": { number: 31, shoe: 15, points: 19, rebounds: 2, assists: 2, steals: 4, blocks: 11, slamDunks: 1 }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": { number: 4, shoe: 18, points: 10, rebounds: 1, assists: 1, steals: 2, blocks: 7, slamDunks: 2 },
          "Bismak Biyombo": { number: 0, shoe: 16, points: 12, rebounds: 4, assists: 7, steals: 7, blocks: 15, slamDunks: 10 },
          "DeSagna Diop": { number: 2, shoe: 14, points: 24, rebounds: 12, assists: 12, steals: 4, blocks: 5, slamDunks: 5 },
          "Ben Gordon": { number: 8, shoe: 15, points: 33, rebounds: 3, assists: 2, steals: 1, blocks: 1, slamDunks: 0 },
          "Brendan Haywood": { number: 33, shoe: 15, points: 6, rebounds: 12, assists: 12, steals: 22, blocks: 5, slamDunks: 12 }
        }
      }
    };
  }
  console.log(gameObject());
  // Helper function to find a player in both teams
  function findPlayer(playerName) {
    const game = gameObject();
    for (let teamKey in game) {
      if (game[teamKey].players[playerName]) {
        return game[teamKey].players[playerName];
      }
    }
    return null;
  }
  console.log(findPlayer("Ben Gordon"))
  
  // Function to get points scored by a player
  function numPointsScored(playerName) {
    const player = findPlayer(playerName);
    return player ? player.points : null;
  }
  console.log(numPointsScored("Ben Gordon"));
  
  // Function to get shoe size of a player
  function shoeSize(playerName) {
    const player = findPlayer(playerName);
    return player ? player.shoe : null;
  }
  console.log(shoeSize("Ben Gordon"));
  // Function to get team colors by team name
  function teamColors(teamName) {
    const game = gameObject();
    for (let teamKey in game) {
      if (game[teamKey].teamName === teamName) {
        return game[teamKey].colors;
      }
    }
    return null;
  }
  console.log(teamColors("Charlotte Hornets"));
  // Function to return an array of all team names
  function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
  }
  console.log(teamNames());
  
  // Function to return an array of jersey numbers for a team
  function playerNumbers(teamName) {
    const game = gameObject();
    for (let teamKey in game) {
      if (game[teamKey].teamName === teamName) {
        return Object.values(game[teamKey].players).map(player => player.number);
      }
    }
    return [];
  }
  console.log(playerNumbers("Brooklyn Nets"));
  
  // Function to get player stats
  function playerStats(playerName) {
    return findPlayer(playerName) || null;
  }
  console.log(playerStats("Alan Anderson"));
  
  // Function to find the number of rebounds for the player with the biggest shoe size
  function bigShoeRebounds() {
    const game = gameObject();
    let maxShoeSize = 0;
    let rebounds = 0;
  
    for (let teamKey in game) {
      for (let player in game[teamKey].players) {
        let playerStats = game[teamKey].players[player];
        if (playerStats.shoe > maxShoeSize) {
          maxShoeSize = playerStats.shoe;
          rebounds = playerStats.rebounds;
        }
      }
    }
    return rebounds;
  }
  console.log(bigShoeRebounds());
  
  // Bonus: Function to find the player with the most points
  function mostPointsScored() {
    const game = gameObject();
    let maxPoints = 0;
    let bestPlayer = "";
  
    for (let teamKey in game) {
      for (let player in game[teamKey].players) {
        if (game[teamKey].players[player].points > maxPoints) {
          maxPoints = game[teamKey].players[player].points;
          bestPlayer = player;
        }
      }
    }
    return bestPlayer;
  }
  console.log(mostPointsScored());
  
  // Bonus: Function to find the winning team
  function winningTeam() {
    const game = gameObject();
    let scores = { home: 0, away: 0 };
  
    for (let teamKey in game) {
      for (let player in game[teamKey].players) {
        scores[teamKey] += game[teamKey].players[player].points;
      }
    }
  
    return scores.home > scores.away ? game.home.teamName : game.away.teamName;
  }
  console.log(winningTeam());
  
  // Bonus: Function to find the player with the longest name
  function playerWithLongestName() {
    const game = gameObject();
    let longestName = "";
  
    for (let teamKey in game) {
      for (let player in game[teamKey].players) {
        if (player.length > longestName.length) {
          longestName = player;
        }
      }
    }
    return longestName;
  }
  console.log(playerWithLongestName());
  
  // Super Bonus: Function to check if longest named player had the most steals
  function doesLongNameStealATon() {
    const game = gameObject();
    let longestName = playerWithLongestName();
    let maxSteals = 0;
    let mostStealsPlayer = "";
  
    for (let teamKey in game) {
      for (let player in game[teamKey].players) {
        if (game[teamKey].players[player].steals > maxSteals) {
          maxSteals = game[teamKey].players[player].steals;
          mostStealsPlayer = player;
        }
      }
    }
    return longestName === mostStealsPlayer;
  }
  console.log(doesLongNameStealATon());
  
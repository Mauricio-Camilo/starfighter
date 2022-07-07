import axios from "axios";
import battleRepository from "../Repositories/battleRepository.js";

async function countStars (user : string) {
      const userData = await axios.get(`https://api.github.com/users/${user}/repos`);

      let userCount = 0;
  
      userData.data.forEach((element : any)=> {
        userCount += element.stargazers_count;
      });
  
      return userCount;
  }

  async function checkBattleResults (firstUserCount : number, secondUserCount: number, firstUser: string, secondUser: string) {
    if (firstUserCount > secondUserCount) {
        let battleResult : Object = {
          winner: firstUser,
          loser: secondUser,
          draw: false
        }
        await saveBattleResults(firstUser,1,0,0);
        await saveBattleResults(secondUser,0,1,0);
        console.log(battleResult);
        return battleResult;
    }
  
  
      else if (firstUserCount < secondUserCount) {
        let battleResult : Object = {
          winner: secondUser,
          loser: firstUser,
          draw: false
        }
        await saveBattleResults(secondUser,1,0,0);
        await saveBattleResults(firstUser,0,1,0);
        console.log(battleResult);

        return battleResult;
      }
  
      else {
        let battleResult : Object = {
          winner: null,
          loser: null,
          draw: true
        }
        await saveBattleResults(secondUser,0,0,1);
        await saveBattleResults(firstUser,0,0,1);
        console.log(battleResult);

        return battleResult;
      }
  }

  async function saveBattleResults (user : string, win : number, loss : number , draw: number) {
        battleRepository.postBattleResults(user, win, loss, draw)
  }
  

  const battleServices = {
    countStars,
    checkBattleResults,
    saveBattleResults
  }

  export default battleServices;
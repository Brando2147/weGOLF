// import React from "react";
import { Link } from "react-router-dom";
// import UserFooter from "../components/UserFooter/i.js";
import UserNav from "../components/UserNav/index.js";
import NewsFeed from "../components/NewsFeed/index.js";
import Home from "../pages/Home.js";
import React, { useState, useEffect } from "react";
import axios from "axios";

let emptyArray = [];

function LeaderBoards() {
  const [players, setPlayers] = useState([
    {
      playerName: '',
    }
  ]);
  useEffect(() => {
    var leaders = () => {
      axios({
        method: "GET",
        url: `/api/leaderboards`,
      }).then((data) => {
        const leaderData = data.data;
       setPlayers(leaderData.map(leadername =>
        {
return {
  playerName: leadername.playerName
}
        }));
      });
    };
    leaders();
  }, []);
  console.log("players:", players)
  return (
    <div>{players.map(p =><div>{p.playerName}</div>)}</div>
    // <>
    //   <UserNav />
    //   {/* <UserFooter /> */}
    // </>
  );
}
export default LeaderBoards;

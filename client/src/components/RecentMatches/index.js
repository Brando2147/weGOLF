// import React, { useState } from "react";
import React, { useEffect, useState } from "react"
// import PlayerMatchHistory from "../PlayerMatchHistory/index.js";
import axios from "axios";
import "./style.css";



// Recent matches component copied from PlayerScoreCard component
function RecentMatches({user}) {
const [matchData, setMatchData] = useState([ {
  playerName: "",
  createdAt: "",
  courseName: "",
  courseCity: "",
  courseState: "",
  hole1: 0,
  hole2: 0,
  hole3: 0,
  hole4: 0,
  hole5: 0,
  hole6: 0,
  hole7: 0,
  hole8: 0,
  hole9: 0,
  hole10: 0,
  hole11: 0,
  hole12: 0,
  hole13: 0,
  hole14: 0,
  hole15: 0,
  hole16: 0,
  hole17: 0,
  hole18: 0,
}
]);





  useEffect(() =>{
    console.log(user.uid, "Something")
    axios({
      method: "GET",
      url: `/api/recent/${user.uid}/`,
    }).then((result) => {
      console.log(result)
      const allMatches = result.data;
      setMatchData(allMatches.map(matchArray => 
        {
          console.log(matchArray)
        return {
          playerName: matchArray.playerName,
          createdAt: matchArray.createdAt,
          courseName: matchArray.courseName,
          courseCity: matchArray.courseCity,
          courseState: matchArray.courseState,
          hole1: matchArray.hole1,
          hole2: matchArray.hole2,
          hole3: matchArray.hole3,
          hole4: matchArray.hole4,
          hole5: matchArray.hole5,
          hole6: matchArray.hole6,
          hole7: matchArray.hole7,
          hole8: matchArray.hole8,
          hole9: matchArray.hole9,
          hole1: matchArray.hole10,
          hole11: matchArray.hole11,
          hole12: matchArray.hole12,
          hole13: matchArray.hole13,
          hole14: matchArray.hole14,
          hole15: matchArray.hole15,
          hole16: matchArray.hole16,
          hole17: matchArray.hole17,
          hole18: matchArray.hole18,
        }
      }))
    })
  }, [user])






  return (
  <div>
{matchData.map(md => <div>{md.playerName}</div>)}

  </div>
)

}

export default RecentMatches;









//State data to retrieve from /api/recent/
// const [matchData, setMatchData] = useState({
//   playerName: "",
//   createdAt: "",
//   courseName: "",
//   courseCity: "",
//   courseState: "",
//   hole1: 0,
//   hole2: 0,
//   hole3: 0,
//   hole4: 0,
//   hole5: 0,
//   hole6: 0,
//   hole7: 0,
//   hole8: 0,
//   hole9: 0,
//   hole10: 0,
//   hole11: 0,
//   hole12: 0,
//   hole13: 0,
//   hole14: 0,
//   hole15: 0,
//   hole16: 0,
//   hole17: 0,
//   hole18: 0,
// });

//Brandon's Original Code:
//   let numOfHoles = parseInt(props.details.numOfHoles);
//   let numOfHolesArr = [...Array(numOfHoles)].map((_, i) => i + 1);
// console.log(props)
//   return (
//     <>
//       <div className="table-container">
//         <table className="table is-bordered is-narrow is-hoverable">
//           <thead>
//             <tr>
//               <th>Player/Hole</th>
//               {numOfHolesArr.map((each, index) => (
//                 <td hole={"hole" + each} key={"hole" + each} className="">
//                   {each}
//                 </td>
//               ))}
//               <td>Total</td>
//             </tr>
//           </thead>
//           <tbody>
//             {props.details.playerNameArr.map((each, index) => {
//               return (
//                 <PlayerScoreCard
//                   playerName={each}
//                   player={"player" + (index + 1)}
//                   playerID={props.details.playerIdArr[index]}
//                   roundId={props.details.roundId}
//                   holes={props.details.numOfHoles}
//                 />
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
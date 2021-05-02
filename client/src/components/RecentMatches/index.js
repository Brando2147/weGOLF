import React, { useEffect, useState } from "react";
import axios from "axios";
import firebase from "../../firebase";
import "./style.css";

// Recent matches component copied from PlayerScoreCard component
function RecentMatches() {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
      }
    });
  }, []);
  const [user, setUser] = useState(false);

  const [uniqueRounds, setUniqueRounds] = useState([]);

  const [selectedRounds, setSelectedRounds] = useState({ roundId: "false" });

  const [matchData, setMatchData] = useState([
    {
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
    },
  ]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `/api/rounds/${user.uid}/`,
    }).then((result) => {
      console.log(result.data)
      setUniqueRounds(result.data.map(each => {
        var d = new Date(each.createdAt).toDateString();
        return {
          roundId: each.RoundId,
          courseName: each.courseName,
          courseCity: each.courseCity,
          courseState: each.courseState,
          date: d,
          total: each.Total
        }
      }));
    })
    {/*      setUniqueRounds(
        result.data.map((each) => {
          return {
            roundId: each.RoundId,
            courseName: each.courseName,
            courseCity: each.courseCity,
            courseState: each.courseState,
            date: each.createdAt,
          };
        })
      );
    });
*/}
}, [user]);

  // useEffect(() => {
  //   console.log(user.uid, "Something")
  //   axios({
  //     method: "GET",
  //     url: `/api/recent/${user.uid}/`,
  //   }).then((result) => {
  //     console.log(result)
  //     const allMatches = result.data;
  //     setMatchData(allMatches.map(matchArray => {
  //       console.log(matchArray)
  //       return {
  //         playerName: matchArray.playerName,
  //         createdAt: matchArray.createdAt,
  //         courseName: matchArray.courseName,
  //         courseCity: matchArray.courseCity,
  //         courseState: matchArray.courseState,
  //         roundId: matchArray.RoundId,
  //         hole1: matchArray.hole1,
  //         hole2: matchArray.hole2,
  //         hole3: matchArray.hole3,
  //         hole4: matchArray.hole4,
  //         hole5: matchArray.hole5,
  //         hole6: matchArray.hole6,
  //         hole7: matchArray.hole7,
  //         hole8: matchArray.hole8,
  //         hole9: matchArray.hole9,
  //         hole10: matchArray.hole10,
  //         hole11: matchArray.hole11,
  //         hole12: matchArray.hole12,
  //         hole13: matchArray.hole13,
  //         hole14: matchArray.hole14,
  //         hole15: matchArray.hole15,
  //         hole16: matchArray.hole16,
  //         hole17: matchArray.hole17,
  //         hole18: matchArray.hole18,
  //       }
  //     }))
  //   })
  // }, [user])

  const handleChange = (e) => {
    e.preventDefault();
    setSelectedRounds({ roundId: e.target.value });
    if (e.target.value != "false") {
      axios({
        method: "GET",
        url: `/api/pastRound/${e.target.value}/`,
      }).then((result) => {
        console.log(result)
        setMatchData(result.data.map(each => {
          var d = new Date(each.createdAt).toDateString();
          return {
            playerName: each.playerName,
            createdAt: d,
            courseName: each.courseName,
            courseCity: each.courseCity,
            courseState: each.courseState,
            hole1: each.hole1,
            hole2: each.hole2,
            hole3: each.hole3,
            hole4: each.hole4,
            hole5: each.hole5,
            hole6: each.hole6,
            hole7: each.hole7,
            hole8: each.hole8,
            hole9: each.hole9,
            hole10: each.hole10,
            hole11: each.hole11,
            hole12: each.hole12,
            hole13: each.hole13,
            hole14: each.hole14,
            hole15: each.hole15,
            hole16: each.hole16,
            hole17: each.hole17,
            hole18: each.hole18,
            total: each.Total,
          }
        }))
      })
      {/*
        console.log(result);
        setMatchData(
          result.data.map((each) => {
            return {
              playerName: each.playerName,
              createdAt: each.createdAt,
              courseName: each.courseName,
              courseCity: each.courseCity,
              courseState: each.courseState,
              hole1: each.hole1,
              hole2: each.hole2,
              hole3: each.hole3,
              hole4: each.hole4,
              hole5: each.hole5,
              hole6: each.hole6,
              hole7: each.hole7,
              hole8: each.hole8,
              hole9: each.hole9,
              hole10: each.hole10,
              hole11: each.hole11,
              hole12: each.hole12,
              hole13: each.hole13,
              hole14: each.hole14,
              hole15: each.hole15,
              hole16: each.hole16,
              hole17: each.hole17,
              hole18: each.hole18,
            };
          })
        );
      });
*/}
    }
  };
  let numOfHolesArr = [...Array(18)].map((_, i) => i + 1);

  return (
    <>
      <form className="field column is-4-fullhd is-offset-4-fullhd is-4-widescreen is-offset-4-widescreen 
                is-6-desktop is-offset-3-desktop is-6-tablet is-offset-3-tablet is-8-mobile is-offset-2-mobile has-text-centered">
        <div className="select is-rounded ">
          <select name="selectedRound" onChange={handleChange}>
            <option value="false">Select a round</option>
            {uniqueRounds.map((each) => (
              <option value={each.roundId}>
                {each.courseName}, {each.date}
              </option>
            ))}
          </select>
        </div>
      </form>
      <hr></hr>

      {selectedRounds.roundId != "false" && (
        <table className="table is-bordered is-narrow is-hoverable">
          <caption>
            Course Name: <strong>{matchData[0].courseName}</strong> | Location:{" "}
            <strong>
              {matchData[0].courseCity}, {matchData[0].courseState}
            </strong>{" "}
            | Played on: <strong>{matchData[0].createdAt}</strong>
          </caption>
          <thead>
            <tr>
              <th></th>
              {numOfHolesArr.map((each, index) => (
                <td hole={"hole" + each} key={"hole" + each} className="">
                  {"Hole " + each}
                </td>
              ))}
              <td>Total</td>
            </tr>
          </thead>
          <tbody>
            {matchData.map((each) => (
              <tr>
                <th>{each.playerName}</th>
                <td>{each.hole1}</td>
                <td>{each.hole2}</td>
                <td>{each.hole3}</td>
                <td>{each.hole4}</td>
                <td>{each.hole5}</td>
                <td>{each.hole6}</td>
                <td>{each.hole7}</td>
                <td>{each.hole8}</td>
                <td>{each.hole9}</td>
                <td>{each.hole10}</td>
                <td>{each.hole11}</td>
                <td>{each.hole12}</td>
                <td>{each.hole13}</td>
                <td>{each.hole14}</td>
                <td>{each.hole15}</td>
                <td>{each.hole16}</td>
                <td>{each.hole17}</td>
                <td>{each.hole18}</td>
                <td>{each.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* <div className="columns is-centered is-mobile table-container">
        <div className="row ">

          <div className="column">
            <table className="table is-striped is-bordered">
              <thead>
                <tr>
                    <th>User (Player) </th>
                  <th>Date of Play </th>
                  <th>Course Name </th>
                  <th>City </th>
                  <th>State </th>
                </tr>
                tr> 
                <th scope="col"></th>
                  {numOfHolesArr.map((each, index) => (
                    <th scope="col" hole={"hole" + each} key={"hole" + each} className="">
                      {each}
                    </th>
                  ))}
                  <th scope="col">Total</th>
                </tr>
              </thead>

              <tbody>
                <th>{matchData.map(md => <div>{md.playerName}</div>)}</th>
                {matchData.map(ca => <td>{ca.hole1}</td>)}
                {matchData.map(ca => <td>{ca.hole2}</td>)}
                {matchData.map(ca => <td>{ca.hole3}</td>)}
                {matchData.map(ca => <td>{ca.hole4}</td>)}
                {matchData.map(ca => <td>{ca.hole5}</td>)}
                {matchData.map(ca => <td>{ca.hole6}</td>)}
                {matchData.map(ca => <td>{ca.hole7}</td>)}
                {matchData.map(ca => <td>{ca.hole8}</td>)}
                {matchData.map(ca => <td>{ca.hole9}</td>)}
                {matchData.map(ca => <td>{ca.hole10}</td>)}
                {matchData.map(ca => <td>{ca.hole11}</td>)}
                {matchData.map(ca => <td>{ca.hole12}</td>)}
                {matchData.map(ca => <td>{ca.hole13}</td>)}
                {matchData.map(ca => <td>{ca.hole14}</td>)}
                {matchData.map(ca => <td>{ca.hole15}</td>)}
                {matchData.map(ca => <td>{ca.hole16}</td>)}
                {matchData.map(ca => <td>{ca.hole17}</td>)}
                {matchData.map(ca => <td>{ca.hole18}</td>)}

                <td>{matchData.map(cn => <div>{cn.courseName}</div>)}</td>
                <td>{matchData.map(c => <div>{c.courseCity}</div>)}</td>
                <td>{matchData.map(s => <div>{s.courseState}</div>)}</td> 
              </tbody>

            </table>
          </div>
          </div>
        </div> */}
    </>
  );
}

export default RecentMatches;

// Brandon Original Code from this page:

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

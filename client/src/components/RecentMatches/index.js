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

  }, [user]);

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
    }
  };
  let numOfHolesArr = [...Array(18)].map((_, i) => i + 1);

  return (
    <>
      <form className="field column is-4-fullhd is-offset-4-fullhd is-4-widescreen is-offset-4-widescreen 
                is-6-desktop is-offset-3-desktop is-6-tablet is-offset-3-tablet is-8-mobile is-offset-2-mobile has-text-centered">
        <div className="select is-rounded ">
          <select name="selectedRound" onChange={handleChange}>
            <option value="false">Select a match</option>
            {uniqueRounds.map((each) => (
              <option value={each.roundId}>
                {each.courseName}, {each.date}
              </option>
            ))}
          </select>
        </div>
      </form>
      <hr></hr>
      {selectedRounds.roundId != "false" &&
        <div className="table-container">
          <table className="previousMatchTable table is-bordered is-narrow is-hoverable is-striped">
            <caption>
              Course Name: <strong>{matchData[0].courseName}</strong> | Location:{" "}
              <strong>
                {matchData[0].courseCity}, {matchData[0].courseState}
              </strong>{" "}
            | Played on: <strong>{matchData[0].createdAt}</strong>
            </caption>
            <thead>
              <tr className="tableHeader">
                <th></th>
                {numOfHolesArr.map((each, index) => (
                  <td hole={"hole" + each} key={"hole" + each} className="">
                    {each}
                  </td>
                ))}
                <td>Total</td>
       {/*
      {selectedRounds.roundId != "false" && (
        <table className="table is-bordered is-narrow is-hoverable">
          <caption style={{color: "white"}}>
            Course Name: <strong style={{color: "white"}}>{matchData[0].courseName}</strong> | Location:{" "}
            <strong style={{color: "white"}}>
              {matchData[0].courseCity}, {matchData[0].courseState}
            </strong>{" "}
            | Played on: <strong style={{color: "white"}}>{matchData[0].createdAt}</strong>
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
*/}
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      }
    </>
  );
}

export default RecentMatches;
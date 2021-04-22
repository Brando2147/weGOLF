import React from "react";
import { Link } from "react-router-dom";
// import UserFooter from "../components/UserFooter/index.js";
import UserNav from "../components/UserNav/index.js";
import NewsFeed from "../components/NewsFeed/index.js";
import Home from "../pages/Home.js";

function LeaderBoards() {
  return (
    <>
      <UserNav />
      <div class="columns is-centered is-mobile">
        <div class="row">
          <div class="column">

               {/*<table class="table is-striped is-bordered">
              <thead>
                <tr>
                  <th>
                    <abbr title="Rank">Rank</abbr>
                  </th>
                  <th>User (Player) </th>
                  <th>
                    <abbr title="Played"># of Rounds</abbr>
                  </th>
                  <th>
                    <abbr title="Score">Best Round</abbr>
                  </th>
                  <th>
                    <abbr title="Course Name">Course</abbr>
                  </th>
                  <th>
                    <abbr title="City">City</abbr>
                  </th>
                  <th>
                    <abbr title="State">State</abbr>
                  </th>
                  <th>Comments</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>
                    <abbr title="Rank">Rank</abbr>
                  </th>
                  <th>User (Player)</th>
                  <th>
                    <abbr title="Played"># of Rounds</abbr>
                  </th>
                  <th>
                    <abbr title="Score">Best Round</abbr>
                  </th>
                  <th>
                    <abbr title="Course Name">Course</abbr>
                  </th>
                  <th>
                    <abbr title="City">City</abbr>
                  </th>
                  <th>
                    <abbr title="State">State</abbr>
                  </th>
                  <th>Comments</th>
                </tr>
              </tfoot>
              <tbody>
                <tr class="is-selected">
                  <th>1</th>
                  <td>
                    Martin M <strong>(W)</strong>
                  </td>
                  <td>22</td>
                  <td>-6</td>
                  <td>The Links</td>
                  <td>San Diego</td>
                  <td>CA</td>
                  <td>Current Leader - April 2021!</td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>Josh A</td>
                  <td>35</td>
                  <td>-5</td>
                  <td>The Legacy</td>
                  <td>Phoenix</td>
                  <td>AZ</td>
                  <td>Great job!</td>
                </tr>
                <tr>
                  <th>3</th>
                  <td>Brandon D</td>
                  <td>5</td>
                  <td>E</td>
                  <td>Randolph</td>
                  <td>Tucson</td>
                  <td>AZ</td>
                  <td>February 2021 Low Score Winner!</td>
                </tr>
                <tr>
                  <th>4</th>
                  <td>Logan G</td>
                  <td>1</td>
                  <td>+1</td>
                  <td>Marana Country Club</td>
                  <td>Marana</td>
                  <td>AZ</td>
                  <td>None</td>
                </tr>
                <tr>
                  <th>5</th>
                  <td>Adam</td>
                  <td>3</td>
                  <td>+5</td>
                  <td>The Links</td>
                  <td>San Diego</td>
                  <td>CA</td>
                  <td>None</td>
                </tr>
                <tr>
                  <th>6</th>
                  <td>Kameshia</td>
                  <td>1</td>
                  <td>+5</td>
                  <td>Oro Valley Country Club</td>
                  <td>Oro Valley</td>
                  <td>AZ</td>
                  <td>First Round!</td>
                </tr>
                <tr>
                  <th>7</th>
                  <td>Alicia</td>
                  <td>1</td>
                  <td>+6</td>
                  <td>Pitch & Putt</td>
                  <td>Austin</td>
                  <td>TX</td>
                  <td>First time golfer!</td>
                </tr>
                <tr>
                  <th>8</th>
                  <td>Josh M</td>
                  <td>15</td>
                  <td>+8</td>
                  <td>The Arch</td>
                  <td>San Francisco</td>
                  <td>CA</td>
                  <td>None</td>
                </tr>
                <tr>
                  <th>9</th>
                  <td>Skye</td>
                  <td>5</td>
                  <td>+9</td>
                  <td>The Links</td>
                  <td>New York City</td>
                  <td>NY</td>
                  <td>None</td>
                </tr>
                <tr>
                  <th>10</th>
                  <td>Jen</td>
                  <td>5</td>
                  <td>+10</td>
                  <td>The Links</td>
                  <td>San Diego</td>
                  <td>CA</td>
                  <td>None</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
*/}
  <table class="table is-striped is-bordered">
        <thead>
          <tr>
            <th>
              <abbr title="Rank">Rank</abbr>
            </th>
            <th>User (Player) </th>
            <th>
              <abbr title="Played"># of Rounds</abbr>
            </th>
            <th>
              <abbr title="Score">Best Round</abbr>
            </th>
            <th>
              <abbr title="CourseName">Course</abbr>
            </th>
            <th>
              <abbr title="City">City</abbr>
            </th>
            <th>
              <abbr title="State">State</abbr>
            </th>
            <th>Comments</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>
              <abbr title="Rank">Rank</abbr>
            </th>
            <th>User (Player)</th>
            <th>
              <abbr title="Played"># of Rounds</abbr>
            </th>
            <th>
              <abbr title="Score">Best Round</abbr>
            </th>
            <th>
              <abbr title="CourseName">Course</abbr>
            </th>
            <th>
              <abbr title="City">City</abbr>
            </th>
            <th>
              <abbr title="State">State</abbr>
            </th>
            <th>Comments</th>
          </tr>
        </tfoot>
        <tbody>
          <tr class="is-selected">
            <th>1</th>
            <td class="Top1">
              Martin M  <strong>(W)</strong>
            </td>
            <td class="Played"></td>
            <td class="Low">-6</td>
            <td class="CourseName">The Links</td>
            <td class="City">San Diego</td>
            <td class="State">CA</td>
            <td>Current Leader - PASS IN MONTH{}</td>
          </tr>
        </tbody>
      </table>
      </div>
      {/* <UserFooter /> */}
    </>
  );
}

export default LeaderBoards;

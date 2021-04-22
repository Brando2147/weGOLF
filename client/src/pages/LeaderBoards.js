import React from "react";
import { Link } from "react-router-dom";
import UserFooter from "../components/UserFooter/index.js";
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
      </div>
      </div>
      <UserFooter />
    </>
  );
}

export default LeaderBoards;

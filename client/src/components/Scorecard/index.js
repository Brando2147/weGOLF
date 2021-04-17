import React from "react"

function Scorecard(params) {
    return (
        <div className="table-container container column is-10">
            <table className="table is-bordered is-hoverable is-fullwidth">
                <thead>
                    <tr>
                        <th>Player/Hole</th>
                        <th className="">1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                        <th>7</th>
                        <th>8</th>
                        <th>9</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Andrew</th>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                    </tr>
                    <tr>
                        <th>Brandon</th>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                    </tr>
                    <tr>
                        <th>Josh</th>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                    </tr>
                    <tr>
                        <th>Martin</th>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}

export default Scorecard
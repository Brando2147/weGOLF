import React from "react";
import React, { useState } from "react";

// const PlayerScoreCard = (props) => {
//   const [state, setState] = useState({
//     hole1: '',
//     hole2: '',
//     hole3: '',
//     hole4: '',
//     hole5: '',
//     hole6: '',
//     hole7: '',
//     hole8: '',
//     hole9: '',
//   })
//   const { playerId, roundId, holes } = props;
//   const _handleBlur = (e) => {
//     axios({
//       method: 'PUT',
//       data: state,
//       url: `/api/scores/${playerId}/${roundId}`
//     })
//   }
//   return holes.map((hole, i) => <tr>
//     <td>
//       <input
//         type="text"
//         onChange={(value) => setState({
//           ...state,
//           player1: {
//             ...state.player1,
//             ['hole' + (i + 1)]: value
//           }
//         })} onBlur={_handleBlur} />
//     </td>
//     <td>
//       <input
//         type="text"
//         onChange={(value) => setState({
//           ...state,
//           player1: {
//             ...state.player1,
//             ['hole' + (i + 1)]: value
//           }
//         })} onBlur={_handleBlur} />
//     </td>
//     <td>
//       <input
//         type="text"
//         onChange={(value) => setState({
//           ...state,
//           player1: {
//             ...state.player1,
//             ['hole' + (i + 1)]: value
//           }
//         })} onBlur={_handleBlur} />
//     </td>
//     <td>
//       <input
//         type="text"
//         onChange={(value) => setState({
//           ...state,
//           player1: {
//             ...state.player1,
//             ['hole' + (i + 1)]: value
//           }
//         })} onBlur={_handleBlur} />
//     </td>
//     <td>
//       <input
//         type="text"
//         onChange={(value) => setState({
//           ...state,
//           player1: {
//             ...state.player1,
//             ['hole' + (i + 1)]: value
//           }
//         })} onBlur={_handleBlur} />
//     </td>
//     <td>
//       <input
//         type="text"
//         onChange={(value) => setState({
//           ...state,
//           player1: {
//             ...state.player1,
//             ['hole' + (i + 1)]: value
//           }
//         })} onBlur={_handleBlur} />
//     </td>
//     <td>
//       <input
//         type="text"
//         onChange={(value) => setState({
//           ...state,
//           player1: {
//             ...state.player1,
//             ['hole' + (i + 1)]: value
//           }
//         })} onBlur={_handleBlur} />
//     </td>
//     <td>
//       <input
//         type="text"
//         onChange={(value) => setState({
//           ...state,
//           player1: {
//             ...state.player1,
//             ['hole' + (i + 1)]: value
//           }
//         })} onBlur={_handleBlur} />
//     </td>
//     <td>
//       <input
//         type="text"
//         onChange={(value) => setState({
//           ...state,
//           player1: {
//             ...state.player1,
//             ['hole' + (i + 1)]: value
//           }
//         })} onBlur={_handleBlur} />
//     </td>
//   </tr>)
// }

// export default PlayerScoreCard

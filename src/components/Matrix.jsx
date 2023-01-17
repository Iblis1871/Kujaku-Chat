export default function Matrix() {
  function generateCharacters() {
    let characterSet =
      'ウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨ';
    let characterArray = characterSet.split('');
    let matrixCharacter = '';

    characterArray.forEach((character) => {
      let characterMax = Math.floor(Math.random() * characterArray.length);

      console.log(characterMax);

      if (character.length != 0) {
        matrixCharacter = (
          <div style={'color: #003B00;'}>{characterArray[characterMax]}</div>
        );
        matrixCharacter = (
          <div style={'color: #008F11'}>{characterArray[characterMax + 1]}</div>
        );
        matrixCharacter = (
          <div style={'color: #008F11'}>{characterArray[characterMax + 2]}</div>
        );
      }
    });

    return <div>{matrixCharacter}</div>;
  }

  return (
    <div class="absolute inset-0" style={'background-color: #0D0208'}>
      {generateCharacters}
    </div>
  );
}

// ####

// export default function Matrix() {
//     function generateCharacters() {
//       let characterSet =
//         'ウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨ';
//       let characterArray = characterSet.split('');
//       let matrixCharacters = [];

//       characterArray.forEach((character) => {
//         let characterMax = Math.floor(Math.random() * characterArray.length);
//         matrixCharacters.push(
//           <div style={{ color: '#003B00' }}>{characterArray[characterMax]}</div>
//         );
//         matrixCharacters.push(
//           <div style={{ color: '#008F11' }}>
//             {characterArray[characterMax + 1]}
//           </div>
//         );
//         matrixCharacters.push(
//           <div style={{ color: '#008F11' }}>
//             {characterArray[characterMax + 2]}
//           </div>
//         );
//       });

//       return <div>{matrixCharacters}</div>;
//     }

//     return (
//       <div class="absolute inset-0" style={'background-color: #0D0208'}>
//         {setInterval(generateCharacters, 600)}
//       </div>
//     );
//   }

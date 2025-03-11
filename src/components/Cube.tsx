// import './Cube.css'
// import { useState } from 'react';
// function Cube() {
//       const [currentRotation, setCurrentRotation] = useState(0);
//       const faceLabels: string[] = [
//         "HSK #1", // front
//         "HSK #3", // back
//         "HSK #2", // left
//         "HSK #4", // right
//         "HSK #1", // top
//         "HSK #3", // bottom
//       ];

//       const changeTagandImage = () => {
//         // setFade(true);
    
//         setTimeout(() => {
//           setCurrentRotation((prevRotation) => prevRotation + 90);
          
//         }, 0);
    
      
//         setTimeout(() => {
//           // setFade(false);
//         }, 1000);
//       };
//     const getFaceClass = (index: number): string => {
//         switch (index) {
//           case 0:
//             return "front";
//           case 1:
//             return "back";
//           case 2:
//             return "left";
//           case 3:
//             return "right";
//           case 4:
//             return "top";
//           case 5:
//             return "bottom";
//           default:
//             return "";
//         }
//       };

//   return (
//     <div onClick={changeTagandImage}>
//         <div className="App">
//               <div className="cube-container">
//                 <div
//                   className="cube"
//                   style={{
//                     transform: `rotateY(${currentRotation}deg)`,
//                   }}
//                 >
//                   {faceLabels.map((label, index) => (
//                     <div key={index} className={`face ${getFaceClass(index)}`}>
//                       <div className="face-text">{label}</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//         </div>
//     </div>
//   )
// }

// export default Cube

// import { useState } from "react";
// import "./Cube.css";

// interface CubeProps {
//     faceText: string[];
//   }

// const Cube = () => {
//   const [rotation, setRotation] = useState(0);

//   const rotateCube = () => {
//     setRotation((prev) => prev + 90);
//   };

//   return (
//     <div className="cube-container" onClick={rotateCube}>
//       <div className="cube" style={{ transform: `rotateY(${rotation}deg)` }}>
//         <div className="face front">HSK #1</div>
//         <div className="face back">HSK #3</div>
//         <div className="face left">HSK #2</div>
//         <div className="face right">HSK #4</div>
//         <div className="face top">HSK #1</div>
//         <div className="face bottom">HSK #3</div>
//       </div>
//     </div>
//   );
// };

// export default Cube;

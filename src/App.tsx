import './App.css';
import { useState, useEffect } from 'react';
import recycleImage from './img/triangular-arrows-sign-for-recycle.png';
import profit from './img/profit.png';
import flower from './img/flower.png';
import coin from './img/coin.png';


type Content = {
  Tag: string;
  Header: string;
  Lorem: string;
};

const Image1 = [recycleImage, profit, flower, coin];

function App() {
  const contentObject: { [key: string]: Content } = {
    content1: { Tag: 'HSK #1', Header: 'Hello World 1', Lorem: 'Lorem ipsum dolor sit, amet consectetur 1.' },
    content2: { Tag: 'HSK #2', Header: 'Hello World 2', Lorem: 'Lorem ipsum dolor sit, amet consectetur 2.' },
    content3: { Tag: 'HSK #3', Header: 'Hello World 3', Lorem: 'Lorem ipsum dolor sit, amet consectetur 3.' },
    content4: { Tag: 'HSK #4', Header: 'Hello World 4', Lorem: 'Lorem ipsum dolor sit, amet consectetur 4.' },
  };
  const tags = ['HSK #1', 'HSK #3', 'HSK #2', 'HSK #4'];
  const [isTransitioning, setIsTransitioning] = useState(false); 
  

// - - - - - - - - IMAGE SECTION - - - - - - - - - - - - START
const [currentImage1, setCurrentImage1] = useState(Image1[0]);
const [rotateToggle, setRotateToggle] = useState(false);
const [clickCount, setClickCount] = useState(0);
const [isLoaded, setIsLoaded] = useState(false); // for hind img index 1, 2, 3 at first 

useEffect(() => {
  setIsLoaded(true)
}, []);

const changeImage = () => {
  if (isTransitioning) return;
  setIsTransitioning(true);

  const nextImageIndex = (Image1.indexOf(currentImage1) + 1) % Image1.length;
  setCurrentImage1(Image1[nextImageIndex]);
  console.log("rotateToggle>>>>>1", rotateToggle)

  // Handle rotation toggle
  if (clickCount === 1) {
    setRotateToggle(prev => !prev);
    setClickCount(0);
  } else {
    setClickCount(prev => prev + 1);
  }

  console.log("rotateToggle>>>>>2", rotateToggle)
};
// - - - - - - - - IMAGE SECTION - - - - - - - - - - - - END


// - - - - - - - - CONTENT SECTION - - - - - - - - - - - - START
  const [currentContentKey, setCurrentContentKey] = useState('content1');
  const [nextContentKey, setNextContentKey] = useState('');

  const changeContent = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    const ContentKeys = Object.keys(contentObject);
    const currentIndex = ContentKeys.indexOf(currentContentKey);
    const nextIndex = currentIndex === ContentKeys.length - 1 ? 0 : currentIndex + 1;

    setNextContentKey(ContentKeys[nextIndex]);   

    setTimeout(() => {
      setCurrentContentKey(ContentKeys[nextIndex]);
      setNextContentKey('');
      setIsTransitioning(false);
    }, 800);
  };
// - - - - - - - - CONTENT SECTION - - - - - - - - - - - - END


// - - - - - - - - TAG SECTION - - - - - - - - - - - - START
  const [currentRotation, setCurrentRotation] = useState(0);

  const rotateCube = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    setCurrentRotation(prevRotation => prevRotation + 90);
  };

  const faceTransforms = [
    'translateZ(50px)',  // front
    'rotateY(180deg) translateZ(50px)',  // back
    'rotateY(-90deg) translateZ(50px)',  // left
    'rotateY(90deg) translateZ(50px)',  // right
  ];
// - - - - - - - - TAG SECTION - - - - - - - - - - - - END


// - - - - - - - - BORDER SECTION - - - - - - - - - - - - START
const [rotationAngle, setRotationAngle] = useState(0);
const [opacity, setOpacity] = useState(1); 
const containerSize = 500; 
const radius = containerSize / 2; 
const circumference = 2 * Math.PI * radius;
const dashOffset = (rotationAngle / 360) * circumference;


// Handle click Border
const handleClick = () => {
  if (isTransitioning) return;
  setIsTransitioning(true);

  let newAngle = rotationAngle + 90;

  if (newAngle >= 360) {
    newAngle = 360;

    setRotationAngle(newAngle);
    
    setTimeout(() => {
      setOpacity(0);
    }, 500);

     setTimeout(() => {
      setRotationAngle(0);
      setTimeout(() => {
        setOpacity(1);
      },500)
    }, 1500); 

  } else {
    setRotationAngle(newAngle);
  }
};
// - - - - - - - - BORDER SECTION - - - - - - - - - - - - END

  return (
    <div onClick={() => { changeImage(); changeContent(); rotateCube(); handleClick()}} className='Body'>
      <h1 className="py-5 border-b-1 text-center text-[3rem] font-bold">Exercise project</h1>

      <div className="flex justify-center items-center h-[80vh]">
        <div className="bg-transparent relative w-[500px] h-[500px] rounded-full flex flex-col 
                        items-center justify-center border-1 transition-all duration-500 ease-in-out animate-fade-up "
        >
         {/* Border */}
         <svg
          width={containerSize}
          height={containerSize}
          className="absolute w-full h-full"
          style={{ transform: 'rotate(-90deg)' }} 
        >
          <circle
            cx={containerSize / 2}
            cy={containerSize / 2}
            r={radius}
            fill="none"
            stroke="black"
            strokeWidth="4"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - dashOffset}
            style={{
              transition: 'stroke-dashoffset 0.7s ease-in-out, opacity 0.7s ease-in-out',
              opacity: opacity,
            }}
          />
        </svg>

              <span className='absolute top-[-10px] w-4 h-4 bg-black rounded-full'></span>
              <span className='absolute bottom-[-10px] w-4 h-4 bg-black rounded-full'></span>
              <span className='absolute left-[-10px] w-4 h-4 bg-black rounded-full'></span>
              <span className='absolute right-[-10px] w-4 h-4 bg-black rounded-full'></span>


          {/* Tag Section */}
          <div className="cube-container absolute top-15 w-[100px] h-[40px]" >
            <div
              className="cube relative w-full h-full transform-3d transition-all duration-800 ease-in-out"
              style={{ transform: `rotateY(${currentRotation}deg)`}}
            >
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className={`face ${['front', 'back', 'left', 'right',][index]} 
                            absolute w-full h-full bg-white border flex justify-center items-center
                            text-xl font-bold origin-center`}
                  style={{ transform: faceTransforms[index] }}
                >
                  <div className="face-text">{tag}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          {Image1.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`img-${index}`}
              className={`
                absolute w-20 h-20 top-40 transition-all duration-1000 ease-in-out
                ${index !== 0 && (!isLoaded || currentImage1 !== img) ? 'opacity-0 invisible' : ''}
                ${currentImage1 === img
                  ? 'fade-in' // Image fades in and rotates from -60deg to 0deg
                  : rotateToggle
                  ? (index === 1 || index === 2
                      ? 'fade-out' // For index 1 & 2, fade out with rotate 60deg
                      : 'fade-out' // For others, fade out with -60deg rotation
                    ) 
                  : 'fade-out'
                }
              `}
            />
          ))}

          {/* Content Section */}
          <div className='absolute bottom-50 ml-3 w-1/2'>
            <div className="relative text-center w-full h-full">
              {Object.keys(contentObject).map((content) => (
                <div className={`
                  absolute w-full transition-opacity duration-1000 ease-in-out
                  ${currentContentKey === content ? (isTransitioning ? 'animate-fade-down-out' : 'opacity-100') 
                    : nextContentKey === content ? 'animate-fade-up opacity-100' : 'opacity-0'} `}
                >
                  <h1 className="text-3xl font-bold mb-2">{contentObject[content].Header}</h1>
                  <p className="tracking-wider">{contentObject[content].Lorem}</p>
                </div>
              ))}
            </div>
          </div>

          <span className="border absolute bottom-10 text-center px-2 py-1 font-bold">HSK</span>
        </div>
      </div>
    </div>
  );
}

export default App;

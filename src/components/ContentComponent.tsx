import { useState } from 'react';

type Content = {
  Tag: string;
  Header: string;
  Lorem: string;
};



const ContentComponent = () => {
  const [currentContentKey, setCurrentContentKey] = useState('content1');
  const [nextContentKey, setNextContentKey] = useState('');
  const [isTransitioning, setIsTransitioning] = useState(false); 

  const contentObject: { [key: string]: Content } = {
    content1: { Tag: 'HSK #1', Header: 'Hello World 1', Lorem: 'Lorem ipsum dolor sit, amet consectetur 1.' },
    content2: { Tag: 'HSK #2', Header: 'Hello World 2', Lorem: 'Lorem ipsum dolor sit, amet consectetur 2.' },
    content3: { Tag: 'HSK #3', Header: 'Hello World 3', Lorem: 'Lorem ipsum dolor sit, amet consectetur 3.' },
    content4: { Tag: 'HSK #4', Header: 'Hello World 4', Lorem: 'Lorem ipsum dolor sit, amet consectetur 4.' },
  };

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
    }, 900);
  };

  return (
    <div onClick={changeContent} className='absolute bottom-50 ml-3 w-1/2'>
      <div className="relative text-center w-full h-full">

        {Object.keys(contentObject).map((content) => (
          
          <div key={content} className={`absolute w-full transition-opacity duration-900 ease-in-out
            ${currentContentKey === content 
              ? (isTransitioning ? 'animate-fade-down-out' : 'opacity-100')
              : nextContentKey === content 
              ? 'animate-fade-up opacity-100' 
              : 'opacity-0'}
          `}>
            <h1 className="text-3xl font-bold mb-2">{contentObject[content].Header}</h1>
            <p className="tracking-wider">{contentObject[content].Lorem}</p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default ContentComponent;

import React, { useEffect, useState } from 'react';
import classes from './BlurLayer.module.css'

const BlurLayer = ({ isNavBarOpen, toggleNavBarStatus }) => {
  const [isVisible, setIsVisible] = useState(isNavBarOpen);

  const handleTransitionEnd = () => {
    !isNavBarOpen && setIsVisible(false);
  };

  useEffect(() => {
    isNavBarOpen && setIsVisible(true);
  }, [isNavBarOpen]);

  const blurLayerClasses = [classes.blurLayer];
  
  isNavBarOpen 
  ? blurLayerClasses.push(classes['fadeIn'])
  : blurLayerClasses.push(classes['fadeOut']);
  

  return (
    isVisible && (
      <div 
        className={blurLayerClasses.join(' ')}
        onClick={toggleNavBarStatus}
        onTransitionEnd={handleTransitionEnd}
      >  
      </div>
    )
  );
};

export default BlurLayer;

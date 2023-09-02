import React, { useEffect, useState } from 'react';
import classes from './BlurLayer.module.css'

const BlurLayer = ({ isNavBarOpen, toggleNavBarStatus }) => {
  const [isVisible, setIsVisible] = useState(isNavBarOpen);
  const [blurLayerClasses, setBlurLayerClasses] = useState([classes.blurLayer]);

  const handleTransitionEnd = () => {
    !isNavBarOpen && setIsVisible(false);
  };

  useEffect(() => {
    isNavBarOpen && setIsVisible(true);
  }, [isNavBarOpen]);

  useEffect(() => {
    isNavBarOpen
    ? setBlurLayerClasses([classes['fadeIn'], ...[classes.blurLayer]])
    : setBlurLayerClasses([classes['fadeOut'], ...[classes.blurLayer]]);
  }, [isNavBarOpen])
  

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

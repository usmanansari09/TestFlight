import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';

const BackButtonHandler = ({ children }) => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      // Prevent the default back button behavior
      return true; // Return `true` to indicate that you've handled the back button press
    });

    return () => {
      // Clean up the event listener when the component is unmounted
      backHandler.remove();
    };
  }, []);

  return children;
};

export default BackButtonHandler;

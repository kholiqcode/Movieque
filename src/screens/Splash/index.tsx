import React from 'react';
import { Animated, Image, Text } from 'react-native';
import { ILLogo } from '../../assets';
import { BoxContainer } from '../../components';
import styles from './styles';

const Splash = () => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.replace('SignIn');
  //   }, 3000);
  // }, []);
  return (
    <BoxContainer style={{ ...styles.container }}>
      <Image style={styles.imageAppLogo} source={ILLogo} />
      <Animated.Text style={styles.textAppName}>MOVIEQUE</Animated.Text>
      <Text style={styles.textAppDesc}>BOOK NOW WATCH NOW</Text>
    </BoxContainer>
  );
};

export default Splash;

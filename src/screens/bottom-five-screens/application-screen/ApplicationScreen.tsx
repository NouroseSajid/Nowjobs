import React from 'react';
import { View, Text, Animated, StyleSheet, Dimensions } from 'react-native';
import useGlobalStyles from '../../../global_styles/GlobalStyles';

const { width } = Dimensions.get('window');

const Skeleton = ({ style }) => {
  const animatedValue = new Animated.Value(-width);
  
  Animated.loop(
    Animated.timing(animatedValue, {
      toValue: width,
      duration: 1000,
      useNativeDriver: true
    })
  ).start();

  return (
    <View style={[styles.skeleton, style, { overflow: 'hidden' }]}>
      <Animated.View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(255,255,255,0.3)',
          transform: [{ translateX: animatedValue }]
        }}
      />
    </View>
  );
};

const ApplicationScreen = () => {
  const G = useGlobalStyles();

  return (
    <View style={G.main_Screen_container}>
      
      <Skeleton style={[G.skeletonText, { marginBottom: 20 }]} />
      <View style={styles.boxContainer}>
        <Skeleton style={G.skeletonBox} />
        <Skeleton style={G.skeletonBox} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  skeleton: {
    backgroundColor: '#e1e1e1',
    borderRadius: 4,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

// Add these to your GlobalStyles:
// skeletonText: {
//   width: 120,
//   height: 20,
// },
// skeletonBox: {
//   width: 150,
//   height: 150,
// },

export default ApplicationScreen;
import React from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import ImageSlider from 'react-native-image-slider';

const { width } = Dimensions.get('window');

const ImageSliderPage = ({ images }) => {
  return (
    <View style={styles.container}>
      <ImageSlider
        loopBothSides
        autoPlayWithInterval={1500}
        images={images}
        customSlide={({ index, item, style }) => (
          <View key={index} style={[style, styles.slide]}>
            <Image source={{ uri: item }} style={styles.image} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height:'100%', // Adjust the height as needed
  },
  slide: {
    width,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default ImageSliderPage;

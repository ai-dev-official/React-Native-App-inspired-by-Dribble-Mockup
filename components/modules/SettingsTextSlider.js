import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';

const SettingsTextSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollViewRef = useRef();

  const { width } = Dimensions.get('window');

  const handleScroll = (event) => {
    const slide = Math.ceil(event.nativeEvent.contentOffset.x / width);
    if (slide !== activeSlide) {
      setActiveSlide(slide);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const newIndex = activeSlide === 3 ? 0 : activeSlide + 1;
      setActiveSlide(newIndex);
      scrollViewRef.current.scrollTo({ x: newIndex * width, animated: true });
    }, 3000);

    return () => clearInterval(timer);
  }, [activeSlide]);

  const renderDots = () => {
    return (
      <View style={styles.dotContainer}>
        {[...Array(4)].map((_, i) => (
          <Text
            key={i}
            style={[styles.dot, activeSlide === i && styles.activeDot]}
          ></Text>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.slideStyle}>
      <ScrollView
        ref={scrollViewRef}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
      >
        <View style={styles.slide}>
          <View style={styles.boost}>
            <Text style={styles.text}>Improve your</Text>
            <Text style={styles.text}>workflow</Text>
          </View>
          <Text style={styles.textAlt}>Get things done faster and smarter</Text>
          <Text style={styles.textAlt}>with our AI-powered app</Text>
        </View>
        <View style={styles.slide}>
          <View style={styles.boost}>
            <Text style={styles.text}>Transform your</Text>
            <Text style={styles.text}>business</Text>
          </View>
          <Text style={styles.textAlt}>Experience the future of business</Text>
          <Text style={styles.textAlt}>with AI-powered solutions</Text>
        </View>
        <View style={styles.slide}>
          <View style={styles.boost}>
            <Text style={styles.text}>Boost your</Text>
            <Text style={styles.text}>productivity</Text>
          </View>
          <Text style={styles.textAlt}>Chat with the smartest AI - Experience</Text>
          <Text style={styles.textAlt}>the power of AI with us</Text>
        </View>
        <View style={styles.slide}>
          <View style={styles.boost}>
            <Text style={styles.text}>Discover the</Text>
            <Text style={styles.text}>possibilities</Text>
          </View>
          <Text style={styles.textAlt}>Unlock the potential of AI and explore</Text>
          <Text style={styles.textAlt}>new ways to achieve your goals</Text>
        </View>
      </ScrollView>
      {renderDots()}
    </View>
  );
};
const styles = StyleSheet.create({
  slideStyle: {},
  slide: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    height: 240,
    marginHorizontal: 20,
  },
  boost: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 48,
    fontWeight: '700',
    color: '#ffffff',
    lineHeight: 50,
  },
  textAlt: {
    fontSize: 16,
    color: '#6c7073',
    flexWrap: 'wrap',
    lineHeight: 30,
    letterSpacing: 2,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -15,
    marginBottom: 15,
    // marginVertical: 5,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 10,
    marginHorizontal: 5,
    backgroundColor: '#1d1f20',
    borderColor: '#6c7073',
    borderWidth: 2,

  },
  activeDot: {
    backgroundColor: '#0084fd',
    borderColor: '#0084fd',
  },
});

export default SettingsTextSlider;

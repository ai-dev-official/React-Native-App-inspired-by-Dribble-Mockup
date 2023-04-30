import { ListItemBase } from '@rneui/base/dist/ListItem';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const TABS = [  'Posts', 'Photos', 'Todos', 'Comments', 'Users'];

const API_URL = 'https://jsonplaceholder.typicode.com';

const SliderTab = () => {
  const [items, setItems] = useState('posts');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/${items}`);
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [items]);

  return (
    <ScrollView style={styles.container}>
      {TABS.map((tab) => (
        <View key={tab} style={styles.tab}>
          <Text style={styles.tabText}>{tab}</Text>
          {items[tab] &&
            items[tab].map((item) => (
              <View key={`${tab}-${item.id}`} style={styles.item}>
                <Text style={styles.itemText}>{item.title}</Text>
              </View>
            ))}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tab: {
    marginTop: 20,
    marginLeft: 20,
  },
  tabText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  item: {
    width: 100,
    height: 100,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ffffff',
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
    borderColor: '#ffffff',
  },
});

export default SliderTab;





import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';

const SettingsTextSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slidesRef = useRef(null);

  const { width } = Dimensions.get('window');

  const scrollToSlide = (index) => {
    setActiveIndex(index);
    slidesRef.current.scrollTo({ x: width * index, animated: true });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (activeIndex + 1) % 4;
      scrollToSlide(newIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const slides = [
    {
      title1: 'Boost your',
      title2: 'productivity',
      subtitle1: 'Chat with the smartest AI - Experience',
      subtitle2: 'the power of AI with us',
    },
    {
      title1: 'Improve your',
      title2: 'workflow',
      subtitle1: 'Get things done faster and smarter',
      subtitle2: 'with our AI-powered app',
    },
    {
      title1: 'Transform your',
      title2: 'business',
      subtitle1: 'Experience the future of business',
      subtitle2: 'with AI-powered solutions',
    },
    {
      title1: 'Discover the',
      title2: 'possibilities',
      subtitle1: 'Unlock the potential of AI and explore',
      subtitle2: 'new ways to achieve your goals',
    },
  ];

  return (
    <View style={styles.slideStyle}>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(e) => {
          const index = e.nativeEvent.contentOffset.x / width;
          setActiveIndex(index);
        }}
        ref={slidesRef}
      >
        {slides.map((slide, index) => (
          <View key={index} style={styles.slide}>
            <View styles={styles.boost}>
              <Text style={styles.text}>{slide.title1}</Text>
              <Text style={styles.text}>{slide.title2}</Text>
            </View>

            <Text style={styles.textAlt}>{slide.subtitle1}</Text>
            <Text style={styles.textAlt}>{slide.subtitle2}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {slides.map((slide, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              activeIndex === index ? styles.paginationDotActive : null,
            ]}
            onTouchEnd={() => scrollToSlide(index)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  slideStyle: {
    marginVertical: 20,
  },
  slide: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width - 40,
    height: 270,
    marginHorizontal: 20,
  },
  boost: {
    marginBottom: 10,
  },
  text: {
    fontSize: 48,
    fontWeight: '700',
    color: '#ffffff',
    lineHeight: 60,
    textAlign: 'center',
  },
  textAlt: {
    fontSize: 16,
    color: '#ffffff',
    flexWrap: 'wrap',
    lineHeight: 30,
    letterSpacing: 2,
    textAlign:




import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

const SettingsTextSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: 'Boost your',
      subtitle: 'productivity',
      description: 'Chat with the smartest AI - Experience the power of AI with us',
    },
    {
      title: 'Discover new',
      subtitle: 'ideas',
      description: 'Get inspired by our library of topics and discussions',
    },
    {
      title: 'Connect with',
      subtitle: 'others',
      description: 'Join our community of curious minds and experts',
    },
    {
      title: 'Stay informed',
      subtitle: 'always',
      description: 'Get real-time updates on the latest news and trends',
    },
  ];

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((activeSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeSlide, slides.length]);

  return (
    <View style={styles.slideStyle}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        onScroll={(event) => {
          const slideIndex = Math.round(
            event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width
          );
          setActiveSlide(slideIndex);
        }}
      >
        {slides.map((slide, index) => (
          <View key={index} style={styles.slide}>
            <View style={styles.boost}>
              <Text style={styles.text}>{slide.title}</Text>
              <Text style={styles.text}>{slide.subtitle}</Text>
            </View>
            <Text style={styles.textAlt}>{slide.description}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.dotContainer}>
        {slides.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.dot, activeSlide === index ? styles.activeDot : null]}
            onPress={() => handleSlideChange(index)}
          />
        ))}
      </View>
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
    height: 270,
    marginHorizontal: 20,
  },
  boost: {
    marginBottom: 10,
  },
  text: {
    fontSize: 48,
    fontWeight: '700',
    color: '#ffffff',
    lineHeight: 60,
  },
  textAlt: {
    fontSize: 16,
    color: '#ffffff',
    flexWrap: 'wrap',
    lineHeight: 30,
    letterSpacing: 2,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  activeDot: {
    backgroundColor: '#ffffff',
  },
});

export default SettingsTextSlider;




import React, { useState, useRef } from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const SLIDE_DATA = [
  { id: 1, text: 'Slide 1' },
  { id: 2, text: 'Slide 2' },
  { id: 3, text: 'Slide 3' },
  { id: 4, text: 'Slide 4' },
];

const SlideShow = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const handleScroll = (event) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    const currentIndex = Math.floor(contentOffset / viewSize);
    setActiveIndex(currentIndex);
  };

  const renderDots = () => {
    return SLIDE_DATA.map((slide, index) => (
      <TouchableOpacity
        key={slide.id}
        style={[styles.dot, index === activeIndex && styles.activeDot]}
        onPress={() =>
          scrollViewRef.current.scrollTo({
            x: index * scrollViewRef.current.layout.width,
            animated: true,
          })
        }
      />
    ));
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
      >
        {SLIDE_DATA.map((slide) => (
          <View key={slide.id} style={styles.slide}>
            <Text>{slide.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.dots}>{renderDots()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dots: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: '#ccc',
  },
  activeDot: {
    backgroundColor: 'red',
  },
});

export default SlideShow;

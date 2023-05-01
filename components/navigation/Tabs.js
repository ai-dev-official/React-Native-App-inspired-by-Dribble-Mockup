import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ListScreen from '../screens/ListScreen';
import PostScreen from '../screens/PostScreen';
import FindScreen from '../screens/FindScreen';
import SettingScreen from '../screens/SettingScreen';
import LoginScreen from '../screens/LoginScreen';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CustomButton from '../modules/CustomButton';
import CustomButtonAlt from '../modules/CustomButtonAlt';
import CustomImage from '../modules/CustomImage';
import WomanImage from '../assets/woman.png';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import FeatherPlus from 'react-native-vector-icons/Feather';
import MaterialText from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialSquarePlus from 'react-native-vector-icons/MaterialCommunityIcons';
import MenuIonicon from 'react-native-vector-icons/FontAwesome5';
import DotsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import PostHeader from '../modules/PostHeader';




const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
    style={[
      styles.shadow,
      {
        top: -35,
        justifyContent: 'center',
        alignItems: 'center',
      },
    ]}
    onPress={onPress}>
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#e91e63',
      }}>
      {children}
    </View>
  </TouchableOpacity>
);

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarLabelStyle={{display: 'none'}}
      initialRouteName="Find"
      screenOptions={{
        showLabel: false,
        tabBarActiveTintColor: '#e91e63',
        tabBarStyle: {
          position: 'absolute',
          bottom: 10,
          left: 10,
          right: 10,
          elevation: 0,
          color: '#000000',
          backgroundColor: '#ffffff',
          borderRadius: 40,
          height: 80,
          ...styles.shadow,
        },
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
          backgroundColor: '#1d1f20',
        },
        headerTitle: null,
        headerLeft: () => (
          <CustomButton
            label="Custom Button"
            icon={MenuIonicon}
            onPress={() => {}}
          />
        ),
        headerRight: () => (
          <CustomImage
            label="Profile Picture"
            icon={WomanImage}
            onPress={() => {}}
          />
        ),
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarLabelStyle: {display: 'none'},
          tabBarIcon: ({focused}) => (
            <View
              style={[
                styles.viewContainer,
                {
                  backgroundColor: focused ? '#000000' : 'transparent',
                  borderRadius: focused ? 30 : 0,
                },
              ]}>
               <MaterialCommunityIcons
               size={30}
                name="home"
                style={[
                  styles.iconContainer,
                  {color: focused ? '#ffffff' : '#000000'},
                ]}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="List"
        component={ListScreen}
        options={{
          headerShown: false,
          headerLeft: null,
          headerRight: null,
          tabBarLabel: 'List',
          tabBarLabelStyle: {display: 'none'},
          tabBarIcon: ({focused}) => (
            <View
              style={[
                styles.viewContainer,
                {
                  backgroundColor: focused ? '#000000' : 'transparent',
                  borderRadius: focused ? 30 : 0,
                },
              ]}>
              <MaterialText
                name="text-box-outline"
                size={30}
                style={[
                  styles.iconContainer,
                  {color: focused ? '#ffffff' : '#000000'},
                ]}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Find"
        component={FindScreen}
        options={{
          headerShown: false,
          headerLeft: null,
          headerRight: null,
          tabBarLabel: 'Find',
          tabBarLabelStyle: {display: 'none'},
          tabBarIcon: ({focused}) => (
            <View
              style={[
                styles.viewContainer,
                {
                  backgroundColor: focused ? '#000000' : 'transparent',
                  borderRadius: focused ? 30 : 0,
                },
              ]}>
              <Feather
                name='search'
                size={30}
                style={[
                  styles.iconContainer,
                  {color: focused ? '#ffffff' : '#000000'},
                ]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          headerShown: false,
          tabBarStyle: { display: 'none' },
          tabBarLabel: 'Setting',
          tabBarLabelStyle: {display: 'none'},
          tabBarIcon: ({focused}) => (
            <View
              style={[
                styles.viewContainer,
                {
                  backgroundColor: focused ? '#000000' : 'transparent',
                  borderRadius: focused ? 30 : 0,
                },
              ]}>
              <MaterialSquarePlus
              name="shape-square-rounded-plus"
                size={30}
                style={[
                  styles.iconContainer,
                  {color: focused ? '#ffffff' : '#000000'},
                ]}
              />
            </View>
          ),
          headerRight: null,
          headerLeft: null,
        }}
      />

      <Tab.Screen
        name="Post"
        component={PostScreen}
        options={{
          tabBarStyle: { display: 'none' },
          headerLeft: () => (
            <PostHeader
              label="Custom Button"
              icon={MenuIonicon}
            />
          ),
          headerRight: () => ( 
            <DotsIcon 
            name="dots-horizontal" 
            size={30} 
            color="#ffffff"
            style={styles.dot} 
            />
          ),
          tabBarLabel: 'Post',
          tabBarLabelStyle: {display: 'none'},
          tabBarIcon: ({focused}) => (
            <View
              style={[
                styles.viewContainer,
                {
                  backgroundColor: focused ? '#000000' : 'transparent',
                  borderRadius: focused ? 30 : 0,
                },
              ]}>
              <FeatherPlus
              name="plus-square"
                size={30}
                style={[
                  styles.iconContainer2,
                  {color: focused ? '#ffffff' : '#000000'},
                ]}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },

  viewContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },

  iconContainer: {
    width: 30,
    height: 30,
  },
  iconContainer2: {
    width: 28,
    height: 28,
  },
  dot: {
    alignSelf: 'flex-end',
    marginTop: -30,
    marginRight: 10,
  }
});

export default Tabs;

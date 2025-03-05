import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon1 from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/Ionicons";
import Icon3 from "react-native-vector-icons/Entypo";

// Import your screens
import HomeSC from "../HomeSC";
import ShopSC from "../ShopSC";
import PetDetailSC from "../PetDetails";
import Addscreen from "../Addscreen";
import ProfileSC from "../ProfileSC";
import Notifications from "./Notifications";
import MayAddDetails from "../MayAddDetails";
import BuySell from "../BuySell";
import Food from "../Food";
import Pharmacy from "../pharmacy";
import Veterinarian from "../Veterinarian";
import VeterinarianDetail from "../VeterinarianDetail";
import Myads from "./Myads";
import OTP from "../OTP";
import Terms from "../Terms";
import About from "../About";
import Sell from "../SubScreensBuySell/Sell";
import Buy from "../SubScreensBuySell/Buy";
import SellSubCat from "../SubScreensBuySell/SellSubCat";
import BuySubCat from "../SubScreensBuySell/BuySubCat";
import AddProductHome from "./AddProductHome";
import NotificationContent from "../notifications content/NotificationContent";
import { Platform } from "react-native";

import FoodCat1 from "../SubScreensFood/FoodCat1";
import FoodCat2 from "../SubScreensFood/FoodCat2";
import FoodFinal from "../FoodFinal";
import BuyFinal from "../BuyFinal";

// const backgroundColor = "red";
const stackHeight = 51;
const fontSize = Platform.OS === "ios" ? 12 : 14;
const tabBarStyleHeight = 90;
const backgroundColor = "#1d3f40";
const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={({ navigation }) => ({
        headerShown: true,
        gestureEnabled: true,
        ...TransitionPresets.ModalFadeTransition,
        headerTintColor: "red",
        headerStyle: {
          backgroundColor: backgroundColor,
          elevation: 1,
          height: stackHeight,
        },
        headerTitleStyle: {
          fontSize: 18,
          color: "snow",
        },
        headerLeft: () =>
          navigation.canGoBack() && (
            <Icon3.Button
              name="arrow-with-circle-right"
              size={25}
              backgroundColor="transparent"
              onPress={() => navigation.goBack()}
            />
          ),
      })}
    >
      <HomeStack.Screen name="Home" component={HomeSC} />
      <HomeStack.Screen name="PetDetails" component={PetDetailSC} />
      <HomeStack.Screen name="BuySellScreen" component={BuySell} />
      <HomeStack.Screen name="FoodScreen" component={Food} />
      <HomeStack.Screen name="PharmacyScreen" component={Pharmacy} />
      <HomeStack.Screen name="VeterinarianScreen" component={Veterinarian} />
      {/* Sub Screens  */}
      <HomeStack.Screen name="Buy" component={Buy} />
      <HomeStack.Screen name="Sell" component={Sell} />
      <HomeStack.Screen name="SellSubCat" component={SellSubCat} />
      <HomeStack.Screen name="BuySubCat" component={BuySubCat} />
      <HomeStack.Screen name="AddProductHome" component={AddProductHome} />
      <HomeStack.Screen
        name="VeterinarianDetail"
        component={VeterinarianDetail}
      />
      <HomeStack.Screen name="Category" component={FoodCat1} />
      <HomeStack.Screen name="sub0" component={FoodCat2} />
      <HomeStack.Screen name="sub1" component={FoodFinal} />
      <HomeStack.Screen name="BuyFinal" component={BuyFinal} />
    </HomeStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator
      initialRouteName="Profile"
      screenOptions={({ navigation }) => ({
        headerShown: true,
        gestureEnabled: true,
        ...TransitionPresets.ModalFadeTransition,
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: backgroundColor,
          elevation: 1,
          height: stackHeight,
        },
        headerTitleStyle: {
          fontSize: 18,
          color: "snow",
        },
        headerLeft: () => (
          <Icon3.Button
            name="arrow-with-circle-right"
            size={25}
            backgroundColor="transparent"
            onPress={() => navigation.goBack()}
          />
        ),
      })}
    >
      <ProfileStack.Screen name="Profile" component={ProfileSC} />
      <ProfileStack.Screen name="Myads" component={Myads} />
      <ProfileStack.Screen name="MayAddDetails" component={MayAddDetails} />
      <ProfileStack.Screen name="OTP" component={OTP} />
      <ProfileStack.Screen name="Terms" component={Terms} />
      <ProfileStack.Screen name="About" component={About} />
    </ProfileStack.Navigator>
  );
}

const ShopStack = createStackNavigator();
function ShopStackScreen() {
  return (
    <ShopStack.Navigator
      initialRouteName="Shop"
      screenOptions={({ navigation }) => ({
        headerShown: true,
        gestureEnabled: true,
        ...TransitionPresets.ModalFadeTransition,
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: backgroundColor,
          elevation: 1,
          height: stackHeight,
        },
        headerTitleStyle: {
          fontSize: 18,
          color: "snow",
        },
        headerLeft: () => (
          <Icon3.Button
            name="arrow-with-circle-right"
            size={25}
            backgroundColor="transparent"
            onPress={() => navigation.goBack()}
          />
        ),
      })}
    >
      <ShopStack.Screen
        name="Shop"
        component={ShopSC}
        options={{ headerShown: false }}
      />
      <ShopStack.Screen
        name="PetDetails"
        component={PetDetailSC}
        options={({ route }) => ({
          title: route.params.pet.name ? route.params.pet.name : "Pet Lover KW",
        })}
      />
    </ShopStack.Navigator>
  );
}

const NotificationStack = createStackNavigator();

function NotificationStackScreen() {
  return (
    <NotificationStack.Navigator
      initialRouteName="Notifications"
      screenOptions={({ navigation }) => ({
        headerShown: true,
        gestureEnabled: true,
        ...TransitionPresets.ModalFadeTransition,
        headerTintColor: "snow",
        headerStyle: {
          backgroundColor: backgroundColor,
          elevation: 1,
          height: stackHeight,
        },
        headerTitleStyle: {
          fontSize: 18,
          color: "snow",
        },
        headerLeft: () => (
          <Icon3.Button
            name="arrow-with-circle-right"
            size={25}
            backgroundColor="transparent"
            onPress={() => navigation.goBack()}
          />
        ),
      })}
    >
      <NotificationStack.Screen
        name="Notifications"
        component={Notifications}
        options={{ headerShown: false }}
      />
      <NotificationStack.Screen
        name="NotificationContent"
        component={NotificationContent}
        options={({ route }) => ({
          title: route.params?.pet?.name
            ? route.params.pet.name
            : "Pet Lover KW",
        })}
      />
    </NotificationStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
          tabBarLabelStyle: {
            justifyContent: "center",
            alignContent: "center",
            alignSelf: "center",
            fontSize: fontSize,
          },
          tabBarStyle: {
            backgroundColor: backgroundColor,
            marginHorizontal: "auto",
            margin: 0,
            padding: 0,
            justifyContent: "center",
            alignItems: "center",
            height: tabBarStyleHeight,
            width: "auto",
            alignSelf: "center",
          },
          headerStyle: {
            backgroundColor: backgroundColor,
            elevation: 10,
            height: 90,
          },
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "black",
            color: "white",
            textAlign: "center",
          },
        }}
      >
        <Tab.Screen
          name="الرئيسية"
          component={HomeStackScreen}
          options={{
            tabBarLabel: "الرئيسية",
            tabBarIcon: ({ color, focused }) => (
              <Icon
                name="home-outline"
                color={focused ? "snow" : color}
                size={35}
              />
            ),
          }}
        />
        <Tab.Screen
          name="إضافة"
          component={Addscreen}
          options={{
            tabBarActiveTintColor: "snow",
            tabBarInactiveTintColor: "gray",
            tabBarStyle: {
              fontSize: 20,
              backgroundColor: backgroundColor,
              height: tabBarStyleHeight,
            },
            tabBarLabel: "إضافة",
            tabBarIcon: ({ color, focused }) => (
              <Icon1
                name="plus-square-o"
                color={focused ? "snow" : color}
                size={35}
              />
            ),
          }}
        />
        <Tab.Screen
          name="الحساب"
          component={ProfileStackScreen}
          options={{
            tabBarActiveTintColor: "snow",
            tabBarInactiveTintColor: "gray",
            tabBarStyle: {
              fontSize: 20,
              backgroundColor: backgroundColor,
              height: tabBarStyleHeight,
            },
            tabBarLabel: "الحساب",
            tabBarIcon: ({ color, focused }) => (
              <Icon
                name="person-outline"
                color={focused ? "snow" : color}
                size={35}
              />
            ),
          }}
        />
        <Tab.Screen
          name="السوق"
          component={ShopStackScreen}
          options={{
            tabBarActiveTintColor: "snow",
            tabBarInactiveTintColor: "gray",
            tabBarStyle: {
              fontSize: 20,
              backgroundColor: backgroundColor,
              height: tabBarStyleHeight,
            },
            tabBarLabel: "السوق",
            tabBarIcon: ({ color, focused }) => (
              <Icon1
                name="opencart"
                color={focused ? "snow" : color}
                size={35}
              />
            ),
          }}
        />
        <Tab.Screen
          name="الاشعارات"
          component={NotificationStackScreen}
          options={{
            tabBarActiveTintColor: "snow",
            tabBarInactiveTintColor: "gray",
            tabBarBadge: 68,
            tabBarLabel: "الاشعارات",
            tabBarStyle: {
              fontSize: 20,
              backgroundColor: backgroundColor,
              height: tabBarStyleHeight,
            },
            tabBarIcon: ({ color, focused }) => (
              <Icon
                name="notifications-outline"
                color={focused ? "snow" : color}
                size={35}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer' 
import { theme} from '../core/theme'
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
  PreloaderScreen,
  PreSignupScreen,
  OnboardingScreen,
  CoursesScreen,
  ClassProfileScreen,
  CongratulationScreen,
  HistoryScreen,
  AddCourseScreen,
  PricingScreen,
  TestPreparationScreen,
  TakeTestScreen,
  AccomplishmentScreen,
  ProfileScreen


} from '../screens';

const Stack = createStackNavigator();

function MainNavigator() {
    return (
        <Provider theme={theme}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="PreloaderScreen"
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name="PreloaderScreen" component={PreloaderScreen} />
              <Stack.Screen name="OnboardingScreen" component= {OnboardingScreen} />
              <Stack.Screen name="StartScreen" component={StartScreen} />
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name ="PreSignupScreen" component= {PreSignupScreen} />
              <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
              <Stack.Screen name="Dashboard" component={Dashboard} />
              <Stack.Screen
                name="ResetPasswordScreen"
                component={ResetPasswordScreen}
              />
              <Stack.Screen name="Course" component={CoursesScreen} />
              <Stack.Screen name="ClassProfileScreen" component={ClassProfileScreen} />
              <Stack.Screen name="Congratulation" component={CongratulationScreen} />
              <Stack.Screen name="History" component={HistoryScreen} />
              <Stack.Screen name="AddCourse" component={AddCourseScreen} />
              <Stack.Screen name="Pricing" component={PricingScreen} />
              <Stack.Screen name="TestPreparation" component={TestPreparationScreen} />
              <Stack.Screen name="TakeTest" component={TakeTestScreen} />
              <Stack.Screen name="Accomplishment" component={AccomplishmentScreen} />
              <Stack.Screen name="ProfileScreen" component={ProfileScreen} /> 
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      );
}


 

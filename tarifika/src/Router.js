import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Categories from './pages/Categories';
import Details from './pages/Details';
import Meals from './pages/Meals';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CategoriesPage" component={Categories} />
        <Stack.Screen name="DetailsPage" component={Details} />
        <Stack.Screen name="MealsPage" component={Meals} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router;

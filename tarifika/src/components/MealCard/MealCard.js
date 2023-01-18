import React from "react";
import { Image, View, Text, TouchableWithoutFeedback } from "react-native";
import styles from './MealCard.style';

function MealCard({meals, onSelect}) {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: meals.strMealThumb}}/>
                <Text style={styles.title}>{meals.strMeal}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}
export default MealCard;
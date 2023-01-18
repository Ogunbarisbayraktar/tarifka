import React from "react";
import { Image, View, TouchableOpacity, Text } from "react-native";
import styles from "./DetailCard.style";

function DetailCard({ meals }) {
    return (

        <View style={styles.container}>
            <View style={styles.borderStyle}>
                <Image style={styles.image} source={{ uri: meals.strMealThumb }} />
                <Text style={styles.title}>{meals.strMeal}</Text>
                <Text style={styles.area}>{meals.strArea}</Text>
            </View>
            <Text style={styles.instructions}>{meals.strInstructions}</Text>
        </View>
    )
}

export default DetailCard;
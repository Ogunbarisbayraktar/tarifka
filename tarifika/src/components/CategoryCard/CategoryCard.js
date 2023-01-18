import React from "react";
import { Image, View, Text, TouchableWithoutFeedback } from "react-native";
import styles from './CategortCard.style'

function CategoryCard({categories, onSelect}) {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri:categories.strCategoryThumb}}/>
                <Text style={styles.title}>{categories.strCategory}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}
export default CategoryCard;
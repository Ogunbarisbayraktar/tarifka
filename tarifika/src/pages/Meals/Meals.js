import React, { useState, useEffect } from "react";
import { FlatList, SafeAreaView, Text } from "react-native";
import MealCard from '../../components/MealCard/MealCard';
import useFecth from "../../Hooks/useFetch";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

function Meals({route, navigation}) {
    const {strCategory} = route.params
    const {loading, error, data} = useFecth('https://www.themealdb.com/api/json/v1/1/filter.php?c' +"="+ strCategory);
    
    const handleSelect =  idMeal  => {
        navigation.navigate("DetailsPage", {idMeal});
    };
    
    const renderMeal = ({ item }) => <MealCard meals={item} 
    onSelect={() => handleSelect(item.idMeal)}/>

    if (loading) {
        return <Loading />
    }
    if (error) {
        return <Error />
    }

    return (
        <SafeAreaView>
            <FlatList
                data={data.meals}
                renderItem={renderMeal}
            />
        </SafeAreaView>
    )
}

export default Meals;
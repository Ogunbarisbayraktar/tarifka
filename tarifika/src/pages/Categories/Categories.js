import React, { useEffect, useState } from "react";
import { Text, FlatList, SafeAreaView } from "react-native";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import useFecth from "../../Hooks/useFetch";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";




const Categories = ({ navigation }) => {
    const { error, loading, data } = useFecth('https://www.themealdb.com/api/json/v1/1/categories.php')

    const handleSelect =  strCategory  => {
        navigation.navigate("MealsPage", { strCategory });
    };

    const renderProduct = ({ item }) =>
        <CategoryCard categories={item}
            onSelect={() => handleSelect(item.strCategory)} />;

    if (loading) {
        return <Loading />
    }
    if (error) {
        return <Error />
    }
    return (
        <SafeAreaView>
            <FlatList
                data={data.categories}
                renderItem={renderProduct} />
        </SafeAreaView>
    )
}

export default Categories;
import React from "react";
import { SafeAreaView,Text,FlatList } from "react-native";
import useFecth from "../../Hooks/useFetch";
import DetailsCard from "../../components/DetailCard/DetailCard";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

function Details({route}) {
    const {idMeal} = route.params;
    const {loading, error, data} = useFecth('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + idMeal)
    const renderDetail = ({item}) => <DetailsCard meals={item} />
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
            renderItem={renderDetail}
            />

        </SafeAreaView>
       
    )
}

export default Details;
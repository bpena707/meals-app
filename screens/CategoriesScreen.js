import {FlatList, View, Text, StyleSheet} from "react-native";
import {CATEGORIES} from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";





function CategoriesScreen({ navigation }) {
    function renderCategoryItem(itemData) {
        function presHandler() {
            navigation.navigate("Meals Overview")

        }
        return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={presHandler} />
    }

    return <FlatList
                data={CATEGORIES}
                keyExtractor={(item) => item.id}
                renderItem={renderCategoryItem}
                numColumns={2}

    />
}

export default CategoriesScreen;
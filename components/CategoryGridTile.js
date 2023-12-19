import {Pressable, View, Text, StyleSheet} from "react-native";

function CategoryGridTile({ title, color }) {
    return <View>
        <Pressable>
            <Text>{title}</Text>
        </Pressable>
    </View>

}

export default CategoryGridTile;
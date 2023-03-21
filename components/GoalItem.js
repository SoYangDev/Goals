import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem(props) {
  return (
    <Pressable
      onPress={props.onDeleteItem.bind(this, props.item.id)}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.item.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    flex: 1,
  },
  goalText: {
    color: "white",
  },

  pressedItem: {
    opacity: 0.5,
  },
});

import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal
      visible={props.visible}
      animationType="slide"
      style={styles.modalContainer}
    >
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;
const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "black",
    width: "100%",
    height: 100,
    flex: 1,
    flexDirection: "column",
  },
  inputContainer: {
    justifyContent: "center",
    borderStyle: "solid",
    alignItems: "center",
    borderColor: "#ccc",
    width: "100%",
    padding: 12,
    alignSelf: "center",
    backgroundColor: "#311b6b",
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    marginRight: 8,
    padding: 16,
    borderStyle: "solid",
    backgroundColor: "#e4d0ff",
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  modalContainer: {
    height: 100,
    flex: 1,
    padding: 0,
    width: "100%",
    backgroundColor: "black",
    flexDirection: "column",
  },
});

import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Keyboard,KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      <StatusBar style='dark' backgroundColor='#F8F4E1'/>
      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>-- Today's Tasks --</Text>
        <View style={styles.items}>
          {/* This is where tasks will be added. */}
          {
            taskItems.map((item, index) => {
              return  (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text = {item}/>
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>

      {/* Write a task */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? "padding": "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)}/>
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
    width: '100%',
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#F8F4E1',
    textAlign: 'center',
    textShadowColor: '#FFFFFF',
    textShadowOffset: { width: 2, height: 2},
    textShadowRadius: 1,
    shadowOpacity: 0.5,
    paddingVertical: 10,
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    height: 50,
    backgroundColor: '#F8F4E1',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 3,
    fontSize: 16,
  },
  addWrapper: {
    width: 50,
    height: 50,
    backgroundColor: '#F8F4E1',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 3,
  },
  addText: {

  },
});

import React from 'react';
import {
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { TaskList } from './components/TaskList';

export function Home() {
  interface Task {
    id: string;
    title: string;
  }

  const [newTask, setNewTask] = React.useState('');
  const [tasks, setTasks] = React.useState<Task[]>([]);

  const hadleAddNewTask = () => {
    const data = {
      id: String(new Date().getTime()),
      title: newTask ? newTask : 'Task empty',
    };

    setTasks([...tasks, data]);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, Dev!</Text>
        <TextInput
          onChangeText={setNewTask}
          placeholderTextColor="#555"
          placeholder="Nova tarefa..."
          style={styles.input}></TextInput>
        <TouchableOpacity
          onPress={hadleAddNewTask}
          activeOpacity={0.7}
          style={styles.button}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>

        <Text style={styles.titleTasks}>Minhas Tarefas</Text>

        <TaskList tasks={tasks} />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#121214',
  },
  container: {
    flex: 1,
    backgroundColor: '#121214',
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  title: {
    color: '#F1F1F1',
    fontSize: 23,
    fontWeight: 'bold',
  },
  titleTasks: {
    color: '#F1F1F1',
    fontSize: 23,
    fontWeight: 'bold',
    marginVertical: 50,
  },
  input: {
    backgroundColor: '#29292e',
    color: '#f1f1f1',
    padding: Platform.OS == 'ios' ? 15 : 12,
    marginTop: 30,
    borderRadius: 7,
  },
  button: {
    backgroundColor: '#eba417',
    padding: Platform.OS == 'ios' ? 15 : 12,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#121214',
    fontSize: 18,
    fontWeight: 'bold',
  }
});

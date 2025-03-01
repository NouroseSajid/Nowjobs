import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";

const TodosList = ({ todos, navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.todoItem}
      onPress={() => {
        if (item.id === 1) {
          navigation.navigate('Settings');
        } else if (item.id === 2) {
          navigation.navigate('backupJobs');
        }
      }}
    >
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
      <Text style={styles.arrow}> {'=>'} </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo List</Text>
      {todos.length === 0 ? (
        <Text>No To-Do's for now</Text>
      ) : (
        <FlatList
          data={todos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()

          }
        />
      )}
    </View>
  );
};

export default TodosList;

const styles = StyleSheet.create({
  container: {
    padding:15,
    flex: 1,
    backgroundColor: 'lightgrey',
    borderRadius:
    10,

  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    
  },
  noTodos: {
    textAlign: 'center',
    color: 'gray',
  },
  todoItem: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    flexDirection: 'row', // Align text and arrow in a row
    justifyContent: 'space-between', // Space between text and arrow
    alignItems: 'center',
    flex: 1,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'gray',
  },
  arrow: {
    fontSize: 22,
    color: '#000',
  },
});



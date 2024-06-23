import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';

const StudentsPage = ({ navigation ,handleSidebarItemPress}) => {
    const [searchText, setSearchText] = useState('');
  
    const handleSearch = () => {
        handleSidebarItemPress("ViewStudent")
    };
  
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Type here to search..."
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={handleSearch} // Optional: Trigger search on submit
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          {/* You can replace the text with a search icon or any other UI */}
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    input: {
      width: '80%',
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      paddingHorizontal: 10,
      marginBottom: 20,
    },
    searchButton: {
      backgroundColor: '#007BFF',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  
  export default StudentsPage;
  
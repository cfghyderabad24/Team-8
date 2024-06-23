import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import StudentsPage from '../pages/StudentsPage';
import ViewStudent from '../pages/ViewStudent';
import BookSearchApp from '../pages/Book';
import TransactionPage from '../pages/inout';

const Sidebar = () => {
  const navigation = useNavigation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const translateX = useRef(new Animated.Value(-300)).current;

  const closeSidebar=()=>{
    Animated.timing(translateX, {
      toValue: -300,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setIsOpen(false);
  }

  const toggleSidebar = () => {
    Animated.timing(translateX, {
      toValue: isOpen ? -300 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setIsOpen(!isOpen);
  };

  const handleSidebarItemPress = (item) => {
    setSelectedItem(item);
    closeSidebar();
  };

  const renderMainContent = () => {
    // setIsOpen(false);
    switch (selectedItem) {
      case 'Students':
        return <StudentsPage handleSidebarItemPress={handleSidebarItemPress}/>;
      case 'ViewStudent':
        return <ViewStudent/>
      case 'Books':
        return <BookSearchApp/>
      case 'Transactions':
        return <TransactionPage/>
      // Add more cases for other sidebar items as needed
    }
  };

  return (
    <View style={styles.container}>
    
      {/* Main content */}
      <TouchableOpacity onPress={toggleSidebar} style={styles.toggleButton}>
        <Text style={styles.toggleText}>{isOpen ? '-' : '+'} </Text>
      </TouchableOpacity>

      {renderMainContent()}

      {/* Sidebar */}
      <Animated.View style={[styles.sidebar, { transform: [{ translateX }] }]}>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      
        <Text style={styles.sidebarText} onPress={() => handleSidebarItemPress('home')}>Home</Text>
        <Text style={styles.sidebarText} onPress={() => handleSidebarItemPress('Books')}>Books</Text>
        <Text style={styles.sidebarText} onPress={() => handleSidebarItemPress('Transactions')}>Check-in / Check-out</Text>
        <Text style={styles.sidebarText} onPress={() => handleSidebarItemPress('Students')}>Students</Text>
        <Text style={styles.sidebarText} onPress={() => handleSidebarItemPress('Analytics')}>Analytics</Text>
        <Text style={styles.sidebarText} onPress={() => handleSidebarItemPress('')}>Logout</Text>
        {/* Add more sidebar items as needed */}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  mainContent: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 300,
    backgroundColor: 'rgb(255,255,255)',
    padding: 20,
    zIndex: 100,
    elevation: 5,
  },
  toggleButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    zIndex: 110, // Ensures the button is always on top
  },
  toggleText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sidebarText: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default Sidebar;

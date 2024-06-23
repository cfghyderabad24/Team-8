import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Drawer = createDrawerNavigator();

// Placeholder components for each section
function HomeScreen() {
    const [selectedLine, setSelectedLine] = useState(null);
    const [data, setData] = useState({
        registeredStudents: 0,
        totalBooks: 0,
        availableBooks: 0,
        booksCheckedOut: 0,
        dueBooks: 0,
    });

    // useEffect(() => {
    //     // Simulate fetching data from a backend API
    //     fetchData();
    // }, []);

    const fetchData = async () => {
        // Replace with your actual data-fetching logic
        try {
            // Example: Fetch data from an API
            const response = await fetch('https://example.com/api/data');
            const result = await response.json();
            // Update state with fetched data
            setData(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleLinePress = (line) => {
        setSelectedLine(line);
    };

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                style={[styles.flag, selectedLine === 1 && styles.selected]}
                onPress={() => handleLinePress(1)}
            >
                <Text style={styles.text}>Number of Registered students: {data.registeredStudents}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.flag, selectedLine === 2 && styles.selected]}
                onPress={() => handleLinePress(2)}
            >
                <Text style={styles.text}>Total Number of Books: {data.totalBooks}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.flag, selectedLine === 3 && styles.selected]}
                onPress={() => handleLinePress(3)}
            >
                <Text style={styles.text}>Number of Available Books: {data.availableBooks}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.flag, selectedLine === 4 && styles.selected]}
                onPress={() => handleLinePress(4)}
            >
                <Text style={styles.text}>Books Checked Out: {data.booksCheckedOut}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.flag, selectedLine === 5 && styles.selected]}
                onPress={() => handleLinePress(5)}
            >
                <Text style={styles.text}>Number of Due Books: {data.dueBooks}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

function BooksScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Books Screen</Text>
        </SafeAreaView>
    );
}

function CheckInScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Check-In Screen</Text>
        </SafeAreaView>
    );
}

function CheckOutScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Check-Out Screen</Text>
        </SafeAreaView>
    );
}

function AnalyticsScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Analytics Screen</Text>
        </SafeAreaView>
    );
}

function LogOutScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Log Out Screen</Text>
        </SafeAreaView>
    );
}

function MyDrawer() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#ffe0b2',  // Very light orange
                },
                headerTintColor: '#000',  // Dark text for contrast
                drawerStyle: {
                    backgroundColor: '#ffe0b2',  // Very light orange
                },
                drawerActiveTintColor: '#ff9800',
                drawerInactiveTintColor: '#000',  // Dark text for contrast
            }}
        >
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Books" component={BooksScreen} />
            <Drawer.Screen name="Check-In" component={CheckInScreen} />
            <Drawer.Screen name="Check-Out" component={CheckOutScreen} />
            <Drawer.Screen name="Analytics" component={AnalyticsScreen} />
            <Drawer.Screen name="Log Out" component={LogOutScreen} />
        </Drawer.Navigator>
    );
}

export default function HomePage() {
    return (
        <HomeScreen/>
        // <NavigationContainer>
        //     <StatusBar barStyle="dark-content" />
        //     <MyDrawer />
        // </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        paddingLeft: 20, // Adjust padding as needed
    },
    flag: {
        backgroundColor: '#b2ebf2',  // Light cyan for the flag background
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 5,
        borderRadius: 5,
        width: '80%', // Adjust width as needed
    },
    selected: {
        backgroundColor: '#ffccbc',  // Light orange for selected state
    },
    text: {
        fontSize: 24,
        color: '#000',  // Dark text for contrast
    },
});


import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';

// Define the source of your image (replace with your actual image source)
const myLogo = require('../assets/Logo.png');

function HomeScreen() {
    const [selectedLine, setSelectedLine] = useState(null);
    const [data] = useState({
        registeredStudents: 30,
        totalBooks: 100,
        availableBooks: 50,
        booksCheckedOut: 50,
        dueBooks: 15,
    });

    const handleLinePress = (line) => {
        setSelectedLine(line);
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Heading */}
            <Text style={styles.heading}>Library Ledger</Text>

            {/* Image component at the top-right corner */}
            <Image source={myLogo} style={styles.logo} />

            {/* Touchable components for each section */}
            <TouchableOpacity
                style={[styles.flag, { backgroundColor: '#d3f7fb' }, selectedLine === 1 && styles.selected]}
                onPress={() => handleLinePress(1)}
            >
                <Text style={styles.text}>Registered number of Students</Text>
                <View style={styles.numberContainer}>
                    <Text style={styles.number}>{data.registeredStudents}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.flag, { backgroundColor: '#c8e6c9' }, selectedLine === 2 && styles.selected]}
                onPress={() => handleLinePress(2)}
            >
                <Text style={styles.text}>Total Books</Text>
                <View style={styles.numberContainer}>
                    <Text style={styles.number}>{data.totalBooks}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.flag, { backgroundColor: '#e1bee7' }, selectedLine === 3 && styles.selected]}
                onPress={() => handleLinePress(3)}
            >
                <Text style={styles.text}>Available number of Books</Text>
                <View style={styles.numberContainer}>
                    <Text style={styles.number}>{data.availableBooks}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.flag, { backgroundColor: '#fff9c4' }, selectedLine === 4 && styles.selected]}
                onPress={() => handleLinePress(4)}
            >
                <Text style={styles.text}>Books Checked Out</Text>
                <View style={styles.numberContainer}>
                    <Text style={styles.number}>{data.booksCheckedOut}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.flag, { backgroundColor: '#f8bbd0' }, selectedLine === 5 && styles.selected]}
                onPress={() => handleLinePress(5)}
            >
                <Text style={styles.text}>Books Due</Text>
                <View style={styles.numberContainer}>
                    <Text style={styles.number}>{data.dueBooks}</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff', // Background color of the SafeAreaView
        paddingTop: 50, // Adjust padding as needed
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    logo: {
        position: 'absolute',
        top: 10,
        right: 10,
        width: 50,
        height: 50,
        marginTop: 30,
        marginRight: 20
    },
    flag: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#b2ebf2',  // Light cyan for the flag background
        paddingVertical: 10,
        paddingHorizontal: 15, // Adjusted padding
        marginVertical: 10,
        borderRadius: 10,
        width: '80%', // Adjust width as needed
    },
    selected: {
        backgroundColor: '#ffccbc', // Light orange for selected state
    },
    text: {
        fontSize: 14, // Reduced font size
        color: '#333',
        fontWeight: 'bold',
    },
    numberContainer: {
        backgroundColor: '#e0e0e0',
        padding: 10,
        borderRadius: 5,
    },
    number: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
});

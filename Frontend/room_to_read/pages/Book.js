import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';

const bookData = [
  { bookName: 'Harry Potter', availability: 'Not Available', days: 6 },
  { bookName: 'Hatchet', availability: 'Not Available', days: 7 },
  { bookName: 'Lord of the Rings', availability: 'Available', days: 0 },
  { bookName: 'The Phantom Tollbooth', availability: 'Not Available', days: 4 },
  { bookName: 'The City of Ember', availability: 'Available', days: 0 }
  // Add more dummy books as needed
];

const BookSearchApp = () => {
  const [query, setQuery] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleSearch = (text) => {
    setQuery(text);
    setSelectedBook(null); // Clear selected book when user starts searching
    if (text) {
      const filtered = bookData.filter((book) =>
        book.bookName.toLowerCase().startsWith(text.toLowerCase())
      );
      setFilteredBooks(filtered);
    } else {
      setFilteredBooks([]);
    }
  };

  const handleBookSelect = (book) => {
    setQuery(book.bookName);
    setSelectedBook(book);
    setFilteredBooks([]);
  };

  const renderBookDetails = () => {
    if (!query || !selectedBook) return null;

    return (
      <View style={styles.tableContainer}>
        <View style={styles.tableRow}>
          <Text style={styles.tableHeader}>Book Name</Text>
          <Text style={styles.tableHeader}>Availability</Text>
          <Text style={styles.tableHeader}>Days</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>{selectedBook.bookName}</Text>
          <Text style={styles.tableCell}>{selectedBook.availability}</Text>
          <Text style={styles.tableCell}>{selectedBook.days}</Text>
        </View>
      </View>
    );
  };

  const renderNoResults = () => {
    if (query && filteredBooks.length === 0 && !selectedBook) {
      return (
        <View style={styles.noResultsContainer}>
          <Text style={styles.noResultsText}>Invalid Book Name</Text>
        </View>
      );
    }
    return null;
  };

  const renderAllBooks = () => {
    if (query) return null;

    return (
      <View style={styles.tableContainer}>
        <View style={styles.tableRow}>
          <Text style={styles.tableHeader}>Book Name</Text>
          <Text style={styles.tableHeader}>Availability</Text>
          <Text style={styles.tableHeader}>Days</Text>
        </View>
        {bookData.map((book) => (
          <View key={book.bookName} style={styles.tableRow}>
            <Text style={styles.tableCell}>{book.bookName}</Text>
            <Text style={styles.tableCell}>{book.availability}</Text>
            <Text style={styles.tableCell}>{book.days}</Text>
          </View>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Autocomplete
        data={filteredBooks}
        defaultValue={query}
        onChangeText={handleSearch}
        placeholder="Search for a book"
        flatListProps={{
          keyExtractor: (item) => item.bookName,
          renderItem: ({ item }) => (
            <Text
              style={styles.itemText}
              onPress={() => handleBookSelect(item)}
            >
              {item.bookName}
            </Text>
          ),
        }}
        inputContainerStyle={styles.inputContainer}
        listContainerStyle={styles.listContainer}
      />
      {renderNoResults()}
      {renderBookDetails()}
      {renderAllBooks()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  listContainer: {
    backgroundColor: '#fff',
    marginTop: 10,
  },
  itemText: {
    padding: 10,
    fontSize: 16,
    color: '#333',
  },
  tableContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tableHeader: {
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    backgroundColor: '#f2f2f2',
    padding: 10,
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
    padding: 10,
  },
  noResultsContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#ffe6e6',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ffcccc',
  },
  noResultsText: {
    textAlign: 'center',
    color: '#cc0000',
    fontSize: 16,
  },
});

export default BookSearchApp;
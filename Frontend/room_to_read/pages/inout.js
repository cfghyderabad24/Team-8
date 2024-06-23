import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import RadioForm from 'react-native-simple-radio-button';

const TransactionPage = () => {
  const [transaction, setTransaction] = useState('');
  const [selectedBook, setSelectedBook] = useState('');
  const [selectedStudent, setSelectedStudent] = useState('');
  const [completed, setCompleted] = useState(null);
  const [rating, setRating] = useState('');

  const handleTransactionChange = (value) => {
    setTransaction(value);
    setSelectedBook('');
    setSelectedStudent('');
    setCompleted(null);
    setRating('');
  };

  const handleSubmit = () => {
    if (transaction === 'check-in') {
      if (rating < '1' || rating > '3' || rating === '') {
        Alert.alert('Invalid Rating', 'Rating must be between 1 and 3.');
        return;
      }
    }

    const formData = {
      transaction,
      selectedBook,
      selectedStudent,
      completed,
      rating
    };
    console.log('Form Data:', formData);

    const successMessage = transaction === 'check-out' ? 'Successfully Checked-out' : 'Successfully Checked-in';
    Alert.alert('Success', successMessage);

    setTransaction('');
    setSelectedBook('');
    setSelectedStudent('');
    setCompleted(null);
    setRating('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.header}>Book with Ease: Check-In and Out in Seconds</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            <Button
              title="Check-In"
              onPress={() => handleTransactionChange('check-in')}
              color={transaction === 'check-in' ? '#4CAF50' : '#8BC34A'}
            />
          </View>
          <View style={styles.buttonWrapper}>
            <Button
              title="Check-Out"
              onPress={() => handleTransactionChange('check-out')}
              color={transaction === 'check-out' ? '#2196F3' : '#64B5F6'}
            />
          </View>
        </View>

        {transaction === 'check-out' && (
          <>
            <Text style={styles.label}>Book:</Text>
            <RNPickerSelect
              onValueChange={(value) => setSelectedBook(value)}
              items={[
                { label: 'The Cat in the Hat, ASD2351', value: 'book1' },
                { label: 'Green Eggs and Ham, OPT7589', value: 'book2' },
                { label: 'Charlottes Web, PIR7183', value: 'book1' },
                { label: 'Go, Dog. Go!, URT8162', value: 'book2' },
              ]}
              style={pickerSelectStyles}
            />

            <Text style={styles.label}>Student:</Text>
            <RNPickerSelect
              onValueChange={(value) => setSelectedStudent(value)}
              items={[
                { label: 'Anush, 1', value: 'studentA' },
                { label: 'Kiara, 2', value: 'studentB' },
                { label: 'Shreya, 3', value: 'studentA' },
                { label: 'Anoop, 4', value: 'studentB' },
              ]}
              style={pickerSelectStyles}
            />
            <Button title="Submit" onPress={handleSubmit} color="#FF5722" />
          </>
        )}

        {transaction === 'check-in' && (
          <>
            <Text style={styles.label}>Book:</Text>
            <RNPickerSelect
              onValueChange={(value) => setSelectedBook(value)}
              items={[
                { label: 'Where the Wild Things Are', value: 'book1' },
                { label: 'Goodnight Moon', value: 'book2' },
                { label: 'The Very Hungry Caterpillar', value: 'book1' },
                { label: 'Brown Bear, Brown Bear, What Do You See?', value: 'book2' },
              ]}
              style={pickerSelectStyles}
            />

            <Text style={styles.label}>Student:</Text>
            <RNPickerSelect
              onValueChange={(value) => setSelectedStudent(value)}
              items={[
                { label: 'Anush, 1', value: 'studentA' },
                { label: 'Kiara, 2', value: 'studentB' },
                { label: 'Shreya, 3', value: 'studentA' },
                { label: 'Anoop, 4', value: 'studentB' },
              ]}
              style={pickerSelectStyles}
            />

            <Text style={styles.label}>Feedback:</Text>
            <Text style={styles.label}>Completed:</Text>
            <RadioForm
              radio_props={[
                { label: 'Yes', value: true },
                { label: 'No', value: false },
              ]}
              initial={-1}
              onPress={(value) => setCompleted(value)}
              formHorizontal={true}
              labelHorizontal={true}
              buttonColor={'#2196f3'}
              selectedButtonColor={'#2196f3'}
              labelStyle={styles.radioLabel}
            />

            <Text style={styles.label}>Rating (1 to 3):</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              maxLength={1}
              value={rating}
              onChangeText={text => {
                const num = parseInt(text, 10);
                if (num >= 1 && num <= 3) {
                  setRating(text);
                } else {
                  setRating('');
                }
              }}
            />

            <Button title="Submit" onPress={handleSubmit} color="#FF5722" />
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  contentContainer: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 5,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: '#666',
  },
  radioLabel: {
    fontSize: 16,
    marginRight: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
    fontSize: 16,
    marginVertical: 10,
    borderRadius: 4,
    backgroundColor: '#F0F0F0',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    backgroundColor: '#F0F0F0',
    marginBottom: 10,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
    backgroundColor: '#F0F0F0',
    marginBottom: 10,
  },
});

export default TransactionPage;

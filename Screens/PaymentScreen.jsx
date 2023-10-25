import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function PaymentScreen() {
  const navigation = useNavigation();
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCVV] = useState('');

  const handlePayment = () => {
    // Perform payment processing here (e.g., using a payment gateway)
    alert('Payment Successful!');
  };

  return (
    <View style={styles.container}>
      <Button
        title="Home Screen"
        onPress={() =>navigation.navigate('HomeScreen')}
      />
      <View style={styles.paymentCard}>
        <Text style={styles.header}>Card Payment</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter card number"
          value={cardNumber}
          onChangeText={(text) => setCardNumber(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter cardholder name"
          value={cardName}
          onChangeText={(text) => setCardName(text)}
        />
        <View style={styles.row}>
          <View style={styles.expiryInput}>
            <TextInput
              style={styles.input}
              placeholder="MM/YY"
              value={expiry}
              onChangeText={(text) => setExpiry(text)}
            />
          </View>
          <View style={styles.cvvInput}>
            <TextInput
              style={styles.input}
              placeholder="CVV"
              value={cvv}
              onChangeText={(text) => setCVV(text)}
            />
          </View>
        </View>
        <Button
          title="Pay Now"
          onPress={handlePayment}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paymentCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  expiryInput: {
    flex: 1,
    marginRight: 5,
  },
  cvvInput: {
    flex: 1,
    marginLeft: 5,
  },
});

export default PaymentScreen;

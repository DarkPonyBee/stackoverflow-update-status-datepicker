/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  Text,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {format} from 'date-fns';

const App = () => {
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [getDate, setGetDate] = useState(null);
  const showDatePicker = () => setDatePickerVisible(true);

  const hideDatePicker = () => setDatePickerVisible(false);

  const handleConfirm = (date) => {
    setGetDate(format(new Date(date), 'MM/dd/yyy'));
    hideDatePicker();
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={showDatePicker} style={styles.button}>
          <Text>Open Date Time Picker</Text>
        </TouchableOpacity>
        <Text>{getDate}</Text>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </SafeAreaView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'grey',
    padding: 20,
    marginBottom: 20,
  },
});

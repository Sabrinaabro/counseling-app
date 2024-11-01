import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, Text, Layout } from '@ui-kitten/components';
import { FontAwesome } from '@expo/vector-icons';

const PaymentScreen = () => {
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedDuration, setSelectedDuration] = useState(0);
  const [selectedTime, setSelectedTime] = useState(0);
  const [selectedMedia, setSelectedMedia] = useState('Voice Call');

  const days = [
    { day: 'Mon', date: '16 Nov' },
    { day: 'Tue', date: '17 Nov' },
    { day: 'Wed', date: '18 Nov' },
    { day: 'Sat', date: '21 Nov' },
  ];

  const times = ['08:00 AM', '04:00 PM', '09:00 PM'];

  const getPrice = () => (selectedDuration === 0 ? 'PKR 9,000' : 'PKR 15,000');
  const selectedDate = days[selectedDay].date;

  return (
    <Layout style={styles.container}>

      <Text category="h6" style={styles.sectionTitle}>Time Slots Available</Text>
      <View style={styles.timeSlotContainer}>
        {days.map((dayItem, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.timeCard, selectedDay === index && styles.selectedCard]}
            onPress={() => setSelectedDay(index)}
          >
            <View style={[styles.dayContainer, selectedDay === index && styles.selectedDayContainer]}>
              <Text style={selectedDay === index ? styles.selectedDayText : styles.dayText}>
                {dayItem.day}
              </Text>
            </View>
            <View style={styles.dateContainer}>
              <Text style={selectedDay === index ? styles.selectedDateText : styles.dateText}>
                {dayItem.date}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <Text category="h6" style={styles.sectionTitle}>Duration you need</Text>
      <View style={styles.durationContainer}>
        <TouchableOpacity
          style={[styles.durationButton, selectedDuration === 0 && styles.selectedDuration]}
          onPress={() => setSelectedDuration(0)}
        >
          <Text style={selectedDuration === 0 ? styles.selectedText : styles.durationText}>60 minutes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.durationButton, selectedDuration === 1 && styles.selectedDuration]}
          onPress={() => setSelectedDuration(1)}
        >
          <Text style={selectedDuration === 1 ? styles.selectedText : styles.durationText}>120 minutes</Text>
        </TouchableOpacity>
      </View>

      <Text category="h6" style={styles.sectionTitle}>Available for {selectedDate}</Text>
      <View style={styles.timeButtonContainer}>
        {times.map((time, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.timeButton, selectedTime === index && styles.selectedTimeButton]}
            onPress={() => setSelectedTime(index)}
          >
            <Text style={selectedTime === index ? styles.selectedText : styles.timeButtonText}>{time}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text category="h6" style={styles.sectionTitle}>Media Counseling</Text>
      <View style={styles.mediaContainer}>
        <TouchableOpacity
          style={[styles.mediaButton, selectedMedia === 'Voice Call' && styles.selectedMedia]}
          onPress={() => setSelectedMedia('Voice Call')}
        >
          <FontAwesome name="phone" size={24} color={selectedMedia === 'Voice Call' ? '#FFFFFF' : '#7BAFD4'} />
          <Text style={selectedMedia === 'Voice Call' ? styles.selectedText : styles.mediaText}>Voice Call</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.mediaButton, selectedMedia === 'Video Call' && styles.selectedMedia]}
          onPress={() => setSelectedMedia('Video Call')}
        >
          <FontAwesome name="video-camera" size={24} color={selectedMedia === 'Video Call' ? '#FFFFFF' : '#7BAFD4'} />
          <Text style={selectedMedia === 'Video Call' ? styles.selectedText : styles.mediaText}>Video Call</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.priceContainer}>
        <Text category="h6" style={styles.priceText}>{getPrice()}</Text>
        <Button style={styles.confirmButton}>
          Confirm Payment
        </Button>
      </View>
      
      <Text style={styles.guaranteeText}>
        <FontAwesome name="check-circle" size={16} color="#777777" /> Your counseling experience is guaranteed safe
      </Text>
      
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8F8F8',
    justifyContent: 'space-between', // This allows the layout to space items properly
  },
  sectionTitle: {
    marginBottom: 10,
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    color: '#000000',
  },
  timeSlotContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  timeCard: {
    width: 70,
    height: 100,
    borderRadius: 12,
    borderColor: '#B9D9EB',
    borderWidth: 1,
    margin: 5,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  selectedCard: {
    borderColor: '#F8A444',
    borderWidth: 2,
    backgroundColor: '#E0F2F1',
  },
  dayContainer: {
    backgroundColor: '#E0F7FA',
    width: '100%',
    paddingVertical: 8,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    alignItems: 'center',
  },
  selectedDayContainer: {
    backgroundColor: '#7BAFD4',
  },
  dayText: {
    color: '#7BAFD4',
    fontWeight: 'bold',
  },
  selectedDayText: {
    color: '#FFFFFF',
  },
  dateContainer: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  dateText: {
    color: '#7BAFD4',
  },
  selectedDateText: {
    color: '#7BAFD4',
    fontWeight: 'bold',
  },
  durationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  durationButton: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#B9D9EB',
    width: '48%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  selectedDuration: {
    backgroundColor: '#7BAFD4',
  },
  durationText: {
    color: '#7BAFD4',
  },
  selectedText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  timeButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  timeButton: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#B9D9EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  selectedTimeButton: {
    backgroundColor: '#7BAFD4',
  },
  timeButtonText: {
    color: '#7BAFD4',
  },
  mediaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  mediaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#B9D9EB',
    width: '48%',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  selectedMedia: {
    backgroundColor: '#7BAFD4',
  },
  mediaText: {
    color: '#7BAFD4',
    marginLeft: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end', 
    marginBottom: 20,
  },
  priceText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  confirmButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#F8A444',
  },
  guaranteeText: {
    fontSize: 14,
    color: '#777777',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default PaymentScreen;

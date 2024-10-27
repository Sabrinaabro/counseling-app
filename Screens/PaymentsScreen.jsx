import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, Text, Layout } from '@ui-kitten/components';
import { LinearGradient } from 'expo-linear-gradient';
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
        
          {/* Time Slots */}
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

          {/* Duration Selection */}
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

          {/* Available Time as Buttons */}
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

          {/* Media Counseling Options */}
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

          {/* Pricing and Confirm Button */}
          <Text category="h6" style={styles.sectionTitle}>{getPrice()}</Text>
          <Button style={styles.confirmButton}>
            Confirm
          </Button>
          
     
      </Layout>
  
  );
};

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  contentContainer: {
    paddingBottom: 40,
  },
  sectionTitle: {
    marginBottom: 35,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',  // Changed to black
  },
  timeSlotContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  timeCard: {
    width: 70,
    height: 100,
    borderRadius: 10,
    borderColor: '#B9D9EB',
    borderWidth: 1,
    margin: 5,
    overflow: 'hidden',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  selectedCard: {
    borderColor: '#7BAFD4',
    borderWidth: 1,
  },
  dayContainer: {
    backgroundColor: '#E0F7E7',
    width: '100%',
    paddingVertical: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
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
    fontWeight: 'bold',
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
    justifyContent: 'space-around',
    marginVertical: 5,
  },
  durationButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#B9D9EB',
    width: '45%',
    alignItems: 'center',
  },
  selectedDuration: {
    backgroundColor: '#7BAFD4',
  },
  durationText: {
    color: '#7BAFD4',
  },
  selectedText: {
    color: '#FFFFFF',
  },
  timeButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  timeButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#B9D9EB',
    marginHorizontal: 5,
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
    marginVertical: 10,
  },
  mediaButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#B9D9EB',
    width: '45%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selectedMedia: {
    backgroundColor: '#7BAFD4',
  },
  mediaText: {
    color: '#7BAFD4',
    marginLeft: 8,
  },
  confirmButton: {
    marginTop: 30,
    borderRadius: 8,
    backgroundColor: '#7BAFD4',
    borderColor: '#B9D9EB',
  },
});

export default PaymentScreen;

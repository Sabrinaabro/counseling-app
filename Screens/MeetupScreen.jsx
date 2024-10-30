import React from 'react';
import { View, FlatList, StyleSheet, TextInput, Image } from 'react-native'; // Added Image import
import { Layout, Card, Text, Icon, Button } from '@ui-kitten/components';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {  faThumbsUp, faLeaf, faShield, faFilter } from '@fortawesome/free-solid-svg-icons';

const locations = [
  {
    id: '1',
    name: 'Karachi Counseling Center',
    address: 'Clifton Block 5, Karachi, Sindh, 75600',
    rating: '4.8',
    reviews: '50+ reviews',
    imageUrl: require('../assets/karachi.jpeg'),
  },
  {
    id: '2',
    name: 'Lahore Therapy Centre',
    address: 'Gulberg III, Lahore, Punjab, 54660',
    rating: '4.9',
    reviews: '80+ reviews',
    imageUrl: require('../assets/lahore.jpeg'),
  },
  {
    id: '3',
    name: 'Islamabad Mind Clinic',
    address: 'F-7, Islamabad, Islamabad Capital Territory, 44000',
    rating: '4.7',
    reviews: '100+ reviews',
    imageUrl: require('../assets/isb.jpeg'),
  },
];

const MeetupScreen = () => {
  const renderLocationItem = ({ item }) => (
    <Card style={styles.locationCard}>
      <View style={styles.imageContainer}>
        <Image source={item.imageUrl} style={styles.locationImage} />
      </View>
      <Layout style={styles.locationInfo}>
        <Text category='h6'>{item.name}</Text>
        <Text appearance='hint' category='s1'>{item.address}</Text>
        <View style={styles.ratingContainer}>
          <Text category='s1' style={styles.rating}>{item.rating}</Text>
          <Text appearance='hint'>{item.reviews}</Text>
        </View>
      </Layout>
    </Card>
  );

  return (
    <Layout style={styles.container}>
     

      <Layout style={styles.filters} level='2'>
        <Button style={styles.filterButton} appearance='ghost' accessoryLeft={() => <FontAwesomeIcon icon={faThumbsUp} size={24} color="#7BAFD4" />}>
          Good
        </Button>
        <Button style={styles.filterButton} appearance='ghost' accessoryLeft={() => <FontAwesomeIcon icon={faLeaf} size={24} color="#7BAFD4" />}>
          Calm
        </Button>
        <Button style={styles.filterButton} appearance='ghost' accessoryLeft={() => <FontAwesomeIcon icon={faShield} size={24} color="#7BAFD4" />}>
          Safe
        </Button>
      </Layout>

      {/* Search and Filter Options */}
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="All Location" />
        <FontAwesomeIcon icon={faFilter} size={24} color="#f8a444" />
      </View>

      {/* Counseling Locations List */}
      <FlatList
        data={locations}
        keyExtractor={(item) => item.id}
        renderItem={renderLocationItem}
        contentContainerStyle={styles.locationList}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 20,
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontWeight: 'bold',
    marginHorizontal: 8,
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  filterButton: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
  },
  searchInput: {
    flex: 1,
    padding: 10,
  },
  locationList: {
    paddingHorizontal: 16,
  },
  locationCard: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  imageContainer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  locationImage: {
    width: '100%',
    height: 150,
  },
  locationInfo: {
    padding: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  rating: {
    color: '#ff9800',
    marginRight: 4,
  },
});

export default MeetupScreen;

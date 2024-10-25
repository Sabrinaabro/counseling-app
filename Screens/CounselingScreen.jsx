import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, Image } from 'react-native';
import { Layout, Text, Button, Card } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import { FIRESTORE_DB, FIREBASE_AUTH } from '../FirebaseConfig';
import { getDoc, doc } from "firebase/firestore";

const CounselingScreen = () => {
  const [userName, setUserName] = useState({ firstName: '', lastName: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserName = async () => {
      const user = FIREBASE_AUTH.currentUser;
      if (user) {
        const userDoc = doc(FIRESTORE_DB, 'users', user.uid);
        try {
          const userSnapshot = await getDoc(userDoc);
          if (userSnapshot.exists()) {
            setUserName(userSnapshot.data());
          } else {
            console.log(`No such document for UID: ${user.uid}`);
          }
        } catch (error) {
          console.error("Error fetching document:", error);
        }
      } else {
        console.log("No user is logged in.");
      }
      setLoading(false);
    };
    fetchUserName();
  }, []);

  return (
    <Layout style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <LinearGradient colors={['#7BAFD4', '#B9D9EB']} style={styles.gradientBackground}>
          <View style={styles.header}>
            <Text category="h4" style={styles.greeting}>
              {loading ? "Loading..." : `Hi, ${userName.firstName || ''} ${userName.lastName || ''}!`}
            </Text>
            <Text category="s1" appearance="hint" style={styles.subText}>
              Find a solution for your problem.
            </Text>
            <View style={styles.serviceContainer}>
              <ServiceButton icon="users" label="Meetup" />
              <ServiceButton icon="video-camera" label="Video Call" />
              <ServiceButton icon="heart" label="Couples" />
              <ServiceButton icon="archive" label="Package" />
            </View>
          </View>
        </LinearGradient>
        <View style={styles.footer}>
          <Text category="h5" style={styles.issueHeading}>
            What’s Your Issue?
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
            <CategoryButton label="Personality" active />
            <CategoryButton label="Worried" />
            <CategoryButton label="Parenting" />
            <CategoryButton label="Relationships" />
          </ScrollView>
          <DoctorCard
            imageUrl={require('../assets/ainab.png')}
            name="Kezia Malista, MD, PsyD"
            specialties="Stress, anxiety, relationship..."
            rating="5.0"
            reviews="80+ reviews"
          />
          <DoctorCard
            imageUrl={require('../assets/sabrina.jpg')}
            name="Kelly George, MD, PsyD"
            specialties="Stress, anxiety, relationship..."
            rating="5.0"
            reviews="80+ reviews"
          />
        </View>
      </ScrollView>
    </Layout>
  );
};

const ServiceButton = ({ icon, label }) => (
  <Card style={styles.serviceCard}>
    <View style={styles.iconContainer}>
      <Icon name={icon} size={24} color="#fff" />
    </View>
    <Text category="s1" style={styles.label}>
      {label}
    </Text>
  </Card>
);

const CategoryButton = ({ label, active }) => (
  <Button style={[styles.categoryButton, active && styles.activeCategoryButton]} size="small">
    {label}
  </Button>
);

const DoctorCard = ({ imageUrl, name, specialties, rating, reviews }) => (
  <Card style={styles.doctorCard}>
    <View style={styles.doctorInfo}>
      <Image source={imageUrl} style={styles.doctorImage} />
      <View>
        <Text category="s1">{name}</Text>
        <Text appearance="hint">{specialties}</Text>
        <Text>{rating} <Icon name="star" color="gold" /> ({reviews})</Text>
      </View>
    </View>
  </Card>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  gradientBackground: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingBottom: 20,
  },
  header: {
    padding: 20,
    alignItems: 'flex-start',
  },
  greeting: {
    color: '#fff',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  subText: {
    color: '#fff',
    marginBottom: 20,
  },
  serviceContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  serviceCard: {
    width: '48%',
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    marginBottom: 20,
  },
  iconContainer: {
    backgroundColor: '#7BAFD4',
    alignItems: 'center',
    borderRadius: 50,
    padding: 10,
    marginBottom: 10,
  },
  label: {
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -20,
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  issueHeading: {
    alignSelf: 'flex-start',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  categoryScroll: {
    marginBottom: 20,
    flexDirection: 'row',
  },
  categoryButton: {
    marginHorizontal: 5,
    backgroundColor: '#B9D9EB',
    borderRadius: 50,
    paddingHorizontal: 20,
  },
  activeCategoryButton: {
    backgroundColor: '#7BAFD4',
  },
  doctorCard: {
    width: '100%',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 10,
  },
  doctorInfo: {
    flexDirection: 'row',
  },
  doctorImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
});

export default CounselingScreen;

import React from 'react';
import { View, ScrollView } from 'react-native';
import { Icon, Button, Text, Avatar, Layout, useTheme, Divider } from '@ui-kitten/components';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const theme = useTheme();
  const navigation = useNavigation(); 

  const handleNavigation = () => {
    navigation.navigate('Payments'); 
  };

  return (
    <Layout style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        

        {/* Profile Image */}
        <View style={{ alignItems: 'center' }}>
        <Avatar size="giant" source={require('../assets/sabrina.jpg')} />
        <Text category="h6" style={{ marginTop: 10, fontSize: 16, color: '#7BAFD4' }}>
            Sabrina Abro, Software Engineer
          </Text>
        </View>

        {/* Tags */}
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginVertical: 15 }}>
          {['Pre-Engineering', 'Maths', 'Bachelors', 'Masters','Software','Artificial Intelligence' ].map((tag, index) => (
            <Button
              key={index}
              size="tiny"
              style={{
                margin: 5,
                borderRadius: 15,
                backgroundColor: '#7BAFD4',
                borderColor: '#B9D9EB',
              }}>
              <Text category="c1" style={{ color: '#7BAFD4' }}>
                {tag}
              </Text>
            </Button>
          ))}
        </View>

        {/* Biography */}
        <Text category="h6" style={{ marginTop: 20, color:'#7BAFD4', fontStyle:'bold' }}>
          Biography
        </Text>
        <Text appearance="hint" style={{ marginTop: 5 }}>
          Sabrina Abro is a skilled software engineer with expertise in AI and software development. 
          Her journey began with a solid foundation in Pre-Engineering, leading to advanced studies 
          in Software Engineering. Passionate about creating innovative solutions, she focuses on 
          harnessing technology to address real-world challenges. <Text status="primary"></Text>
        </Text>

        {/* Education Section */}
        <Text category="h6" style={{ marginTop: 20 , color:'#7BAFD4', fontStyle:'bold' }}>
          Education
        </Text>
        <View style={{ marginTop: 10 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
            <FontAwesome name="graduation-cap" size={20} color='#7BAFD4' />
            <Text style={{ marginLeft: 10 }}>
            Bachelor’s in Software Engineering, Mehran University of Engineering and Technology
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
            <FontAwesome name="graduation-cap" size={20} color='#7BAFD4' />
            <Text style={{ marginLeft: 10 }}>Pre-Engineering, County Girls College</Text>
          </View>
        </View>

        {/* License Number */}
        <Text category="h6" style={{ marginTop: 20, color:'#7BAFD4' }}>
          Practice License Number
        </Text>
        <Text appearance="hint" style={{ marginTop: 5 }}>
          123456789
        </Text>
      </ScrollView>

      {/* Button */}
      <Button
        style={{
          margin: 20,
          borderRadius: 8,
          backgroundColor: '#7BAFD4', // Button background color
          borderColor: '#B9D9EB', // Button border color
          color: '#FFFFFF', // Button text color
        }}
        size="large"
        onPress={handleNavigation} // Set the onPress event
      >
        Counseling with Sabrina
      </Button>
    </Layout>
  );
};

export default ProfileScreen;


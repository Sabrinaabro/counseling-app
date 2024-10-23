import { Text } from '@ui-kitten/components'
import React from 'react'
import { View } from 'react-native'
import Navbar from '../components/Navbar'

const CounselingScreen = () => {
  return (
    <View style={{ flex: 1 }}>
    <Navbar />  {/* Add Navbar here */}
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Counseling Screen</Text>
    </View>
  </View>
  )
}

export default CounselingScreen
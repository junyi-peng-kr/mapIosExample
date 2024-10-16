import { View, Text } from 'react-native'
import React from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

const Map = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Map</Text>
      <Text>Map</Text>
      <Text>Map</Text>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ height: 400, width: 400 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  )
}

export default Map

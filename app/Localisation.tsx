import { Text, View, StyleSheet, useColorScheme, TouchableOpacity,Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';

// Icons
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function Second() {
  const [text, setText] = useState('');
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  
  const { bottom, left, right, top } = useSafeAreaInsets();
  const themeName = useColorScheme();

  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      paddingTop: top,
      paddingLeft: left,
      paddingRight: right,
      paddingBottom: bottom,
      backgroundColor: themeName === 'dark' ? 'black' : 'white',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 20,
      width: '80%',
      alignSelf: 'center',
      backgroundColor: 'white',
      zIndex: 1,
      position: 'absolute',
      top: top + 10,
    },
    input: {
      flex: 1,
      height: 40,
      paddingHorizontal: 10,
    },
    icon: {
      padding: 10,
    },
    container: {
      flex: 1,
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '50%',
      backgroundColor: 'orange',
      alignSelf: 'center',
      borderColor: 'white',
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 3,
      paddingBottom: 3,
      borderRadius: 20,
      marginTop: 60,
    },
    button: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    buttonText: {
      marginLeft: 10,
    },
    separator: {
      alignSelf: 'center',
    },
  });

  return (
    <View style={styles.safeArea}>
      <MapView
        style={styles.map}
        region={region}
        onRegionChangeComplete={setRegion}
      >
        <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
      </MapView>
      <View style={styles.inputContainer}>
        <Ionicons name="search-outline" size={20} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Localisation"
          value={text}
          onChangeText={setText}
        />
        <TouchableOpacity onPress={() => setText('')}>
          <Ionicons name="close-circle-outline" size={20} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="list-outline" size={20} />
          <Text style={styles.buttonText}>Liste</Text>
        </TouchableOpacity>
        <Text style={styles.separator}>|</Text>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="filter-outline" size={20} />
          <Text style={styles.buttonText}>Filtres</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

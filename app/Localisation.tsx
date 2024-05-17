import { Text, View, StyleSheet, useColorScheme, TouchableOpacity,Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React, { useState } from 'react';

// Icons
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function Second() {
  const [text, setText] = useState('');
  
  const { bottom, left, right, top } = useSafeAreaInsets();
  const themeName = useColorScheme();
  //console.log('ThemeName : ', themeName);

  const styles = StyleSheet.create({
    safeArea: {
      paddingTop: top,
      paddingLeft: left,
      paddingRight: right,
      paddingBottom: bottom,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 20,
      width: '80%',
      alignSelf: 'center',
      position: 'absolute',
      backgroundColor: 'white',
      marginTop: 15,
      zIndex: 1,
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
      flexDirection: 'column',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80%',
      alignSelf: 'center',
      marginTop: 70,
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
       <Image
          source={require('../assets/images/map.png')}
        />
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

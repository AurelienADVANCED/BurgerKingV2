import { Text, View, Image, StyleSheet, useColorScheme, FlatList, ListRenderItem, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

interface CardItem {
  key: string;
  source: any; // Utilise un type plus spécifique si tu connais le type exact
  destination: string;
}

export default function Second() {
  const { bottom, left, right, top } = useSafeAreaInsets();
  const themeName = useColorScheme();
  const navigation = useNavigation();

  const windowWidth = Dimensions.get('window').width;
  const itemWidth = windowWidth / 2 - 30;

  const onPress = (item : CardItem) => {
    //navigation.navigate(item.destination);
  }

  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      paddingTop: top,
      paddingLeft: left,
      paddingRight: right,
      paddingBottom: bottom,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    logo: {
      width: itemWidth - 30,
      height: itemWidth,
      resizeMode: 'contain', // Adapter l'image sans la couper
    },
    itemContainer: {
      width: itemWidth, 
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      margin: 10,
      padding: 5, // Ajouter un padding pour que le texte ne touche pas les bords
      borderRadius: 10, // Ajouter un arrondi aux bordures
    },
    listContainer: {
      alignItems: 'center',
    },
    title: {
      position: 'absolute',
      top: 5,
      left: 15,
      fontSize: 12,
      fontFamily: 'BurgerKingFont',
      color: '#502314',
    },
  });

  const card: CardItem[] = [
    { key: 'Nouveautés', source: require('../assets/images/bkicons/nouveautes.png'), destination: 'new' },
    { key: 'Menus', source: require('../assets/images/bkicons/menus.png'), destination: 'menus'},
    { key: 'Burgers', source: require('../assets/images/bkicons/burgers.png'), destination: 'burgers' },
    { key: 'Menus enfants', source: require('../assets/images/bkicons/menus_enfants.png'), destination: 'kids' },
    { key: 'Snacks', source: require('../assets/images/bkicons/snacks.png'), destination: 'snacks'},
    { key: 'Desserts', source: require('../assets/images/bkicons/desserts.png'), destination: 'desserts' },
  ];

  const renderItem: ListRenderItem<CardItem> = ({ item }) => (
    <TouchableHighlight style={styles.itemContainer} onPress={() => onPress(item)}>
      <>
      <Text style={styles.title}>{item.key}</Text>
      <Image style={styles.logo} source={item.source} />
      </>
    </TouchableHighlight>
  );

  return (
    <View style={[styles.container, styles.safeArea]}>
      <FlatList
        contentContainerStyle={styles.listContainer}
        data={card}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        numColumns={2}
      />
      
    </View>
  );
}

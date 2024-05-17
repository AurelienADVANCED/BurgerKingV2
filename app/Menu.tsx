import { Text, View, Image, StyleSheet, useColorScheme, FlatList, ListRenderItem, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { NavigationProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from './types';


export default function Menu() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { bottom, left, right, top } = useSafeAreaInsets();
  const route = useRoute();
  const { item } = route.params as { item: CardItem };

  const windowWidth = Dimensions.get('window').width;
  const itemWidth = windowWidth / 2 - 30;

  const onPress = (menuItem: MenuItem) => {
    navigation.navigate("Product", { menuItem });
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

  const cards: { [key: string] : MenuItem[]} = {
    'Nouveautés': [
      {
        key: 'Japan Cheesy Steakhouse',
        source: require('../assets/images/bkicons/nouveautes.png'),
      },
      {
        key: 'Indian Chicken Steakhouse',
        source: require('../assets/images/bkicons/nouveautes.png'),
      },
      {
        key: 'French Steakhouse',
        source: require('../assets/images/bkicons/nouveautes.png'),
      },
      {
        key: 'Veggie Japan Steakhouse',
        source: require('../assets/images/bkicons/nouveautes.png'),
      },
      {
        key: 'Chicken Spicy',
        source: require('../assets/images/bkicons/nouveautes.png'),
      },
      {
        key: 'Italian Chicken Bowl',
        source: require('../assets/images/bkicons/nouveautes.png'),
      },
      {
        key: 'King Fusion Smarties®',
        source: require('../assets/images/bkicons/nouveautes.png'),
      },
      {
        key: 'Mini KING FUSION Smarties®',
        source: require('../assets/images/bkicons/nouveautes.png'),
      },
      {
        key: 'KING FUSION au Nutella®',
        source: require('../assets/images/bkicons/nouveautes.png'),
      },
      {
        key: 'Mini KING FUSION au NUTELLA®',
        source: require('../assets/images/bkicons/nouveautes.png'),
      },
      {
        key: 'Madeleine',
        source: require('../assets/images/bkicons/nouveautes.png'),
      },
      {
        key: 'Fuze Tea Saveur Citron Vert & Menthe',
        source: require('../assets/images/bkicons/nouveautes.png'),
      },
    ],
    'Menus': [],'Burgers': [],'Menus enfants': [],'Snacks': [],'Desserts':[]
  };

  const renderItem: ListRenderItem<MenuItem> = ({ item }) => (
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
        data={cards[item.key]}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        numColumns={2}
      />
    </View>
  );
}

import { Text, View, Image, StyleSheet, useColorScheme, FlatList, ListRenderItem, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React from 'react';

interface CardItem {
  key: string;
  source: any; // Utilise un type plus spécifique si tu connais le type exact
}

export default function Second() {
  const { bottom, left, right, top } = useSafeAreaInsets();
  const themeName = useColorScheme();

  const windowWidth = Dimensions.get('window').width;
  const itemWidth = windowWidth / 2 - 30;

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
      width: itemWidth,
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
    },
  });

  const card: CardItem[] = [
    { key: 'Nouveautés', source: require('../assets/images/bkicons/nouveautes.png') },
    { key: 'Menus', source: require('../assets/images/bkicons/menus.png') },
    { key: 'Burgers', source: require('../assets/images/bkicons/burgers.png') },
    { key: 'Menus enfants', source: require('../assets/images/bkicons/menus_enfants.png') },
    { key: 'Snacks', source: require('../assets/images/bkicons/snacks.png') },
    { key: 'Desserts', source: require('../assets/images/bkicons/desserts.png') },
  ];

  const renderItem: ListRenderItem<CardItem> = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.title}>{item.key}</Text>
      <Image style={styles.logo} source={item.source} />
    </View>
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

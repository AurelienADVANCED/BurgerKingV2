// HomeScreen.tsx
import { Text, View, Image, StyleSheet, useColorScheme, FlatList, ListRenderItem, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React from 'react';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from './types';
import { NavigationProp } from '@react-navigation/native';

export default function Commande() {
  const { bottom, left, right, top } = useSafeAreaInsets();
  const themeName = useColorScheme();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const windowWidth = Dimensions.get('window').width;
  const itemWidth = windowWidth / 2 - 30;

  const onPress = (item: CardItem) => {
    navigation.navigate("Menu", { item })
  };

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
      resizeMode: 'contain',
    },
    itemContainer: {
      width: itemWidth,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      margin: 10,
      padding: 5,
      borderRadius: 10,
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
    { key: 'Nouveautés', source: require('../assets/images/bkicons/commande/nouveautes.png') },
    { key: 'Menus', source: require('../assets/images/bkicons/commande/menus.png') },
    { key: 'Burgers', source: require('../assets/images/bkicons/commande/burgers.png') },
    { key: 'Menus enfants', source: require('../assets/images/bkicons/commande/menus_enfants.png') },
    { key: 'Snacks', source: require('../assets/images/bkicons/commande/snacks.png') },
    { key: 'Desserts', source: require('../assets/images/bkicons/commande/desserts.png') },
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

import { Text, View, Image, StyleSheet, useColorScheme, FlatList, ListRenderItem, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Product() {
  const { bottom, left, right, top } = useSafeAreaInsets();
  const route = useRoute();
  const { menuItem } = route.params as { menuItem: MenuItem };

  const windowWidth = Dimensions.get('window').width;
  const itemWidth = windowWidth / 2 - 30;

  const onPress = (item: CardItem) => {
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

  return (
    <View style={[styles.container, styles.safeArea]}>
      <Text style={styles.title}>{menuItem.key}</Text>
      <Image style={styles.logo} source={menuItem.source} />
    </View>
  );
}

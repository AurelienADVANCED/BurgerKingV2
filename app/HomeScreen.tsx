import { Text, View, StyleSheet, useColorScheme, Dimensions, ListRenderItem, Image, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import React from 'react';

export default function Index() {
  const { bottom, left, right, top } = useSafeAreaInsets();
  const router = useRouter();
  const schema = useColorScheme();
  let themaName: 'light' | 'dark' = useColorScheme() ?? 'light';

  const themes: { dark: any; light: any } = {
    dark: {
      background: {
        color: 'black'
      }
    },
    light: {
      background: {
        color: 'white'
      }
    }
  }

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
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
      flexGrow: 1,
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
    texte: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      fontFamily: 'BurgerKingFont',
      color: '#502314',
    },
    texteprincipal: {
      fontSize: 30,
      textAlign: 'left',
      margin: 10,
      fontFamily: 'BurgerKingFont',
      color: '#fbe8d8',
      fontWeight: 'bold',
    },
    baniere: {
      width: '80%',
      maxHeight: windowHeight * 0.5,
      aspectRatio: 2, // This keeps the aspect ratio of the image
      borderRadius: 20,
      resizeMode: 'contain',
      alignSelf: 'center', // Center the banner
      marginVertical: 20, // Add some vertical margin
    }
  });

  const cardData: CardItem[] = [
    { key: 'DOUBLE CHEESE BACON XXL', source: require('../assets/images/bkicons/accueil/cheese.png')},
    { key: 'KING FUSION M&M\'S®', source: require('../assets/images/bkicons/accueil/fusion.png')},
    { key: 'PETIT WRAP CHICKEN BBQ BACON', source: require('../assets/images/bkicons/accueil/wrap.png')},
    { key: 'VEGGIE CHICKEN LOUISIANE STEAKHOUSE', source: require('../assets/images/bkicons/accueil/veggie.png')},
  ];

  const renderItem: ListRenderItem<CardItem> = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.title}>{item.key}</Text>
        <Image style={styles.logo} source={item.source} />
      </View>
    );
  };

  return (
    <FlatList
      style={styles.safeArea}
      contentContainerStyle={styles.container}
      data={cardData}
      renderItem={renderItem}
      keyExtractor={(item) => item.key}
      numColumns={2}
      ListHeaderComponent={() => <Text style={styles.texteprincipal}>En ce moment</Text>}
      ListFooterComponent={<View style={{ height: bottom }} />}
    />
  );
}
  
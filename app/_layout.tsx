import { useFonts } from "expo-font";
import { Stack, useNavigation } from "expo-router";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Text,  View, StyleSheet, useColorScheme, Button, Dimensions, ListRenderItem, Image, FlatList,ScrollView, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets, SafeAreaView } from 'react-native-safe-area-context';

// Icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

import HomeScreen from './HomeScreen';
import LocalisationScreen from './Localisation';
import CommandeScreen from './Commande';
import ConfigurationScreen from './Configuration';
import { GestureHandlerRootView } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
});

function Header({navigation}) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate('Ticket' as never)}>
        <Ionicons name="ticket-outline"  size={35} style={{ marginLeft: 20, marginBottom: 10 }}/>
      </TouchableOpacity>
      <Image source={require('../assets/images/logo.png')} style={styles.logo} />
      <TouchableOpacity onPress={() => navigation.navigate('Crown' as never)}>
        <FontAwesome6 name="crown" size={35} style={{ marginRight: 20, marginBottom: 10 }} />
      </TouchableOpacity>
    </View>
  );
}

export default function RootLayout() {

  const insets = useSafeAreaInsets();

  const [fontsLoaded] = useFonts({
      'BurgerKingFont': require('../assets/fonts/FlameRegular.otf'),
  });

  return fontsLoaded ? (
    
    <GestureHandlerRootView>
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom }}>
        <Stack
        screenOptions={{
          header: ({ navigation }) => <Header navigation={navigation}/>,
        }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="Menu" options={{headerShown:true}}/>
        <Stack.Screen name="Product" options={{headerShown:true}}/>
        </Stack>
        
      </SafeAreaView>
    </SafeAreaProvider>
    </GestureHandlerRootView>
  ) : null;
}

// Import necessary modules
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

// Icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';


// Page imports
import HomeScreen from './HomeScreen';
import Localisation from './Localisation';
import Commande from './Commande';
import Configuration from './Configuration';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Header({ navigation }) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate('Ticket')}>
        <Ionicons name="ticket-outline"  size={35} style={{ marginLeft: 20, marginBottom: 10 }}/>
      </TouchableOpacity>
      <Image source={require('../assets/images/logo.png')} style={styles.logo} />
      <TouchableOpacity onPress={() => navigation.navigate('Crown')}>
        <FontAwesome6 name="crown" size={35} style={{ marginRight: 20, marginBottom: 10 }} />
      </TouchableOpacity>
    </View>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
            let iconName = '';

            if (route.name === 'HomeScreen') {
              return <Ionicons name="home-outline" size={size} color={color} />;
            } else if (route.name === 'Localisation') {
              return <Ionicons name="location-outline" size={size} color={color} />;
            } else if (route.name === 'Commande') {
              return <MaterialCommunityIcons name="hamburger" size={size} color={color} />;
            } else if (route.name === 'Configuration') {
              return <MaterialIcons name="menu" size={size} color={color} />;
            }

            return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="HomeScreen" options={{headerShown:false}} component={HomeScreen} />
          <Tab.Screen name="Localisation" options={{headerShown:false}}  component={Localisation} />
          <Tab.Screen name="Commande" options={{headerShown:false}} component={Commande} />
          <Tab.Screen name="Configuration" options={{headerShown:false}}  component={Configuration} />

        </Tab.Navigator>
  )
}
export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <NavigationContainer independent={true}>
      <Stack.Navigator
          screenOptions={{
            header: ({ navigation }) => <Header navigation={navigation}/>
          }}
        >
          <Stack.Screen name="HomeTabs" component={HomeTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


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
import { Stack } from "expo-router";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen options={{headerShown:false}}  name="HomeScreen" />
        <Stack.Screen options={{headerShown:false}} name="Localisation" />
        <Stack.Screen options={{headerShown:false}} name="Commande" />
        <Stack.Screen options={{headerShown:false}} name="Configuration" />
      </Stack>
    </SafeAreaProvider>
  );
}

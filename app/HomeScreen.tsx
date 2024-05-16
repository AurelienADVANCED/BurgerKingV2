import {Text,  View, StyleSheet, useColorScheme, Button} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function Index() {
  
  const {bottom, left, right, top} = useSafeAreaInsets();
  const router = useRouter();
  const schema = useColorScheme();
  let themaName: 'light' | 'dark' = useColorScheme() ?? 'light';

  const themes: {dark: any; light: any} = {
    dark : {
      background: {
        color: 'black'
      }
    },
    light : {
      background: {
        color: 'white'
      }
    }

  }

  const styles = StyleSheet.create({
    safeArea : {
    paddingTop: top,
    paddingLeft: left,
    paddingRight: right,
    paddingBottom: bottom,
    } 
  });

  return (
      <View style={[styles.safeArea, themes[themaName].background]}>
        <Text>Edit app/index.tsx  to edit this screen.</Text>
      </View>
  );
  
}

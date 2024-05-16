import { Text, View, StyleSheet, useColorScheme } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Second() {
  
  const { bottom, left, right, top } = useSafeAreaInsets();

  const themeName = useColorScheme();
  console.log('ThemeName : ', themeName);

  const styles = StyleSheet.create({
    safeArea: {
      paddingTop: top,
      paddingLeft: left,
      paddingRight: right,
      paddingBottom: bottom,
    },
  });

  return (
    <View style={[styles.safeArea]}>
      <Text>Page 4</Text>
    </View>
  );
}

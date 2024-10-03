import { Image, StyleSheet, Platform, View, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function Screen1() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.circle}>
      </View>
      <Text style={styles.mainTitle}>GROW YOUR BUSINESS</Text>
      <Text style={styles.secondTitle}>We will help you to grow your business using online server</Text>
      <View style={styles.rowButton}>
        <ThemedView style={styles.button}>
          <ThemedText style={styles.buttonText}>LOGIN</ThemedText>
        </ThemedView>

        <ThemedView style={styles.button}>
          <ThemedText style={styles.buttonText}>SIGN UP</ThemedText>
        </ThemedView>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "rgba(0, 204, 249, 1)",
    justifyContent: "center",
    alignItems: "center",
    gap: 100

  },
  divImage: {
    width: 400,
    height: 250,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  circle: {
    borderWidth: 15,
    borderRadius: 100,
    borderColor: "black",
    width: 140,
    height: 140,
  },
  mainTitle: {
    fontSize: 25,
    fontWeight: "bold",
  },
  secondTitle: {
    fontSize: 15,
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "rgba(227, 192, 0, 1)",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10
  },
  buttonText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  rowButton: {
    flexDirection: "row",
    gap: 30
  }

});

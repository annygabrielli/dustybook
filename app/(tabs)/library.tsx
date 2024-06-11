import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function LibraryScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView>
        <ThemedText style={styles.titleContainer}>
          <HelloWave />
          <ThemedText >Library</ThemedText>
        </ThemedText>
        <ThemedText >Books</ThemedText>
        <ThemedView style={styles.stepContainer}>
          <ThemedText>1. "The Great Gatsby" by F. Scott Fitzgerald</ThemedText>
          <ThemedText>2. "To Kill a Mockingbird" by Harper Lee</ThemedText>
          <ThemedText>3. "1984" by George Orwell</ThemedText>
          <ThemedText>4. "Pride and Prejudice" by Jane Austen</ThemedText>
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

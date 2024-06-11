import { Image, StyleSheet, Platform, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import BookHorizon from '@/components/UI/BookHorizon';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <View>
        <ThemedView style={styles.titleContainer}>
          <ThemedText>Books</ThemedText>
          <HelloWave />
        </ThemedView>
        <View style={styles.stepContainer}>
          <BookHorizon
            imageUrl='https://www.example.com/book1.jpg'
            title="Book 1"
          />
          <BookHorizon
            imageUrl='https://www.example.com/book2.jpg'
            title="Book 2"
          />
          <BookHorizon
            imageUrl='https://www.example.com/book3.jpg'
            title="Book 3"
          />
        </View>
      </View>
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

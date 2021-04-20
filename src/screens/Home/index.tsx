import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { BoxContainer, CardMovie, Gap, Header } from '../../components';
import { FONT_MEDIUM } from '../../theme';

const Home = () => {
  const tabBarHeight = useBottomTabBarHeight();
  return (
    <BoxContainer>
      <Header title="MOVIEQUE" />
      <ScrollView style={styles.sectionListMovie}>
        <View style={styles.sectionTitleWrapper}>
          <Text style={styles.txtTrending}>Trending Today</Text>
        </View>
        <CardMovie
          title="Godzilla vs. Kong"
          desc="The epic next chapter in the cinematic Monsterverse pits two of the greatest icons in
            motion picture history against one another - the fearsome Godzilla and the mighty Kong -
            with humanity caught in the balance."
          rated="18+"
          time="1h 38m"
        />
        <Gap height={10} />
        <CardMovie
          title="Godzilla vs. Kong"
          desc="The epic next chapter in the cinematic Monsterverse pits two of the greatest icons in
            motion picture history against one another - the fearsome Godzilla and the mighty Kong -
            with humanity caught in the balance."
          rated="18+"
          time="1h 38m"
        />
        <Gap height={10} />
        <CardMovie
          title="Godzilla vs. Kong"
          desc="The epic next chapter in the cinematic Monsterverse pits two of the greatest icons in
            motion picture history against one another - the fearsome Godzilla and the mighty Kong -
            with humanity caught in the balance."
          rated="18+"
          time="1h 38m"
        />
        <Gap height={tabBarHeight} />
      </ScrollView>
    </BoxContainer>
  );
};

export default Home;

const styles = StyleSheet.create({
  txtTrending: {
    ...FONT_MEDIUM(20),
  },
  sectionListMovie: {
    paddingHorizontal: 10,
  },
  sectionTitleWrapper: {
    padding: 10,
  },
});

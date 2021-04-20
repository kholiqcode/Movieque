import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React, { memo, useLayoutEffect, useRef, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { BoxContainer, CardMovie, Header } from '../../components';
import { getMovies } from '../../services';
import styles from './styles';

const Home = () => {
  const tabBarHeight = useBottomTabBarHeight();
  const navigation = useNavigation();
  const { movies } = useSelector((state: any) => state.movieReducer);
  const mounted = useRef(false);
  const [refresh, setRefresh] = useState(false);

  const _handleGetMovie = async () => {
    setRefresh(true);
    try {
      await getMovies();
      setRefresh(false);
    } catch (error) {
      setRefresh(false);
    }
  };

  useLayoutEffect(() => {
    mounted.current = true;
    _handleGetMovie();
    return () => {
      mounted.current = false;
    };
  }, []);
  return (
    <BoxContainer>
      <Header title="MOVIEQUE" />
      <FlatList
        onRefresh={() => _handleGetMovie()}
        refreshing={refresh}
        keyboardDismissMode="interactive"
        showsVerticalScrollIndicator={false}
        data={movies}
        ListHeaderComponent={() => (
          <View style={styles.sectionTitleWrapper}>
            <Text style={styles.txtTrending}>Trending Today</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10 }}>
            <CardMovie
              key={item.movieId}
              title={item.title}
              desc={item.description}
              rated={item.category}
              time={moment.duration(item.duration, 'minute').asHours() + 'h'}
              onPress={() => navigation.navigate('ChooseTime', item)}
            />
          </View>
        )}
        keyExtractor={(item) => item?.movieId?.toString()}
        contentContainerStyle={{ paddingBottom: tabBarHeight, paddingHorizontal: 10 }}
      />
    </BoxContainer>
  );
};

export default memo(Home);

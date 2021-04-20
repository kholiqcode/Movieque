import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React, { SetStateAction, useCallback, useEffect, useRef, useState } from 'react';
import { Image, Route, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useDispatch, useSelector } from 'react-redux';
import { BoxContainer, Button, Gap, Header } from '../../components';
import { setDetailMovie } from '../../libs';
import { createTicket, getDetailMovie } from '../../services';
import { color, FONT_BOLD, FONT_REGULAR } from '../../theme';
import showMessage from '../../utils/showMessage';

const ChooseTime: React.FC<{ route: Route }> = ({ route }) => {
  const navigation = useNavigation();
  const [time, setTime] = useState(undefined);
  const [studio, setStudio] = useState(undefined);
  const { movieId } = route.params;
  const { movieDetail } = useSelector((state: any) => state.movieReducer);
  const mounted = useRef(false);
  const dispatch = useDispatch();

  const _handleBookTicket = useCallback(async () => {
    if (studio === undefined) {
      return showMessage('Plese select studio!', 'error');
    }
    if (time === undefined) {
      return showMessage('Plese select time!', 'error');
    }
    if (movieId === undefined || movieId === '') {
      return showMessage('Movie not found!', 'error');
    }
    try {
      await createTicket({ movieId: movieId, timeId: time });
    } catch (error) {}
  }, [studio, time, movieId]);

  const _handleGetMovie = async () => {
    try {
      await getDetailMovie({ id: movieId });
    } catch (error) {}
  };

  useEffect(() => {
    mounted.current = true;
    _handleGetMovie();
    return () => {
      dispatch(setDetailMovie([]));
      mounted.current = false;
    };
  }, []);

  return (
    <BoxContainer>
      {/* Section Header */}
      <Header title="CHOOSE TIME" iconLeft="arrow-left" onPress={() => navigation.goBack()} />
      {/* Section Info */}
      <View style={styles.sectionInfo}>
        <View style={styles.movieTopWrapper}>
          <Image
            style={styles.imageThumb}
            source={{
              uri: 'https://i.pinimg.com/originals/09/b4/76/09b47611e6f90577693910b85f2423f4.jpg',
            }}
          />
          <View style={{ marginStart: 10 }}>
            <Gap height={10} />
            <View style={styles.movieItemInfo}>
              <Icon
                name="user"
                size={20}
                color={color.primary}
                solid
                backgroundColor="transparent"
              />
              <Gap width={9} />
              <Text style={{ ...FONT_BOLD(14) }}>{movieDetail?.subtitle}</Text>
            </View>
            <Gap height={8} />
            <View style={styles.movieItemInfo}>
              <Icon
                name="clock"
                size={20}
                color={color.primary}
                solid
                backgroundColor="transparent"
              />
              <Gap width={8} />
              <Text style={{ ...FONT_BOLD(14) }}>
                {moment.duration(movieDetail?.duration, 'minute').asHours() + 'h'}
              </Text>
            </View>
            <Gap height={8} />
            <View style={styles.movieItemInfo}>
              <Icon
                name="star"
                size={20}
                color={color.primary}
                solid
                backgroundColor="transparent"
              />
              <Gap width={8} />
              <Text style={{ ...FONT_BOLD(14) }}>{movieDetail?.rating}/10</Text>
            </View>
          </View>
        </View>
        <View style={styles.movieDescription}>
          <Text style={{ ...FONT_BOLD(20) }} numberOfLines={2}>
            {movieDetail?.title}
          </Text>
          <Gap height={10} />
          <Text numberOfLines={10} style={{ ...FONT_REGULAR(14) }}>
            {movieDetail?.description}
          </Text>
        </View>
      </View>
      {/* Section Input */}
      <View style={styles.movieBottomWrapper}>
        <View>
          <Text style={{ ...FONT_BOLD(20) }}>Studio</Text>
          <Gap height={10} />
          <DropDownPicker
            items={[
              { label: 'Select Studio', value: 'default', disabled: true },
              { label: movieDetail?.studio ?? '', value: 'studio' },
            ]}
            defaultValue="default"
            containerStyle={{ height: 40 }}
            style={{ backgroundColor: '#fafafa' }}
            dropDownStyle={{ backgroundColor: '#fafafa' }}
            onChangeItem={(item) => setStudio(item?.value)}
          />
        </View>
        <View>
          <Text style={{ ...FONT_BOLD(18) }}>{moment().format('dddd, DD MMMM YYYY')}</Text>
          <Gap height={10} />
          <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {movieDetail?.list_showtimes?.map((item: any, key: SetStateAction<any>) => (
                <TouchableOpacity
                  key={key}
                  style={styles.buttonSelect(time, item?.timeId)}
                  onPress={() =>
                    time === item?.timeId ? setTime(undefined) : setTime(item?.timeId)
                  }
                >
                  <Text>{item.showTime}</Text>
                </TouchableOpacity>
              ))}
              <Gap width={-10} />
            </ScrollView>
          </View>
        </View>
        <Button
          onPress={_handleBookTicket}
          text="BOOK TICKET"
          disabled={time === undefined ? true : false}
        />
      </View>
    </BoxContainer>
  );
};

export default ChooseTime;

const styles = StyleSheet.create<any>({
  sectionInfo: { flexDirection: 'row', flex: 1 },
  movieTopWrapper: { flex: 1, justifyContent: 'center' },
  imageThumb: {
    width: '90%',
    height: '60%',
    borderRadius: 10,
    alignSelf: 'center',
  },
  movieItemInfo: { flexDirection: 'row', alignItems: 'center' },
  movieDescription: { flex: 1.5, justifyContent: 'center', paddingHorizontal: 5 },
  detailWrapper: { flexDirection: 'row', paddingHorizontal: 20, paddingTop: 25, maxHeight: '50%' },
  movieBottomWrapper: { flex: 1, paddingHorizontal: 10, justifyContent: 'space-around' },
  buttonSelect: (selected: any, key: any) => ({
    paddingHorizontal: 10,
    backgroundColor: color.white,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 10,
    borderWidth: 1,
    borderColor: selected === key ? color.primary : 'transparent',
  }),
});

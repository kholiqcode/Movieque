import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { color, FONT_BOLD, FONT_REGULAR } from '../../../theme';
import { Button, Gap } from '../../atoms';

const CardMovie: React.FC<{
  title?: string;
  desc?: string;
  rated?: string;
  time?: string;
  onPress?: any;
}> = ({ title, desc, rated, time, onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.movieWrapper}>
        <Image
          style={styles.imageThumb}
          source={{
            uri: 'https://i.pinimg.com/originals/09/b4/76/09b47611e6f90577693910b85f2423f4.jpg',
          }}
        />
        <View style={styles.detailWrapper}>
          <Text style={styles.movieTitle} numberOfLines={1}>
            {title}
          </Text>
          <Text numberOfLines={4} style={styles.movieDesc}>
            {desc}
          </Text>
          <Text style={{ ...FONT_BOLD(14) }}>Show More</Text>
        </View>
      </View>
      <Gap height={5} />
      <Gap style={styles.line} width="100%" />
      <Gap height={5} />
      <View style={styles.infoWraper}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name="user" size={24} color={color.primary} solid backgroundColor="transparent" />
          <Gap width={4} />
          <Text style={{ ...FONT_BOLD(14) }}>{rated}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name="clock" size={24} color={color.primary} solid backgroundColor="transparent" />
          <Gap width={4} />
          <Text style={{ ...FONT_BOLD(14) }}>{time}</Text>
        </View>
        <Button text="BOOK TICKET" onPress={onPress} />
      </View>
    </View>
  );
};

export default CardMovie;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    borderRadius: 10,
    padding: 5,
  },
  movieWrapper: { flexDirection: 'row', alignItems: 'center' },
  imageThumb: { width: '25%', height: '90%', borderRadius: 10 },
  detailWrapper: {
    padding: 5,
    marginLeft: 5,
    flex: 1,
  },
  line: { borderBottomWidth: 1, borderBottomColor: color.line },
  movieTitle: { ...FONT_BOLD(16), marginBottom: 4 },
  movieDesc: {
    ...FONT_REGULAR(14),
  },
  infoWraper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});

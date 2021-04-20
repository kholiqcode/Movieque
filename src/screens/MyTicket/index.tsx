import Barcode from '@kichiyaki/react-native-barcode-generator';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React from 'react';
import { memo } from 'react';
import { Dimensions, Image, Route, StyleSheet, Text, View } from 'react-native';
import { BoxContainer, Gap, Header } from '../../components';
import { FONT_BOLD, FONT_MEDIUM } from '../../theme';
import { color } from '../../theme/';

const MyTicket: React.FC<{ route: Route }> = ({ route }) => {
  const navigation = useNavigation();
  const { title, ticketCode, studio } = route.params;
  return (
    <BoxContainer>
      <Header title="MOVIEQUE" iconLeft="arrow-left" onPress={() => navigation.goBack()} />
      <View style={styles.contentWrapper}>
        <View style={styles.sectionMovie}>
          <Text style={{ ...FONT_BOLD(24) }} numberOfLines={2}>
            {title}
          </Text>
          <Gap height={20} />
          <Image
            style={styles.imageThumb}
            source={{
              uri: 'https://i.pinimg.com/originals/09/b4/76/09b47611e6f90577693910b85f2423f4.jpg',
            }}
          />
          <Gap height={16} />
          <Text style={{ ...FONT_BOLD(16), color: color.grayDark }} numberOfLines={2}>
            Studio
          </Text>
          <Gap height={10} />
          <Text style={{ ...FONT_BOLD(20) }} numberOfLines={2}>
            {studio}
          </Text>
          <Gap height={16} />
          <Text style={{ ...FONT_BOLD(16) }} numberOfLines={2}>
            {moment().format('dddd, DD MMMM YYYY')}
          </Text>
          <Gap height={16} />
          <Text style={{ ...FONT_BOLD(16) }} numberOfLines={2}>
            {moment().format('LT')}
          </Text>
        </View>
        <Gap height={32} />
        <View style={{ paddingHorizontal: 50, alignItems: 'center' }}>
          <Text style={{ ...FONT_BOLD(16), color: color.grayDark }} numberOfLines={2}>
            Booking Code
          </Text>
          <Text style={{ ...FONT_MEDIUM(16) }} numberOfLines={2}>
            {ticketCode}
          </Text>
          <Barcode
            format="CODE128B"
            value={ticketCode}
            maxWidth={(Dimensions.get('window').width * 2) / 3}
            height={70}
            style={{ backgroundColor: 'transparent' }}
          />
        </View>
      </View>
    </BoxContainer>
  );
};

export default memo(MyTicket);

const styles = StyleSheet.create({
  contentWrapper: { flex: 1, justifyContent: 'center' },
  sectionMovie: { justifyContent: 'space-around', alignItems: 'center' },
  imageThumb: {
    width: 100,
    height: 150,
  },
});

import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { BoxContainer, Button, Gap, Header } from '../../components';
import { FONT_BOLD } from '../../theme';
import { color } from '../../theme/color/index';

const TicketConfirm = () => {
  const navigation = useNavigation();
  return (
    <BoxContainer>
      <Header title="MOVIEQUE" iconLeft="arrow-left" onPress={() => navigation.goBack()} />
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View style={{ justifyContent: 'space-around', alignItems: 'center' }}>
          <Text style={{ ...FONT_BOLD(24) }} numberOfLines={2}>
            Godzilla vs. Kong
          </Text>
          <Gap height={20} />
          <Image
            style={{
              width: 100,
              height: 150,
            }}
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
            CINEMA A6
          </Text>
          <Gap height={16} />
          <Text style={{ ...FONT_BOLD(16) }} numberOfLines={2}>
            FRIDAY, 20 June 2021
          </Text>
          <Gap height={16} />
          <Text style={{ ...FONT_BOLD(16) }} numberOfLines={2}>
            7:30 PM
          </Text>
        </View>
        <Gap height={32} />
        <View style={{ paddingHorizontal: 50 }}>
          <Button text="CONFIRM" />
        </View>
      </View>
    </BoxContainer>
  );
};

export default TicketConfirm;

const styles = StyleSheet.create({});

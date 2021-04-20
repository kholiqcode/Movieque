import { useNavigation } from '@react-navigation/native';
import React, { SetStateAction, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { BoxContainer, Button, Gap, Header } from '../../components';
import { color, FONT_BOLD, FONT_REGULAR } from '../../theme';

const ChooseTime2 = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState('');
  // const
  const options = [
    {
      key: 'pay',
      text: '5.45PM',
    },
    {
      key: 'performance',
      text: '7.30PM',
    },
    {
      key: 'zToA',
      text: '8.15PM',
    },
  ];
  return (
    <BoxContainer>
      {/* Section Header */}
      <Header title="CHOOSE TIME" iconLeft="arrow-left" onPress={() => navigation.goBack()} />
      {/* Section Info */}
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Image
            style={styles.imageThumb}
            source={{
              uri: 'https://i.pinimg.com/originals/09/b4/76/09b47611e6f90577693910b85f2423f4.jpg',
            }}
          />
          <View style={{ marginStart: 10 }}>
            <Gap height={10} />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon
                name="user"
                size={20}
                color={color.primary}
                solid
                backgroundColor="transparent"
              />
              <Gap width={9} />
              <Text style={{ ...FONT_BOLD(14) }}>SU</Text>
            </View>
            <Gap height={8} />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon
                name="clock"
                size={20}
                color={color.primary}
                solid
                backgroundColor="transparent"
              />
              <Gap width={8} />
              <Text style={{ ...FONT_BOLD(14) }}>1H 36M</Text>
            </View>
            <Gap height={8} />
            <View
              style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}
            >
              <Icon
                name="star"
                size={20}
                color={color.primary}
                solid
                backgroundColor="transparent"
              />
              <Gap width={8} />
              <Text style={{ ...FONT_BOLD(14) }}>9/10</Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 1.5, justifyContent: 'center', paddingHorizontal: 5 }}>
          <Text style={{ ...FONT_BOLD(20) }} numberOfLines={2}>
            Godzilla vs. Kong
          </Text>
          <Gap height={10} />
          <Text numberOfLines={10} style={{ ...FONT_REGULAR(14) }}>
            The epic next chapter in the cinematic Monsterverse pits two of the greatest icons in
            motion picture history against one another - the fearsome Godzilla and the mighty Kong -
            with humanity caught in the balance.
          </Text>
        </View>
      </View>
      {/* Section Input */}
      <View style={{ flex: 1, paddingHorizontal: 10, justifyContent: 'space-around' }}>
        <View>
          <Text style={{ ...FONT_BOLD(20) }}>Studio</Text>
          <Gap height={10} />
          <DropDownPicker
            items={[
              { label: 'CINEMA A6', value: 'A6', selected: true },
              { label: 'CINEMA A7', value: 'A7', disabled: true },
            ]}
            defaultValue="A6"
            containerStyle={{ height: 40 }}
            style={{ backgroundColor: '#fafafa' }}
            dropDownStyle={{ backgroundColor: '#fafafa' }}
            onChangeItem={(item) => console.log(item.label, item.value)}
          />
        </View>
        <View>
          <Text style={{ ...FONT_BOLD(20) }}>Friday, 20 June 2021</Text>
          <Gap height={10} />
          <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {options.map((item, key: SetStateAction<any>) => (
                <TouchableOpacity
                  key={key}
                  style={{
                    paddingHorizontal: 10,
                    backgroundColor: color.white,
                    paddingVertical: 5,
                    borderRadius: 5,
                    marginRight: 10,
                    borderWidth: 1,
                    borderColor: selected === key ? color.primary : 'transparent',
                  }}
                  onPress={() => setSelected(key)}
                >
                  <Text>{item.text}</Text>
                </TouchableOpacity>
              ))}
              <Gap width={-10} />
            </ScrollView>
          </View>
        </View>
        <Button text="BOOK TIKET" />
      </View>
    </BoxContainer>
  );
};

export default ChooseTime2;

const styles = StyleSheet.create({
  imageThumb: {
    width: '90%',
    height: '60%',
    borderRadius: 10,
    alignSelf: 'center',
  },
  detailWrapper: { flexDirection: 'row', paddingHorizontal: 20, paddingTop: 25, maxHeight: '50%' },
});

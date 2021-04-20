import React from 'react';
import { StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { color, FONT_BOLD } from '../../../theme';

const Header: React.FC<{ style?: ViewStyle; iconLeft?: any; onPress?: any; title?: string }> = ({
  style,
  iconLeft,
  onPress,
  title,
}) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      {iconLeft && (
        <TouchableOpacity onPress={onPress} style={styles.btnIcon}>
          <Icon name={iconLeft} size={20} color={color.white} backgroundColor="transparent" />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

type Style = {
  container: any;
  title: TextStyle;
  btnIcon: any;
};

const styles = StyleSheet.create<Style>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: color.primary,
    paddingVertical: 15,
  },
  title: {
    ...FONT_BOLD(20),
    color: color.white,
    textAlign: 'center',
    flex: 1,
  },
  btnIcon: { paddingLeft: 20, position: 'absolute', zIndex: 1 },
});

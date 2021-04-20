import React from 'react';
import { StyleSheet, Text, TextStyle, TouchableOpacity } from 'react-native';
import { color, FONT_BOLD } from '../../../theme';

const Button: React.FC<{
  text?: string;
  onPress?: any;
  disabled?: any;
}> = ({ text, onPress, disabled }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.container(disabled) }}
      disabled={disabled}
      onPress={onPress}
    >
      <Text style={styles.txtButton}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

type Style = {
  container: any;
  txtButton: TextStyle;
};

const styles = StyleSheet.create<Style>({
  container: (disabled?: Boolean) => ({
    backgroundColor: disabled ? color.dim : color.primary,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  txtButton: {
    ...FONT_BOLD(16),
    color: color.white,
    textAlignVertical: 'center',
  },
});

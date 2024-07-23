import { Pressable, Text } from 'react-native';

import { globalStyle } from '../../theme/theme';

interface Props {
  label: string;
  onPress: () => void;
}

export const PrimaryButton = ({ onPress, label }: Props) => {
  return (
    <Pressable onPress={ () => onPress() } style={ globalStyle.primaryButton }>
      <Text style={ globalStyle.buttonText }>{ label }</Text>
    </Pressable>
  )
}
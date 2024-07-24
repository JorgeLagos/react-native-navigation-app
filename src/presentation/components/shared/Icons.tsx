import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  name: string;
  size?: number;
  color?: string;
}

export const Icons = ({ name, size=20, color='#000000' }: Props) => {
  return (
    <Icon name={name} size={size} color={color} />
  )
}
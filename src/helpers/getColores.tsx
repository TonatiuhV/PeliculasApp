import ImageColors from 'react-native-image-colors';

export const getImageColors = async (uri: string, key_unique: string) => {
  const colors = await ImageColors.getColors(uri, {
    fallback: '#228B22',
    cache: true,
    key: key_unique.toString(),
  });

  let primary;
  let secoundary;

  switch (colors.platform) {
    case 'android':
      // android result properties
      primary = colors.dominant;
      secoundary = colors.average;
      break
    case 'ios':
      // iOS result properties
      primary = colors.primary;
      secoundary = colors.secondary;
      break
    default:
      throw new Error('Unexpected platform key')
  }

  return {primary,secoundary}
};

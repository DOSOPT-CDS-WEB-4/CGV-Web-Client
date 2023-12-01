export const filteringScreenType = (clickedTypeList: string[]) => {
  const typeClickKey: string[] = [];

  clickedTypeList.forEach(type => {
    switch (type) {
      case '일반관':
        typeClickKey.push('NORMAL');
        break;
      case 'IMAX관':
        typeClickKey.push('IMAX');
        break;
      case '컴포트관':
        typeClickKey.push('COMFORT');
        break;
      case 'GOLD CLASS관':
        typeClickKey.push('GOLDCLASS');
        break;
      default:
        null;
        break;
    }
  });
  return typeClickKey;
};

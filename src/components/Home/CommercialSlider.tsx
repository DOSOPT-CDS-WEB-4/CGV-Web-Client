import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import Slider from 'react-slick';
import styled from 'styled-components';

import img_ad1 from '../../assets/image/img_ad1.png';
import img_ad2 from '../../assets/image/img_ad2.png';
import img_ad3 from '../../assets/image/img_ad3.png';
import img_ad4 from '../../assets/image/img_ad4.png';

const CommercialSlider = () => {

  return (
    <St.CommercialWrapper>
      <St.CommercialSlider>
        <St.Commercial src={img_ad1} alt='첫번째-광고' />
        <St.Commercial src={img_ad2} alt='두번째-광고' />
        <St.Commercial src={img_ad3} alt='세번째-광고' />
        <St.Commercial src={img_ad4} alt='네번째-광고' />
      </St.CommercialSlider>
    </St.CommercialWrapper>
  );
};

const St = {
  CommercialWrapper: styled.div`

  `,

  CommercialSlider: styled(Slider)`

  `,
  
  Commercial: styled.img`

  `,
};

export default CommercialSlider;

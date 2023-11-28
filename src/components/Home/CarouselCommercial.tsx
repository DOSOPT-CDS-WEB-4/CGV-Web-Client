import styled from 'styled-components';
// import { ImgAd1, ImgAd2, ImgAd3, ImgAd4 } from '../../assets/image/';

const CarouselCommercial = () => {
    return (
        <St.CarouselWrapper>
            <St.ImgWrapper>
                {/* <ImgAd1 className='img' />
            </St.ImgWrapper>
            <St.ImgWrapper>
                <ImgAd2 className='img' />
            </St.ImgWrapper>
            <St.ImgWrapper>
                <ImgAd3 className='img' />
            </St.ImgWrapper>
            <St.ImgWrapper>
                <ImgAd4 className='img' /> */}
            </St.ImgWrapper>

        </St.CarouselWrapper>

    );
};

export default CarouselCommercial;

const St = {
    CarouselWrapper: styled.div`
        width: 37.5rem;
        height: 15.2rem;
    `,

    ImgWrapper: styled.div`
        
        & > .img {
            width: 37.5rem;
            height: 15.2rem;
        }
    `,

};

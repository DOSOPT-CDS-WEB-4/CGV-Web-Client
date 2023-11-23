import styled from 'styled-components';

import img_movie2 from '../../assets/image/img_movie2.png';

const MovieCard = () => {
    return (
        <St.MovieListWrapper>
            <St.MovieCardWrapper>
                <img src={img_movie2} />
            </St.MovieCardWrapper>
        </St.MovieListWrapper>
    );
};

export default MovieCard;

const St = {
    MovieListWrapper: styled.div`
        padding: 1.6rem 0rem 1.3rem 0rem;
    `,

    MovieCardWrapper: styled.li`
        width: 17.6rem;
        height: 32.6rem;
        flex-shrink: 0;
        border-radius: 2rem;
        box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.20);
        list-style: none;

        & > img {
            margin: 1rem 1.1rem 9.7rem 1.1rem;
        }
    `,

};

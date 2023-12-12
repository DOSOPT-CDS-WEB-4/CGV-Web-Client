import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SelectPersonBottomSheetBtn = () => {
  const navigate = useNavigate();

  return (
    <St.BottomSheetSelectPersonBtn type="button" onClick={() => navigate('/payment')}>
      인원선택
    </St.BottomSheetSelectPersonBtn>
  );
};

export default SelectPersonBottomSheetBtn;

const St = {
  BottomSheetSelectPersonBtn: styled.button`
    position: absolute;
    bottom: 0;

    display: flex;
    justify-content: center;

    width: 100%;
    padding: 1.8rem 0 5.3rem 0;

    color: ${({ theme }) => theme.colors.white};

    background: ${({ theme }) => theme.colors.gradient};

    ${({ theme }) => theme.fonts.title_medium_18};
  `,
};

import styled from 'styled-components';

const BottomSheetBtn = ({
  setIsOpenBottomSheet,
}: {
  setIsOpenBottomSheet: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      <St.BottomSheetSelectPersonBtn type="button" onClick={() => setIsOpenBottomSheet(false)}>
        인원선택
      </St.BottomSheetSelectPersonBtn>
    </>
  );
};

export default BottomSheetBtn;

const St = {
  BottomSheetSelectPersonBtn: styled.button`
    display: flex;
    justify-content: center;

    width: 100%;
    padding: 1.8rem 0 5.3rem 0;

    color: ${({ theme }) => theme.colors.white};

    background: ${({ theme }) => theme.colors.gradient};

    ${({ theme }) => theme.fonts.title_medium_18};
  `,
};

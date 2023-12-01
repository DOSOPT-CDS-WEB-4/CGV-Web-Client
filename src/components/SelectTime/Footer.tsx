import styled from 'styled-components';
const SelectTimeFooter = () => {
  return (
    <>
      <St.FooterWrapper>
        <St.FooterButton type="button">공지사항</St.FooterButton>
        <St.FooterButton type="button">고객센터</St.FooterButton>
        <St.FooterButton type="button">로그아웃</St.FooterButton>
        <St.FooterButton type="button">PC버전</St.FooterButton>
      </St.FooterWrapper>
    </>
  );
};
export default SelectTimeFooter;

const St = {
  FooterWrapper: styled.section`
    top: 80.1rem;

    display: flex;
    gap: 0.5rem;

    width: 100%rem;
    height: 3.9rem;
    margin-top: 1rem;
    padding: 0 1.6rem;

    background-color: ${({ theme }) => theme.colors.gray200};
  `,

  FooterButton: styled.button`
    cursor: pointer;

    flex-shrink: 0;

    width: 8.2rem;
    height: 3.9rem;

    color: ${({ theme }) => theme.colors.gray900};

    background-color: transparent;

    ${({ theme }) => theme.fonts.body_medium_13};
  `,
};

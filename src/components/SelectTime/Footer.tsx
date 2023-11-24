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
    display: flex;
    width: 37.5rem;
    height: 3.9rem;
    top: 801px;
    padding: 0 1.6rem;
    gap: 0.5rem;
    background-color: #d9d9d9;
  `,

  FooterButton: styled.button`
    width: 8.2rem;
    height: 3.9rem;
    flex-shrink: 0;
    background-color: transparent;
    cursor: pointer;
    ${({ theme }) => theme.fonts.body_medium_13};
    color: ${({ theme }) => theme.colors.gray900};
  `,
};

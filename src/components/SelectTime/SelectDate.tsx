import styled from 'styled-components';

const SelectDate = () => {
<<<<<<< Updated upstream
  return <section></section>;
=======
  const today = new Date();
  console.log(today.getDate(), today.getDay());
  return <St.SelectDateWapper></St.SelectDateWapper>;
>>>>>>> Stashed changes
};

export default SelectDate;

const St = {
  SelectDateWapper: styled.section``,
};

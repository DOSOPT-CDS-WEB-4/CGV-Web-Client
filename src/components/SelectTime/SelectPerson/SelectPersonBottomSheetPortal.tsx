import ReactDOM from 'react-dom';

const SelectPersonBottomSheetPortal = ({ children }: { children: React.ReactElement }) => {
  const targetEl = document.getElementById('bottom-sheet') as HTMLElement;

  return ReactDOM.createPortal(children, targetEl);
};

export default SelectPersonBottomSheetPortal;

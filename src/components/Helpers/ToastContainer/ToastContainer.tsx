import {
  DefaultToastContainer,
  ToastContainerProps
} from 'react-toast-notifications';

const addProps = {
  style: {
    zIndex: 9999
  }
};

function ToastContainer(props: ToastContainerProps) {
  return <DefaultToastContainer {...addProps} {...props} />;
}

export default ToastContainer;

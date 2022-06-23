import { useCallback, useState } from 'react';
import { get } from 'lodash';

export interface ModalOptions {
  afterSubmit?: () => void | Promise<void>;
  onClose?: () => void;
  onOpen?: () => void;
  onSubmit: () => Promise<unknown>;
  onToggle?: (isOpen: boolean) => void;
  preventModalClose?: boolean;
  isModalOpen?: boolean;
}

function useModal({
  afterSubmit,
  onClose,
  onOpen,
  onSubmit,
  onToggle,
  preventModalClose,
  isModalOpen = false
}: ModalOptions) {
  const [isOpen, setIsOpen] = useState<boolean>(isModalOpen);

  const showModal = useCallback<() => void>(() => {
    setIsOpen(true);
    onOpen && onOpen();
    onToggle && onToggle(true);
  }, [setIsOpen, onOpen, onToggle]);

  const hideModal = useCallback<() => void>(() => {
    preventModalClose ? null : setIsOpen(false);
    onClose && onClose();
    onToggle && onToggle(false);
  }, [preventModalClose, onClose, onToggle]);

  const handleSubmit = useCallback<() => void>(() => {
    if (onSubmit) {
      onSubmit()
        .then(() => {
          hideModal();
          afterSubmit && afterSubmit();
        })
        .catch((e) => console.log('useModal handleSubmit', get(e, 'message')));
    } else {
      hideModal();
      afterSubmit && afterSubmit();
    }
  }, [hideModal, onSubmit, afterSubmit]);

  return { isOpen, showModal, hideModal, handleSubmit };
}

export default useModal;

import React, { Fragment, ReactNode } from 'react';

import { ClassName, isLoading } from '../../../types';

import { useModal } from '../../ModalHelper/hooks/insex';

import { SimpleModal } from '../../ModalHelper/SimpleModal';
import { SimpleButton } from '../SimpleButton';

interface SubmitModalButtonProps {
  title: string;
  text: string;
  children: ReactNode;
  isLoading: isLoading;
  afterSubmit?: () => void | Promise<void>;
  onClose?: () => void;
  onOpen?: () => void;
  onSubmit?: () => Promise<unknown>;
  onToggle?: (isOpen: boolean) => void;
  preventModalClose?: boolean;
  isModalOpen?: boolean;
  className?: ClassName;
}
const SubmitModalButton = ({
  title,
  children,
  isLoading,
  onOpen,
  onClose,
  onToggle,
  onSubmit,
  afterSubmit,
  preventModalClose,
  className,
  text
}: SubmitModalButtonProps) => {
  const { isOpen, showModal, hideModal, handleSubmit } = useModal({
    onOpen,
    onClose,
    onToggle,
    onSubmit,
    afterSubmit,
    preventModalClose
  });
  return (
    <Fragment>
      <SimpleButton className={className} onClick={showModal}>
        {text}
      </SimpleButton>

      <SimpleModal
        title={title}
        hideModal={hideModal}
        isOpen={isOpen}
        isLoading={isLoading}
        handleSubmit={handleSubmit}
      >
        {children}
      </SimpleModal>
    </Fragment>
  );
};

export default SubmitModalButton;

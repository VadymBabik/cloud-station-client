import React, { Fragment, ReactNode } from 'react';

import { ClassName, isLoading } from '../../../../types';

import { useModal } from '../../ModalHelper/hooks/insex';

import { SimpleModal } from '../../ModalHelper/SimpleModal';
import { SimpleButton } from '../SimpleButton';

interface SimpleModalButtonProps {
  titleModal: string;
  buttonText: string;
  children: ReactNode;
  isLoading?: isLoading;
  afterSubmit?: () => void | Promise<void>;
  onClose?: () => void;
  onOpen?: () => void;
  onSubmit: () => Promise<unknown>;
  onToggle?: (isOpen: boolean) => void;
  preventModalClose?: boolean;
  isModalOpen?: boolean;
  className?: ClassName;
}
const SimpleModalButton = ({
  titleModal,
  children,
  isLoading,
  onOpen,
  onClose,
  onToggle,
  onSubmit,
  afterSubmit,
  preventModalClose,
  className,
  buttonText
}: SimpleModalButtonProps) => {
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
        {buttonText}
      </SimpleButton>

      <SimpleModal
        titleModal={titleModal}
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

export default SimpleModalButton;

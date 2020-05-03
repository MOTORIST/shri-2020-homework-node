import React, { useRef, useCallback, SyntheticEvent, MutableRefObject } from 'react';
import usePortal from 'react-useportal';
import cn from '../../../libs/classname';
import './Modal.post.css';

const ModalCn = cn('Modal');

type HTMLElRef = MutableRefObject<HTMLElement>;

type CustomEvent = {
  event?: SyntheticEvent<any, Event>;
  portal: HTMLElRef;
  targetEl: HTMLElRef;
} & SyntheticEvent<any, Event>;

type CustomEventHandler = (customEvent: CustomEvent) => void;
interface ModalConfig {
  onOpen?: CustomEventHandler;
  onClose?: CustomEventHandler;
  background?: boolean;
}

export const useModal = ({
  onOpen: handleOnOpen,
  onClose: handleClose,
  background,
  ...config
}: ModalConfig = {}) => {
  const modal = useRef<HTMLElement>();

  const modalStyle = `
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 1000;
    box-sizing: border-box;
    padding: 20px;
  `;

  const backgroundStyle = `
    position: absolute;
    background: ${background ? 'rgba(0, 0, 0, 0.5)' : 'transparent'};
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    padding: 20px;
    top: 0;
    left: 0;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const { isOpen, togglePortal, openPortal, closePortal, Portal } = usePortal({
    onOpen(event) {
      const { portal } = event;
      portal.current.style.cssText = background ? backgroundStyle : modalStyle;

      if (handleOnOpen) {
        handleOnOpen(event);
      }
    },
    onClose(event) {
      const { portal } = event;
      portal.current.removeAttribute('style');

      if (handleClose) {
        handleClose(event);
      }
    },
    onPortalClick({ target }) {
      const isClickingOutsideModal =
        modal && modal.current && !modal.current.contains(target as Node);

      if (isClickingOutsideModal) closePortal();
    },
    bindTo: document.querySelector('.Theme') as HTMLElement,
    ...config,
  });

  const ModalWithBackground = useCallback(
    (props) => (
      <Portal>
        <div ref={modal} {...props} className={ModalCn()} />
      </Portal>
    ),
    [],
  );

  const Modal = background ? ModalWithBackground : Portal;

  return Object.assign([openPortal, closePortal, isOpen, Modal, togglePortal], {
    Modal,
    toggleModal: togglePortal,
    openModal: openPortal,
    closeModal: closePortal,
    isOpen,
  });
};

import React, { useRef, useCallback } from 'react';
import usePortal from 'react-useportal';
import cn from '../../../libs/classname';
import './Modal.post.css';

const ModalCn = cn('Modal');

export const useModal = ({ onOpen, onClose, background, ...config } = {}) => {
  const modal = useRef();

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
      if (onOpen) onOpen(event);
    },
    onClose(event) {
      const { portal } = event;
      portal.current.removeAttribute('style');
      if (onClose) onClose(event);
    },
    onPortalClick({ target }) {
      const clickingOutsideModal = modal && modal.current && !modal.current.contains(target);
      if (clickingOutsideModal) closePortal();
    },
    bindTo: document.querySelector('.Theme'),
    ...config,
  });

  const ModalWithBackground = useCallback(
    props => (
      <Portal>
        <div ref={modal} {...props} className={ModalCn()} />
      </Portal>
    ),
    []
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

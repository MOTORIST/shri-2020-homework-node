/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { useModal } from '.';
import Button from '../Button';
import Typography from '../Typography';
import Input from '../Input';
import ButtonGroups from '../ButtonGroups';
import FormGroup, { FormGroupLabel } from '../FormGroup';

export default {
  title: 'UI',
};

const ModalComponent = () => {
  const { openModal, closeModal, isOpen, Modal } = useModal({ background: true });

  return (
    <>
      <Button onClick={openModal}>Open modal</Button>
      {isOpen && (
        <Modal>
          <Typography variant="h2">New build</Typography>
          <FormGroup>
            <FormGroupLabel htmlFor="input" required>
              Enter the commit hash which you want to build.
            </FormGroupLabel>
            <Input id="input" placeholder="Commit hash" />
          </FormGroup>

          <ButtonGroups>
            <Button color="primary">Run build</Button>
            <Button onClick={closeModal}>Cancel</Button>
          </ButtonGroups>
        </Modal>
      )}
    </>
  );
};
export const modal = () => <ModalComponent />;

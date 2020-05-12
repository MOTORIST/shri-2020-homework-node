/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import FormGroup, { FormGroupLabel, FormGroupHint, FormGroupError } from '.';
import Input from '../Input';

export default {
  title: 'UI/Form group',
};

export const formGroup = () => (
  <FormGroup>
    <FormGroupLabel htmlFor="input" required>
      Label
    </FormGroupLabel>
    <Input id="input" />
    <FormGroupHint>Hint</FormGroupHint>
  </FormGroup>
);

export const formGroupRow = () => (
  <FormGroup row>
    <FormGroupLabel htmlFor="input">Label</FormGroupLabel>
    <Input id="input" width="2xs" />
    <FormGroupHint>Hint</FormGroupHint>
  </FormGroup>
);

export const formGroupError = () => (
  <FormGroup>
    <FormGroupLabel htmlFor="input" required>
      Label
    </FormGroupLabel>
    <Input id="input" status="error" />
    <FormGroupError>Error message</FormGroupError>
  </FormGroup>
);

import React from 'react';
import FormGroup, { FormGroupLabel, FormGroupHint } from '.';
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
    <Input id="input" />
    <FormGroupHint>Hint</FormGroupHint>
  </FormGroup>
);

import React from 'react';
import PropTypes from 'prop-types';
import cn from '../../../libs/classname';
import Typography from '../../UI/Typography';
import FormGroup, { FormGroupLabel, FormGroupError } from '../../UI/FormGroup';
import Input from '../../UI/Input';
import ButtonGroups from '../../UI/ButtonGroups';
import Button from '../../UI/Button';
import { useForm } from 'react-hook-form';

const NewBuildFormCn = cn('NewBuildForm');

export const NewBuildForm = ({ onCancel, onSubmit, className }) => {
  const { register, handleSubmit, errors, setValue } = useForm();

  const handleClearableInput = ({ name }) => {
    setValue(name, '');
  };

  return (
    <div className={NewBuildFormCn(null, [className])}>
      <Typography variant="h2">New build</Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <FormGroupLabel htmlFor="commitHash" required>
            Enter the commit hash which you want to build.
          </FormGroupLabel>
          <Input
            id="commitHash"
            placeholder="Commit hash"
            name="commitHash"
            inputRef={register({ required: { value: true, message: 'Field is required' } })}
            status={errors.commitHash && 'error'}
            onClearable={handleClearableInput}
            clearable
          />
          {errors.commitHash && <FormGroupError>{errors?.commitHash?.message}</FormGroupError>}
        </FormGroup>

        <ButtonGroups>
          <Button color="primary">Run build</Button>
          <Button onClick={onCancel} type="button">
            Cancel
          </Button>
        </ButtonGroups>
      </form>
    </div>
  );
};

NewBuildForm.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  className: PropTypes.string,
};

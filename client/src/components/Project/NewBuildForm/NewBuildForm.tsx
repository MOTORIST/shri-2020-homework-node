import React from 'react';
import cn from '../../../libs/classname';
import Typography from '../../UI/Typography';
import FormGroup, { FormGroupLabel, FormGroupError } from '../../UI/FormGroup';
import Input from '../../UI/Input';
import ButtonGroups from '../../UI/ButtonGroups';
import Button from '../../UI/Button';
import { useForm } from 'react-hook-form';

const NewBuildFormCn = cn('NewBuildForm');

export interface NewBuildFormProps {
  onCancel: () => void;
  onSubmit: () => void;
  className?: string;
}

export const NewBuildForm: React.FC<NewBuildFormProps> = ({ onCancel, onSubmit, className }) => {
  const { register, handleSubmit, errors, setValue } = useForm();

  const handleClearableInput = ({ name }: { name: string }): void => {
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

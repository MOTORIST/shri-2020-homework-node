import React, { useEffect } from 'react';
import cn from '../../../libs/classname';
import { useForm, DeepPartial, OnSubmit } from 'react-hook-form';
import Typography from '../../UI/Typography';
import FormGroup, { FormGroupHint, FormGroupLabel, FormGroupError } from '../../UI/FormGroup';
import Input from '../../UI/Input';
import Button from '../../UI/Button';
import { Config } from '../../../../../types/Config';
import './SettingsForm.post.css';
import './SaveButton/SettingsForm-SaveButton.post.css';
import './CancelButton/SettingsForm-CancelButton.post.css';

const SettingsFormCn = cn('SettingsForm');

interface SettingsFormProps {
  onSubmit: OnSubmit<Config>;
  onCancel?: () => void;
  isFetching?: boolean;
  className?: string;
  defaultValues: DeepPartial<Config>;
}

const SettingsForm: React.FC<SettingsFormProps> = ({
  onSubmit,
  onCancel,
  isFetching,
  defaultValues,
  className,
}) => {
  const { register, handleSubmit, errors, setValue, reset } = useForm<Config>();

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  const validators = {
    required: { value: true, message: 'Field is required' },
    min: { value: 10, message: 'Field must be number and not equal to 0' },
    pattern: { value: /^[1-9]\d*$/, message: 'Field must be number and not equal to 0' },
  };

  const getValidators = (rules: Record<string, any>) =>
    Object.fromEntries(Object.entries(validators).filter(([key]) => rules.includes(key)));

  const handleClearableInput = ({ name }: { name: string }): void => {
    setValue(name, '');
  };

  return (
    <div className={SettingsFormCn(null, [className])}>
      <Typography variant="h4">Settings</Typography>
      <Typography variant="body" color="secondary">
        Configure repository connection and synchronization settings.
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <FormGroupLabel htmlFor="repoName" required>
            GitHub repository
          </FormGroupLabel>
          <Input
            id="repoName"
            name="repoName"
            placeholder="user-name/repo-name"
            inputRef={register(getValidators(['required']))}
            status={errors.repoName && 'error'}
            onClearable={handleClearableInput}
            clearable
          />
          {errors.repoName && <FormGroupError>{errors?.repoName?.message}</FormGroupError>}
        </FormGroup>

        <FormGroup>
          <FormGroupLabel htmlFor="buildCommand" required>
            Build command
          </FormGroupLabel>
          <Input
            id="buildCommand"
            name="buildCommand"
            placeholder="npm ci && npm run build"
            inputRef={register(getValidators(['required']))}
            status={errors.buildCommand && 'error'}
            onClearable={handleClearableInput}
            clearable
          />
          {errors.buildCommand && <FormGroupError>{errors?.buildCommand?.message}</FormGroupError>}
        </FormGroup>

        <FormGroup>
          <FormGroupLabel htmlFor="mainBranch" required>
            Main branch
          </FormGroupLabel>
          <Input
            id="mainBranch"
            name="mainBranch"
            placeholder="Main branch"
            inputRef={register(getValidators(['required']))}
            status={errors.mainBranch && 'error'}
            onClearable={handleClearableInput}
            clearable
          />
          {errors.mainBranch && <FormGroupError>{errors?.mainBranch?.message}</FormGroupError>}
        </FormGroup>

        <FormGroup row>
          <FormGroupLabel htmlFor="period">Synchronize every</FormGroupLabel>
          <Input
            id="period"
            name="period"
            inputRef={register(getValidators(['required', 'pattern']))}
            status={errors.period && 'error'}
            placeholder="10"
            width="2xs"
          />
          <FormGroupHint>minutes</FormGroupHint>
          {errors.period && <FormGroupError>{errors?.period?.message}</FormGroupError>}
        </FormGroup>

        <div>
          <Button
            className={SettingsFormCn('SaveButton')}
            color="primary"
            disabled={isFetching}
            full
          >
            Save
          </Button>
          <Button
            className={SettingsFormCn('CancelButton')}
            type="button"
            onClick={onCancel}
            disabled={isFetching}
            full
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SettingsForm;

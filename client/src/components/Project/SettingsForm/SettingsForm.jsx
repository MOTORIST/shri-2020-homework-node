import React from 'react';
import PropTypes from 'prop-types';
import cn from '../../../libs/classname';
import { useForm } from 'react-hook-form';
import Typography from '../../UI/Typography';
import FormGroup, { FormGroupHint, FormGroupLabel, FormGroupError } from '../../UI/FormGroup';
import Input from '../../UI/Input';
import Button from '../../UI/Button';
import './SettingsForm.post.css';
import './SaveButton/SettingsForm-SaveButton.post.css';
import './CancelButton/SettingsForm-CancelButton.post.css';

const SettingsFormCn = cn('SettingsForm');

const SettingsForm = ({ onSubmit, onCancel, defaultValues, className }) => {
  const { register, handleSubmit, errors, setValue } = useForm({ defaultValues });

  const validators = {
    required: { value: true, message: 'Field is required' },
  };

  const getValidators = rules =>
    Object.fromEntries(Object.entries(validators).filter(([key]) => rules.includes(key)));

  const handleClearableInput = ({ name }) => {
    setValue(name, '');
  };

  return (
    <div className={SettingsFormCn(null, [className])}>
      <Typography variant="h4">Settings</Typography>
      <Typography variant="body" color="secondary">
        Configure repository connection and synchronization settings.
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
            inputRef={register(getValidators(['required']))}
            status={errors.period && 'error'}
            placeholder="10"
            width="2xs"
          />
          <FormGroupHint>minutes</FormGroupHint>
          {errors.period && <FormGroupError>{errors?.period?.message}</FormGroupError>}
        </FormGroup>

        <div>
          <Button className={SettingsFormCn('SaveButton')} color="primary" full>
            Save
          </Button>
          <Button className={SettingsFormCn('CancelButton')} type="button" onClick={onCancel} full>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

SettingsForm.propTypes = {
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
  defaultValues: PropTypes.shape({
    repoName: PropTypes.string.isRequired,
    buildCommand: PropTypes.string.isRequired,
    mainBranch: PropTypes.string.isRequired,
    period: PropTypes.number.isRequired,
  }),
};

export default SettingsForm;

import React, { useEffect } from 'react';
import cn from '../../../libs/classname';
import { useForm, DeepPartial, OnSubmit } from 'react-hook-form';
import Typography from '../../UI/Typography';
import FormGroup, { FormGroupHint, FormGroupLabel, FormGroupError } from '../../UI/FormGroup';
import Input from '../../UI/Input';
import Button from '../../UI/Button';
import { Config } from '../../../../../types/Config';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation(['SettingsForm']);
  const { register, handleSubmit, errors, setValue, reset, watch } = useForm<Config>();
  const periodValue = watch('period');

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  const validators = {
    required: { value: true, message: t('isRequiredValidation') },
    pattern: { value: /^[1-9]\d*$/, message: t('isNumberValidation') },
  };

  const getValidators = (rules: Record<string, any>) =>
    Object.fromEntries(Object.entries(validators).filter(([key]) => rules.includes(key)));

  const handleClearableInput = ({ name }: { name: string }): void => {
    setValue(name, '');
  };

  return (
    <div className={SettingsFormCn(null, [className])}>
      <Typography variant="h4">{t('formTitle')}</Typography>
      <Typography variant="body" color="secondary">
        {t('formDescription')}
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <FormGroupLabel htmlFor="repoName" required>
            {t('repoNameInput')}
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
            {t('buildCommandInput')}
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
            {t('mainBranchInput')}
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
          <FormGroupLabel htmlFor="period" required>
            {t('synchronizeEveryInput')}
          </FormGroupLabel>
          <Input
            id="period"
            name="period"
            inputRef={register(getValidators(['required', 'pattern']))}
            status={errors.period && 'error'}
            placeholder="10"
            width="2xs"
          />
          <FormGroupHint>{t('synchronizeEveryInputHint', { count: periodValue })}</FormGroupHint>
          {errors.period && <FormGroupError>{errors?.period?.message}</FormGroupError>}
        </FormGroup>

        <div>
          <Button
            className={SettingsFormCn('SaveButton')}
            color="primary"
            disabled={isFetching}
            full
          >
            {t('saveButton')}
          </Button>
          <Button
            className={SettingsFormCn('CancelButton')}
            type="button"
            onClick={onCancel}
            disabled={isFetching}
            full
          >
            {t('cancelButton')}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SettingsForm;

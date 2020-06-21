import React from 'react';
import cn from '../../../libs/classname';
import Typography from '../../UI/Typography';
import FormGroup, { FormGroupLabel, FormGroupError } from '../../UI/FormGroup';
import Input from '../../UI/Input';
import ButtonGroups from '../../UI/ButtonGroups';
import Button from '../../UI/Button';
import { useForm } from 'react-hook-form';
import { Build } from '../../../../../types/Build';
import { useTranslation } from 'react-i18next';

const NewBuildFormCn = cn('NewBuildForm');

export interface NewBuildFormProps {
  onCancel: () => void;
  onSubmit: ({ commitHash }: Pick<Build, 'commitHash'>) => void;
  className?: string;
}

export const NewBuildForm: React.FC<NewBuildFormProps> = ({ onCancel, onSubmit, className }) => {
  const { register, handleSubmit, errors, setValue } = useForm<Pick<Build, 'commitHash'>>();
  const { t } = useTranslation(['NewBuildForm']);

  const handleClearableInput = ({ name }: { name: string }): void => {
    setValue(name, '');
  };

  return (
    <div className={NewBuildFormCn(null, [className])}>
      <Typography variant="h2">{t('title')}</Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <FormGroupLabel htmlFor="commitHash" required>
            {t('description')}
          </FormGroupLabel>
          <Input
            id="commitHash"
            placeholder={t('commitHashInputPlaceholder')}
            name="commitHash"
            inputRef={register({ required: { value: true, message: t('isRequiredValidation') } })}
            status={errors.commitHash && 'error'}
            onClearable={handleClearableInput}
            clearable
          />
          {errors.commitHash && <FormGroupError>{errors?.commitHash?.message}</FormGroupError>}
        </FormGroup>

        <ButtonGroups>
          <Button color="primary">{t('runBuildButton')}</Button>
          <Button onClick={onCancel} type="button">
            {t('cancelButton')}
          </Button>
        </ButtonGroups>
      </form>
    </div>
  );
};

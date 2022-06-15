import { useCallback } from 'react';
import {
  DeepPartial,
  FieldValues,
  Path,
  SubmitErrorHandler,
  SubmitHandler,
  UnpackNestedValue,
  useForm
} from 'react-hook-form';
import keys from 'lodash/keys';
import pick from 'lodash/pick';
import { AnyObjectSchema } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface ReactHookFormOptions<FormDataType> {
  defaultValues: UnpackNestedValue<DeepPartial<FormDataType>>;
  serverValidatedFields?: Path<FormDataType>[];
  schema?: AnyObjectSchema;
}

interface SubmitReactHookFormOptions<FormDataType> {
  onSubmit: SubmitHandler<FormDataType>;
  onClientValidationError?: SubmitErrorHandler<FormDataType>;
  onServerError?: (error: unknown) => void;
  dirtyFieldsOnly?: boolean;
}

function useReactHookForm<FormDataType extends FieldValues>({
  defaultValues,
  schema
}: ReactHookFormOptions<FormDataType>) {
  const {
    control,
    formState: { dirtyFields, isDirty, errors },
    handleSubmit,
    register,
    reset,
    setError,
    setValue,
    watch,
    getValues
  } = useForm<FormDataType>({
    defaultValues,
    resolver: schema ? yupResolver(schema) : undefined
  });

  const handleSubmitReactHookForm = useCallback(
    ({
      onSubmit,
      onClientValidationError,
      onServerError,
      dirtyFieldsOnly = true
    }: SubmitReactHookFormOptions<FormDataType>) =>
      handleSubmit(
        async (data) => {
          try {
            if (dirtyFieldsOnly) {
              return await onSubmit?.(
                pick(data, keys(dirtyFields)) as UnpackNestedValue<FormDataType>
              );
            }

            return await onSubmit?.(data);
          } catch (error) {
            onServerError?.(error);
          }
        },
        (errors) => {
          onClientValidationError?.(errors);
        }
      ),
    [handleSubmit, dirtyFields]
  );

  return {
    control,
    dirtyFields,
    errors,
    handleSubmitReactHookForm,
    isDirty,
    register,
    resetForm: reset,
    setError,
    setValue,
    watch,
    getValues
  };
}

export default useReactHookForm;

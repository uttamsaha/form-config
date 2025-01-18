"use client"
import { ReactNode } from "react";
import { useForm, FormProvider, FieldValues, SubmitHandler } from "react-hook-form";
type TFormConfig = {
    resolver?: any;
    defaultValues?: Record<string, any>;
  };
  type TFormProps = {
    children: ReactNode;
    onSubmit: SubmitHandler<FieldValues>;
  } & TFormConfig;

  
export default function Form({ children, onSubmit, resolver, defaultValues}: TFormProps) {
    const formConfig : TFormConfig = {};
    if(resolver){
        formConfig.resolver = resolver;
    }
    if(defaultValues){
        formConfig.defaultValues = defaultValues;
    }
  const methods = useForm(formConfig);
  const { handleSubmit, reset } = methods;

  const submit = (data: FieldValues) => {
    onSubmit(data);
    reset();
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submit)}>{children}</form>
    </FormProvider>
  );
}

import { FormWrapper, TitleForm } from './styles';

interface FormProps {
  title: string;
  children: React.ReactNode;
  onSubmit: React.FormEventHandler<HTMLDivElement> | undefined;
}

export const Form: React.FC<FormProps> = ({ title, children, onSubmit }) => {
  return (
    <>
      <TitleForm>{title}</TitleForm>
      <FormWrapper onSubmit={onSubmit}>{children}</FormWrapper>
    </>
  );
};

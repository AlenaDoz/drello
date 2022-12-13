import { useCallback, useState } from 'react';
import { ColumnTitle } from '../Column/styles';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IAddEditModal } from '../../types/interfaces';
import { ApplyBtn, CancelBtn, Form, InputDescription, InputName } from './style';
import CancelIcon from '../../assets/images/cancel.svg';
import ApplyIcon from '../../assets/images/apply.svg';

type Props = {
  title?: string;
  description?: string;
  dispatch: Function;
};

export const EditableTitle = ({ title, description, dispatch }: Props) => {
  const [isActive, setActive] = useState(false);
  const defaultValues: IAddEditModal = { title, description };
  const { register, handleSubmit, reset, setValue } = useForm({ defaultValues });
  
  if (title) {
    setValue('title', title);
  }
  
  if (description) {
    setValue('description', description);
  }

  const clickHandler = useCallback(() => {
    setActive(true);
  }, []);

  const applyHandler = (data: IAddEditModal) => {
    formHandler(data);
    setActive(false);
    reset();
  };

  const cancelHandler = useCallback(() => {
    setActive(false);
    reset();
  }, [reset]);

  const formHandler: SubmitHandler<IAddEditModal> = (data: IAddEditModal) => {
    dispatch(data);
    setActive(false);
    reset();
  };

  return (
    <ColumnTitle>
      {
        isActive ? 
          <Form onSubmit={handleSubmit(formHandler)}>
            {
              title && 
              <InputName
                {...register('title', { required: true })}
                type='text'
              />
            }
            {
              description && 
              <InputDescription
                {...register('description', { required: true })}
              />
            }
            <ApplyBtn onClick={handleSubmit(data => applyHandler(data))} src={ApplyIcon}/>
            <CancelBtn onClick={cancelHandler} src={CancelIcon}/>
          </Form> : 
        <>
          {
            title && <div onClick={() => clickHandler()}>{title}</div>
          }
          {
            description && <div onClick={() => clickHandler()}>{description}</div>
          }
        </>
      }
    </ColumnTitle>
  );
};

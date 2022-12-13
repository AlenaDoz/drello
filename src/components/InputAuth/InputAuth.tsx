import React from 'react';
import { InputForm } from './styles';

interface InputProps {
  onChange: () => void;
  value: string;
  label: string;
  type: string;
  error: boolean;
  helperText: string | undefined;
}

export const InputAuth: React.FC<InputProps> = React.memo(
  ({ label, type, error, helperText, onChange, value }) => {
    return (
      <InputForm
        label={label}
        onChange={onChange}
        value={value || ''}
        type={type}
        error={error}
        helperText={helperText}
      />

    );
  }
);

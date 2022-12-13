import { TextField } from '@mui/material';
import styled from 'styled-components';
import { fonts } from '../../constants/constants';

export const InputForm = styled(TextField).attrs({
  fullWidth: true,
  margin: 'normal',
  InputLabelProps: { style: { fontSize: '20px' }, variant: 'outlined' },
})`
  &&.MuiTextField-root div {
    font-size: 20px;
  }
  &&.MuiTextField-root p {
    font-size: 15px;
  }
  &&.MuiTextField-root input {
    font-size: 20px;
    font-family: ${fonts.raleway};
    height: 28px;
  }
  &&.MuiTextField-root * {
    font-family: ${fonts.raleway};
  }
  &&.MuiTextField-root {
    width: 70%;
  }
`;

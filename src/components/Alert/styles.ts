import { Alert } from '@mui/material';
import styled from 'styled-components';

export const AlertMUI = styled(Alert)`
  width: 100%;
  && .MuiAlert-message {
    font-size: 14px;
  }
  && .MuiAlert-action {
    padding-top: 7px;
  }
`;

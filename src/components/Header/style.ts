import styled from 'styled-components';
import { styleVars } from '../../constants/constants';

const HeaderBlock = styled.div<{ sticky: boolean }>`
  width: 100%;
  height: 70px;
  background: ${({ sticky }) =>
    sticky
      ? `linear-gradient(
    180deg,
    ${styleVars.lightblue} 0%,
    ${styleVars.blue} 99%
  )`
      : styleVars.white};
  transition: all 0.3s ease-out;
  display: flex;
  flex: 0 0 auto;
  padding-left: 20px;
  position: sticky;
  top: 0;
`;
const SwitcherLabel = styled.label`
  display: block;
  position: relative;
  background-color: white;
  border-radius: 6px;
  border: 0.5px solid grey;
  width: 20px;
  height: 15px;
  transition: all 0.2s ease-in;
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 4px;
    left: 2px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: black;
    transition: all 0.3s ease-out;
  }
`;

const SwitcherInput = styled.input`
  display: none;
  &:checked + ${SwitcherLabel} {
    background-color: ${styleVars.darkblue};
  }
  &:checked + ${SwitcherLabel}::after {
    left: 12px;
  }
`;

const NavBlock = styled.div`
  margin: 20px;
  margin-left: auto;
  display: flex;
  gap: 15px;
`;

const LogoImg = styled.img`
  width: 40px;
  margin-top: 15px;
`;

const SwitcherBlock = styled.div`
  display: flex;
  margin: 20px;
  gap: 5px;
`;

const UserImage = styled.img`
  height: 20px;
`;

const EditProfile = styled.img`
  height: 20px;
`;

const CreateBoardImg = styled.img`
  height: 20px;
`;

const SignOutImg = styled.img`
  height: 20px;
  cursor: pointer;
`;

export {
  HeaderBlock,
  SwitcherLabel,
  SwitcherInput,
  NavBlock,
  SwitcherBlock,
  UserImage,
  LogoImg,
  EditProfile,
  CreateBoardImg,
  SignOutImg,
};

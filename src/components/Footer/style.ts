import styled from 'styled-components';
import { styleVars } from '../../constants/constants';
import { widthEntryPoints } from '../../constants/constants';

const FooterBlock = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  gap: 40px;
  background-color: ${styleVars.darkblue};
  flex: 0 0 auto;
  align-items: center;
`;

const RssLogo = styled.img`
  width: 50px;
  height: auto;
`;
const GithubLinks = styled.div`
  display: flex;
  gap: 10px;
  @media (${widthEntryPoints.tablet}) {
    flex-direction: column;
    gap: 0;
  }
`;
const GithubLink = styled.a`
  color: black;
  text-decoration: none;
`;
export { FooterBlock, RssLogo, GithubLinks, GithubLink };

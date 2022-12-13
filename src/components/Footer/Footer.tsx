import React from 'react';
import { FooterBlock, RssLogo, GithubLinks, GithubLink } from './style';
import RsLogo from '../../assets/images/rs_school_logo.svg';

const Footer = () => {
  return (
    <FooterBlock>
      <GithubLinks>
        <GithubLink href='https://github.com/daironsib'>@daironsib</GithubLink>
        <GithubLink href='https://github.com/AlenaDoz'>@AlenaDoz</GithubLink>
        <GithubLink href='https://github.com/rybakovmax23'>
          @rybakovmax23
        </GithubLink>
      </GithubLinks>
      <p>2022</p>
      <a href='https://rs.school/react/'>
        <RssLogo src={RsLogo} alt='rss-school-react' />
      </a>
    </FooterBlock>
  );
};

export default Footer;

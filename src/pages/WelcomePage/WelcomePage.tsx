import React from 'react';
import ComputerImg from '../../assets/images/video-calling.png';
import {
  WelcomePageBlock,
  GeneralInfo,
  AboutProject,
  AboutCourse,
  AboutTeam,
  ComputerImage,
  GeneralInfoTexts,
  AboutProjectCard,
  AboutTeamList,
  GeneralInfoSubtext,
} from './style';
import { useTranslation } from 'react-i18next';

const WelcomePage = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'welcomePage' });
  return (
    <WelcomePageBlock>
      <GeneralInfo>
        <GeneralInfoTexts>
          <h3>{t('generalInfoTextHeading')}</h3>
          <GeneralInfoSubtext>{t('generalInfoText')}</GeneralInfoSubtext>
        </GeneralInfoTexts>
        <ComputerImage src={ComputerImg} alt='computer' />
      </GeneralInfo>
      <AboutProject>
        <AboutProjectCard>{t('firstCard')}</AboutProjectCard>
        <AboutProjectCard>{t('secondCard')}</AboutProjectCard>
        <AboutProjectCard>{t('thirdCard')}</AboutProjectCard>
        <AboutProjectCard>{t('fourthCard')}</AboutProjectCard>
      </AboutProject>
      <AboutCourse>
        <h3></h3>
        <p></p>
      </AboutCourse>
      <AboutTeam>
        <h3></h3>
        <AboutTeamList>
          <li>
            <h4>Artem Sokolov</h4>
            <p>Frontend developer, Teamlead</p>
          </li>
          <li>
            <h4>Alena Dozortseva</h4>
            <p>Frontend developer</p>
          </li>
          <li>
            <h4>Maxim Rybakov</h4>
            <p>Frontend developer</p>
          </li>
        </AboutTeamList>
      </AboutTeam>
    </WelcomePageBlock>
  );
};

export default WelcomePage;

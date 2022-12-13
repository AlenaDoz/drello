import { ROUTES } from '../../constants/constants';
import { NotFoundDescription, NotFoundLink, NotFoundTitle, NotFoundWrapper } from './styles';

export const NotFound = () => {
  return (
    <NotFoundWrapper>
      <NotFoundTitle>404</NotFoundTitle>
      <NotFoundDescription>Страница не найдена</NotFoundDescription>
      <NotFoundLink to={ROUTES.welcomePage}>Перейти на главную</NotFoundLink>
    </NotFoundWrapper>
  );
};

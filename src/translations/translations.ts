import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

const translationEN = {
  welcomePage: {
    generalInfoTextHeading: `Are you looking for a convenient application that will be handy
            to manage the process of setting and completing tasks?`,
    generalInfoText: `We are glad to present to your attention our application DRELLO. With
            it, you can easily manage your project, be aware of all the tasks
            and control the progress of their implementation.`,
    firstCard: 'Unlimited kanban boards, columns and tasks',
    secondCard: 'Simple and intuitive interface',
    thirdCard: `You can specify additional info in
          task description and assign users`,
    fourthCard: 'Convenient search among the list of all your projects',
    aboutCourseHeading: 'About course',
    aboutCourse: `This application is the result of the collaboration of a team of
          students of the React 2022 Q3 group of the React Development course RS
          School is free-of-charge and community-based education program
          conducted by The Rolling Scopes developer community since 2013.
          Everyone can study at RS School, regardless of age, professional
          employment, or place of residence. The mentors and trainers of our
          school are front-end and javascript developers from different
          companies and countries.`,
    aboutTeamHeading: 'Our team',
  },
  authPages: {
    titleRegistration: 'Sign up',
    titleLogin: 'Sign in',
    titleEditProfile: 'Edit profile',
    linkRegistration: 'Already have an account?',
    linkLogin: "Don't have an account yet?",
    name: 'Name',
    login: 'Login',
    password: 'Password',
    deleteButton: 'Delete profile',
    updateProfile: 'Update profile',
    validation: {
      require: 'This field is required',
      latinName: 'The name must contain only latin letters',
      minName: 'Name must contain at least 2 characters',
      latinLogin: 'Login must contain only latin letters',
      minLogin: 'Login must contain at least 2 characters',
      minPassword: 'Password must contain at least 6 characters',
    },
  },
  deleteModal: {
    title: 'Are you sure?',
    delete: 'Delete',
    cancel: 'Cancel',
  },
  addEditModal: {
    titleAdd: 'CREATE BOARD',
    titleColumnAdd: 'CREATE COLUMN',
    titleTaskAdd: 'CREATE TASK',
    titleEdit: 'EDIT BOARD',
    continue: 'CONTINUE',
    cancel: 'CANCEL',
  },
};

const translationRU = {
  welcomePage: {
    generalInfoTextHeading: `Вы ищете удобное приложение для управления разработки и завершения проектов?`,
    generalInfoText: `Рады представить вашему вниманию наше приложение DRELLO. С
            ним, вы можете легко управлять своим проектом, быть в курсе всех задач
            и контролировать ход их выполнения.`,
    firstCard: 'Неограниченное количество канбан-досок, колонок и задач',
    secondCard: 'Простой и интуитивно понятный интерфейс',
    thirdCard: `Вы можете указать дополнительную информацию в
          описании задачи`,
    fourthCard: 'Удобный поиск среди списка всех ваших проектов',
    aboutCourseHeading: 'О курсе',
    aboutCourse: `Это приложение является результатом сотрудничества команды
          студентов группы React 2022 Q3 курса React Development RS
          Школа является бесплатной и общественной образовательной программой и
          проводится сообществом разработчиков The Rolling Scopes с 2013 года.
          Учиться в RS School может каждый, вне зависимости от возраста, профессионального
          работы или места жительства. Наставники и тренеры нашей
          школа — фронтенд- и javascript-разработчики из разных
          компании и стран.`,
    aboutTeamHeading: 'О команде',
  },
  authPages: {
    titleRegistration: 'Регистрация',
    titleLogin: 'Войти',
    titleEditProfile: 'Изменить профиль',
    linkRegistration: 'Уже есть аккаунт?',
    linkLogin: 'Еще нет аккаунта?',
    name: 'Имя',
    login: 'Логин',
    password: 'Пароль',
    deleteButton: 'Удалить профиль',
    validation: {
      require: 'Обязательно для заполнения',
      latinName: 'Имя должно содержать только латинские буквы',
      minName: 'Имя должно содержать не менее 2 символов',
      latinLogin: 'Логин должен содержать только латинские буквы',
      minLogin: 'Логин должен содержать не менее 2 символов',
      minPassword: 'Пароль должен coдержать не менее 6-ти символов',
    },
  },
  deleteModal: {
    title: 'Вы уверены?',
    delete: 'Удалить',
    cancel: 'Отмена',
  },
  addEditModal: {
    titleAdd: 'СОЗДАТЬ ДОСКУ',
    titleColumnAdd: 'СОЗДАТЬ КОЛОНКУ',
    titleTaskAdd: 'СОЗДАТЬ ЗАДАЧУ',
    titleEdit: 'РЕДАКТИРОВАТЬ ДОСКУ',
    continue: 'ПРОДОЛЖИТЬ',
    cancel: 'ОТМЕНИТЬ',
  },
};
i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
    ru: {
      translation: translationRU,
    },
  },
  lng: 'ru',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;

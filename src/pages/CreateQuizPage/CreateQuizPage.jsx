import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CrateQuizForm from '../../components/CrateQuizForm/CrateQuizForm';

const CreateQuizPage = () => {
  const { isAuth } = useSelector((state) => state.userInfoReducer);
  return (
    <div>
      {isAuth
        ? <p>Tou must be <Link>authenticated</Link></p>
        : <div>
          <CrateQuizForm />
        </div>
      }
    </div>
  );
};

export default CreateQuizPage;

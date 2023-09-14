import React from 'react';
import { Link } from 'react-router-dom';
import CrateQuizForm from '../../components/CrateQuizForm/CrateQuizForm';

const CreateQuizPage = ({ isAuth, userData }) => (
    <div>
    {isAuth
      ? <p>Tou must be <Link>authenticated</Link></p>
      : <div>
          <CrateQuizForm userData={userData}/>
      </div>
    }
    </div>
);

export default CreateQuizPage;

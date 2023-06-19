import React from 'react';
import { FirstStepPage } from './pages/FirstStepPage';
import { Layout } from './components/Layout';
import { MainPage } from './pages/MainPage';
import { ThirdStepPage } from './pages/ThirdStepPage';
import { SecondStepPage } from './pages/SecondStepPage';
import { Stepper } from './components/Stepper';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/step1' element={<FirstStepPage />} />
        <Route path='/step2' element={<SecondStepPage />} />
        <Route path='/step3' element={<ThirdStepPage />} />
      </Routes>
    </Layout>
  );
}

export default App;

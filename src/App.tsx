import React from 'react';
import Layout from './layout';
import Home from './pages/Home';
import MostPop from './pages/MostPop';
import User from "./pages/User"

import { Routes, Route} from "react-router-dom"

function App() {
  return (
    <Layout>
        <Routes>
          <Route path='/github-demo/' element={<Home />}/>
          <Route path='/github-demo/MostPopulars' element={<MostPop />} />
          <Route path="/github-demo/user/:username" element={<User />} />
        </Routes>
    </Layout>
  );
}

export default App;

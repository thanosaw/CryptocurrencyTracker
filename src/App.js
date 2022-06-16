import React from 'react';
import { Switch, Route, Link} from 'react-router-dom';
import { Layout, Typography, Space} from 'antd';


import { Navbar } from './components';
import './App.css'

import { Components } from 'antd/lib/date-picker/generatePicker';
const App = () => {
  return (
    <div classname = "app">
      <div classname = "navbar">
        <Navbar />
      </div>

      <div classname = "main" > 

      </div>
      <div classname = "footer">

      </div>
    </div>
  )
}

export default App


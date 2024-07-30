import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Ui from './page/ui.jsx'
import Form from './page/form.jsx'
import App from './App.jsx'
import './index.css'

// import { Provider } from 'react-redux'

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Bahnschrift ', // Customize the font family here
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Ui />,
      },
      {
        path: '/',
        element: <Form />,
      },
      // {
      //   path: '/submit',
      //   element: <Submission />
      // }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
        <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)

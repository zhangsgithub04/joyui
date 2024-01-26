import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles';
import Demo from './Demo';
import Demo2 from './Demo2';
import DemoAutoComplete from './DemoAutoComplete'; 

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <CssVarsProvider>
        <Demo />
        
        <Box> Demo 2 <Box/>
        <Demo2/>
        
        <Box> Demo 3 <Box/>
        <DemoAutoComplete/>
          
        
      </CssVarsProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);

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
        
     
        <Demo2/>
        
      
        <DemoAutoComplete />
          
        
      </CssVarsProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);

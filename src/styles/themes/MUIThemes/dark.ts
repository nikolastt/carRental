import { createTheme } from '@mui/material/styles';


declare module '@mui/material/styles' 

const darkThemeMUI = createTheme({    
        
    palette: {  
      mode: 'dark',
        
        primary: {
            main: '#EE7116',
            light: '#F49D4E',
            dark: '#AB3C0B',
            contrastText: '#ffffffff',
        },        
        secondary: {
            main: '#101010',            
            contrastText: '#ffffffff',
        },
        error: {
          main: '#FF4E2B'
        },
        warning:{
          main: '#FFD230'
        },
        success: {
          main: '#4AE04C'
        },
        info: {
          main: '#02A2ED',
          
        },

        text: {
          primary: "#ffffffff",
          secondary: '#f2f2f2f2',

        }

        
        
    }
});

export default darkThemeMUI;

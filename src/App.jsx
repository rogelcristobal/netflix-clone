import { StyledEngineProvider,createTheme,ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft'
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import Paper from '@mui/material/Paper'
import FormControlLabel from '@mui/material/FormControlLabel'
import { useState } from 'react';
import CheckBox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'





function App() {
  

  const theme = createTheme({
    // palette:{primary:{},secondary:{}},
    typography:{
      fontFamily:['Outfit','Supreme','Excon'],
      fontSize: 12,
      fontColor:'#AAB8C2'
    }
  })

  const [checked,setChecked] = useState(false)
  
  return (
    <ThemeProvider theme={theme}> 
      <StyledEngineProvider injectFirst>
       
            <div className=" min-h-screen h-auto w-full flex justify-end ">
              
              {/* nav */}
              
              <AppBar elevation={0} position="fixed" variant='outlined' className='bg-transparent' >
                <Toolbar>
                  <Typography variant="overline" className='text-gray'>
                    navigation
                  </Typography>
                </Toolbar>
              </AppBar>

              <Container maxWidth="xl" className="flex  min-h-screen h-auto w-full" disableGutters>
                

                {/* sidebar here */}
                <Paper variant='outlined'  className="h-full w-80    flex items-center justify-center left-0" square>
                  <Typography variant="overline" className="text-gray">sidebar</Typography>
                </Paper>


                {/* content */}
                <div className='h-full w-full flex items-center justify-center '>
                
                  <Container maxWidth="lg" variant="outlined" className='h-full   flex items-start justify-center space-x-4' >
                    <Paper variant='outlined' className='h-full mt-20 w-full flex items-center justify-start flex-col'>

                      {/* content here */}
                      <Typography variant="overline" className="text-gray">content here</Typography>
                      {/* sample content */}
                      <div className='h-[150vh]'></div>
                    </Paper>


                   {/*right sidebar */}
                    <Paper variant='outlined' className='h-screen w-72 mt-20 flex items-center justify-center'>
                      <Typography variant="overline" className='text-gray'>
                         right sidebar
                        (make fixed)
                      </Typography>
                    </Paper>  
                  </Container>


                </div>
              </Container>
            </div>
    </StyledEngineProvider>
  </ThemeProvider>
  );
}

export default App;

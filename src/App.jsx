import {
  StyledEngineProvider,
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
function App() {
  const theme = createTheme({
    // palette:{primary:{},secondary:{}},
    typography: {
      fontFamily: ["Outfit", "Supreme", "Excon"],
      fontSize: 12,
      fontColor: "#AAB8C2",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <div className="relative h-screen w-full flex justify-start font-outfit  items-center ">
          {/* navbar */}
          <AppBar position="fixed" elevation={0} variant="outlined" className="z-30  bg-transparent">
            <Toolbar>
              <Typography variant="overline" className="text-gray">
                nav
              </Typography>
            </Toolbar>
          </AppBar>

          {/*left sidebar */}
          <Box className="w-72 h-screen fixed  z-50" >
             <Paper variant="outlined" className="min-h-screen w-full">


             </Paper>
          </Box>


          {/* right sidebar */}
        
          {/* content */}
          <div className="w-full px-4 h-[200vh]">
            



          </div>
         
          </div>
      </StyledEngineProvider>
    </ThemeProvider>
  );
}

export default App;

// <ThemeProvider theme={theme}>
// <StyledEngineProvider injectFirst>

//       <div className=" min-h-screen h-auto w-full flex justify-end ">

//         {/* nav */}

//         <AppBar elevation={0} position="fixed" variant='outlined' className='bg-transparent' >
//           <Toolbar>
//             <Typography variant="overline" className='text-gray'>
//               navigation
//             </Typography>
//           </Toolbar>
//         </AppBar>

//         <Container maxWidth="xl" className="flex  min-h-screen h-auto w-full" disableGutters>

//           {/* sidebar here */}
//           <Paper variant='outlined'  className="h-full w-80    flex items-center justify-center left-0" square>
//             <Typography variant="overline" className="text-gray">sidebar</Typography>
//           </Paper>

//           {/* content */}
//           <div className='h-full w-full flex items-center justify-center '>

//             <Container maxWidth="lg" variant="outlined" className='h-full   flex items-start justify-center space-x-4' >
//               <Paper variant='outlined' className='h-full mt-20 w-full flex items-center justify-start flex-col'>

//                 {/* content here */}
//                 <Typography variant="overline" className="text-gray">content here</Typography>
//                 {/* sample content */}
//                 <div className='h-[150vh]'></div>
//               </Paper>

//              {/*right sidebar */}
//               <Paper variant='outlined' className='h-screen w-72 mt-20 flex items-center justify-center'>
//                 <Typography variant="overline" className='text-gray'>
//                    right sidebar
//                   (make fixed)
//                 </Typography>
//               </Paper>
//             </Container>

//           </div>
//         </Container>
//       </div>
// </StyledEngineProvider>
// </ThemeProvider>

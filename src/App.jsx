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
import Container from '@mui/material/Container'
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
              {/* items here */}
              
            </Toolbar>
          </AppBar>

          {/*left sidebar */}
          <Box className="w-64 h-screen fixed  z-50" >
             <Paper variant="outlined" className="min-h-screen w-full ">
              
              <Typography variant="overline" className="text-gray">
                sidebar
              </Typography> 

             </Paper>
          </Box>


          {/* right sidebar */}
          <Box className="w-48 h-screen fixed right-6 top-24 z-50" >
             <Paper variant="outlined" className="min-h-[20rem] w-full ">
              {/* items here */}
              <Typography variant="overline" className="text-gray">
                right sidebar
              </Typography> 

             </Paper>
          </Box>



          {/* content */}
          <div className="w-full  h-[200vh] flex justify-center  items-center   pl-12  ">
            <Container maxWidth="md" className="pt-48">
               
              <Paper variant="outlined" className="h-auto min-h-screen " square>
              <Typography variant="overline" className="text-gray">
                content
              </Typography>

              </Paper>
              
            </Container>
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

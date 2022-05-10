import Box from '@mui/system/Box'
import Appbar from '../components/Appbar'
import Body from '../components/Body'

const Home = () => {
  return (
    <Box elevation="3" sx={{margin:'auto', width:'1000px', height:'100vh', overflow:'hidden', backgroundColor:'#efefef'}}>
        <Appbar/>
        <Body/>
    </Box>
  )
}

export default Home
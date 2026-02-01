import Header from './shared/components/Header';
import { Box, Container, Typography } from '@mui/material';
import bugsBunny from './assets/bugsBunnyFace.png';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Container component="main" maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Welcome to My Application
        </Typography>
        <Typography variant="h4" component="h3" gutterBottom>
          Add your content here
        </Typography>
        <Box
          alt="Bugs Bunny"
          className="logo"
          component="img"
          src={bugsBunny}
          sx={{ width: 200, height: 'auto', borderRadius: 2 }}
        />
      </Container>
    </>
  );
}

export default App;

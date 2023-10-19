import Header from '@/components/Header';
import Nav from '@/components/Nav';
import Article from '@/components/Article';
import { Container, Grid } from '@mui/material';

export default function Home() {
  return (
    <Container fixed>
      <Header></Header>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Nav></Nav>
        </Grid>
        <Grid item xs={12} md={9}>
          <Article></Article>
        </Grid>
      </Grid>
    </Container>
  );
}

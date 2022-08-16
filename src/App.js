import Cart from "./components/Cart";
import { Container } from "./components/Container";
import { PageTitle } from "./components/Title";

function App() {
  return (
    <>
      <Container>
        <PageTitle>Корзина</PageTitle>
        <Cart />
      </Container>
    </>
  );
}

export default App;

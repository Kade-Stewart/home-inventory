import styled from "styled-components";
import Table from "./components/Table";

const AppContainer = styled.div`
  width: 100vw;
`;

const PageContent = styled.div`
  margin-left: 200px;
  padding: 1px 16px;
  height: 1000px;
`;

const SideBar = styled.div`
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #3b3a3a99;
  position: fixed;
  height: 100%;
  overflow: auto;
  border-radius: 0px 15px 15px 0px;
`;

const SideBarTitle = styled.h1`
  color: white;
  border-bottom: 1px solid white;
  padding: 5px 5px 5px 5px;
  font-size: 1.5rem;
  width: 90%;
  text-align: center;
`;

const SideBarLink = styled.a`
  display: block;
  color: white;
  padding: 16px;
  text-decoration: none;
`;

function App() {
  return (
    <AppContainer>
      <SideBar>
        <SideBarTitle>Home Inventory</SideBarTitle>
        <SideBarLink href="#home">Home</SideBarLink>
        <SideBarLink href="#news">News</SideBarLink>
        <SideBarLink href="#contact">Contact</SideBarLink>
        <SideBarLink href="#about">About</SideBarLink>
      </SideBar>
      <PageContent>
        <div>
          <h2>Inventory</h2>
          <input></input>
          <div>
            Categories:
            <button>Home</button>
            <button>Bathroom</button>
            <button>Kitchen</button>
          </div>
        </div>
        <Table></Table>
      </PageContent>
    </AppContainer>
  );
}

export default App;

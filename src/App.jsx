import { styled, ThemeProvider, createGlobalStyle } from "styled-components";
import Table from "./components/Table";
import Sidebar from "./components/Sidebar";

const theme = {
  colors: {
    // CSS DARK THEME PRIMARY COLORS
    primary100: "#0ae2ff",
    primary200: "#51e6ff",
    primary300: "#73e9ff",
    primary400: "#8decff",
    primary500: "#a3f0ff",
    primary600: "#b7f3ff",
    // CSS DARK THEME SURFACE COLORS
    surface100: "#0d0a0a",
    surface200: "#242323",
    surface300: "#3b3a3a",
    surface400: "#545353",
    surface500: "#6e6d6d",
  },
};

const GlobalStyle = createGlobalStyle`
  :root{
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;
    color: #b7f3ff;
    background-color: ${({ theme }) => theme.colors.surface100};

    font-synthesis: none;
    text-rendering: optimizeLegibility;
  }

  body {
    margin: 0;
    box-sizing: border-box;
    min-height: 100vh;  
}
`;

const AppContainer = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 60px 1fr;
  grid-template-areas:
    "sidebar header"
    "sidebar main";
`;

const SidebarContainer = styled.div`
  grid-area: sidebar;
  padding-right: 5px;
`;

const PageHeader = styled.div`
  grid-area: header;
`;

const PageContent = styled.div`
  grid-area: main;
  padding: 5px;
`;

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppContainer>
          <SidebarContainer>
            <Sidebar />
          </SidebarContainer>
          <PageHeader>
            <div>Category</div>
            <p>Pagination</p>
          </PageHeader>
          <PageContent>
            <Table></Table>
          </PageContent>
        </AppContainer>
      </ThemeProvider>
    </>
  );
}

export default App;

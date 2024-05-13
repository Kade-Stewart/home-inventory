import styled from "styled-components";

const SidebarContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.surface300};
  overflow-x: hidden;
  border-radius: 0 10px 10px 0px;
`;

const SidebarHeader = styled.div`
  padding: 10px 15px;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.primary500};
  text-align: center;
  background-color: ${({ theme }) => theme.colors.surface200};
`;

const SidebarLink = styled.a`
  padding: 10px 15px;
  text-decoration: none;
  font-size: 18px;
  color: #fff;
  display: block;
  transition: 0.3s;
  &:hover {
    background-color: #555;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarHeader>Home Inventory</SidebarHeader>
      <SidebarLink href="#">Home</SidebarLink>
      <SidebarLink href="#">About</SidebarLink>
      <SidebarLink href="#">Services</SidebarLink>
      <SidebarLink href="#">Portfolio</SidebarLink>
      <SidebarLink href="#">Contact</SidebarLink>
    </SidebarContainer>
  );
};

export default Sidebar;

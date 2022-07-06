import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  /* background-color: ${({ bg }) => bg}; */ //! If both are typed together, the latter is picked..
  padding: 40px 0;
`;

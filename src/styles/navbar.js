import styled from "styled-components";
import tw from "twin.macro";

export const StyledNavbar = styled.main.attrs({})`
  & {
    a.active{

      ${tw `text-white dark:bg-gray-400 bg-red-700`}
    }

  }
`;

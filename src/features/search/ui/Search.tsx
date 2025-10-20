import Styled from "./Search.style";
import SearchIcon from "@mui/icons-material/Search";

export function Search() {
  return (
    <Styled.SearchBase>
      <Styled.SearchIconWrapper>
        <SearchIcon />
      </Styled.SearchIconWrapper>
      <Styled.StyledInputBase />
    </Styled.SearchBase>
  );
}

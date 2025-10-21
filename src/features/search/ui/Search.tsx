import Styled from "./Search.style";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";

type Props = {
  onSearch: (e: React.FormEvent) => void;
};

export function Search({ onSearch }: Props) {
  return (
    <Styled.SearchBase onSubmit={onSearch}>
      <Styled.StyledInputBase />
      <Styled.SearchIconWrapper>
        <IconButton color="inherit" type={"submit"}>
          <SearchIcon />
        </IconButton>
      </Styled.SearchIconWrapper>
    </Styled.SearchBase>
  );
}

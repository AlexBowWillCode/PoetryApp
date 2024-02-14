import SearchInput from "./SearchInput";

interface Props {
  onSearch: (author: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return <SearchInput onSearch={onSearch} />;
};

export default NavBar;

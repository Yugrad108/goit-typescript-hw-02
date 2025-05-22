import styles from "./SearchBar.module.css";
import toast from "react-hot-toast";

const notify = () => toast.error("Please enter your request");

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const query = (
      form.elements.namedItem("query") as HTMLInputElement
    ).value.trim();

    if (!query) {
      notify();
      return;
    }

    onSearch(query);
    form.reset();
  };

  return (
    <header className={styles.header}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;

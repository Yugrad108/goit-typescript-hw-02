import styles from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
  totalPages: number;
  page: number;
}

const LoadMoreBtn = ({ onClick, totalPages, page }: LoadMoreBtnProps) => {
  return (
    <div>
      <span>
        Page {page} ... {totalPages}
      </span>
      <button onClick={onClick} className={styles.loadMoreBtn}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;

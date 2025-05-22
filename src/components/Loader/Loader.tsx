import RingLoader from "react-spinners/RingLoader";

const override = {
  display: "block",
  margin: "0 auto",
};

interface LoaderProps {
  loading: boolean;
}
const Loader = ({ loading }: LoaderProps) => {
  return (
    <div>
      <RingLoader
        color="#5a4630"
        loading={loading}
        cssOverride={override}
        size={60}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;

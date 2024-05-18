import { Audio } from "react-loader-spinner";

const Loader = () => (
  <div>
    <Audio
      height="80"
      width="80"
      radius="9"
      color="green"
      ariaLabel="loading"
    />
    <p>Loading data, please wait...</p>
  </div>
);

export default Loader;

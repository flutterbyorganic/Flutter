import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

function CustomLoader() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#bca362");

  return (
    <div className="sweet-loading">
      <ClipLoader
        color={color}
        loading={loading}
        // cssOverride={override}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default CustomLoader;
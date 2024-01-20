import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import DisForm from "./disForm";
import DisUpload from "./disUpload";
import { Link } from "react-router-dom";





export default function Distribution() {




  return (
    <>
      <div className="container-fluid dis-container">
        {/* heading */}
        <div className="row pad">
          <div className="col-8">
            <div className="row dis-title">Distribution Network</div>
            <div className="row dis-dis">Please input requested details below. Click submit once you are done</div>
          </div>
          <div className="col-4 pr-0">
            <button type="button" className="submit-top-button float-right"><Link to="distributionData">Submit</Link> </button>
          </div>
        </div>
        {/* heading */}

        {/* headline */}
        <div className="row"><div className="headline"></div></div>
        {/* headline */}

      </div>
    </>
  );
}

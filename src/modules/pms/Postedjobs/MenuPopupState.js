import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import styled from "styled-components";

const PopUpMenu = styled(Menu)`
  width: 191px;
`;

export default function MenuPopupState(props) {
  console.log(props.cardCatergory);

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <img {...bindTrigger(popupState)} src={props.moreIcon} alt="more" />

          <PopUpMenu {...bindMenu(popupState)}>
            {props.cardCatergory == "postedJob" ? (
              <div>
                <MenuItem onClick={popupState.close}>Delete</MenuItem>
                <MenuItem onClick={popupState.close}>View Application</MenuItem>
                <MenuItem onClick={popupState.close}>Closed Role</MenuItem>
                <MenuItem onClick={popupState.close}>Share</MenuItem>

              </div>
            ) : (
              ""
            )}
            {props.cardCatergory == "draftJob" ? (
              <div>
                <MenuItem onClick={popupState.close}>Delete</MenuItem>
                <MenuItem onClick={popupState.close}>Edit</MenuItem>
                
              </div>
            ) : (
              ""
            )}
            {props.cardCatergory == "closedJob" ? (
              <div>
                <MenuItem onClick={popupState.close}>Delete</MenuItem>
                <MenuItem onClick={popupState.close}>Re-post</MenuItem>
         
              </div>
            ) : (
              ""
            )}
            
            {props.cardCatergory == "otherJob" ? (
              <div>
                <MenuItem onClick={popupState.close}>Delete</MenuItem>
                <MenuItem onClick={popupState.close}>Edit</MenuItem>
         
              </div>
            ) : (
              ""
            )}
          </PopUpMenu>
        </React.Fragment>
      )}
    </PopupState>
  );
}

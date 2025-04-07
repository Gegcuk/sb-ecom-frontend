import { Icon } from "@mui/material";

const Status = ({text, icon:Icon, bg, color}) => {
      return (
            <div className = {`${bg} ${color} px-3 py-2 font-medium rounded-lg flex items-center gap-1`}>
                  {text} <Icon size={15}/>
            </div>
      )
};

export default Status;
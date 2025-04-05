import { Icon } from "@mui/material";

const Status = ({text, icon:Icon, bg, color}) => {
      return (
            <div className = {`${bg} ${color} px-2 py-2 font-medium flex items-center gap-2`}>
                  {text} <Icon size={15}/>
            </div>
      )
};

export default Status;
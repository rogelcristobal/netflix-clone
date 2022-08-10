import { IconButton } from "@mui/material";
import {IoPerson} from "react-icons/io5"
const Avatar = ({ img,color,user }) => {
  const  stringToColour = function(str) {
    let hash = 0;
    if(str){

      for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
      }
      let colour = '#';
      for (let i = 0; i < 3; i++) {
        let value = (hash >> (i * 8)) & 0xFF;
        colour += ('00' + value.toString(16)).substr(-2);
      }
      return colour;
    }else{
      return '#0096F3'
    }
  }
  return (
    <IconButton
      variant="text"
      className={` rounded-full dark:bg-color-500/10  bg-primary-300 text-gray-200`}
    >
      {
        user? 
        <IoPerson className=" font-medium text-sm bg-red-400"></IoPerson>
          
        
        :  <IoPerson className=" font-medium text-sm"></IoPerson>
                        
      }
    </IconButton>
  );
};

Avatar.defaultProps={
    colorGenerated:'#0096F3'
}
export default Avatar;

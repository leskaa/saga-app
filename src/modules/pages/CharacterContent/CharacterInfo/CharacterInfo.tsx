import React, {useContext} from "react";
import { Descriptions } from "antd";
import { CharacterInfoProps } from "./types";
import { GlobalContext } from "../../../root/GlobalStore";
import { User } from "../../../general/types";

function CharacterInfo(): React.ReactElement {
  const { globalState } = useContext(GlobalContext);
  const user = globalState.loggedInUser;


  return user ? 
  (
    <Descriptions title="Character Info" bordered>
      <Descriptions.Item label="Name">
        {user.name}
      </Descriptions.Item>
      <Descriptions.Item label="Email">
        {user.email}
      </Descriptions.Item>
      <Descriptions.Item label="Total Stars">
        {user.stars}
      </Descriptions.Item>
    </Descriptions>
  ) : 
  (
    <React.Fragment>
      Unable to Load User Data From State....
    </React.Fragment>
  )
}


export default CharacterInfo;
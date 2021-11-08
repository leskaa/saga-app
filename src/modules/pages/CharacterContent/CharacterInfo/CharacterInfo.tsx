import React, {useContext} from "react";
import { Descriptions } from "antd";
import { CharacterInfoProps } from "./types";
import { GlobalContext } from "../../../root/GlobalStore";
import { dummyStudent } from "../../../general/dummyData";
function CharacterInfo(props: CharacterInfoProps): React.ReactElement {
  const { globalState } = useContext(GlobalContext);
  const user = globalState.loggedInUser ?? dummyStudent;
  //const user = dummyStudent;

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
import { User } from "../../../../general/types";
import { ModalProps } from "antd";

export interface EditCharacterModalProps extends ModalProps {
  user: User;
}
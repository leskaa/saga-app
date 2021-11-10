import { User } from "../../../../general/types";
import { ModalProps } from "antd";

export interface InviteStudentModalProps extends ModalProps {
  user: User;
}
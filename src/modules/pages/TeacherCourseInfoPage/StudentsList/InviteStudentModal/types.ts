import { ModalProps } from 'antd';
import { User } from '../../../../general/types';

export interface InviteStudentModalProps extends ModalProps {
  user: User;
  courseId: number;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

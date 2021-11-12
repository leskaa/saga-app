import { ModalProps } from 'antd';
import { User, Course } from '../../../../general/types';

export interface CreateCourseModalProps extends ModalProps {
  user: User;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

import { ModalProps } from 'antd';
import { User } from '../../../../general/types';

export interface EditCharacterModalProps extends ModalProps {
  user: User;
}

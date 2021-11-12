import { ModalProps } from 'antd';
import { Avatar, User } from '../../../general/types';

export interface AvatarCardInfoProps extends ModalProps {
  avatar: Avatar;
  user: User;
}

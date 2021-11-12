import { ModalProps } from 'antd';

export interface SupportModalProps extends ModalProps {
  onHide: () => void;
}

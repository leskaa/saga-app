import { Message } from '../../../general/types';

export interface InboxTableProps {
  messages: Message[];
  selectedMessage: Message;
  handleRowClick: (message: Message) => void;
  handleDeleteClick: (message: Message) => void;
}

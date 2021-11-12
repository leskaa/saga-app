import { Message, User } from '../../../general/types';

export interface InboxTableProps {
  messages: any[];
  selectedMessage: Message;
  handleRowClick: (message: Message) => void;
}

import React from 'react';
import ReactQuill from 'react-quill';
import ReactHtmlParser from 'react-html-parser';
import useSWR from 'swr';
import { Rate, Row, Col, Typography } from 'antd';
import moment from 'moment';
import { AssignmentProps } from './types';
import 'react-quill/dist/quill.snow.css';
import './studentassignmentdescription.css';
import { apiEndpoint } from '../../../root/constants';

const { Text } = Typography;

function AssignmentDescription(props: AssignmentProps): React.ReactElement {
  const { user, assignment } = props;

  return (
    <>
      <Row>
        <Col span={3} />
        <Col span={13} className="description">
          <div>{ReactHtmlParser(assignment.content)}</div>
        </Col>
        <Col span={1} />
        <Col span={4} className="sidebar">
          <Row style={{ height: '30%' }}>
            <Rate
              disabled
              defaultValue={4}
              className="stars"
              style={{ height: '100%' }}
            />
          </Row>
          <Row style={{ height: '20%' }}>
            <Text>
              Expiration: <br />
              {`${assignment.dueDate
                .toLocaleString()
                .slice(0, -6)} ${assignment.dueDate
                .toLocaleString()
                .slice(-2)}`}
            </Text>
          </Row>
          <Row style={{ height: '30%' }}>
            <Text>
              Available: <br />
              {`${assignment.createdAt
                .toLocaleString()
                .slice(0, -6)} ${assignment.createdAt
                .toLocaleString()
                .slice(-2)}`}
            </Text>
          </Row>

          <Row style={{ height: '20%' }}>
            <Text>
              Chapter: <br />
              Unit {assignment.unitId}
            </Text>
          </Row>
        </Col>
        <Col span={3} />
      </Row>
    </>
  );
}

export default AssignmentDescription;

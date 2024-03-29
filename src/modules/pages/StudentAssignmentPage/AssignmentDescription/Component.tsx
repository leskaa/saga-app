import React from 'react';
import ReactQuill from 'react-quill';
import ReactHtmlParser from 'react-html-parser';
import useSWR from 'swr';
import { Rate, Row, Col, Typography, Spin } from 'antd';
import moment from 'moment';
import { AssignmentProps } from './types';
import 'react-quill/dist/quill.snow.css';
import './studentassignmentdescription.css';
import { apiEndpoint } from '../../../root/constants';
import { dummySubmissions } from '../../../general/dummyData';
import { Submission } from '../../../general/types';

const { Text } = Typography;

function AssignmentDescription(props: AssignmentProps): React.ReactElement {
  const { user, assignment } = props;

  const { data: submissions } = useSWR(
    `${apiEndpoint}/assignments/${assignment.id}/submissions`
  );

  if (submissions === undefined) {
    return <Spin size="large" />;
  }

  submissions.sort((first: Submission, second: Submission) => {
    if (first.updatedAt >= second.updatedAt) {
      return 1;
    }
    if (first.updatedAt < second.updatedAt) {
      return -1;
    }
    return 0;
  });

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
            {submissions[0] !== undefined ? (
              <Rate
                disabled
                defaultValue={submissions[0].grade}
                className="stars"
                style={{ height: '100%' }}
              />
            ) : (
              <Text style={{ color: '#b4b5b7' }}>Ungraded</Text>
            )}
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

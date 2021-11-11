import React from 'react';
import ReactQuill from 'react-quill';
import { Rate, Row, Col, Typography } from 'antd';
import moment from 'moment';
import { AssignmentProps } from './types';
import 'react-quill/dist/quill.snow.css';
import './studentassignmentdescription.css';

const { Text } = Typography;

function AssignmentDescription(props: AssignmentProps): React.ReactElement {
  const { user } = props;

  return (
    <>
      <Row>
        <Col span={3} />
        <Col span={13} className="description">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            nisl eros, tempus quis laoreet at, finibus ac lectus. Sed egestas
            ipsum non justo viverra, non aliquam elit rutrum. Donec id ligula
            non tortor tempor scelerisque. Nullam ut est gravida, luctus ligula
            fringilla, vehicula lorem. Donec ac egestas risus, vitae pulvinar
            orci. Vestibulum blandit tincidunt diam, sit amet accumsan leo
            laoreet et. Pellentesque efficitur turpis sed nunc pharetra
            venenatis. Cras eu pharetra libero. Etiam ut eleifend risus.
            Suspendisse commodo sapien eu velit sagittis hendrerit. Quisque a
            convallis mi. Pellentesque eget elementum ligula. Morbi commodo,
            tellus non consectetur venenatis, erat neque feugiat odio, ac
            sagittis tortor metus et ante. Ut laoreet a augue vestibulum
            placerat. Pellentesque lacus turpis, consectetur et molestie ac,
            sagittis eu dolor. Donec congue ut magna et feugiat. Morbi ut nunc
            vitae purus vehicula tristique. Duis et tempor neque. Nullam rhoncus
            a diam vel lobortis. Etiam eleifend facilisis accumsan. Sed eget
            laoreet enim. Morbi ullamcorper orci at eros semper, in blandit
            mauris sodales. Integer nec mollis sapien. Mauris magna tellus,
            molestie vitae purus a, porta eleifend arcu. Donec in ante at mauris
            posuere congue. Curabitur sed lorem varius, fermentum ligula id,
            tempor nibh. Cras consectetur volutpat orci, sed blandit tortor
            aliquam ut. Pellentesque finibus magna nec diam sagittis, quis
            pulvinar dolor dapibus. Nunc in suscipit magna, at ultricies augue.
            Donec ultricies sapien hendrerit felis dictum molestie. Proin
            sagittis in leo sed tincidunt. Nam aliquet placerat mauris, a
            lobortis nulla feugiat vel. Integer blandit ullamcorper magna at
            porta. Aenean sed luctus metus. Ut est diam, condimentum ut nunc
            sed, venenatis faucibus mauris. Suspendisse eget lacus efficitur,
            eleifend lorem vitae, efficitur lacus. Nulla varius sem vitae
            viverra tempor. Ut ac dolor scelerisque, varius leo id, ultrices
            nunc. Maecenas sit amet euismod magna, quis cursus nunc. Nunc vitae
            scelerisque nibh, sed auctor lorem. Nullam porttitor eros nec eros
            consectetur gravida. Duis sed nibh non urna pellentesque dapibus
            eget non tortor. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Ut vitae bibendum dolor.
            Curabitur ullamcorper laoreet nunc, a efficitur elit consectetur
            vel. Ut congue nec elit id cursus. Aenean sagittis dolor lobortis
            finibus vulputate. Aliquam erat volutpat. In euismod ante eget
            libero dapibus, id efficitur sapien lobortis. Morbi quis consectetur
            orci. Phasellus pretium mi in metus euismod, in fringilla est
            tempor. Sed at sodales augue. Pellentesque tempus id lorem a
            accumsan. Cras mattis massa ut elit rhoncus vulputate. Aliquam ac
            venenatis tortor, eget rutrum leo. Quisque quis magna vitae sem
            elementum pulvinar. Nunc ultricies nisi quis lorem auctor tristique.
            Aenean nec tincidunt lorem.{' '}
          </div>
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
              12/15/2021 - 9:55PM
            </Text>
          </Row>
          <Row style={{ height: '30%' }}>
            <Text>
              Available: <br />
              12/15/2021 - 9:55PM
            </Text>
          </Row>

          <Row style={{ height: '20%' }}>
            <Text>
              Chapter: <br />
              Unit Name Blah Blah
            </Text>
          </Row>
        </Col>
        <Col span={3} />
      </Row>
    </>
  );
}

export default AssignmentDescription;

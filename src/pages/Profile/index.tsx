import * as React from 'react';
import {Column, ColumnCenter, Row} from '../../components/general_styled';

import Layout from '../../layout';
import BackIcon from '../../assets/images/back-icon.png';
import {ProfileCanvas, BackImg, ContentProfile} from './styled';
import {userDataAtom} from '../../states';
import {useAtom} from 'jotai';
import {useNavigate} from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();
  const [userData] = useAtom(userDataAtom);

  const onBackNavigate = () => {
    navigate('/home');
  };

  const renderRowDetail = (label: string, value: string) => (
    <Row className="w-full align-start mt-5">
      <h4 className="label text-gray-500">{label}</h4>
      <h4 className="colon text-gray-500">:</h4>
      <h4 className="value text-gray-700 font-bold">{value}</h4>
    </Row>
  );

  const renderProfileDetail = () => (
    <ContentProfile>
      {renderRowDetail('Username', userData.name)}
      {renderRowDetail('Email', userData.email)}
      {renderRowDetail(
        'Address',
        `${userData.address.street} ${userData.address.suite} ${userData.address.city} (${userData.address.zipcode})`
      )}
      {renderRowDetail('Phone', userData.phone)}
    </ContentProfile>
  );

  return (
    <Layout>
      <ColumnCenter>
        <ProfileCanvas>
          <Column>
            <BackImg
              src={BackIcon}
              alt="back"
              onClick={() => onBackNavigate()}
            />
            <ColumnCenter>{renderProfileDetail()}</ColumnCenter>
          </Column>
        </ProfileCanvas>
      </ColumnCenter>
    </Layout>
  );
}

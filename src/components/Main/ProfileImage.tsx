import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

// 자신이 원하는 프로필 이미지 링크로 설정해주세요.
const PROFILE_IMAGE_LINK =
  'https://lh3.googleusercontent.com/a-/AOh14GiepFKMsI28XaWB8sQLWN8OQ2Dnhl8kwbZfvOteKA=s192-c-rg-br100';

const ProfileImageWrapper = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

const ProfileImage: FunctionComponent = function () {
  return <ProfileImageWrapper src={PROFILE_IMAGE_LINK} alt="Profile Image" />;
};

export default ProfileImage;

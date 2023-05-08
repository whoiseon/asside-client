import styled from '@emotion/styled';
import PageTitle from '@/components/base/PageTitle';
import ConfigIcon from '@/assets/vectors/config-icon.svg';

function UserAccount() {
  return (
    <Block>
      <Title>
        <PageTitle title="개인 설정" icon={<ConfigIcon />} />
      </Title>
    </Block>
  );
}

const Block = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 32px;
`;

const Title = styled.div`
  padding-left: 16px;
  padding-right: 16px;
`;

export default UserAccount;

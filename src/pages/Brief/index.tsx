import { PageContainer } from '@ant-design/pro-components';
import { Access, useAccess } from '@umijs/max';
import { Button } from 'antd';

const Brief: React.FC = () => {
  const access = useAccess();
  // const masterProps = useModel('@@qiankunStateFromMaster');
  // console.log('blog-masterProps =>', masterProps);

  return (
    <PageContainer
      ghost
      header={{
        title: '介绍',
      }}
    >
      <Access accessible={access.canSeeAdmin}>
        <Button>Brief</Button>
      </Access>
    </PageContainer>
  );
};

export default Brief;

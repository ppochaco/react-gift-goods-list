import { useLoginForm } from '@/pages/LoginPage/hooks/useLoginForm';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

import { buttonStyle, formContainerStyle } from './styles';

export const LoginForm = () => {
  const { usernameRef, passwordRef, handleLogin } = useLoginForm();

  return (
    <form onSubmit={handleLogin} css={formContainerStyle}>
      <Input
        type="text"
        name="username"
        ref={usernameRef}
        size="response"
        placeholder="이름"
      />
      <Input
        type="password"
        name="password"
        ref={passwordRef}
        size="response"
        placeholder="비밀번호"
      />
      <Button size="response" type="submit" width="30rem" css={buttonStyle}>
        로그인
      </Button>
    </form>
  );
};

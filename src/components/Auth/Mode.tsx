import * as S from '@pages/Auth/AuthStyle';

const Mode = ({ title, changeMode }: { title: string; changeMode: (title: string) => void }) => {
	return (
		<>
			{title === '로그인' && (
				<S.AuthMode onClick={() => changeMode('회원가입')}>회원가입 하러가기</S.AuthMode>
			)}
			{title === '회원가입' && (
				<S.AuthMode onClick={() => changeMode('로그인')}>로그인 하러가기</S.AuthMode>
			)}
		</>
	);
};

export default Mode;

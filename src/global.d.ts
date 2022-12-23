import { colorType, fontSizeType } from '@styles/theme';
import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		color: colorType;
		fontSize: fontSizeType;
	}
}

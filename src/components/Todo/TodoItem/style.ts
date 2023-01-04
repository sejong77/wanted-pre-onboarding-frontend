import styled, { css } from 'styled-components';

import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import EditIcon from '@mui/icons-material/Edit';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

import { TodoListProps } from '@interfaces/interface';

export const Item = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 12px 0;
	padding: 8px;
	color: ${({ theme }) => theme.color.gray};
`;

export const ItemCenter = styled.div`
	display: flex;
	align-items: center;
	font-size: 18px;
`;

export const TodoName = styled.span<TodoListProps>`
	font-size: 15px;
	text-decoration: ${(props) => props.isCompleted && 'line-through'};
	color: ${(props) => !props.isCompleted && props.theme.color.black};
`;

export const sharedIconStyle = css`
	margin-right: 8px;
	&:hover {
		cursor: pointer;
	}
`;

export const CheckBox = styled(CheckBoxIcon)`
	${sharedIconStyle}
`;

export const CheckBoxOutline = styled(CheckBoxOutlineBlankIcon)`
	${sharedIconStyle}
`;

export const Edit = styled(EditIcon)`
	${sharedIconStyle}

	&:hover {
		color: ${({ theme }) => theme.color.lightBlue};
	}
`;

export const DeleteRounded = styled(DeleteRoundedIcon)`
	${sharedIconStyle}

	&:hover {
		color: ${({ theme }) => theme.color.lightRed};
	}
`;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import graphic from './assets/graphic.png';
import VoteMain from './pages/VoteMain';

function App() {
	return (
		<AppContainer>
			<Wrapper>
				<img src={graphic} width={1920} />
			</Wrapper>
		</AppContainer>
	);
}

export default App;

const AppContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	width: 1920px;
	overflow-y: scroll;
	position: relative;
`;

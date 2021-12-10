import { useState } from 'react/cjs/react.development';
import Importer from './Importer';

const PageContent = ({ mouseClicked, paddingLeft }) => {
	const [sections, setSections] = useState([{}]);
	const css = () => {
		if (mouseClicked === false) {
			return {
				paddingLeft: `${paddingLeft}px`,
				transition: 'padding 0.5s',
			}
		}
		return {
			paddingLeft: `${paddingLeft}px`,
			userSelect: 'none'
		};
	}

	return (
		<>
			<div className="page_builder_page_content" style={css()}>
				{sections.map((section, index) => {
					return <Importer data={section} key={index} setSections={setSections} sections={sections} />;
				})}
			</div>
		</>
	)
}

export default PageContent;
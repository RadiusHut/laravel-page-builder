import { useState } from 'react';
import ContextMenu from './ContextMenu';
import Components from '../widgets/WidgetList';
import Section from './Section';

const PageContent = ({ mouseClicked, paddingLeft }) => {
	const [sections, setSections] = useState([{}]);
	const [openContext, setOpenContext] = useState(false);

	const setContext = (e) => {

		if (e === false) {
			setOpenContext(e);
		} else {
			e.preventDefault();
			setOpenContext(true);
		}
	}

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
					return <Section data={section} key={index} setSections={setSections} sections={sections} setOpenContext={setContext} Components={Components}/>;
				})}

				<ContextMenu openContext={openContext} setOpenContext={setContext} />
			</div>
		</>
	)
}

export default PageContent;
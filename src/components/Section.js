import { useState } from "react";
import Components from "../widgets/WidgetList";
import MainImporter from "./MainImporter";

const Section = (props) => {

	const [components, setComponents] = useState([]);
	const [sectionId, setSectionId] = useState(false);

	const allowDrop = (e) => {
		e.preventDefault();
	}

	const Drop = (e) => {
		var data = e.dataTransfer.getData("dragElementId");
		setComponents([...components, { 'key': data }]);
		if (sectionId === false) {
			props.setSections([...props.sections, {}])
			setSectionId(true);
		}
	}

	const onContextMenu = (e) => {
		e.preventDefault();
	}

	const Component = (item) => {
		if (typeof item['key'] !== 'undefined' && typeof Components[item['key']] !== 'undefined') {
			const ComponentToRender = Components[item['key']];
			return <ComponentToRender hello="dfadsf" />;
		}
	}
	const getMarkup = () => {
		return (
			<>
				{components.map((item, index) => {
					return (
						<div key={index} onContextMenu={onContextMenu}>
							{Component(item)}
						</div>
					)
				})}
			</>
		);
	}

	const view = () => {
		if (Object.keys(components).length === 0) {
			return (
				<div className="page_builder_section_content">
					<MainImporter />
				</div>
			);
		}
		return <div className="page_builder_section_content">{getMarkup()}</div>;
	}
	return (
		<div className="page_builder_section" onDrop={Drop} onDragOver={allowDrop} onContextMenu={props.setOpenContext}>{view()}</div>
	);
}

export default Section;
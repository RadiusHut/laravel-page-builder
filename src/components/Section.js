import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react/cjs/react.development";
import Importer from "./Importer";
import Structure from "./Structure";

const Section = (props) => {

	const [components, setComponents] = useState([]);
	const [sectionId, setSectionId] = useState(false);

	const allowDrop = (e) => {
		e.preventDefault();
	}

	const Drop = (e) => {
		var data = e.dataTransfer.getData("dragElementId");
		setComponents([...components, { 'key' : data }]);
		if (sectionId === false) {
			props.setSections([...props.sections, {}])
			setSectionId(true);
		}
	}

	const onContextMenu = (e) => {
		e.preventDefault();
	}

	const Component = (item) => {
		if (typeof item['key'] !== 'undefined' && typeof props.Components[item['key']] !== 'undefined') {
			const ComponentToRender = props.Components[item['key']];
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
		if (Object.keys(components).length == 0) {
			return (
				<div className="page_builder_section_content">
					<Importer/>
					{/* <Structure/> */}
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
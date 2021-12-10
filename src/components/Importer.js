import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react/cjs/react.development";

const Importer = (props) => {
	const [components, setComponents] = useState([]);
	const [sectionId, setSectionId] = useState(false);
	const allowDrop = (e) => {
		e.preventDefault();
	}

	const Drop = (e) => {
		var data = e.dataTransfer.getData("dragElementId");
		let key = Object.keys(components).length + 1;
		setComponents([...components, { [key]: data }]);
		if (sectionId === false) {
			props.setSections([...props.sections, {}])
			setSectionId(true);
		}
	}

	const getMarkup = () => {
		return (
			<>
				{components.map((item, index) => {
					return (
						<div key={index}>
							<p>one</p>
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
					<div className="page_builder_widget_importer">
						<div className="page_builder_widget_importer_content">
							<FontAwesomeIcon icon={faFolderPlus} />
						</div>
					</div>
				</div>
			);
		}
		return <div className="page_builder_section_content">{getMarkup()}</div>;
	}
	return (
		<div className="page_builder_section" onDrop={Drop} onDragOver={allowDrop}>{view()}</div>
	);
}

export default Importer;
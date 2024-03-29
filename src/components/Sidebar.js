import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAtlas } from '@fortawesome/free-solid-svg-icons';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { useState } from "react";
const Sidebar = ({ setMouseClicked, width, setPaddingLeft, mouseClicked, gridTemplateColumns }) => {

	const [rotate, setRotate] = useState(0);
	const [marginLeft, setMarginLeft] = useState(0);

	const Collapse = () => {
		if (0 === rotate) {
			setMarginLeft(width);
			setRotate(180);
			setPaddingLeft(0);
		} else {
			setPaddingLeft(width);
			setMarginLeft(0);
			setRotate(0);
		}
	}

	const startDrag = (e) => {
		setMouseClicked(true);
	}

	const Drag = (e) => {
		e.dataTransfer.setData("dragElementId", e.target.attributes.widget_id.nodeValue);
	}

	return (
		<div className="admin_sidebar" style={{ width: `${width}px`, marginLeft: `${-marginLeft}px` }}>
			<div className="header"></div>
			<div className="body">
				<div className="widget_list" style={{ gridTemplateColumns: gridTemplateColumns }}>
					<div className="widget" draggable="true" style={{ cursor: mouseClicked ? 'e-resize' : '' }} onDragStart={Drag} widget_id='Test'>
						<div className="brand_icon">
							<FontAwesomeIcon icon={faAtlas} />
						</div>
						<div className="icon">
							<FontAwesomeIcon icon={faAtlas} />
						</div>
						<p className="title">Testimonial</p>
					</div>
					<div className="widget" draggable="true" style={{ cursor: mouseClicked ? 'e-resize' : '' }} onDragStart={Drag} widget_id='Map'>
						<div className="brand_icon">
							<FontAwesomeIcon icon={faAtlas} />
						</div>
						<div className="icon">
							<FontAwesomeIcon icon={faAtlas} />
						</div>
						<p className="title">Testimonial</p>
					</div>
				</div>
			</div>
			<div className="footer">
				<div className="footer_content">
					<div className="publish">
						<button>PUBLISH</button>
					</div>
				</div>
			</div>
			<div className="resizer" onMouseDown={startDrag}></div>
			<div className="collapse_icon" onClick={Collapse}>
				<ArrowLeftIcon style={{ transform: 'rotate(' + rotate + 'deg)' }} />
			</div>
		</div>
	);
}

export default Sidebar;
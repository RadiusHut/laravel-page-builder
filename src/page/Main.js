import Sidebar from "../components/Sidebar";
import PageContent from "../components/PageContent";
import { useState } from "react/cjs/react.development";

const Main = () => {

	const [mouseClicked, setMouseClicked] = useState(false);
	const [width, setWidth] = useState(250);
	const [paddingLeft, setPaddingLeft] = useState(width);
	const [gridTemplateColumns, setGridTemplateColumns] = useState("50% 50%");

	const doDrag = (e) => {
		if (mouseClicked === true) {
			if (e.clientX > 200 && e.clientX < 500) {
				setWidth(e.clientX);
				setPaddingLeft(e.clientX);
			}
			if (e.clientX > 450) {
				setGridTemplateColumns("25% 25% 25% 25%");
			} else if (width > 370) {
				setGridTemplateColumns("33% 33% 33%");
			} else {
				setGridTemplateColumns("50% 50%");
			}
		}
	}

	const stopDrag = (e) => {
		setMouseClicked(false);
	}

	return (
		<div className="page_body" onMouseMove={doDrag} onMouseUp={stopDrag} style={{ cursor: mouseClicked ? 'e-resize' : '' }}>
			<Sidebar setMouseClicked={setMouseClicked} width={width} setPaddingLeft={setPaddingLeft} mouseClicked={mouseClicked} gridTemplateColumns={gridTemplateColumns} />
			<PageContent paddingLeft={paddingLeft} mouseClicked={mouseClicked} />
		</div>
	);
}

export default Main;
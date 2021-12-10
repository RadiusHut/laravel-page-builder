const PageContent = ({ mouseClicked, paddingLeft }) => {
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
		<div className="page_content" style={css()}>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis esse laudantium, qui atque placeat
			quis pariatur voluptatum aliquid asperiores praesentium consectetur rem, excepturi commodi nihil quae
			accusamus a itaque? Obcaecati.
		</div>
	)
}

export default PageContent;
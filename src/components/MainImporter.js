import { useState } from "react/cjs/react.development"
import Importer from "./Importer"
import Structure from "./Structure"

const MainImporter = () => {
	const [type, setType] = useState('Importer');

	if (type === 'Importer') {
		return (
			<Importer setType={setType} />
		)
	}
	return (
		<Structure setType={setType} />
	)
}

export default MainImporter;
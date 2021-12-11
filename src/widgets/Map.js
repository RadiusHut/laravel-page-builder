import { Switch } from "@mui/material";

const Map = () => {
	const label = { inputProps: { 'aria-label': 'Switch demo' } };
	return <Switch {...label} defaultChecked />;
}

export default Map;
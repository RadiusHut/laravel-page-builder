import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react/cjs/react.development';
import Grid from './Grid';

const Structure = (props) => {

	const [el, setEl] = useState('');
	const GridList = [
		{
			value: '100',
			svg: '<svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 50"><path d="M100,0V50H0V0Z"></path></svg>'
		},
		{
			value: '50,50',
			svg: '<svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 50"><path d="M49,0V50H0V0Z M100,0V50H51V0Z"></path></svg>'
		},
		{
			value: '33.33,33.33,33.34',
			svg: '<svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 50"><path d="M32,0V50H0V0Z M66,0V50H34V0Z M100,0V50H68V0Z"></path></svg>'
		},
		{
			value: '25,25,25,25',
			svg: '<svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 50"><path d="M23.5,0V50H0V0Z M49,0V50H25.5V0Z M74.5,0V50H51V0Z M100,0V50H76.5V0Z"></path></svg>'
		},
		{
			value: '33.33,66.67',
			svg: '<svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 50"><path d="M32.6667,0V50H0V0Z M100,0V50H34.6667V0Z"></path></svg>'
		},
		{
			value: '66.67,33.33',
			svg: '<svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 50"><path d="M65.3333,0V50H0V0Z M100,0V50H67.3333V0Z"></path></svg>'
		},
		{
			value: '25,25,50',
			svg: '<svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 50"><path d="M24,0V50H0V0Z M50,0V50H26V0Z M100,0V50H52V0Z"></path></svg>'
		},
		{
			value: '50,25,25',
			svg: '<svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 50"><path d="M48,0V50H0V0Z M74,0V50H50V0Z M100,0V50H76V0Z"></path></svg>'
		},
		{
			value: '25,50,25',
			svg: '<svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 50"><path d="M24,0V50H0V0Z M74,0V50H26V0Z M100,0V50H76V0Z"></path></svg>'
		},
		{
			value: '20,20,20,20,20',
			svg: '<svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 50"><path d="M18.4,0V50H0V0Z M38.8,0V50H20.4V0Z M59.2,0V50H40.8V0Z M79.6,0V50H61.2V0Z M100,0V50H81.6V0Z"></path></svg>'
		},
		{
			value: '16.67,16.67,16.67,16.67,16.66,16.66',
			svg: '<svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 50"><path d="M15,0V50H0V0Z M32,0V50H17V0Z M49,0V50H34V0Z M66,0V50H51V0Z M83,0V50H68V0Z M100,0V50H85V0Z"></path></svg>'
		},
		{
			value: '20,60,20',
			svg: '<svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 50"><path d="M16,0V50H0V0Z M82,0V50H18V0Z M100,0V50H84V0Z"></path></svg>'
		}
	];

	const ImportGrid = (value) => {
		const Glist = value.split(',').map((item, index) => {
			return (
				<div key={index} style={{ float: 'left', width: parseFloat(item) + '%' }}><Grid /></div>
			)
		})
		setEl(Glist);
	}
	return (
		<div className="page_builder_importer_grid_structure_body">
			<div className="page_builder_importer_grid_structure">
				<span className="page_builder_importer_grid_structure_title">Select Your Structure</span>
				<div className="page_builder_importer_grid_structure_grid_list">
					<div className="page_builder_importer_grid_structure_grid">
						{GridList.map((item, index) => {
							return (
								<div key={index} className="page_builder_importer_grid_structure_grid_item" onClick={() => ImportGrid(item.value)} dangerouslySetInnerHTML={{ __html: item.svg }}></div>
							)
						})}
					</div>
				</div>
				<CloseIcon className='page_builder_importer_grid_structure_close' onClick={() => props.setType('Importer')} />
			</div>
			{el}
		</div>
	)
}

export default Structure;
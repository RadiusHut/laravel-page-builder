import AddIcon from '@mui/icons-material/Add';
import FolderIcon from '@mui/icons-material/Folder';

const Importer = (props) => {

	return (
		<div className="page_builder_widget_importer">
			<div className="page_builder_widget_importer_content">
				<div className='page_builder_actions'>
					<AddIcon onClick={() => props.setType('Structure')}/>
					<FolderIcon className='page_builder_action_folder'/>
				</div>
			</div>
		</div>
	)
}

export default Importer;
import { format, getHours, getMinutes } from 'date-fns';
import { Card } from './styles';
import PersonAddRounded from '@mui/icons-material/PersonAddRounded';
import EditRounded from '@mui/icons-material/EditRounded';
import DeleteRounded from '@mui/icons-material/DeleteRounded';

interface ChurchEventDate {
  name: string;
  startTime: Date;
  endTime: Date;
}

export function EventCard({ name, startTime, endTime }: ChurchEventDate) {
  return(
    <Card>
      <h1>Informações do Evento</h1>
      <div>
        <h1 className='label'>Nome:</h1>
        <p>{ name }</p>
      </div>
      <div>
        <h1 className='label'>Data:</h1>
        <p>{ format(startTime, 'dd/MM/yyyy') }</p>
      </div>
      <div>
        <h1 className='label'>Início:</h1>
        <p>{ getHours(startTime) + ':' + getMinutes(startTime)  }</p>
      </div>
      <div>
        <h1 className='label'>Fim:</h1>
        <p>{ getHours(endTime) + ':' + getMinutes(endTime)  }</p>
      </div>
      <div>
        <h1 className='label'>Status:</h1>
        <p>Vagas pendentes</p>
      </div>
      <div className='buttons-container'>
        <PersonAddRounded />
        <EditRounded />
        <DeleteRounded color='error'/>
      </div>
    </Card>
  );
}

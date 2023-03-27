import { format, getHours, getMinutes, parseISO } from 'date-fns';
import { Card } from './styles';
import PersonAddRounded from '@mui/icons-material/PersonAddRounded';
import EditRounded from '@mui/icons-material/EditRounded';
import DeleteRounded from '@mui/icons-material/DeleteRounded';
import { ChurchEvent } from '../../models/ChurchEvent';
import { useEffect, useState } from 'react';

interface Props {
  churchEvent: ChurchEvent;
  handleDelete: any;
}


export function EventCard( { churchEvent, handleDelete }: Props) {

  const [startDateTime, setStartDateTime] = useState<Date | null>(null);
  const [endDateTime, setEndDateTime] = useState<Date | null>(null);

  useEffect(() => {
    setStartDateTime(parseISO(churchEvent.startTime));
    setEndDateTime(parseISO(churchEvent.endTime));
  }, []);


  return(
    <Card>
      <h1>Informações do Evento</h1>
      <div>
        <h1 className='label'>Nome:</h1>
        <p>{ churchEvent.name }</p>
      </div>
      <div>
        <h1 className='label'>Data:</h1>
        { startDateTime != null && <p>{ format(startDateTime, 'dd/MM/yyyy') }</p> }
      </div>
      <div>
        <h1 className='label'>Início:</h1>
        { startDateTime != null && <p>{ getHours(startDateTime) + ':' + getMinutes(startDateTime)  }</p> }
      </div>
      <div>
        <h1 className='label'>Fim:</h1>
        { endDateTime != null && <p>{ getHours(endDateTime) + ':' + getMinutes(endDateTime)  }</p> }
      </div>
      <div>
        <h1 className='label'>Status:</h1>
        <p>Vagas pendentes</p>
      </div>
      <div className='buttons-container'>
        <PersonAddRounded />
        <EditRounded />
        <DeleteRounded
          color='error'
          onClick={()=> handleDelete(churchEvent)}
        />
      </div>
    </Card>
  );
}

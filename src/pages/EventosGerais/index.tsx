import { Button } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { parseISO } from 'date-fns';
import { useCallback, useEffect, useState } from 'react';
import { EventCard } from '../../components/EventCard';
import { ChurchEvent } from '../../models/ChurchEvent';
import { EventService } from '../../services/EventService';
import { Container } from './styles';

export function EventosGerais() {
  const [events, setEvents] = useState<ChurchEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = useCallback(async () => {
    try {
      setIsLoading(true);

      const eventList = await EventService.listChurchEvents();

      console.log(eventList);

      setHasError(false);

      setEvents(eventList);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <Container>
      <Button variant="contained">Adicionar Evento</Button>
      <DatePicker
        className='dateFilter'
        label='Filtro por data'
        views={['day', 'month', 'year']}
      />
      {events.map( event => (
        <EventCard key={event._id}
          name = {event.name}
          startTime = { parseISO(event.startTime) }
          endTime = { parseISO(event.startTime) }
        />
      ))}

      {(hasError && events.length == 0) && (
        <strong>Nenhum evento encontrado.</strong>
      )}
    </Container>
  );
}

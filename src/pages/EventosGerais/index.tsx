import { Alert, Button, Snackbar } from '@mui/material';
import { AlertColor } from '@mui/material/Alert';
import { DatePicker } from '@mui/x-date-pickers';
import { format, parseISO } from 'date-fns';
import { useCallback, useEffect, useState } from 'react';
import { EventCard } from '../../components/EventCard';
import { AlertDialog } from '../../components/Modal';
import { ChurchEvent } from '../../models/ChurchEvent';
import { EventService } from '../../services/EventService';
import { Container } from './styles';

export function EventosGerais() {
  const [events, setEvents] = useState<ChurchEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const[isModalVisible, setIsModalVisible] = useState(false);
  const[selectedEvent, setSelectedEvent] = useState<string | undefined>(undefined);
  const[eventToDelete, setEventToDelete] = useState<ChurchEvent | null>(null);
  const[textModal, setTextModal] = useState<string>('');
  const [openSnack, setOpenSnack] = useState(false);
  const [snackText, setSnackText] = useState('');
  const [snackType, setSnackType] = useState<AlertColor>('info');

  function handleDelete(churchEvent: ChurchEvent) {
    setTextModal(`Tem certeza que deseja excluir o evento ${churchEvent?.name} do dia ${format(parseISO(churchEvent.startTime), 'dd/MM/yyyy')}`);
    setEventToDelete(churchEvent);
    handleOpenModal(churchEvent._id);
  }

  function handleOpenModal(_id?: string) {
    setIsModalVisible(true);
    setSelectedEvent(_id);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
    setSelectedEvent(undefined);
    setTextModal('');
  }

  function handleOpenSnack() {
    setOpenSnack(true);
  }

  function handleCloseSnack(event?: React.SyntheticEvent | Event, reason?: string) {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnack(false);
  }

  async function deleteEvent(_id: string) {
    try {
      EventService.deleteChurchEventById(_id);
      setSnackText('Evento deletado com sucesso!');
      setSnackType('info');
      handleOpenSnack();
    } catch (error) {
      setSnackText('É necessário o acesso de administrador para deletar eventos!');
      setSnackType('error');
      handleOpenSnack();
    } finally {
      const listUpdated = events.filter( e => e._id != _id);
      setEvents(listUpdated);
      handleCloseModal();
    }
  }

  function filterEventByDate(date: Date | null) {
    if(date){
      const filteredEvents = events.filter( e => parseISO(e.startTime).setHours(0,0,0,0) == date.setHours(0,0,0,0));
      setEvents(filteredEvents);
    }
  }

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = useCallback(async () => {
    try {
      setIsLoading(true);

      const eventList = await EventService.listChurchEvents();

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
      <AlertDialog
        text={textModal}
        visible={isModalVisible}
        _id={selectedEvent}
        handleClose={handleCloseModal}
        deleteEvent={deleteEvent}
      />
      <Button variant="contained">Adicionar Evento</Button>
      <DatePicker
        className='dateFilter'
        label='Filtro por data'
        views={['day', 'month', 'year']}
        onAccept={(value: Date | null) => filterEventByDate(value)}
      />
      {events.map( event => (
        <EventCard key={event._id}
          churchEvent = { event }
          handleDelete = { handleDelete }
        />
      ))}

      {(hasError && events.length == 0) && (
        <strong>Nenhum evento encontrado.</strong>
      )}

      <Snackbar open={openSnack} autoHideDuration={6000} onClose={handleCloseSnack}>
        <Alert onClose={handleCloseSnack} severity={snackType} sx={{ width: '100%' }}>
          {snackText}
        </Alert>
      </Snackbar>
    </Container>
  );
}

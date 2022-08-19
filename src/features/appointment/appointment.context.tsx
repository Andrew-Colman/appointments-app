import { useDisclosure } from '@chakra-ui/react';
import { useReducer, createContext } from 'react';

const initialState = {
    events: [],
    selectedDate: {
        start: null,
        end: null,
    },
    selectedEvent: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EVENT':
            return { ...state, events: [...state.events, action.payload] };
        case 'SET_EVENTS':
            return { ...state, events: action.payload };
        case 'DELETE_EVENT':
            const filteredEvents = state.events.filter(
                e => e.id !== action.payload
            );
            return { ...state, events: filteredEvents };
        case 'EDIT_EVENT':
            let eventIndex = state.events.findIndex(
                e => e.id === action.payload.id
            );
            state.events[eventIndex] = action.payload;
            return { ...state };

        case 'SELECT_DATE':
            return { ...state, selectedDate: { ...action.payload } };
        case 'SELECT_EVENT':
            return {
                ...state,
                selectedEvent: action.payload,
            };
        default:
            return state;
    }
};

type EventsContextType = any;

export const EventsContext = createContext<EventsContextType>(initialState);

export const EventsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {
        isOpen: isFormModalOpen,
        onOpen: onFormModalOpen,
        onClose: onFormModalClose,
    } = useDisclosure();

    const {
        isOpen: isDetailsModalOpen,
        onOpen: onDetailsModalOpen,
        onClose: onDetailsModalClose,
    } = useDisclosure();

    // Actions
    function deleteEvent(id) {
        console.log('deleting', id);
        dispatch({
            type: 'DELETE_EVENT',
            payload: id,
        });
    }

    function addEvent(event) {
        dispatch({
            type: 'ADD_EVENT',
            payload: event,
        });
    }

    function setEvents(events) {
        dispatch({
            type: 'SET_EVENTS',
            payload: events,
        });
    }

    function editEvent(event) {
        dispatch({
            type: 'EDIT_EVENT',
            payload: event,
        });
    }

    function handleSelectDate(date) {
        dispatch({
            type: 'SELECT_DATE',
            payload: date,
        });
    }

    function handleSelectEvent(event) {
        console.log('my event:', event);
        dispatch({
            type: 'SELECT_EVENT',
            payload: event,
        });
    }

    return (
        <EventsContext.Provider
            value={{
                events: state.events,
                selectedDate: {
                    start: state.selectedDate.start,
                    end: state.selectedDate.end,
                },
                selectedEvent: state.selectedEvent,
                addEvent,
                setEvents,
                editEvent,
                deleteEvent,
                handleSelectDate,
                handleSelectEvent,
                isFormModalOpen,
                onFormModalOpen,
                onFormModalClose,
                isDetailsModalOpen,
                onDetailsModalOpen,
                onDetailsModalClose,
            }}
        >
            {children}
        </EventsContext.Provider>
    );
};

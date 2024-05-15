import axios from 'axios';

const ATTENDEE_REST_API_URL = "http://localhost:8080/events/attendees/fd487072-7287-4e49-949f-3f706c6dfe02"
class AttendeeService {

    getAttendees(){
        return axios.get(ATTENDEE_REST_API_URL)
    }
}

export default new AttendeeService();
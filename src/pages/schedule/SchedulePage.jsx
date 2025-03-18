import "./SchedulePage.css"
import NavBar from "../../components/navbar/NavBar";
import "react-day-picker/style.css";
import {DateCalendar} from '@mui/x-date-pickers/DateCalendar';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import ru from 'date-fns/locale/ru';
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {LessonListItem} from "../../components/LessonListItem/LessonListItem";
import {useEffect, useState} from "react";
import {filterLessonsByDate} from "../../util";
import {format, isAfter, parseISO} from "date-fns";
import {MdEvent} from 'react-icons/md';

const SchedulePage = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [markedDates, setMarkedDates] = useState({});

    const lessons = [
        {
            name: "Основы хип-хопа",
            description: "Первое занятие по основам хип-хопа.",
            lessonType: "Individual",
            startTime: "2025-03-18T17:00:00.000Z",
            finishTime: "2025-03-18T18:00:00.000Z",
            classroomId: "3b2f8d1a-5e87-4e3a-8f3d-d9f20e83a1c5",
            teacherId: "db8754e3-efc5-4af0-9e72-0d96e5a3d523",
            studentId: "04f4b83e-7a10-4f30-a0f3-d8b53e1bdb62",
            groupId: null
        },
        {
            name: "Урок по контемпорари",
            description: "Групповое занятие по контемпорари танцу.",
            lessonType: "Group",
            startTime: "2025-03-18T15:00:00.000Z",
            finishTime: "2025-03-18T16:30:00.000Z",
            classroomId: "7aebc2f5-0a2f-4c8e-bb6b-f4b5d1b8c22e",
            teacherId: "1b2c3d4e-5f67-4a89-b5c4-e7d8f4c9baff",
            studentId: null,
            groupId: "7c3a9b1f-2e65-4a62-9b1b-3a5b62215d97"
        },
        {
            name: "Сальса для начинающих",
            description: "Индивидуальные занятия по сальсе для новичков.",
            lessonType: "Individual",
            startTime: "2025-03-18T18:00:00.000Z",
            finishTime: "2025-03-18T19:00:00.000Z",
            classroomId: "9b73b7c1-0db2-4a99-8e74-2b845bd3e4f6",
            teacherId: "f5b9279e-7d42-4e7b-bb2e-63a4f1b7cf0a",
            studentId: "015e7b47-56f5-4fd7-928f-b2b19ab4fddb",
            groupId: null
        },
        {
            name: "Современный танец",
            description: "Групповое занятие по современному танцу.",
            lessonType: "Group",
            startTime: "2025-03-19T20:00:00.000Z",
            finishTime: "2025-03-19T21:30:00.000Z",
            classroomId: "2a5c6d8e-9f7b-4e9f-bd1e-5dff3b7c2e3a",
            teacherId: "db8754e3-efc5-4af0-9e72-0d96e5a3d523",
            studentId: null,
            groupId: "5d5d7a89-9b4f-4c1e-b2f7-5d20c9f1a72b"
        },
        {
            name: "Основы брейк-данса",
            description: "Индивидуальное занятие по брейк-дансу для продвинутых.",
            lessonType: "Individual",
            startTime: "2025-03-19T16:30:00.000Z",
            finishTime: "2025-03-19T18:00:00.000Z",
            classroomId: "1f4e3a8d-7c9e-4b0e-b63f-c7d8b4a1e2c4",
            teacherId: "1b2c3d4e-5f67-4a89-b5c4-e7d8f4c9baff",
            studentId: "92edc4d1-986b-4df8-9533-d946b71b0658",
            groupId: null
        }
    ]

    const filteredLessons = filterLessonsByDate(lessons, selectedDate.toString());

    useEffect(() => {
        const marks = {};
        lessons.forEach(lesson => {
            const date = format(parseISO(lesson.startTime), 'yyyy-MM-dd', {locale: ru});
            if (isAfter(parseISO(lesson.startTime), new Date())) {
                marks[date] = { marked: true };
            }
        });
        setMarkedDates(marks);
    }, []);

    return (
        <div>
            <NavBar />
            <main className="schedule-content">
                <div className="schedule-container">
                    <div className="calendar-wrapper">
                        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ru}>
                            <DateCalendar
                                className="custom-calendar"
                                value={selectedDate}
                                onChange={setSelectedDate}
                                disablePast
                                sx={{
                                    width: '100%',
                                    '& .MuiPickersCalendarHeader-root': {
                                        fontSize: '1.1rem',
                                        marginTop: '0.5rem',
                                        padding: '0 0.5rem',
                                    },
                                    '& .MuiPickersDay-root': {
                                        width: '40px',
                                        height: '40px',
                                        fontSize: '0.9rem',
                                        margin: '0.25rem',
                                        borderRadius: '12px',
                                        color: '#1a1a1a',
                                    },
                                    '& .MuiDayCalendar-weekDayLabel': {
                                        color: '#1a1a1a',
                                        fontWeight: 500,
                                        fontSize: '0.9rem',
                                        width: '40px',
                                        height: '40px',
                                        margin: '0.25rem',
                                    },
                                    '& .MuiDayCalendar-weekContainer': {
                                        justifyContent: 'space-around',
                                    },
                                    '& .Mui-selected': {
                                        backgroundColor: '#1a1a1a !important',
                                        color: 'white !important',
                                    },
                                    '& .MuiPickersDay-today': {
                                        border: '2px solid #1a1a1a !important',
                                        color: '#1a1a1a',
                                    },
                                    '& .MuiPickersDay-root:hover': {
                                        backgroundColor: 'rgba(26, 26, 26, 0.1)',
                                    },
                                }}
                            />
                        </LocalizationProvider>
                    </div>

                    <div className="lessons-wrapper">
                        <div className="lessons-header">
                            <h1 className="lessons-title">Расписание занятий</h1>
                        </div>

                        {filteredLessons.length === 0 ? (
                            <div className="no-lessons">
                                <MdEvent className="no-lessons-icon" />
                                <h2 className="no-lessons-title">В этот день нет занятий</h2>
                                <p className="no-lessons-text">Выберите другую дату в календаре</p>
                            </div>
                        ) : (
                            <div className="lessons-list">
                                {filteredLessons.map((lesson, index) => (
                                    <LessonListItem key={index} lesson={lesson} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default SchedulePage;
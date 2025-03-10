import "./LessonListItem.css"
import {format, parseISO} from "date-fns";
import { MdAccessTime, MdLocationOn, MdPerson, MdGroup } from 'react-icons/md';
import React from "react";

export const LessonListItem = ({lesson}) => {
    return (
        <div className="lesson-card">
            <div className="lesson-header">
                <div className="lesson-info">
                    <h2 className="lesson-title">{lesson.name}</h2>
                    <span className="lesson-type">
                        {lesson.lessonType === 'Individual' ? (
                            <>
                                <MdPerson className="lesson-type-icon" />
                                Индивидуальное занятие
                            </>
                        ) : (
                            <>
                                <MdGroup className="lesson-type-icon" />
                                Групповое занятие
                            </>
                        )}
                    </span>
                </div>
            </div>
            
            <p className="lesson-description">{lesson.description}</p>
            
            <div className="lesson-details">
                <div className="detail-item">
                    <div className="detail-icon">
                        <MdAccessTime />
                    </div>
                    <div className="detail-content">
                        <span className="detail-label">Время занятия</span>
                        <span className="detail-value">
                            {format(parseISO(lesson.startTime), 'HH:mm')} - {format(parseISO(lesson.finishTime), 'HH:mm')}
                        </span>
                    </div>
                </div>
                
                <div className="detail-item">
                    <div className="detail-icon">
                        <MdLocationOn />
                    </div>
                    <div className="detail-content">
                        <span className="detail-label">Место проведения</span>
                        <span className="detail-value">Зал {lesson.classroomId.slice(-4)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
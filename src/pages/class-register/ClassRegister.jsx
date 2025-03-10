import "./ClassRegister.css";
import NavBar from "../../components/navbar/NavBar";
import { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ClassRegister = () => {
    const [selectedClass, setSelectedClass] = useState(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const navigate = useNavigate();

    const danceClasses = [
        {
            id: 1,
            name: "Хип-хоп",
            description: "Современный уличный танец, сочетающий в себе различные стили и направления. Развивает пластику, координацию и чувство ритма.",
            image: "https://images.unsplash.com/photo-1535525153412-5a42439a210d?w=800&auto=format&fit=crop"
        },
        {
            id: 2,
            name: "Контемпорари",
            description: "Современный сценический танец, объединяющий элементы классического танца, модерна и импровизации.",
            image: "https://images.unsplash.com/photo-1547153760-18fc86324498?w=800&auto=format&fit=crop"
        },
        {
            id: 3,
            name: "Сальса",
            description: "Зажигательный латиноамериканский танец, развивающий пластику, координацию и музыкальность.",
            image: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800&auto=format&fit=crop"
        },
        {
            id: 4,
            name: "Брейк-данс",
            description: "Динамичный уличный танец, включающий акробатические элементы и силовые трюки.",
            image: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=800&auto=format&fit=crop"
        },
        {
            id: 5,
            name: "Балет",
            description: "Классический танец, развивающий грацию, гибкость и выносливость. Основа всех танцевальных направлений.",
            image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=800&auto=format&fit=crop"
        },
        {
            id: 6,
            name: "Джаз",
            description: "Энергичный и эмоциональный танец, сочетающий элементы африканских танцев и европейской хореографии.",
            image: "https://images.unsplash.com/photo-1583318432730-a19c89692612?w=800&auto=format&fit=crop"
        }
    ];

    const handleClassClick = (danceClass) => {
        setSelectedClass(danceClass);
        setIsDialogOpen(true);
    };

    const handleDialogClose = () => {
        setIsDialogOpen(false);
        setSelectedClass(null);
    };

    const handleRegistration = (type) => {
        if (type === 'групповое') {
            navigate('/groupLessons');
        } else if (type === 'индивидуальное') {
            navigate('/slotSelection');
        }
        handleDialogClose();
    };

    return (
        <div>
            <NavBar />
            <main className="class-register-content">
                <div className="class-register-header">
                    <h1>Запись на занятия</h1>
                    <p>Выберите интересующее вас направление танца</p>
                </div>
                
                <div className="dance-classes-grid">
                    {danceClasses.map((danceClass) => (
                        <div 
                            key={danceClass.id} 
                            className="dance-class-card"
                            onClick={() => handleClassClick(danceClass)}
                        >
                            <div className="dance-class-image" style={{ backgroundImage: `url(${danceClass.image})` }} />
                            <div className="dance-class-info">
                                <h2>{danceClass.name}</h2>
                                <p>{danceClass.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <Dialog 
                    open={isDialogOpen} 
                    onClose={handleDialogClose}
                    className="registration-dialog"
                >
                    <DialogTitle>
                        Тип занятия: {selectedClass?.name}
                    </DialogTitle>
                    <DialogContent>
                        <p>Выберите предпочитаемый формат занятия:</p>
                    </DialogContent>
                    <DialogActions className="dialog-buttons">
                        <Button 
                            onClick={() => handleRegistration('индивидуальное')}
                            variant="contained"
                            className="individual-button"
                        >
                            Индивидуальное занятие
                        </Button>
                        <Button 
                            onClick={() => handleRegistration('групповое')}
                            variant="contained"
                            className="group-button"
                        >
                            Групповое занятие
                        </Button>
                    </DialogActions>
                </Dialog>
            </main>
        </div>
    );
};

export default ClassRegister; 
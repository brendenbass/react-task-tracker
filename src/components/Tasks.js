const tasks = [
    {
    id: 1,
    text: 'Doctor Appointment',
    day: 'Feb 5 at 2:30 PM',
    reminder: true,
    },
    {
    id: 2,
    text: 'Dentist Appointment',
    day: 'Feb 6 at 2:30 PM',
    reminder: true,
    },
    {
    id: 3,
    text: 'School Meeting',
    day: 'Feb 7 at 2:30 PM',
    reminder: false,
    },
    {
    id: 4,
    text: 'City Council',
    day: 'Feb 8 at 2:30 PM',
    reminder: true,
    },
]

const Tasks = () => {
    return (
        <>
            {tasks.map((task) => (
            <h3>{task.text}</h3>
            ))}
        </>
    )
}

export default Tasks

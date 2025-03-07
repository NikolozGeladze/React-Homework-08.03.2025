import './App.css'
import Card from './components/card/Card'
import students from './data';

function App() {

  return (
    <>
      <div className="all-cards">
        {
          students.map((student) => (
            <Card key={student.id} image={student.img} name={student.name} age={student.age} courseType={student.courseType} attendance={student.attendance} scholarship={student.scholarship}/>
          ))
        }
      </div>
    </>
  )
}

export default App

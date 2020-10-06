import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({course}) => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}

const Part = ({part}) => {
  return (
    <div>
      <p>{part.name} {part.exсercises}</p>
    </div>
  )
}

const Content = ({parts}) => {
  return (
  <div>
    <Part part={parts[0]} />
    <Part part={parts[1]} />
    <Part part={parts[2]} />
  </div>
  )
}

const Total = ({parts}) => {
  return (
    <div>
      <p>Number of exercises {parts[0].excercises + parts[1].excercises + parts[2].excercises}</p>
    </div>
  )
}

const App = () => {
  const course = {
    courseName: 'Half Stack application development',
    parts: [
    {
      name: 'Fundamentals of React',
      excercises: 10
    },
    {
      name: 'Using props to pass data',
      excercises: 7
    },
    {
      name: 'State of a component',
      excercises: 14
    }]
  }
  

  return (
    <div>
      <Header course={course.courseName}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}




ReactDOM.render(<App />, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


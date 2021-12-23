import React from 'react';
import './App.css';

interface IFieldProps{
}
interface IFieldState{
  arrayCoordinate:{x:number,y:number, r:number}[]
}

class App extends React.Component<IFieldProps,IFieldState> {

  constructor(props: IFieldProps){
    super(props)
    this.state = {
      arrayCoordinate: [
        {x:150, y:25, r:15},
        {x:100, y:75, r:5},
        {x:63, y:98, r:10},
        {x:250, y:75, r:5},
        {x:34, y:450, r:5},
        {x:57, y:96, r:12},
        {x:342, y:452, r:5},
        {x:245, y:123, r:5},
        {x:75, y:42, r:14},
        {x:123, y:475, r:5},
        {x:254, y:456, r:20},
        {x:159, y:74, r:5},
        {x:456, y:324, r:14},
        {x:123, y:234, r:5},
      ]
    };
  }

  render() {

    const paintCircle = () => {
      let arrayCoordinateCircle = this.state.arrayCoordinate.map((element,index) => {
        let arrayIndex = this.state.arrayCoordinate[index]
        return <circle key={index} cx={arrayIndex.x} cy={arrayIndex.y} r={arrayIndex.r} fill="black" stroke="black" />
        })

      return arrayCoordinateCircle
    }

    const paintRect = () => {
      let arrayCoordinateRect = this.state.arrayCoordinate.map((element,index) => {
        let arrayIndex = this.state.arrayCoordinate[index]
        return <rect key={index} x={arrayIndex.x - 50} y={arrayIndex.y - 25} width={arrayIndex.r} height={arrayIndex.r} fill="black" stroke="black" />
      })

      return arrayCoordinateRect
    }

    return (
    <div className="App">
      <svg className="svfField" width="500" height="500" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
        {paintCircle()}
        {paintRect()}
      </svg>
    </div>
  );
  }
}

export default App;
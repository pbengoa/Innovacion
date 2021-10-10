import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './simulation.css';

function Simulation() {
    const [temperature, setTemperature] = useState();
    const [airHumidity, setAirHumidity] = useState();
    const [floor, setFloor] = useState();
    const [wind, setWind] = useState();
    const [flujo, setFlujo] = useState();
    const [radiacion, setRadiacion] = useState();
    const [presion, setPresion] = useState();
    const [response, setResponse] = useState('Ingresa los datos');


    useEffect(() => {
        console.log(temperature);
    }, [temperature])

    useEffect(() => {
        console.log(airHumidity);
    }, [airHumidity])

    useEffect(() => {
        console.log(floor);
    }, [floor])

    useEffect(() => {
        console.log(wind);
    }, [wind])

    useEffect(() => {
        console.log(flujo);
    }, [flujo])

    useEffect(() => {
        console.log(radiacion);
    }, [radiacion])

    useEffect(() => {
        console.log(presion);
    }, [presion])

    function submit() {

        if (Number.isInteger(temperature) &&
            Number.isInteger(airHumidity) &&
            Number.isInteger(wind) &&
            Number.isInteger(floor) &&
            Number.isInteger(flujo) &&
            Number.isInteger(radiacion) &&
            Number.isInteger(presion)
        )
        {
            setResponse('Se requiren 4 litros de agua');
        }
        else{
            setResponse('Ingrese los datos');
        }
    }

    return(
        <div>
            <h1>Simulación</h1>
            <div className="allSimulation">
                <div className="inputs"> 
                    <label for="fname">Temperatura</label>
                    <input type="number" id="fname" onChange={(e) => setTemperature(parseFloat(e.target.value))} name="temperature" placeholder="°C" />

                    <label for="lname">Humedad del aire</label>
                    <input type="number" id="lname" onChange={(e) => setAirHumidity(parseFloat(e.target.value))} name="airHumidity" placeholder="HR" />

                    <label for="lname">Humedad del suelo</label>
                    <input type="number" id="lname" onChange={(e) => setFloor(parseFloat(e.target.value))} name="floor" placeholder="HR" />

                    <label for="lname">Velocidad del viento</label>
                    <input type="number" id="lname" onChange={(e) => setWind(parseFloat(e.target.value))} name="wind" placeholder="m/s" />

                    <label for="lname">Flujo de calor</label>
                    <input type="number" id="lname" onChange={(e) => setFlujo(parseFloat(e.target.value))} name="flujo" placeholder="J/s" />

                    <label for="lname">Radiacion solar</label>
                    <input type="number" id="lname" onChange={(e) => setRadiacion(parseFloat(e.target.value))} name="radiacion" placeholder="W/m^2" />

                    <label for="lname">Presión atmosférica</label>
                    <input type="number" id="lname" onChange={(e) => setPresion(parseFloat(e.target.value))} name="presion" placeholder="Pa" />

                    <input type="submit" onClick={() => submit()} value="Submit" />
                </div>

  
                <div className="answer">
                <img src='/Imgs/arbol.png' className='images'></img>
                    {/* {response != 'Ingresa los datos' ?
                        <img src='/Imgs/arbol.png' className='images'></img>
                        :
                        null
                    } */}
                    <h2>
                        {response}

                    </h2>

                </div>

            </div>

        </div>

    )
}
export default Simulation;
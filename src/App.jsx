import styled from "styled-components";
import {useEffect,useState} from "react";



const StyledContainer = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content: center;
    margin:0;
    padding:0;
    width:100%;
    height:100%;
    background-image: radial-gradient(
    yellow,
    orange,
    black
    );
    
`;
const StyledDiv = styled.div`
    display:flex;
    flex-direction:column;
    background:linear-gradient(
            69.5deg,
            rgb(251, 0, 0) -0.5%,
            rgb(3, 10, 252) 97.4%);
    border:6px solid mediumpurple;
    border-radius:5px;
    padding:10px;
    margin:10px;
    width:200px;
    height:300px;
    color:whitesmoke;
    font-family:Dubai,Arial ,sans-serif;
    `;
const StyledHead=styled.div`
    display:flex;
    flex-direction:column;
`;
const StyledTitle=styled.div`
    font-weight: bold;
    font-size:20px;
`;
const StyledDiameter=styled.div`
    font-size:11px;
    text-align:right;
`;
const StyledCard=styled.div`
    border:3px solid orangered;
    height: 80%;
    width:100%;
    font-family: "Bell MT",Broadway,sans-serif;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const StyledH1=styled.h1`
    background: orange;
    margin:0;
    padding:0;
    border-bottom:8px solid black;
    text-align:center;
    color:black;
    font-weight:bolder;
    font-size:90px;
`;

export default function App() {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const raw = await fetch("https://swapi.dev/api/planets/");
                const {results} = await raw.json();
                setData(results);
                console.log("we got the data ;) ");
            } catch (error) {
                console.log("it's not working :(", error);
            }
        }

        fetchData();
    }, []);

    return (
        <>
            <StyledH1>Star Wars planets!</StyledH1>
            <StyledContainer>
                {data.map((planet) => (
                    <>
                        <StyledDiv key={planet}>
                            <StyledHead>
                                <StyledTitle>{planet.name}</StyledTitle>
                                <StyledDiameter>Diameter: {planet.diameter}</StyledDiameter>
                            </StyledHead>
                            <br></br>
                            <StyledCard>
                                <h3>Climate: {planet.climate}</h3>
                                <h3>Terrain: {planet.terrain}</h3>
                                <h3>Gravity: {planet.gravity}</h3>

                            </StyledCard>
                        </StyledDiv>
                    </>
                ))}
            </StyledContainer>

        </>
    );
}
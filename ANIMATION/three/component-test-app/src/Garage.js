import Car from './Car';

function Garage(){
    const carModels = ["Porsche", "VW", "Audi"];

    return (
        <>
            <h1>Auta u mojoj garaži</h1>
            {
                carModels.map(modelName => <Car model={modelName} />)
            }
        </>
    );
}

export default Garage;
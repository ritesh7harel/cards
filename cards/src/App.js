import './App.css';
import Home from './components/Home/Home';

const data = {
    columns: [
        {
            name: 'New',
            cards: [
                {
                    id: '1',
                    title: "title",
                    points: "0"
                }
            ]
        },
        {
            name: 'In Analysis',
            cards: [
                {
                    id: '1',
                    title: "title",
                    points: "0"
                },
                {
                    id: '2',
                    title: "title",
                    points: "0"
                }
            ]
        },
        {
            name: 'In Dev'
        },
        {
            name: 'In QA'
        },
        {
            name: 'Done'
        }
    ]
};

function App() {
    return (
        <div className="App">
            <Home data={data}/>
        </div>
    );
}

export default App;

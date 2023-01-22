import OptionSelection from './components/OptionSelection';
import { arrayOptions } from './AIOptions';
import Translation from './components/Translation';
import { useState } from 'react';
import { Button , TextField , Box , ThemeProvider , createTheme , CssBaseline , styled , Paper} from '@mui/material'
import { Configuration, OpenAIApi } from "openai";
import './App.css'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily : ['Josefin Sans' , 'sans-serif'].join(','),
  }
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() 
{
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const [option , setOption] = useState({});
  const [result , setResult] = useState('');
  const [input , setInput]   = useState('');
  const [loading , setLoading] = useState(false);
  const [title , setTitle] = useState('');

  const selectOption = (option) => {
    setOption(option.options);
    setTitle(option.name);
  };

  const refreshPage = () => {
    window.location.reload(false);
  };

  const runQuery = async () => {
    setLoading(true);
    let object = { ...option, prompt: input };
    const response = await openai.createCompletion(object);
    setResult(response.data.choices[0].text);
    setLoading(false);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        {Object.values(option).length === 0 ? (
          <OptionSelection arrayOptions={arrayOptions} selectOption={selectOption} Item={Item} />
        ) : (
          <Translation runQuery={runQuery} refreshPage={refreshPage} setInput={setInput} result={result} loading={loading} title={title} Item={Item}/>
        )}
      </div>
    </ThemeProvider>
  )
}

export default App

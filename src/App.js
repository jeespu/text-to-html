import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './App.css'

function App() {

   const [text, setText] = useState('')

   async function copy() {
         /* Get the text field */
         var copyText = document.getElementById("htmlText")

         /* Select the text field */
         // copyText.select()
         // copyText.setSelectionRange(0, 99999) /* For mobile devices */

          /* Copy the text inside the text field */
         await navigator.clipboard.writeText(copyText.innerText)

         /* Alert the copied text */
         console.log("Copied the text: " + copyText.innerText)
   }

   return (
      <div className="App">
         <h3>Text to html tool</h3>
         <div style={{ maxWidth: 500 }}>
            <ReactQuill value={text} onChange={setText} style={{ height: 200, marginBottom: 60 }} />
            <p id="htmlText">{text.toString()}</p>
         </div>
         <button onClick={copy}>Copy</button>
      </div>
   )
}

export default App;

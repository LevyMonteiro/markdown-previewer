import { useState } from 'react';
import { marked } from 'marked';
import './App.css';

function App() {
  const [text, setText] = useState(
  `# Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:

  Heres some code, \`<div></div>\`, between 2 backticks.

  \`\`\`
  // this is multi-line code:

  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`

  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.

  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!

  And if you want to get really crazy, even tables:

  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.

  - And of course there are lists.
    - Some are bulleted.
      - With different indentation levels.
          - That look like this.


  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:

  <img src="https://cdn.worldvectorlogo.com/logos/markdown.svg" alt="Markdown logo" width="350" height="200"/>`
  )

  // maximize and hide elements 
  const [editorClass, setEditorClass] = useState('');
  const [previewClass, setPreviewClass] = useState('');

  const handleMaximizeEditor = () => {
    if (editorClass === 'maximized') {
      setEditorClass('');
      setPreviewClass('');
    } else {
      setEditorClass('maximized');
      setPreviewClass('hide');
    }
  };

  const handleMaximizePreviewer = () => {
    if (previewClass === 'maximized') {
      setPreviewClass('');
      setEditorClass('');
    } else {
      setPreviewClass('maximized');
      setEditorClass('hide');
    }
  };

  marked.setOptions({
    breaks: true
  })

  return (
    <div className="App">
      
      <div className={`editorWraper ${editorClass}`}>
        <div className='elementHeader'>
          Editor 
          <i onClick={handleMaximizeEditor} className={editorClass === 'maximized' ? "fa fa-compress" : 'fa fa-arrows-alt'}></i>
        </div>
          <textarea 
            id='editor' 
            onChange={(event) => setText(event.target.value)} 
            value={text}
          ></textarea>
      </div>

      <div id='previewWraper' className={`${previewClass}`}>
        <div className='elementHeader'>
          Preview 
          <i onClick={handleMaximizePreviewer} className={previewClass === 'maximized' ? 'fa fa-compress' : "fa fa-arrows-alt"}></i>
        </div>
        <div 
          id='preview'
          dangerouslySetInnerHTML={{
            __html: marked(text)
          }}
          ></div>
      </div>

    </div>
  );
}

export default App;
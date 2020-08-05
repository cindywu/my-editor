import React, { useEffect } from 'react';

import {EditorState} from "./pm-state/state"
import {schema} from "./pm-schema-basic/schema-basic"
import {exampleSetup} from "./pm-example-setup/index"
import {addListNodes} from "./pm-schema-list/schema-list"
import {Schema, DOMParser} from "./pm-model/index"

import {EditorView} from "prosemirror-view"


import '../css/app.css'

function App() {
  useEffect( () => {
    const mySchema = new Schema({
      nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
      marks: schema.spec.marks
    })

    window.view = new EditorView(document.querySelector("#editor"), {
      state: EditorState.create({
        doc: DOMParser.fromSchema(mySchema).parse(document.querySelector("#content")),
        plugins: exampleSetup({schema: mySchema})
      })
    })

    const mySchema2 = new Schema({
      nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
      marks: schema.spec.marks
    })

    window.view = new EditorView(document.querySelector("#editor2"), {
      state: EditorState.create({
        doc: DOMParser.fromSchema(mySchema2).parse(document.querySelector("#content2")),
        plugins: exampleSetup({schema: mySchema2})
      })
    })
  })

  return (
    <div className="App">
      <div>
        <div id="editor" />
        <div id="content" />
      </div>
      <div>
        <div id="editor2" />
        <div id="content2" />
      </div>
      Hello
    </div>
  )
}

export default App;

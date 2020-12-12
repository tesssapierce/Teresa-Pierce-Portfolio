import React from 'react';
import * as ReactBootstrap from "react-bootstrap";
import samplePDF from './TeresaPierceResume.pdf';
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Test() {
  return (
    <>
    <ReactBootstrap.Accordion>
      <ReactBootstrap.Accordion.Toggle as={ReactBootstrap.Button}  variant="link" className="contactBtn" className="resumeBtn" eventKey="0">
            expand resume
      </ReactBootstrap.Accordion.Toggle>
    <ReactBootstrap.Accordion.Collapse eventKey="0">
      <>
      <Document file={samplePDF}>
      <Page pageNumber={1} />
    </Document>
    <ReactBootstrap.Button href="https://drive.google.com/file/d/1TTT7hcsT2mjNQT4RpYz1GMsbG2dzKVlv/view?usp=sharing" rel="noopener noreferrer" target="_blank"  variant="link" className="contactBtn">View On Google Drive</ReactBootstrap.Button>
    </>
    </ReactBootstrap.Accordion.Collapse>
</ReactBootstrap.Accordion>
    </>

  );
}
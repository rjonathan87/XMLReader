import { useState, useEffect } from "react";
import { mystyle1, mystyle2 } from "../css/styles";

import { processRow, getStorageValue } from "../utils/Functions";

export const XMLReader = () => {

  const [highlighted, setHighlighted] = useState(false);
  const [conceptos, setConceptos] = useState([]);
  const [nameFile, setNameFile] = useState('FileGenerated.ini');

  useEffect(() => {
    setNameFile(getStorageValue('nameFile', nameFile));
  }, [nameFile]);
  

  const generateFile = async () => {
    
    let csvFile = "";
    for (let i = 0; i < conceptos.length; i++) {
      csvFile += processRow(i, conceptos[i]);
    }

    let time = new Date().getTime();
    let blob = new Blob([csvFile], { type: "text/plain;charset=utf-8;" });

    let nameFileSaved = nameFile;
    console.log(nameFileSaved.split('.')[0])

    if (navigator.msSaveBlob) {
      // IE 10+
      navigator.msSaveBlob(blob, `${nameFile.split('.')[0]}_${time}.${nameFile.split('.')[1]}`);
      setConceptos([]);
    } else {
      let link = document.createElement("a");
      if (link.download !== undefined) {
        // feature detection
        // Browsers that support HTML5 download attribute
        let url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", `${nameFile.split('.')[0]}_${time}.${nameFile.split('.')[1]}`);
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setConceptos([]);

        setHighlighted(false);
      }
    }
  };

  const onDrop = files => {
    Array.from(files)
      .filter( file => file.type === "text/xml")
      .forEach( async file => {
        const text = await file.text();
        let xmlContent = text;
        let parser = new DOMParser();
        let xmlDOM = parser.parseFromString(
          xmlContent,
          "application/xml"
        );

        xmlDOM.activeElement.children[2].childNodes.forEach(
          (elNode) => {
            if (elNode.nodeName === "cfdi:Concepto") {
              let nodoActual = {
                BienesTransp:
                  elNode.attributes["ClaveProdServ"].nodeValue,
                Descripcion:
                  elNode.attributes["Descripcion"].nodeValue,
                Cantidad: elNode.attributes["Cantidad"].nodeValue,
                ClaveUnidad:
                  elNode.attributes["ClaveUnidad"].nodeValue,
                Unidad: elNode.attributes["Unidad"].nodeValue,
                CveMaterialPeligroso: "",
                Embalaje: "",
                DescripEmbalaje: "",
                PesoEnKg: "",
                ValorMercancia: "",
                Moneda: "",
                FraccionArancelaria: "",
                UUIDComercioExt: "",
                Pedimentos: "",
              };
              // console.log(nodoActual)
              setConceptos( conceptos => [...conceptos, nodoActual]);
            }
          }
        );
      });
  }

  return (
    <>
      <div className="card text-white bg-secondary mb-3">
        <div className="card-header">Área de Archivos</div>
        <div className="card-body">
          <div
            style={highlighted ? mystyle1 : mystyle2}
            onDragEnter={() => {
              setHighlighted(true);
              setConceptos([]);
            }}
            onDragLeave={() => {
              setHighlighted(false);
            }}
            onDragOver={ e => {
              e.preventDefault();
            }}
            onDrop={ e => {
              e.preventDefault();

              onDrop(e.dataTransfer.files);
            }}
            onClick={ e => {
              e.preventDefault();
              document.getElementById("imgupload").click();
            }}
          >
            Coloca aquí tu archivo
          </div>
        </div>
      </div>

      <div className="w100">
        <label htmlFor="nameFile">Nombre para archivo generado</label>
        <input 
          type="text" 
          id="nameFile" 
          className="form-control mb-3"
          placeholder={'Default: ' + nameFile.split('.')[0]} 
          onInput={ e => {
            let value = e.target.value;

              value = value.replace(/ /g, "_");
              setNameFile(`${value}.ini`);
              localStorage.setItem("nameFile", JSON.stringify(`${value}.ini`));
          } }
        />
        <input 
          type="file" 
          id="imgupload" 
          style={{display: "none"}} 
          onClick={ () => setConceptos([]) }
          onChange={ e => onDrop(e.target.files) } 
          multiple
        />
        <div className="d-grid gap-2">
          <button 
            className="btn btn-info btn" 
            onClick={() => generateFile()}
            disabled={ !conceptos.length > 0 ? true : false}
          >
            Generar Archivo
          </button>
        </div>
      </div>

      {conceptos.length > 0 && (
        <div className="card text-white bg-primary mb-3 mt-3">
          <div className="card-header">Vista previa</div>
          <div className="card-body">
            <div className="card-text bg-light text-secondary">
              <ul>
                {conceptos.map((concepto, i) => (
                  <li style={{ listStyleType: "none" }} key={i}>
                    [{i}]
                    <br />
                    BienesTransp={concepto.BienesTransp}
                    <br />
                    Descripcion={concepto.Descripcion}
                    <br />
                    Cantidad={concepto.Cantidad}
                    <br />
                    ClaveUnidad={concepto.ClaveUnidad}
                    <br />
                    Unidad={concepto.Unidad}
                    <br />
                    CveMaterialPeligroso={concepto.CveMaterialPeligroso}
                    <br />
                    Embalaje={concepto.Embalaje}
                    <br />
                    DescripEmbalaje={concepto.DescripEmbalaje}
                    <br />
                    PesoEnKg={concepto.PesoEnKg}
                    <br />
                    ValorMercancia={concepto.ValorMercancia}
                    <br />
                    Moneda={concepto.Moneda}
                    <br />
                    FraccionArancelaria={concepto.FraccionArancelaria}
                    <br />
                    UUIDComercioExt={concepto.UUIDComercioExt}
                    <br />
                    Pedimentos={concepto.Pedimentos}
                    <br />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

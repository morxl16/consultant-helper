import React from 'react';
import {NavLink} from 'react-router-dom';
import XLSX from 'xlsx';

const Upload = (props) => {
/*
  function handleChange (event) {
    console.log("asdasd");
    console.log(event.target);
    let reader = new FileReader();

    reader.onload = function(e) {
      let data = e.target.result;
      console.log("data", data);
    };

    reader.onerror = function(ex) {
      console.log(ex);
    };
*/
function checkFileType(fileName) {
  if(fileName !== undefined && fileName !== null && typeof(fileName) === 'string') {
    let suffix = fileName.split('.')[1];
    return (suffix === 'xls' || suffix === 'xlsx');
  }

  return false;
}
function handleChange(event) {
  let file = event.target.files[0];
  if(!checkFileType(file.name)) {return};

  let reader = new FileReader();

  reader.onload = (event) => {
    let data = event.target.result;
    let workbook = XLSX.read(data, {type: 'binary'});
    let workSheet = workbook.Sheets[workbook.SheetNames[0]];

    console.log("sheet", XLSX.utils.sheet_to_json(workSheet));
  };
  
  reader.readAsBinaryString(file);
}

  return (
    <div className="has-text-centered" style={{marginTop: '10%'}}>
      <div className="field">
        <div className="file is-medium is-boxed has-name is-centered is-info">
          <label className="file-label">
            <input className="file-input" type="file" name="resume" onChange={handleChange} />
            <span className="file-cta">
              <span className="file-icon">
                <i className="fa fa-upload"></i>
              </span>
              <span className="file-label">
                הכניסו קובץ תלמידים
              </span>
            </span>
            <span className="file-name has-text-centered">
              ...עדיין לא הועלה קובץ
            </span>
          </label>
        </div>
      </div>
      <div className="field">
        <NavLink className="button is-medium is-primary" to="/requests">להכנסת בקשות</NavLink>
      </div>
    </div>
  );
}

export default Upload;

import React from 'react';

function Form(props) {
  const inputType = props.inputType || props.labelName.toLowerCase();

  return (
    <div className="space-y-4">
      <div>
        <label 
          htmlFor={props.labelName.toLowerCase()} 
          className="block mb-2 text-sm font-medium text-gray-700">
            {props.labelName}
        </label>
        <input 
          type={inputType} 
          id={props.labelName.toLowerCase()} 
          name={props.inputName || props.labelName.toLowerCase()} 
          accept={props.acceptedFileType}
          onChange={props.onChange}
          className={`block w-full px-3 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base`} 
        />
      </div>
    </div>
  );
}

export default Form;

import React from "react";

const Alert = (props) => {
    const capitalise=(word)=>{
        let low = word.toLowerCase()
        return low.charAt(0).toUpperCase()+low.slice(1)
    }
  return (
    <div style={{height:'50px'}}>
      {

          props.alert&&
          <div>
                  <div className={`alert alert-dark alert-dismissible fade show`} role="alert">
                  <strong>{capitalise(props.alert.type)}!</strong> {props.alert.message}
                  <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
          </div>
      }
    </div>
  );
};

export default Alert;

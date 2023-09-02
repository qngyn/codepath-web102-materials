const APIForm = ({inputs, handleChange, onSubmit}) => {

    return (
      <div>
        <h2> Select Your Image Attributes: </h2>
        <form className="form-container">
          
        </form>
        <button 
            type="submit" 
            className="button"
            onClick={onSubmit}
        >
            Take that Pic! 🎞
        </button>
      </div>
    );
  };
  
  export default APIForm;
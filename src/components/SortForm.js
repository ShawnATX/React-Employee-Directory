import React from 'react'


const SortForm = (props) => {
    
    return(
       <div className="col-6">
            <form>
                <div className="form-group">
                    <label htmlFor="sort">Sort Employees:</label>
                    <select
                        onChange={props.handleSortUpdate}
                        value={props.value}
                        name="sort"
                        className="form-control"
                        placeholder="Sort by..."
                        id="sort"
                    >
                        <option >Choose...</option>
                        <option value="id">Employee Id</option>
                    </select>
                    <br />
                    <button 
                        className="form-control btn btn-primary" 
                        name="resetSort"
                        placeholder="Clear Sort"
                        id="resetSort"
                        onClick={() => props.resetSort}
                    >Clear Sort</button>
                </div>
            </form>
        </div>
    );
}



export default SortForm;
import { useContext } from 'react'
import NavContext from '../context/NavContext';
const Form = () => {
    const {name, setName} = useContext(NavContext);
    return (
        <div className="container mb-3">
            <div className="row align-items-center justify-content-center">
                <div className="col-md-4">
                    <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input
                            type='text'
                            className='form-control'
                            name='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Form;